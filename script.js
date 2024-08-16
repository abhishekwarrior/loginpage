document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const showSignup = document.getElementById('showSignup');
    const showLogin = document.getElementById('showLogin');
    const loginBox = document.querySelector('.form-box.login');
    const signupBox = document.querySelector('.form-box.signup');

    showSignup.addEventListener('click', (e) => {
        e.preventDefault();
        loginBox.style.transform = 'translateX(-100%)';
        loginBox.style.opacity = '0';
        loginBox.style.visibility = 'hidden';
        signupBox.style.transform = 'translateX(0)';
        signupBox.style.opacity = '1';
        signupBox.style.visibility = 'visible';
    });

    showLogin.addEventListener('click', (e) => {
        e.preventDefault();
        signupBox.style.transform = 'translateX(100%)';
        signupBox.style.opacity = '0';
        signupBox.style.visibility = 'hidden';
        loginBox.style.transform = 'translateX(0)';
        loginBox.style.opacity = '1';
        loginBox.style.visibility = 'visible';
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log('Login submitted');
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your signup logic here
        console.log('Signup submitted');
    });
});