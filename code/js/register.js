document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;

    if (email != 'admin@gmail.com') {
        window.location.href = 'confirm-register.html';
    } else {
        document.getElementById('errorAlert').classList.remove('d-none'); // errore
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    }
});