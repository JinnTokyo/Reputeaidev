export const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDarkMode);
};

export const initDarkMode = () => {
    const darkModePreference = localStorage.getItem('dark-mode') === 'true';
    if (darkModePreference) {
        document.body.classList.add('dark-mode');
    }
};

export const setupScrollToTop = () => {
    let scrollToTopBtn = document.getElementById('scrollToTopBtn');
    
    if (!scrollToTopBtn) {
        scrollToTopBtn = document.createElement('button');
        scrollToTopBtn.id = 'scrollToTopBtn';
        scrollToTopBtn.innerHTML = '⬆️';
        scrollToTopBtn.style.display = 'none';
        document.body.appendChild(scrollToTopBtn);
    }

    window.onscroll = () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    };

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
};

export const setupLazyLoading = () => {
    const lazyImages = document.querySelectorAll("img.lazy");

    if (lazyImages.length > 0) {
        const lazyLoad = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('data-src');
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        };

        const observer = new IntersectionObserver(lazyLoad, {
            rootMargin: "0px 0px 50px 0px"
        });

        lazyImages.forEach(img => {
            observer.observe(img);
        });
    }
};

export const setupScrollAnimation = () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        animatedElements.forEach(el => observer.observe(el));
    }
};

export const debounce = (func, wait = 20, immediate = true) => {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = () => {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

export const setupEmailValidation = () => {
    const form = document.querySelector('form');
    if (form) {
        const emailInput = form.querySelector('input[type="email"]');
        if (emailInput) {
            emailInput.addEventListener('input', () => {
                const isValidEmail = emailInput.value.includes('@');
                if (!isValidEmail) {
                    emailInput.setCustomValidity('Please enter a valid email.');
                } else {
                    emailInput.setCustomValidity('');
                }
            });
        }
    }
};
