document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const gebruikersnaam = document.getElementById('gebruikersnaam').value;
    const wachtwoord = document.getElementById('wachtwoord').value;

    const gebruiker = JSON.parse(localStorage.getItem('gebruiker'));

    if (gebruikersnaam === gebruiker.gebruikersnaam && wachtwoord === gebruiker.wachtwoord) {
        window.location.href = 'Scorekeeper.html';
    } else {
        alert('Ongeldige gebruikersnaam of wachtwoord');
    }
});