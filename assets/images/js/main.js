// assets/js/main.js

// Toggle Mobile Menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuBtn.querySelector('i').classList.toggle('uil-bars');
    menuBtn.querySelector('i').classList.toggle('uil-times');
});

// Add Shadow to Navbar on Scroll
window.addEventListener('scroll', () => {
    const navHeader = document.getElementById('header');
    if (window.scrollY > 50) {
        navHeader.classList.add('shadow-lg', 'h-20', 'transition-all');
        navHeader.classList.remove('h-24');
    } else {
        navHeader.classList.remove('shadow-lg', 'h-20');
        navHeader.classList.add('h-24');
    }
});

// Typing Effect Initialization
var typingEffect = new Typed(".typedText", {
    strings: ["Web Developer", "Designer", "Developer"],
    loop: true,
    typeSpeed: 100, 
    backSpeed: 80,
    backDelay: 2000
});

// ScrollReveal Animations
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    reset: false
});

sr.reveal('.bg-[#243E36]', { delay: 200 });
sr.reveal('.text-2xl', { delay: 300 });
sr.reveal('.text-4xl', { delay: 400 });
sr.reveal('.text-3xl', { delay: 500 });
sr.reveal('.btn', { delay: 600 });
sr.reveal('.text-2xl', { delay: 700 });

// Active Link Switching on Scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('text-[#7CA982]');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('text-[#7CA982]');
                }
            });
        } else {
            navLinks.forEach(link => {
                if (link.getAttribute('href') !== `#${sectionId}`) {
                    link.classList.remove('text-[#7CA982]');
                }
            });
        }
    });
}

window.addEventListener('scroll', scrollActive);

// Fetch and Display Projects from JSON
fetch('assets/projects.json')
    .then(response => response.json())
    .then(data => {
        const projectsContainer = document.getElementById('projects-container');
        const searchBar = document.getElementById('search-bar');

        function displayProjects(projects) {
            projectsContainer.innerHTML = '';
            if (projects.length === 0) {
                projectsContainer.innerHTML = '<p class="text-center text-[#243E36]">No projects found.</p>';
                return;
            }
            projects.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.className = 'bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:bg-[#7CA982] transition duration-300 h-80'; // Fixed height for uniformity
                projectCard.innerHTML = `
                    <i class="${project.icon} text-4xl mb-4 text-[#7CA982] hover:text-white transition"></i>
                    <h3 class="text-xl font-semibold text-[#243E36] hover:text-white transition">${project.title}</h3>
                    <p class="text-[#243E36] mt-2 hover:text-white transition">${project.description}</p>
                `;
                projectsContainer.appendChild(projectCard);
            });
        }

        // Initial Display
        displayProjects(data.projects);

        // Search Functionality
        searchBar.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const filteredProjects = data.projects.filter(project => 
                project.title.toLowerCase().includes(query) || 
                project.description.toLowerCase().includes(query)
            );
            displayProjects(filteredProjects);
        });
    })
    .catch(error => console.error('Error fetching projects:', error));
