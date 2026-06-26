# UPDATE.md

# Tech Encyclopedia - Project Update

This document contains additional implementation requirements that must be added to the existing project.

The current UI and design system are approved.

Do **NOT** redesign the interface.

Only extend functionality.

---

# 1. Devices to Implement

The following device encyclopedia pages must be fully implemented.

## Input Devices

* Mouse
* Keyboard
* Scanner
* Joystick
* Game Controller
* Camera

---

## Output Devices

* Monitor
* Printer
* Projector
* Speaker
* Sound System

---

## Storage Devices

* SSD
* External Hard Drive
* USB Flash Drive

---

## Networking Devices

* Router
* Network Adapter

Every device page must use the same master template already defined in the project.

---

# 2. Device Page Content

Every device page must contain these sections.

* Overview
* Quick Facts
* History & Evolution
* Types
* Internal Components
* External Components
* Working Principle
* Architecture
* Technical Specifications
* Specification Explanation
* Applications
* Advantages
* Disadvantages
* Common Misconceptions
* Buying Logic
* Maintenance
* Troubleshooting
* FAQ
* Expert Tips
* Related Devices
* Related Technologies
* References

No section should remain empty.

---

# 3. Multiple Images Per Section

Every section must support multiple images.

Examples

Overview

* Hero Image
* Device Illustration
* Historical Image

History

* Timeline Images
* Old Devices
* Modern Devices

Types

Each type should have

* Image
* Diagram
* Illustration

Architecture

* Block Diagram
* Internal Layout
* Signal Flow

Specifications

* Charts
* Tables
* Graphs

Applications

* Real-world Images
* Example Setups

Buying Logic

* Decision Charts
* Comparison Images

Maintenance

* Cleaning Images
* Replacement Images

Troubleshooting

* Error Images
* Repair Images

There should be no limit of one image per section.

Each section should support uploading multiple images.

---

# 4. Image Management

Administrator should be able to

Upload Images

Delete Images

Replace Images

Reorder Images

Add Image Caption

Add Image Description

Choose Featured Image

Enable Image Zoom

Display Images as

Gallery

Grid

Carousel

Lightbox

Images should automatically optimize for web performance.

---

# 5. Admin Login

Create an Admin Login System.

Temporary Credentials

Username

admin

Password

1234

These credentials are for development only.

The system should allow changing credentials later.

---

# 6. Admin Dashboard

After successful login the administrator should access

Dashboard

Device Manager

Category Manager

Article Manager

Image Manager

Guide Manager

Media Library

Search Manager

Analytics

Settings

Logout

---

# 7. Device Manager

Administrator can

Create Device

Edit Device

Delete Device

Hide Device

Publish Device

Draft Device

Duplicate Device

Preview Device

---

# 8. Section Editor

Every section of every device page should be editable.

Administrator can edit

Heading

Paragraphs

Tables

Lists

Images

Videos

Diagrams

Callout Boxes

Comparison Tables

Links

References

No hardcoded content.

Everything should come from the CMS.

---

# 9. Image Upload Locations

Administrator should be able to upload images for

Overview

History

Types

Architecture

Internal Components

Working Principle

Specifications

Applications

Advantages

Disadvantages

Buying Logic

Maintenance

Troubleshooting

FAQ

Related Devices

Each section has its own image collection.

---

# 10. Rich Content

Support

Markdown

Rich Text Editor

Tables

Code Blocks

Bullet Lists

Numbered Lists

Callout Boxes

Image Gallery

Comparison Tables

Embedded YouTube Videos

PDF References

External Links

---

# 11. Search

Whenever a new device is added,

automatically update

Search Index

Categories

Related Devices

Related Technologies

Navigation

No manual linking required.

---

# 12. Categories

Input Devices

Output Devices

Storage Devices

Networking Devices

Each category automatically displays all published devices.

---

# 13. Related Devices

Administrator can manually choose

Related Devices

Related Technologies

Related Guides

These should appear automatically on every page.

---

# 14. Media Library

Store all uploaded media.

Support

JPG

JPEG

PNG

SVG

WEBP

GIF

Maximum image size configurable.

Search media.

Filter by

Device

Category

Upload Date

File Type

---

# 15. Future Ready

The CMS should be built so new devices can be added without modifying code.

Administrator only fills

Device Name

Category

Sections

Images

Specifications

Content

Everything else should be generated automatically using the existing page template.

---

# 16. Development Rules

Keep the existing UI.

Keep the existing dark theme.

Keep the current layout.

Do not redesign pages.

Only improve functionality.

Every device must use the same reusable template.

Every section must support multiple images and rich educational content.

The CMS should make adding new encyclopedia articles simple, scalable, and consistent.

---

# Development Credentials

Admin Username

admin

Admin Password

1234

These credentials are only for local development and should be configurable before production deployment.
