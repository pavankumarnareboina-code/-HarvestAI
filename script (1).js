// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('#header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 4px 20px rgba(0, 102, 204, 0.2)';
    } else {
        header.style.background = '#ffffff';
        header.style.boxShadow = '0 4px 6px rgba(0, 102, 204, 0.15)';
    }
});

// Login Modal
const modal = document.getElementById('loginModal');
const loginBtn = document.getElementById('loginBtn');
const closeBtn = document.querySelector('.close');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Login Form Validation
const loginForm = document.getElementById('loginForm');
const loginUsername = document.getElementById('loginUsername');
const loginPassword = document.getElementById('loginPassword');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Reset error messages
    document.getElementById('loginUsernameError').textContent = '';
    document.getElementById('loginPasswordError').textContent = '';
    
    let isValid = true;
    
    // Validate Username
    if (loginUsername.value.trim() === '') {
        document.getElementById('loginUsernameError').textContent = 'Username is required';
        loginUsername.focus();
        isValid = false;
    }
    
    // Validate Password
    if (loginPassword.value.trim() === '') {
        document.getElementById('loginPasswordError').textContent = 'Password is required';
        if (isValid) loginPassword.focus();
        isValid = false;
    } else if (loginPassword.value.length < 6) {
        document.getElementById('loginPasswordError').textContent = 'Password must be at least 6 characters';
        if (isValid) loginPassword.focus();
        isValid = false;
    }
    
    if (isValid) {
        alert('✅ Login successful! Welcome to HarvestAI Platform.');
        loginForm.reset();
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Register Form Validation
const registerForm = document.getElementById('registerForm');
const regName = document.getElementById('regName');
const regEmail = document.getElementById('regEmail');
const regPassword = document.getElementById('regPassword');
const regConfirmPassword = document.getElementById('regConfirmPassword');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Reset error messages
    document.getElementById('regNameError').textContent = '';
    document.getElementById('regEmailError').textContent = '';
    document.getElementById('regPasswordError').textContent = '';
    document.getElementById('regConfirmPasswordError').textContent = '';
    
    let isValid = true;
    
    // Validate Name
    if (regName.value.trim() === '') {
        document.getElementById('regNameError').textContent = 'Full name is required';
        regName.focus();
        isValid = false;
    } else if (regName.value.trim().length < 3) {
        document.getElementById('regNameError').textContent = 'Name must be at least 3 characters';
        regName.focus();
        isValid = false;
    }
    
    // Validate Email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (regEmail.value.trim() === '') {
        document.getElementById('regEmailError').textContent = 'Email is required';
        if (isValid) regEmail.focus();
        isValid = false;
    } else if (!emailPattern.test(regEmail.value)) {
        document.getElementById('regEmailError').textContent = 'Please enter a valid email address';
        if (isValid) regEmail.focus();
        isValid = false;
    }
    
    // Validate Password
    if (regPassword.value.trim() === '') {
        document.getElementById('regPasswordError').textContent = 'Password is required';
        if (isValid) regPassword.focus();
        isValid = false;
    } else if (regPassword.value.length < 8) {
        document.getElementById('regPasswordError').textContent = 'Password must be at least 8 characters';
        if (isValid) regPassword.focus();
        isValid = false;
    }
    
    // Validate Confirm Password
    if (regConfirmPassword.value.trim() === '') {
        document.getElementById('regConfirmPasswordError').textContent = 'Please confirm your password';
        if (isValid) regConfirmPassword.focus();
        isValid = false;
    } else if (regPassword.value !== regConfirmPassword.value) {
        document.getElementById('regConfirmPasswordError').textContent = 'Passwords do not match';
        if (isValid) regConfirmPassword.focus();
        isValid = false;
    }
    
    if (isValid) {
        alert('🎉 Registration successful! Welcome to HarvestAI family. You can now login to access all features.');
        registerForm.reset();
        
        // Scroll to login section
        setTimeout(() => {
            loginBtn.click();
        }, 500);
    }
});

// Feedback Form Validation
const feedbackForm = document.getElementById('feedbackForm');
const feedbackName = document.getElementById('feedbackName');
const feedbackEmail = document.getElementById('feedbackEmail');
const feedbackMessage = document.getElementById('feedbackMessage');

feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Reset error messages
    document.getElementById('feedbackNameError').textContent = '';
    document.getElementById('feedbackEmailError').textContent = '';
    document.getElementById('feedbackMessageError').textContent = '';
    
    let isValid = true;
    
    // Validate Name
    if (feedbackName.value.trim() === '') {
        document.getElementById('feedbackNameError').textContent = 'Name is required';
        feedbackName.focus();
        isValid = false;
    }
    
    // Validate Email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (feedbackEmail.value.trim() === '') {
        document.getElementById('feedbackEmailError').textContent = 'Email is required';
        if (isValid) feedbackEmail.focus();
        isValid = false;
    } else if (!emailPattern.test(feedbackEmail.value)) {
        document.getElementById('feedbackEmailError').textContent = 'Please enter a valid email address';
        if (isValid) feedbackEmail.focus();
        isValid = false;
    }
    
    // Validate Message
    if (feedbackMessage.value.trim() === '') {
        document.getElementById('feedbackMessageError').textContent = 'Message is required';
        if (isValid) feedbackMessage.focus();
        isValid = false;
    } else if (feedbackMessage.value.trim().length < 10) {
        document.getElementById('feedbackMessageError').textContent = 'Message must be at least 10 characters';
        if (isValid) feedbackMessage.focus();
        isValid = false;
    }
    
    if (isValid) {
        alert('✅ Thank you for your feedback! We appreciate your input and will review it carefully to improve our services.');
        feedbackForm.reset();
    }
});

// Add input event listeners for real-time validation feedback
function addInputValidation(input, errorElement, validationFn) {
    input.addEventListener('input', () => {
        if (input.value.trim() !== '') {
            const error = validationFn(input.value);
            errorElement.textContent = error || '';
        }
    });
    
    input.addEventListener('blur', () => {
        const error = validationFn(input.value);
        errorElement.textContent = error || '';
    });
}

// Login validation helpers
addInputValidation(loginPassword, document.getElementById('loginPasswordError'), (value) => {
    if (value.length > 0 && value.length < 6) {
        return 'Password must be at least 6 characters';
    }
    return '';
});

// Register validation helpers
addInputValidation(regName, document.getElementById('regNameError'), (value) => {
    if (value.trim().length > 0 && value.trim().length < 3) {
        return 'Name must be at least 3 characters';
    }
    return '';
});

addInputValidation(regEmail, document.getElementById('regEmailError'), (value) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (value.length > 0 && !emailPattern.test(value)) {
        return 'Please enter a valid email address';
    }
    return '';
});

addInputValidation(regPassword, document.getElementById('regPasswordError'), (value) => {
    if (value.length > 0 && value.length < 8) {
        return 'Password must be at least 8 characters';
    }
    return '';
});

regConfirmPassword.addEventListener('input', () => {
    if (regConfirmPassword.value.length > 0) {
        if (regPassword.value !== regConfirmPassword.value) {
            document.getElementById('regConfirmPasswordError').textContent = 'Passwords do not match';
        } else {
            document.getElementById('regConfirmPasswordError').textContent = '';
        }
    }
});

// Feedback validation helpers
addInputValidation(feedbackEmail, document.getElementById('feedbackEmailError'), (value) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (value.length > 0 && !emailPattern.test(value)) {
        return 'Please enter a valid email address';
    }
    return '';
});

addInputValidation(feedbackMessage, document.getElementById('feedbackMessageError'), (value) => {
    if (value.trim().length > 0 && value.trim().length < 10) {
        return 'Message must be at least 10 characters';
    }
    return '';
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// Add active state to navigation on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.style.color = '';
            });
            if (navLink) {
                navLink.style.color = '#0066cc';
            }
        }
    });
});

console.log('🌾 HarvestAI - Smart Agriculture Platform Loaded Successfully!');
