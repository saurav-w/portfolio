document.addEventListener('DOMContentLoaded', () => {
  // Dark Mode Toggle
  const toggleSwitch = document.querySelector('#checkbox');
  const currentTheme = localStorage.getItem('darkMode');

  if (currentTheme === 'true') {
    document.body.classList.add('dark-mode');
    toggleSwitch.checked = true;
  }

  toggleSwitch.addEventListener('change', (e) => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', e.target.checked);
  });

  // Mobile Menu
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('is-active');
  });

  // Projects Data
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React & Node.js',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: 'project1.jpg'
    },
    {
      title: 'Task Manager',
      description: 'Real-time collaborative task management app',
      tech: ['Vue.js', 'Firebase', 'SCSS'],
      image: 'project2.jpg'
    }
  ];

  // Load Projects
  const projectsContainer = document.getElementById('projects-container');
  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="project-img">
      <div class="project-info">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tech-stack">
          ${project.tech.map(t => `<span>${t}</span>`).join('')}
        </div>
      </div>
    `;
    projectsContainer.appendChild(card);
  });

  // Form Submission
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const button = form.querySelector('button');
    
    try {
      button.disabled = true;
      button.textContent = 'Sending...';
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      form.reset();
      alert('Message sent successfully!');
    } catch (error) {
      alert('Error sending message. Please try again.');
    } finally {
      button.disabled = false;
      button.textContent = 'Send Message';
    }
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
    observer.observe(section);
  });

  // Back to Top Button
  const fab = document.querySelector('.fab');
  window.addEventListener('scroll', () => {
    fab.style.display = window.scrollY > 500 ? 'block' : 'none';
  });

  fab.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});