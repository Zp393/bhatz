const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// Simple fade-in effect when scrolling

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.3 });

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(20px)";
    observer.observe(section);
});

document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        let answer = item.nextElementSibling;
        let icon = item.querySelector('.toggle-icon');

        if (answer.style.display === "block") {
            answer.style.display = "none";
            icon.classList.remove("rotate");
        } else {
            answer.style.display = "block";
            icon.classList.add("rotate");
        }
    });
});