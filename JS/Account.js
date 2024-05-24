const gebruiker = JSON.parse(localStorage.getItem('gebruiker'));
const userData = { ...gebruiker };

if (!gebruiker) {
    window.location.href = 'Login.html';
}

function displayUserData({gebruikersnaam, email, ...rest}) {
    document.getElementById('gebruikersnaam').textContent = gebruikersnaam;
    document.getElementById('email').textContent = email;
    const container = document.querySelector('.container');
    for (let key in rest) {
        const p = document.createElement('p');
        p.textContent = `${key}: ${rest[key]}`;
        container.appendChild(p);
    }
}

displayUserData(userData);

