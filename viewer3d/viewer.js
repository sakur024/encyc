// viewer3d/viewer.js
window.Hardware3D = window.Hardware3D || {};

window.Hardware3D.Viewer = class Viewer {
  /**
   * Orchestrates the 3D Viewer canvas rendering.
   * @param {object} options - Configuration properties.
   * @param {string} options.containerId - Selector ID of the canvas container element.
   * @param {string} options.modelPath - GLB model URL path.
   * @param {function} [options.onLoadComplete] - Callback on model loaded.
   * @param {function} [options.onLoadError] - Callback on loading failure.
   */
  constructor(options) {
    this.containerId = options.containerId;
    this.modelPath = options.modelPath;
    this.onLoadComplete = options.onLoadComplete;
    this.onLoadError = options.onLoadError;
    
    this.container = document.getElementById(this.containerId);
    if (!this.container) {
      console.error(`Viewer: Container '#${this.containerId}' not found.`);
      return;
    }
    
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;
    this.modelGroup = null;
    this.animationFrameId = null;
    
    this.autoRotate = true;
    this.resizeHandler = null;
    this.isResetting = false;
    this.isEntryAnimating = false;
    this.floatTime = 0;
    
    this.init();
  }
  
  init() {
    // 1. Initialize empty scene
    this.scene = new THREE.Scene();
    
    // 2. Setup Renderer with preserveDrawingBuffer: true to allow taking screenshots
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // optimize mobile/high-DPI screens
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    
    // Enable shadow maps and cinematic color mapping
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15; // slightly boosted exposure for brightness
    
    this.container.appendChild(this.renderer.domElement);
    
    // 3. Setup Procedural environment reflections (HDR style)
    this.setupEnvironmentMap();
    
    // 4. Load Model
    this.loadModel();
    
    // 5. Attach responsive window resize listener
    this.resizeHandler = () => this.handleResize();
    window.addEventListener('resize', this.resizeHandler);
  }
  
  /**
   * Generates a procedural gradient environment map texture inside memory to add rich specular reflections.
   */
  setupEnvironmentMap() {
    if (typeof THREE.PMREMGenerator === 'undefined') return;

    try {
      const pmremGenerator = new THREE.PMREMGenerator(this.renderer);
      pmremGenerator.compileEquirectangularShader();
      
      const envScene = new THREE.Scene();
      const geom = new THREE.SphereGeometry(100, 32, 16);
      
      // Deep dark blue tech-oriented environment gradient
      const mat = new THREE.MeshBasicMaterial({
        color: 0x050b18,
        side: THREE.BackSide
      });
      const envMesh = new THREE.Mesh(geom, mat);
      envScene.add(envMesh);
      
      // Inject two light-reflecting colored spheres to create beautiful specular reflections on materials
      const sphereGeo = new THREE.SphereGeometry(12, 16, 16);
      
      // Royal blue reflection sphere
      const blueSphere = new THREE.Mesh(sphereGeo, new THREE.MeshBasicMaterial({ color: 0x6366F1 }));
      blueSphere.position.set(40, 50, 40);
      envScene.add(blueSphere);
      
      // Cyan accent reflection sphere
      const cyanSphere = new THREE.Mesh(sphereGeo, new THREE.MeshBasicMaterial({ color: 0x22D3EE }));
      cyanSphere.position.set(-40, 30, -40);
      envScene.add(cyanSphere);
      
      const envTexture = pmremGenerator.fromScene(envScene).texture;
      this.scene.environment = envTexture;
      
      // Cleanup environment resources
      geom.dispose();
      mat.dispose();
      sphereGeo.dispose();
      blueSphere.geometry.dispose();
      blueSphere.material.dispose();
      cyanSphere.geometry.dispose();
      cyanSphere.material.dispose();
      pmremGenerator.dispose();
    } catch (e) {
      console.warn("Viewer: Failed to generate environment map reflections:", e);
    }
  }
  
  loadModel() {
    const loaderOverlay = document.getElementById('device-3d-loader');
    
    const onProgress = (percent) => {
      const percentageText = loaderOverlay ? loaderOverlay.querySelector('p') : null;
      if (percentageText) {
        percentageText.textContent = `Loading 3D Model: ${Math.round(percent)}%`;
      }
    };
    
    Hardware3D.Loader.loadGLTF(
      this.modelPath,
      onProgress,
      (loadedGroup) => {
        this.modelGroup = loadedGroup;
        this.scene.add(this.modelGroup);
        
        const size = this.modelGroup.userData.size;
        
        // 6. Setup camera fit
        this.camera = Hardware3D.Controls.setupCamera(this.container, size);
        
        // 7. Setup lights
        Hardware3D.Lighting.setupLights(this.scene, size);
        
        // 8. Enable shadows on children meshes
        Hardware3D.Utils.enableShadowsOnModel(this.modelGroup);
        
        // 9. Add soft contact shadow plane
        Hardware3D.Utils.createContactShadow(this.scene, size);
        
        // 10. Setup OrbitControls
        this.controls = Hardware3D.Controls.setupOrbitControls(this.camera, this.renderer.domElement);
        if (this.controls) {
          // Listen to user drag/scroll starts to immediately stop auto-rotation and floating
          this.controls.addEventListener('start', () => {
            if (!this.isResetting && !this.isEntryAnimating) {
              this.autoRotate = false;
            }
          });
        }
        
        // 11. Hide loader
        if (loaderOverlay) {
          loaderOverlay.classList.add('opacity-0');
          setTimeout(() => {
            loaderOverlay.style.display = 'none';
          }, 500);
        }
        
        // 12. Run cinematic entry transition
        this.runEntryAnimation(size);
        
        // Start render loop
        this.animate();
        
        if (this.onLoadComplete) this.onLoadComplete();
      },
      (err) => {
        this.handleError(err);
      }
    );
  }
  
  /**
   * Performs a premium entry animation transition: scale from 95% to 100% and rotate into place.
   */
  runEntryAnimation(size) {
    if (!this.modelGroup) return;

    this.isEntryAnimating = true;
    this.autoRotate = false;

    // Set initial offset states
    this.modelGroup.scale.set(0.01, 0.01, 0.01);
    this.modelGroup.rotation.y = -Math.PI / 5; // start offset 36 deg counter-clockwise
    this.floatTime = 0;
    this.modelGroup.position.y = 0;

    const duration = 1000; // 1 second
    const startTime = performance.now();

    const animateEntry = (now) => {
      if (!this.modelGroup) return;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing: Cubic ease out
      const ease = 1 - Math.pow(1 - progress, 3);
      
      // Scale from 95% to 100%
      const scaleVal = 0.95 + 0.05 * ease;
      this.modelGroup.scale.set(scaleVal, scaleVal, scaleVal);
      
      // Rotate back to default angle
      this.modelGroup.rotation.y = (-Math.PI / 5) * (1 - ease);
      
      if (progress < 1) {
        requestAnimationFrame(animateEntry);
      } else {
        this.isEntryAnimating = false;
        this.autoRotate = true; // activate floating & idle rotation
      }
    };

    requestAnimationFrame(animateEntry);
  }
  
  handleError(err) {
    console.error("Viewer: Error rendering GLTF model, invoking fallback:", err);
    
    // Hide loading screen
    const loaderOverlay = document.getElementById('device-3d-loader');
    if (loaderOverlay) {
      loaderOverlay.style.display = 'none';
    }
    
    // Show error message
    const errorOverlay = document.getElementById('device-3d-error');
    if (errorOverlay) {
      errorOverlay.classList.remove('hidden');
      errorOverlay.classList.add('flex');
    }
    
    if (this.onLoadError) this.onLoadError(err);
  }
  
  /**
   * Resets the camera to default perspective via smooth animation.
   */
  resetCamera() {
    if (!this.controls || !this.camera || !this.camera.userData.defaultPosition || this.isResetting) return;
    
    this.isResetting = true;
    this.autoRotate = false;
    
    const startPos = this.camera.position.clone();
    const endPos = this.camera.userData.defaultPosition;
    
    const startTarget = this.controls.target.clone();
    const endTarget = this.camera.userData.defaultTarget;
    
    const startTime = performance.now();
    const duration = 800; // 800ms transition
    
    const lerpAnim = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function: Cubic ease out
      const ease = 1 - Math.pow(1 - progress, 3);
      
      this.camera.position.lerpVectors(startPos, endPos, ease);
      this.controls.target.lerpVectors(startTarget, endTarget, ease);
      this.controls.update();
      
      if (progress < 1) {
        requestAnimationFrame(lerpAnim);
      } else {
        this.isResetting = false;
        this.autoRotate = true; // resume rotation
      }
    };
    
    requestAnimationFrame(lerpAnim);
  }
  
  handleResize() {
    if (!this.container || !this.camera || !this.renderer) return;
    
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }
  
  animate() {
    if (!this.renderer || !this.scene || !this.camera) return;
    
    this.animationFrameId = requestAnimationFrame(() => this.animate());
    
    if (this.controls) {
      this.controls.update();
    }
    
    if (this.modelGroup && !this.isEntryAnimating) {
      const size = this.modelGroup.userData.size || new THREE.Vector3(1, 1, 1);
      
      if (this.autoRotate) {
        // Slow elegant Y-axis auto-rotation (0.2 deg/frame)
        this.modelGroup.rotation.y += 0.0025;
        
        // Very slow floating animation (sine wave over time)
        this.floatTime += 0.012;
        const amplitude = size.y * 0.08; // 8% of vertical height
        this.modelGroup.position.y = Math.sin(this.floatTime) * amplitude;
      } else if (!this.isResetting) {
        // Smoothly return model Y position to 0 when user is actively interacting
        this.modelGroup.position.y = THREE.MathUtils.lerp(this.modelGroup.position.y, 0, 0.05);
      }
    }
    
    this.renderer.render(this.scene, this.camera);
  }
  
  /**
   * Disposes of all WebGL assets, geometries, and listeners.
   */
  destroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.resizeHandler) {
      window.removeEventListener('resize', this.resizeHandler);
    }
    if (this.controls) {
      this.controls.dispose();
    }
    if (this.renderer) {
      if (this.renderer.domElement && this.renderer.domElement.parentElement) {
        this.renderer.domElement.parentElement.removeChild(this.renderer.domElement);
      }
      this.renderer.dispose();
    }
    if (this.scene) {
      Hardware3D.Utils.disposeHierarchy(this.scene);
    }
    
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;
    this.modelGroup = null;
  }
};
