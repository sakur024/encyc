// viewer3d/lighting.js
window.Hardware3D = window.Hardware3D || {};

window.Hardware3D.Lighting = {
  /**
   * Creates and adds multiple light sources to the scene for high-quality, professional 3D shading.
   * @param {THREE.Scene} scene - The active Three.js scene.
   * @param {THREE.Vector3} size - The bounding box dimensions of the model.
   * @returns {object} Contains created lights and reference to the shadow-casting key light.
   */
  setupLights(scene, size) {
    const maxDim = Math.max(size.x, size.y, size.z);
    const lights = [];
    
    // 1. Ambient Light: Soft low-contrast lighting to fill dark areas
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    lights.push(ambientLight);
    
    // 2. Directional Key Light: The primary light source positioned to cast realistic shadows
    const keyLight = new THREE.DirectionalLight(0xffffff, 0.85);
    keyLight.position.set(maxDim * 1.2, maxDim * 1.8, maxDim * 1.2);
    keyLight.castShadow = true;
    
    // Configure shadow map resolution and frustum size dynamically to match the model
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = maxDim * 5;
    
    const d = maxDim * 1.5;
    keyLight.shadow.camera.left = -d;
    keyLight.shadow.camera.right = d;
    keyLight.shadow.camera.top = d;
    keyLight.shadow.camera.bottom = -d;
    keyLight.shadow.bias = -0.0005; // minimize shadow mapping artifacts
    keyLight.shadow.radius = 4.0;   // blur radius for soft contact shadows
    
    scene.add(keyLight);
    lights.push(keyLight);
    
    // 3. Directional Fill Light: Soft blue-tinted fill from the opposite side to balance highlights
    const fillLight = new THREE.DirectionalLight(0x8899ff, 0.4);
    fillLight.position.set(-maxDim * 1.2, maxDim * 0.8, -maxDim * 1.2);
    scene.add(fillLight);
    lights.push(fillLight);
    
    // 4. Directional Rim Light: Backlight to create high-contrast edge silhouettes
    const rimLight = new THREE.DirectionalLight(0xffffff, 0.55);
    rimLight.position.set(0, maxDim * 1.2, -maxDim * 1.8);
    scene.add(rimLight);
    lights.push(rimLight);
    
    return {
      lights: lights,
      shadowLight: keyLight
    };
  }
};
