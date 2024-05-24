const naamInvoer = document.getElementById('naam');
const namenLijst = document.getElementById('namenlijst');
const rondes = document.getElementById('rondes');
let namen = [];

function voegPersoonToe() {
    const naam = naamInvoer.value;
    if (naam.trim() !== '') {
        namen = [...namen,{naam: naam, punten: 0}];
        toonNamen();
        naamInvoer.value = '';
    }
}

function checkWinnaar() {
    const aantalRondes = parseInt(rondes.value);
    namen.forEach(speler => {
        if (speler.punten >= aantalRondes) {
            alert(`${speler.naam} heeft gewonnen!`);
        }
    });
}

function updateSpeler(spelerNaam, puntenVerschil) {
    namen = namen.map(speler =>
        speler.naam === spelerNaam ? { ...speler, punten: speler.punten + puntenVerschil } : speler
    );
    toonNamen();
    checkWinnaar();
}

function toonNamen(){
    namenLijst.innerHTML = '';
    namen.forEach((speler, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="naam">${speler.naam}</span>
            <span class="punten">${speler.punten}</span>
            <button class="verwijder">Verwijder</button>
            <button class="toevoegen">Punten toevoegen</button>
            <button class="verwijderen">Punten verwijderen</button>
        `;
        li.querySelector('.verwijder').addEventListener('click', () => {
            namen = namen.filter(n => n.naam !== speler.naam);
            toonNamen();
        });
        li.querySelector('.toevoegen').addEventListener('click', () => {
            updateSpeler(speler.naam, 1);
        });
        li.querySelector('.verwijderen').addEventListener('click', () => {
            updateSpeler(speler.naam, -1);
        });
        namenLijst.appendChild(li);
    });
}
document.querySelector('.naam button').addEventListener('click', voegPersoonToe);


