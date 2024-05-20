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

function toonNamen(){
    namenLijst.innerHTML = '';
    namen.forEach((speler, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="naam">${speler.naam}</span>
            <button class="verwijder">Verwijder</button>
        `;
        li.querySelector('.verwijder').addEventListener('click', () => {
            namen = namen.filter(n => n.naam !== speler.naam);
            toonNamen();
        });

        namenLijst.appendChild(li);
    });
}
document.querySelector('.naam button').addEventListener('click', voegPersoonToe);


