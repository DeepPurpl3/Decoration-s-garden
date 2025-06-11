
  // Simple JS carousel
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

  // Animation douce au scroll
  const sections = document.querySelectorAll('section');
  const options = {
    threshold: 0.1
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, options);

  sections.forEach(section => {
    section.classList.add('fade-init');
    observer.observe(section);
  });
