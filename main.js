
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuBtn.querySelector('i').classList.toggle('uil-bars');
    menuBtn.querySelector('i').classList.toggle('uil-times');
});

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
var typingEffect = new Typed(".typedText", {
    strings: ["a Web Developer", "a Designer", "a Cloud Enthusiast"],
    loop: true,
    typeSpeed: 100, 
    backSpeed: 80,
    backDelay: 2000
});

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

fetch('data.json')
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
                projectCard.className = 'bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:bg-[#7CA982] transition duration-300 h-80'; 
                projectCard.innerHTML = `
                    <i class="${project.icon} text-4xl mb-4 text-[#7CA982] hover:text-white transition"></i>
                    <h3 class="text-xl font-semibold text-[#243E36] hover:text-white transition">${project.title}</h3>
                    <p class="text-[#243E36] mt-2 hover:text-white transition">${project.description}</p>
                `;
                projectsContainer.appendChild(projectCard);
            });
        }

        
        displayProjects(data.projects);

      
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

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        emailjs.init('UfWtgRVNiyloyQdAC'); // Replace with your EmailJS User ID
        
        // Retrieve form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
    
        // Send the email
        emailjs.send('service_x7kxdbe', 'template_91aeadf', {
            name: name,
            email: email,
            message: message
        })
        .then(function(response) {
            alert('Message sent successfully!');
        }, function(error) {
            alert('Failed to send message, please try again later.');
            console.error('Error:', error);
        });
    });
