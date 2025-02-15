const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add animation classes when the element is in view
        entry.target.classList.add("animate__animated", "animate__fadeInLeft");
        observer.unobserve(entry.target);
      }
    });
  });
  const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add animation classes when the element is in view
        entry.target.classList.add("animate__animated", "animate__fadeInRight");
        observer.unobserve(entry.target);
      }
    });
  });
  const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add animation classes when the element is in view
        entry.target.classList.add("animate__animated", "animate__fadeInDown");
        observer.unobserve(entry.target);
      }
    });
  });
  const observer4 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add animation classes when the element is in view
        entry.target.classList.add("animate__animated", "animate__fadeInUp");
        observer.unobserve(entry.target);
      }
    });
  });
  const observer5 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add animation classes when the element is in view
        entry.target.classList.add("animate__animated", "animate__zoomIn");
        observer.unobserve(entry.target);
      }
    });
  });
  const observer6 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add animation classes when the element is in view
        entry.target.classList.add("animate__animated", "animate__fadeInBottomLeft");
        observer.unobserve(entry.target);
      }
    });
  });

  document.querySelectorAll(".sidebar").forEach((element) => {
    observer.observe(element);
  });
  document.querySelectorAll(".navbar").forEach((element) => {
    observer3.observe(element);
  });