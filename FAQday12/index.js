const toggleBtn = document.querySelectorAll('.faq-toggle');

toggleBtn.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  });
});

// ! This is not working for the most part
// todo: visite dripple.com
