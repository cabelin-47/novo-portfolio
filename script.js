document.addEventListener('DOMContentLoaded', function() {
    // Efeito de navegação suave
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetPage = link.getAttribute('href');
        if (targetPage !== "#") {
          window.location.href = targetPage; // Redireciona para a página correspondente
        } else {
          document.querySelector(targetPage).scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  
    // Adicionar animação nas seções enquanto o usuário rola a página
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.clientHeight;
        if (sectionTop < window.innerHeight - sectionHeight / 3) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });
    });
  
    // Efeito de destaque nos links de navegação ao passar o mouse
    links.forEach(link => {
      link.addEventListener('mouseover', () => {
        link.style.color = "#ff9900";
      });
      link.addEventListener('mouseout', () => {
        link.style.color = "#ffcc00";
      });
    });
  });