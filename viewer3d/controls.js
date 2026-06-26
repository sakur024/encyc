// viewer3d/controls.js
window.Hardware3D = window.Hardware3D || {};

window.Hardware3D.Controls = {
  /**
   * Initializes a camera set up to fit the model dimensions and provides a 3/4 perspective.
   * @param {HTMLElement} container - The HTML element containing the viewer.
   * @param {THREE.Vector3} size - The bounding box dimensions of the loaded model.
   * @returns {THREE.PerspectiveCamera}
   */
  setupCamera(container, size) {
    const aspect = container.clientWidth / container.clientHeight;
    
    // Use a comfortable 40-degree field of view
    const fov = 40;
    const camera = new THREE.PerspectiveCamera(fov, aspect, 0.1, 1000);
    
    // Calculate bounding sphere radius (half of diagonal of bounding box)
    const radius = size.length() / 2;
    
    const fovRad = (fov * Math.PI) / 180;
    const halfFovY = fovRad / 2;
    const halfFovX = Math.atan(Math.tan(halfFovY) * aspect);
    
    const distH = radius / Math.sin(halfFovY);
    const distW = radius / Math.sin(halfFovX);
    
    // Determine the distance required to fit the sphere either vertically or horizontally
    const idealDistance = Math.max(distH, distW);
    
    // Apply a scaling factor to increase the size of every model by 15-25% (closer camera zoom)
    const zoomMultiplier = 0.75;
    const distance = idealDistance * zoomMultiplier;
    
    // Calculate normalized three-quarter perspective coordinates
    const relativePos = new THREE.Vector3(0.8, 0.5, 1.0).normalize().multiplyScalar(distance);
    
    // Slightly lowered camera target to balance vertical framing in three-quarter perspective
    const defaultTarget = new THREE.Vector3(0, -size.y * 0.05, 0);
    const defaultPosition = defaultTarget.clone().add(relativePos);
    
    camera.position.copy(defaultPosition);
    camera.lookAt(defaultTarget);
    
    // Store camera settings on userData for resets and limits
    camera.userData = {
      defaultPosition: defaultPosition,
      defaultTarget: defaultTarget,
      distance: distance
    };
    
    return camera;
  },

  /**
   * Creates and configures OrbitControls with movement constraints.
   * @param {THREE.Camera} camera - The active perspective camera.
   * @param {HTMLCanvasElement} canvasElement - The WebGL canvas element.
   * @returns {THREE.OrbitControls}
   */
  setupOrbitControls(camera, canvasElement) {
    if (typeof THREE.OrbitControls === 'undefined') {
      console.warn('Controls: THREE.OrbitControls is not defined. Camera interactions disabled.');
      return null;
    }

    const controls = new THREE.OrbitControls(camera, canvasElement);
    
    // Set orbit target to match the default camera lookAt target
    if (camera.userData && camera.userData.defaultTarget) {
      controls.target.copy(camera.userData.defaultTarget);
    }
    
    // Enable inertia/damping for smooth natural interaction
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    
    // Restrict polar angles to prevent the user from rotating below ground level (prevents camera flip)
    controls.maxPolarAngle = Math.PI / 2 - 0.05; 
    
    // Set dynamic zoom boundaries relative to computed camera distance
    const distance = camera.userData.distance || 10;
    controls.minDistance = distance * 0.4;
    controls.maxDistance = distance * 2.5;
    
    return controls;
  }
};
