
    // Carousel
    let index = 0;
    const items = document.querySelectorAll('.carousel-item');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');

    function showSlide(i) {
      items.forEach((el, idx) => {
        el.classList.toggle('active', idx === i);
      });
    }

    nextBtn.addEventListener('click', () => {
      index = (index + 1) % items.length;
      showSlide(index);
    });

    prevBtn.addEventListener('click', () => {
      index = (index - 1 + items.length) % items.length;
      showSlide(index);
    });

    // Animation au scroll
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => {
      section.classList.add('fade-init');
      observer.observe(section);
    });

    // Burger menu
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  