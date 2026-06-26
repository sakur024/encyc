# Technical Documentation: Tech Encyclopedia

This document provides a comprehensive technical overview of the Tech Encyclopedia interactive educational platform. It details the technology stack, application architecture, routing engine, 3D viewer, state management system, and asset structure.

---

## 1. Technology Stack

The platform is designed to be a fast, client-side, zero-dependency single-page application (SPA).

*   **Core Languages**: HTML5, Vanilla JavaScript (ES6+), Vanilla CSS.
*   **3D Graphics Rendering**: [Three.js](https://threejs.org/) (r128) with `GLTFLoader` (for loading 3D models) and `OrbitControls` (for user interaction) loaded via CDN.
*   **Typography & Icons**: Google Fonts (Inter, Fira Code) and Material Symbols Outlined.

---

## 2. Directory Structure

```
c:\Users\Abdus Sakur\Desktop\encyc\
├── index.html                  # Main application entry point and CDN imports
├── data.js                     # Global database containing device entries & specifications
├── app.js                      # Main application logic, router, state, admin, and styles
├── WEBSITE_ARCHITECTURE.MD     # High-level content layout guidelines
├── PRODUCT_BLUEPRINT.MD        # Product strategy, UX intent, and core values
├── 3d/                         # 3D assets directory (.glb models)
│   ├── webcam.glb
│   ├── microphone.glb
│   └── (other devices...)
├── images/                     # Local asset images for device pages
│   ├── webcam.jfif
│   ├── microphone.jfif
│   └── (other devices...)
└── viewer3d/                   # Three.js 3D viewer modules
    ├── loader.js               # Model loading wrapper
    ├── controls.js             # Orbit controls initializer
    ├── lighting.js             # Scene lighting setup
    ├── utils.js                # Helper functions (centering, fitting)
    └── viewer.js               # Main viewer orchestrator & animation loop
```

---

## 3. Data Architecture (`data.js`)

All hardware device entries, concepts, and comparison schemas are defined declaratively in `data.js` under the `window.TECH_DATABASE` namespace.

Each device entry contains structured content:
*   **Identification**: `id`, `name`, `category` (input, output, storage, networking).
*   **3D Reference**: `model3d` path to the `.glb` model.
*   **Core Metadata**: `tagline`, `definition`, `purpose`, `importance`.
*   **Quick Facts**: Key-value pairings displayed in the quick info panel.
*   **Structured Sections**: Detailed markdown/HTML blocks for history, evolution, working principles, types, components, myths, maintenance, buying guides, and troubleshooting.
*   **Media**: Carousel image definitions containing URLs, alt text, and captions.

---

## 4. Application Logic & Routing (`app.js`)

The `app.js` file handles routing, DOM rendering, styling injection, state management, and the administrator dashboard.

### Client-Side Router
The router uses URL hashes (e.g., `#home`, `#learn`, `#learn/device/webcam`) to manage active page transitions:
1.  **Event Handler**: Listens to the `hashchange` event.
2.  **Dispatcher**: Decodes the hash string, matches it against registered route templates, extracts parameters, and calls corresponding view renderers.
3.  **Default Handling**: Missing or malformed paths redirect to the homepage (`#home`).

### State Management
State is managed in memory via a global `state` object and synchronized to `localStorage`:
*   **Key**: `hardwarelab_state_refined`
*   **Persistence**: Holds bookmarks, view history, image settings, theme selection, custom user-created devices, and administrator configurations.
*   **Safety Sync**: During initialization (`init()`), a safety synchronization cleans up any stale local storage overrides for standard seed devices (like `webcam` and `microphone`) to prevent cached entries from hiding newly integrated native features.

### Version Cache-Busting
To prevent guest users' browsers from loading outdated cached scripts, `index.html` appends version queries (`?v=1.0.8`) to the scripts:
```html
<script src="data.js?v=1.0.8"></script>
<script src="app.js?v=1.0.8"></script>
```

---

## 5. Interactive 3D Viewer (`viewer3d/`)

The 3D viewer is modularized under the `viewer3d/` directory:

1.  **`viewer.js`**: Orchestrates scene instantiation, camera setup, resizing events, render loops, and garbage collection when navigating away.
2.  **`loader.js`**: Handles standard glTF parsing. Automatically computes the bounding box to scale and center models dynamically within the viewport.
3.  **`lighting.js`**: Adds customizable ambient lights, a soft directional key light, and auxiliary point lights to bring out metallic textures.
4.  **`controls.js`**: Instantiates `OrbitControls`, setting strict limits on min/max distance and polarization angle to prevent the camera from clipping inside the model or flipping upside down.

---

## 6. CSS Styling System

Styles are dynamically injected via `injectGlobalStyles()` in `app.js`. Key design design choices include:
*   **Dark Theme Palette**: Dark blue backgrounds (`#0B0F19`), high-contrast text (`#F3F4F6`), and electric blue accents (`#3B82F6`).
*   **Glassmorphism Panels**: `backdrop-filter: blur(12px)` combined with semi-transparent border strokes (`rgba(255, 255, 255, 0.08)`).
*   **Image Presentation**: Elliptical vignette masking using `.seamless-faded-image` to blend device photos smoothly into the dark interface:
    ```css
    .seamless-faded-image {
      mask-image: radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%);
      -webkit-mask-image: radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%);
      object-fit: contain;
    }
    ```
