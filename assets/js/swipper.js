// <!-- Initialize Swiper -->
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 150,
    centeredSlides: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 9000,
      disableOnInteraction: false,
    },
  });
  var swiper3 = new Swiper(".mySwiper3", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 9000,
      disableOnInteraction: false,
    },
  });
  var swiper4 = new Swiper(".mySwiper4", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 15000,
      disableOnInteraction: false,
    },
  });

  document.addEventListener("DOMContentLoaded", function () {
    let carousel = document.querySelector("#carouselExampleIndicators");
    let bootstrapCarousel = new bootstrap.Carousel(carousel, {
        interval: 3000, 
        ride: "carousel" // Automatically cycle through slides
    });
});
  document.addEventListener("DOMContentLoaded", function () {
    let carousel = document.querySelector("#carouselExampleIndicators2");
    let bootstrapCarousel = new bootstrap.Carousel(carousel, {
        interval: 3000, 
        ride: "carousel" // Automatically cycle through slides
    });
});

//counter
document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");

  function animateCounter(counter) {
      let countTo = parseInt(counter.getAttribute("data-countto"));
      let duration = parseInt(counter.getAttribute("data-duration"));
      let startTime = null;

      function runCounter(timestamp) {
          if (!startTime) startTime = timestamp;
          let progress = timestamp - startTime;
          let currentCount = Math.min(Math.floor((progress / duration) * countTo), countTo);
          counter.textContent = currentCount;

          if (progress < duration) {
              requestAnimationFrame(runCounter);
          } else {
              counter.textContent = countTo; // Ensure it reaches the final count
          }
      }

      requestAnimationFrame(runCounter);
  }

  let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              let counter = entry.target;
              if (!counter.dataset.animated) { // Prevent re-animation
                  counter.dataset.animated = "true";
                  animateCounter(counter);
              }
          }
      });
  }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

  counters.forEach(counter => observer.observe(counter));
});


// change icon button when click it

document.querySelectorAll(".toggleButton").forEach(button => {
    button.addEventListener("click", function() {
        let icon = this.querySelector("i");

        if (icon.classList.contains("fa-light", "fa-heart")) {
            icon.classList.remove("fa-light", "fa-heart");
            icon.classList.add("fa-solid", "fa-heart");
        } else {
            icon.classList.remove("fa-solid", "fa-heart");
            icon.classList.add("fa-light", "fa-heart");
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var app = document.querySelector('.typewriter'); // Select element by class

    var typewriter = new Typewriter(app, {
        loop: true,
        delay: 75,
        autoStart: true,
        cursor: "|"
    });

    typewriter
        .typeString('គេនស្យា​ រីឌ')
        .pauseFor(2500)
        .deleteAll()
        .typeString('KhanSha')
        .pauseFor(2500)
        .deleteAll()
        .start();
});

const backToTopButton = document.getElementById("backToTop");
        
window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = "block";
        backToTopButton.style.animation = "fadeInOut 0.5s ease-in-out forwards";
    } else {
        backToTopButton.style.animation = "none";
        backToTopButton.style.display = "none";
    }
};

backToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});




