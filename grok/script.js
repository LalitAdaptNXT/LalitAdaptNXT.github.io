document.addEventListener('DOMContentLoaded', () => {
    // Mobile Nav Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // FAQ Accordion
    document.querySelectorAll('.accordion-item button').forEach(button => {
        button.addEventListener('click', () => {
            const expanded = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', !expanded);
            button.parentElement.querySelector('.accordion-content').style.display = expanded ? 'none' : 'block';
        });
    });

    // Form Validation
    const form = document.getElementById('consult-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let valid = true;
        form.querySelectorAll('input[required], textarea[required]').forEach(field => {
            if (!field.value.trim()) {
                valid = false;
                field.style.borderColor = 'red';
            } else {
                field.style.borderColor = '';
            }
        });
        const email = form.querySelector('#email');
        if (email && !/\S+@\S+\.\S+/.test(email.value)) {
            valid = false;
            email.style.borderColor = 'red';
        }
        if (valid) {
            alert('Form submitted successfully!'); // Placeholder for submission
            form.reset();
        } else {
            alert('Please fill all required fields correctly.');
        }
    });
});