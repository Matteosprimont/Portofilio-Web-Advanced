document.getElementById('niewaccount').addEventListener('submit', function(event) {
    event.preventDefault();

    const gebruikersnaam = document.getElementById('gebruikersnaam').value;
    const email = document.getElementById('email').value;
    const wachtwoord = document.getElementById('wachtwoord').value;
    const wachtwoord2 = document.getElementById('wachtwoord2').value;

    if (!gebruikersnaam || !email || !wachtwoord || !wachtwoord2) {
        alert('Vul alle velden in.');
        return;
    }
    if (wachtwoord !== wachtwoord2) {
        alert('Wachtwoorden komen niet overeen.');
        return;
    }
    const gebruiker = {
        gebruikersnaam: gebruikersnaam,
        email: email,
        wachtwoord: wachtwoord
    };
    localStorage.setItem('gebruiker', JSON.stringify(gebruiker));
    window.location.href = 'Login.html';
});

