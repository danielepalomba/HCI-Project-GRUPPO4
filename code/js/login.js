document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email === 'admin@gmail.com' && password === 'admin') {
        window.location.href = 'index.html'; // home
    } else {
        document.getElementById('errorAlert').classList.remove('d-none'); // errore
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    }
});