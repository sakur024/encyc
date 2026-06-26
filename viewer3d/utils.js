// viewer3d/utils.js
window.Hardware3D = window.Hardware3D || {};

window.Hardware3D.Utils = {
  /**
   * Creates a transparent shadow receiver plane positioned right underneath the model.
   * @param {THREE.Scene} scene - The active Three.js scene.
   * @param {THREE.Vector3} size - The bounding box dimensions of the model.
   * @returns {THREE.Mesh}
   */
  createContactShadow(scene, size) {
    const maxDim = Math.max(size.x, size.y, size.z);
    
    // Large ground plane to catch key light shadows
    const planeGeo = new THREE.PlaneGeometry(maxDim * 3, maxDim * 3);
    const planeMat = new THREE.ShadowMaterial({ opacity: 0.25 });
    
    const shadowPlane = new THREE.Mesh(planeGeo, planeMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    
    // Position the plane slightly below the bottom of the centered model (at -size.y/2)
    shadowPlane.position.y = -size.y / 2 - 0.005;
    shadowPlane.receiveShadow = true;
    
    scene.add(shadowPlane);
    return shadowPlane;
  },
  
  /**
   * Traverses a model to configure shadow casting/receiving and optimizes material reflectivity.
   * @param {THREE.Object3D} model - The model hierarchy group.
   */
  enableShadowsOnModel(model) {
    model.traverse(node => {
      if (node.isMesh) {
        node.castShadow = true;
        node.receiveShadow = true;
        
        // Enhance metal/roughness values for PBR materials in dark blue tech theme
        if (node.material) {
          node.material.roughness = Math.max(node.material.roughness || 0, 0.25);
          node.material.metalness = Math.min(node.material.metalness || 0, 0.85);
        }
      }
    });
  },
  
  /**
   * Disposes all geometry and materials in a hierarchy to prevent WebGL memory leaks.
   * @param {THREE.Object3D} obj - The group or scene root.
   */
  disposeHierarchy(obj) {
    if (!obj) return;
    
    obj.traverse(node => {
      if (node.isMesh) {
        if (node.geometry) {
          node.geometry.dispose();
        }
        if (node.material) {
          if (Array.isArray(node.material)) {
            node.material.forEach(m => m.dispose());
          } else {
            node.material.dispose();
          }
        }
      }
    });
  }
};
