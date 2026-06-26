// viewer3d/loader.js
window.Hardware3D = window.Hardware3D || {};

window.Hardware3D.Loader = {
  /**
   * Loads a GLTF/GLB model and centers it within a parent group.
   * @param {string} url - The URL path to the model file.
   * @param {function} onProgress - Progress callback.
   * @param {function} onLoad - Load callback receiving the processed group.
   * @param {function} onError - Error callback.
   */
  loadGLTF(url, onProgress, onLoad, onError) {
    if (typeof THREE === 'undefined' || !THREE.GLTFLoader) {
      const err = new Error('THREE or THREE.GLTFLoader is not defined');
      if (onError) onError(err);
      return;
    }

    const loader = new THREE.GLTFLoader();
    loader.load(
      url,
      (gltf) => {
        const model = gltf.scene;

        // Compute model bounding box details
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        // Center the model's pivot point at (0, 0, 0)
        model.position.sub(center);

        // Wrap the centered model inside a Group to manage pivot rotation easily
        const group = new THREE.Group();
        group.add(model);

        // Attach bounding box metadata to the group for camera and lighting configurations
        group.userData = {
          size: size,
          center: center,
          box: box
        };

        onLoad(group);
      },
      (xhr) => {
        if (xhr.lengthComputable) {
          const percentComplete = (xhr.loaded / xhr.total) * 100;
          if (onProgress) onProgress(percentComplete);
        }
      },
      (err) => {
        console.error(`Loader: Error loading model from '${url}':`, err);
        if (onError) onError(err);
      }
    );
  }
};
