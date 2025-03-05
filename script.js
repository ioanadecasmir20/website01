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

    // Mobile Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    menuToggle.addEventListener("click", function() {
        nav.classList.toggle("active");
    });

    // FAQ Toggle Functionality
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        item.addEventListener("click", function() {
            this.classList.toggle("active");
            let content = this.querySelector("p");
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});
