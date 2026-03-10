# Dale King — Developer Portfolio

A modern **React + Vite portfolio website** built to showcase my software projects, technical stack, coursework, and interests.
The site focuses on **clean design, modular components, and data-driven content** so that projects and technologies can be easily expanded over time.

This portfolio highlights my interests in **full-stack development, automation systems, machine learning, and game development**.

---

# Live Site

https://vercel.com/djk239s-projects/portfolio-live/26ZMaWkiWvhfhS75i4XEafryLhRk

```
https://vercel.com/djk239s-projects/portfolio-live/26ZMaWkiWvhfhS75i4XEafryLhRk
```

---

# Tech Stack

### Frontend

* React
* Vite
* JavaScript / JSX
* TailwindCSS
* React Router

### UI / Animation

* Framer Motion
* Lucide React Icons

### Tooling

* ESLint
* Docker
* Git / GitHub

---

# Features

* Modern responsive UI built with **TailwindCSS**
* Smooth animations using **Framer Motion**
* Component-based architecture
* Data-driven rendering of projects, skills, and courses
* Multi-page navigation via **React Router**
* Contact form modal
* Docker support for containerized deployment

---

# Site Sections

### Home

Introduces the portfolio and provides an overview of my work and interests.

Highlights:

* Personal introduction
* Core development areas
* Links to projects and contact form
* Animated UI elements

### Projects

Displays development work using reusable **ProjectCard components**.

Projects include details such as:

* Description
* Technologies used
* Links to GitHub repositories
* Screenshots

### Stack

Shows languages, frameworks, and tools I have experience with using **TechCard components**.

### Classes

Full list of every class taken during my time at Rutgers University.

### Rutgers

Highlights my academic background and experiences at Rutgers University.

### Hobbies

Provides a more personal look into interests outside of programming.

---

# Project Structure

```
portfolio
│
├── public/                     # Static assets
│   └── vite.svg
│
├── src
│   │
│   ├── app                     # Application configuration
│   │   ├── layout.jsx          # Global layout wrapper
│   │   └── router.jsx          # React Router setup
│   │
│   ├── assets                  # Images used across the site
│   │   ├── port.jpeg
│   │   ├── rutgers.png
│   │   ├── card1.png
│   │   └── ...
│   │
│   ├── components              # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Projectcard.jsx
│   │   ├── TechCard.jsx
│   │   ├── Classcard.jsx
│   │   └── ContactForm.jsx
│   │
│   ├── data                    # Structured content
│   │   ├── projects.js
│   │   ├── skills.js
│   │   └── courses.js
│   │
│   ├── pages                   # Individual site pages
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── Stack.jsx
│   │   ├── Classes.jsx
│   │   ├── Rutgers.jsx
│   │   └── Hobbies.jsx
│   │
│   ├── index.css
│   ├── main.jsx                # React entry point
│   └── tailwind.config.js
│
├── Dockerfile
├── vite.config.js
├── package.json
└── README.md
```

---

# Component Architecture

The application uses reusable components to keep the UI modular and maintainable.

### Core Components

**Navbar**

* Responsive global navigation across pages (Classes and Stack pages are not included here).

**ProjectCard**

* Reusable component to showcase projects with a description, links to github and demo (if available), and an image (if available).

**TechCard**

* Reusable component to display technical skills and level. Takes title and level.

**ClassCard**

* Reusable component to display key classes with a description. Takes Title, text, and icon.

**ContactForm**

* Modal form allowing visitors to reach out powered by emailjs.

---

# Data-Driven Design

Projects, skills, and course data are stored separately from UI components.

```
src/data/projects.js
src/data/skills.js
src/data/courses.js
```

This allows content to be updated without modifying component logic.

---

# Installation

Clone the repository:

```bash
git clone https://github.com/djk239/Portfolio.git
```

Navigate into the project:

```bash
cd Portfolio/portfolio
```

Install dependencies:

```bash
npm install
```

---

# Running the Development Server

```bash
npm run dev
```

The development server will start at:

```
http://localhost:5173
```

---

# Production Build

Build the project for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

# Docker Support

This repository includes a **Dockerfile** for containerized deployment.

### Build the Docker image

```bash
docker build -t portfolio .
```

### Run the container

```bash
docker run -p 5173:5173 portfolio
```

---

# Development Notes

The portfolio is intentionally structured to be **easy to extend**.

Adding new content typically requires only editing the data files:

* Add a project → `src/data/projects.js`
* Add a skill → `src/data/skills.js`
* Add a course → `src/data/courses.js`

---

# Future Improvements

Potential future upgrades include:

* Project filtering
* More interactive UI animations

---

# Author

**Dale King**

GitHub:
https://github.com/djk239

---


