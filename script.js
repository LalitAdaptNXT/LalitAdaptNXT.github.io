// ============================================
// Navigation Toggle (Mobile Menu)
// ============================================
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Show menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Hide menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Close menu when clicking nav links
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});

// ============================================
// Sticky Header on Scroll
// ============================================
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.style.boxShadow = 'none';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    }
    
    lastScroll = currentScroll;
});

// ============================================
// Smooth Scrolling for Anchor Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Don't prevent default for empty hash or just #
        if (href === '#' || href === '') {
            return;
        }
        
        e.preventDefault();
        
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// FAQ Accordion
// ============================================
const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq__question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current item
        if (isActive) {
            item.classList.remove('active');
        } else {
            item.classList.add('active');
        }
    });
});

// ============================================
// Form Validation
// ============================================
const consultationForm = document.getElementById('consultation-form');

if (consultationForm) {
    consultationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            company: document.getElementById('company').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            service: document.getElementById('service').value,
            message: document.getElementById('message').value.trim()
        };
        
        // Validation
        let isValid = true;
        let errorMessage = '';
        
        // Name validation
        if (formData.name.length < 2) {
            isValid = false;
            errorMessage += 'Please enter a valid name.\n';
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            isValid = false;
            errorMessage += 'Please enter a valid business email.\n';
        }
        
        // Company validation
        if (formData.company.length < 2) {
            isValid = false;
            errorMessage += 'Please enter your company name.\n';
        }
        
        // Service selection
        if (!formData.service) {
            isValid = false;
            errorMessage += 'Please select an area of interest.\n';
        }
        
        // Message validation
        if (formData.message.length < 10) {
            isValid = false;
            errorMessage += 'Please provide more details about your project (minimum 10 characters).\n';
        }
        
        if (!isValid) {
            alert(errorMessage);
            return;
        }
        
        // If validation passes, show success message
        // In production, this would submit to a backend
        alert('Thank you for your interest! We will contact you within 24 hours.\n\nForm data:\n' + 
              'Name: ' + formData.name + '\n' +
              'Email: ' + formData.email + '\n' +
              'Company: ' + formData.company + '\n' +
              'Service: ' + formData.service + '\n' +
              'Message: ' + formData.message);
        
        // Reset form
        consultationForm.reset();
        
        // In production, you would send the data to your backend:
        // fetch('/api/consultation', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formData),
        // })
        // .then(response => response.json())
        // .then(data => {
        //     alert('Thank you! We will contact you soon.');
        //     consultationForm.reset();
        // })
        // .catch(error => {
        //     alert('There was an error submitting your request. Please try again.');
        // });
    });
    
    // Real-time email validation
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            const email = this.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (email && !emailRegex.test(email)) {
                this.style.borderColor = '#ef4444';
            } else {
                this.style.borderColor = '';
            }
        });
    }
}

// ============================================
// Intersection Observer for Scroll Animations
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInElements = document.querySelectorAll('.service-card, .industry-card, .case-study-card, .article-card, .outcome-card, .tech-category');

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);
            
            fadeInObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

fadeInElements.forEach(element => {
    fadeInObserver.observe(element);
});

// ============================================
// Active Navigation Link Highlighting
// ============================================
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector('.nav__link[href*=' + sectionId + ']');
        
        if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.style.color = 'var(--primary-color)';
        } else if (navLink) {
            navLink.style.color = '';
        }
    });
}

window.addEventListener('scroll', scrollActive);

// ============================================
// Lazy Loading for Images (if needed)
// ============================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('img.lazy');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ============================================
// Keyboard Accessibility
// ============================================
document.addEventListener('keydown', (e) => {
    // Close mobile menu with Escape key
    if (e.key === 'Escape' && navMenu.classList.contains('show-menu')) {
        navMenu.classList.remove('show-menu');
    }
});

// ============================================
// Performance: Debounce Scroll Events
// ============================================
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll handlers
const efficientScroll = debounce(() => {
    scrollActive();
});

window.addEventListener('scroll', efficientScroll);

// ============================================
// WhatsApp Click Tracking (Optional Analytics)
// ============================================
const whatsappLinks = document.querySelectorAll('a[href^="https://wa.me"]');
whatsappLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log('WhatsApp link clicked');
        // Add analytics tracking here if needed
        // gtag('event', 'whatsapp_click', { ... });
    });
});

// ============================================
// Console Message
// ============================================
console.log('%cAdaptNXT Website', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with modern web technologies', 'color: #6b7280; font-size: 12px;');
console.log('%cInterested in working with us? Visit https://adaptnxt.com/contact', 'color: #4b5563; font-size: 12px;');
