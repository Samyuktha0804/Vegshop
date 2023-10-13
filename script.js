document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    if (email === '' || password === '') {
        errorMessage.classList.remove('hidden');
    } else {
        errorMessage.classList.add('hidden');
        // Perform login logic here
    }
});
