document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll
    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  
    // Dark Mode Toggle
    const darkModeToggle = document.createElement('button');
    darkModeToggle.innerHTML = '🌓';
    darkModeToggle.className = 'dark-mode-toggle';
    document.body.prepend(darkModeToggle);
  
    darkModeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });
  
    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark-mode');
    }
  
    // Load Projects
    const projects = [
      {
        title: 'E-Commerce Platform',
        description: 'Full-stack e-commerce solution with React & Node.js',
        tech: ['React', 'Node.js', 'MongoDB'],
        image: 'images/project1.jpg'
      },
      {
        title: 'Task Manager',
        description: 'Real-time collaborative task management app',
        tech: ['Vue.js', 'Firebase', 'SCSS'],
        image: 'images/project2.jpg'
      },
      {
        title: 'Blog System',
        description: 'CMS-style blog with user authentication',
        tech: ['Next.js', 'GraphQL', 'PostgreSQL'],
        image: 'images/project3.jpg'
      }
    ];
  
    const projectsContainer = document.getElementById('projects-container');
    projects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';
      projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-img">
        <div class="project-info">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="tech-stack">
            ${project.tech.map(tech => `<span>${tech}</span>`).join('')}
          </div>
        </div>
      `;
      projectsContainer.appendChild(projectCard);
    });
  
    // Form Submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Add your form submission logic here
      alert('Thank you for your message! I will respond shortly.');
      contactForm.reset();
    });
  
    // Scroll Animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
  
    document.querySelectorAll('.section').forEach(section => {
      section.style.opacity = 0;
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'all 0.6s ease-out';
      observer.observe(section);
    });
  });
