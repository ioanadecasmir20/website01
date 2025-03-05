document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector(".animated-header");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Slide-in animation trigger
    const features = document.querySelectorAll(".feature-card");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("slide-in");
            }
        });
    }, { threshold: 0.3 });

    features.forEach(feature => {
        observer.observe(feature);
    });
});

function toggleMenu() {
    document.getElementById("mobile-menu").classList.toggle("active");
}
