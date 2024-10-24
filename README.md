
# Portfolio Website

Welcome to my personal portfolio website repository! This site is designed to showcase my skills, projects, and contact information. Below, you’ll find an overview of the technologies used, features implemented, and how to view or contribute to the project.

---

## Project Overview

This portfolio website serves as an online resume, allowing potential employers and collaborators to view my projects and contact me. It includes:

- **Personal information**: A brief introduction to who I am and what I do.
- **Projects**: A dynamic project showcase, filterable by technology.
- **Contact form**: A way to reach me directly through the website.

---

## Technologies Used

- **HTML**: For the structure of the web pages.
- **Tailwind CSS**: For responsive and modern styling with utility-first classes.
- **JavaScript**: For interactive features such as the project search functionality.
- **JSON**: To store project data, making it easy to update or extend with new projects.
- **GitHub**: For version control and source code hosting.

---

## Features

### Semantic HTML for Better Accessibility
- Semantic elements like `<header>`, `<nav>`, `<main>`, and `<footer>` ensure the website is easy to read and accessible to screen readers.

Example:
```html
<nav id="header" class="fixed top-0 w-full bg-white shadow-md">
    <a href="#home" class="nav-link">Home</a>
    <a href="#about" class="nav-link">About</a>
</nav>
```

### Tailwind CSS for Modern, Responsive Design
- Utilized Tailwind CSS to quickly build responsive layouts and ensure the site works on all devices.
  
Example:
```html
<button class="btn bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700">
    Download CV
</button>
```

### JavaScript for Project Search Functionality
- Integrated a **search feature** that filters projects stored in a `JSON` file based on user input. This makes it easier for visitors to find relevant projects.

#### JSON File (`projects.json`)
```json
[
  {
    "title": "Portfolio Website",
    "description": "A website to showcase my personal projects and skills.",
    "technologies": ["HTML", "CSS", "JavaScript"],
    "link": "https://myportfolio.com/portfolio"
  },
  {
    "title": "E-commerce Platform",
    "description": "A fully-functional online store with payment gateway integration.",
    "technologies": ["React", "Node.js", "MongoDB"],
    "link": "https://myportfolio.com/ecommerce"
  }
]
```

#### JavaScript Search Function
```javascript
// Fetch projects from JSON file and display them
async function fetchProjects() {
    const response = await fetch('projects.json');
    const projects = await response.json();
    displayProjects(projects);
}

// Display filtered projects based on search input
function displayProjects(projects) {
    const projectContainer = document.getElementById('project-list');
    const searchInput = document.getElementById('search-input').value.toLowerCase();

    const filteredProjects = projects.filter(project => 
        project.title.toLowerCase().includes(searchInput) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchInput))
    );

    projectContainer.innerHTML = filteredProjects.map(project => `
        <div class="project-item">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p>Technologies: ${project.technologies.join(', ')}</p>
            <a href="${project.link}" class="text-blue-500">View Project</a>
        </div>
    `).join('');
}

// Add event listener to search input
document.getElementById('search-input').addEventListener('input', fetchProjects);

// Initial load of projects
fetchProjects();
```

---

## Lessons Learned & Best Practices

- **Mobile-first Design**: Ensured the website is responsive, starting from smaller screens to larger devices.
- **Using JSON for Project Data**: Storing project details in JSON made it easy to update projects dynamically.
- **JavaScript for Interactivity**: Improved the user experience by making the project list interactive and filterable.
- **Semantic HTML**: Improved accessibility by using semantic tags, benefiting both users and search engines.

---

## Live Demo

You can visit the live version of my portfolio at the following link:

- **[Portfolio Website](https://yogeshkadam-portfolio.netlify.app)**

You can also review the source code here:

- **[GitHub Repository](https://github.com/Ykadam006/Portfolio)**

---

Feel free to explore the project! If you have any suggestions or improvements.

---
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

