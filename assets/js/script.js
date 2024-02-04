// Navbar Script Start
document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById('navbar');

    function updateNavbar() {
        if (window.scrollY > 140) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', updateNavbar);
});
// Navbar Script End



document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.count');
    const countersSection = document.getElementById('counters-section');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounting();
                observer.unobserve(entry.target);
            }
        });
    }, options);

    observer.observe(countersSection);

    function startCounting() {
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const increment = target / 100;

            let count = 0;

            const updateCounter = () => {
                count += increment;
                counter.innerText = Math.floor(count);

                if (count < target) {
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target;
                }
            };

            updateCounter();
        });
    }
});


// Testimonials Slider
let userTexts = document.getElementsByClassName("user-text");
let userPics = document.getElementsByClassName("user-pic");

function showReview(){
  for(userPic of userPics){
    userPic.classList.remove("active-pic");
  }
  for(userText of userTexts){
    userText.classList.remove("active-text");
  }
  let i = Array.from(userPics).indexOf(event.target);

  userPics[i].classList.add("active-pic");
  userTexts[i].classList.add("active-text");
}


// Swiper 
var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 15,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: true,
      },
      loop: true,
    });



    // Get all the navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    // Add a click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Remove the 'active' class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Add the 'active' class to the clicked link
            this.classList.add('active');
        });
    });
