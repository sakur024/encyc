# Tech Encyclopedia - Migration & Installation Guide

This guide describes how to export your encyclopedia database (including custom devices, concepts, guides, settings, and uploaded media) and set up the application on a new device.

---

## 💾 Step 1: Exporting Your Custom Data

Since all CMS modifications, newly created devices, custom media assets, and guide structures are saved in the browser's persistent sandbox (`localStorage`), you must export them before moving to a new device.

1. Access the administrator control panel (Log in using default keys: `admin` / `1234`).
2. Navigate to the **Settings** panel (or **Console Settings**).
3. Scroll down to the **Data Backup & Migration** section.
4. Click **Export Data**.
5. Save the generated `.json` backup file (e.g. `hardwarelab_backup_YYYY-MM-DD.json`) on your device.

---

## 📁 Step 2: Packaging the Application Files

Copy the following core static files to a zip archive or transfer them directly to your new device:

* `index.html` (Main user interface layout)
* `app.js` (Core logic, routing, search index, and CMS editor engines)
* `data.js` (Pre-seeded textbook data)
* `install.md` (This guide)

---

## 🚀 Step 3: Running the Application on the New Device

Place the files in a single directory on the target device. Because modern browsers prevent cross-origin actions on file paths (`file://`), you **must** serve the files using a local server.

### Option A: Python Web Server (Recommended)
1. Open a terminal or Command Prompt in the project folder.
2. Run the following command:
   ```bash
   python -m http.server 8080
   ```
3. Open your web browser and navigate to: **[http://localhost:8080](http://localhost:8080)**

### Option B: Node.js Web Server
1. Open a terminal in the project folder.
2. Run the local static server via npx:
   ```bash
   npx http-server -p 8080
   ```
3. Open your web browser and navigate to: **[http://localhost:8080](http://localhost:8080)**

---

## 📥 Step 4: Restoring Your Custom Data

Once the application is running on your new device:

1. Click on the profile button and log in to the admin panel at **[http://localhost:8080/#admin/dashboard](http://localhost:8080/#admin/dashboard)** (default credentials: `admin` / `1234`).
2. Go to **Settings**.
3. Under the **Data Backup & Migration** section, click **Import Data**.
4. Select the `.json` backup file you exported in Step 1.
5. The application will validate the schema, import the database overlays, and automatically reload.

All of your custom articles, image uploads, guides, and category settings are now fully migrated and live!
