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
