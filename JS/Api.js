function weergave(weer){
    const {naam, main: {temp, humidity}, weather: [{icon}]} = weer;
    const resultaat = document.querySelector("#weer");

    const stad = document.createElement("h2");
    stad.textContent = naam;
    resultaat.appendChild(stad);

    const temperatuur = document.createElement("p");
    temperatuur.textContent = `Temperatuur: ${temp}°C`;
    resultaat.appendChild(temperatuur);

    const luchtvocht = document.createElement("p");
    luchtvocht.textContent = `Luchtvochtigheid: ${humidity}%`;
    resultaat.appendChild(luchtvocht);

    const weerIcoon = document.createElement("img");
    weerIcoon.src = `http://openweathermap.org/img/w/${icon}.png`;
    resultaat.appendChild(weerIcoon);
}

async function fetchWeer(stad){
    document.getElementById('weer').innerHTML = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${stad}&appid=a6142e350d7297bd86be185f4f04d1be&units=metric`;
    try{
        const response = await fetch(url);
        const data = await response.json();
        weergave(data);
        document.getElementById('weer').style.display = 'block';
    }catch (error){
        console.error('Error fetching weather data:', error);
    }
}
    document.getElementById('weerForm').addEventListener('submit', function(e){
        e.preventDefault();
        const stad = document.getElementById('stad').value;
        if(!stad.trim()){
            document.getElementById('error-message').style.display = 'block';
            document.getElementById('weer').style.display = 'none';
        } else {
            document.getElementById('error-message').style.display = 'none';
            fetchWeer(stad);
        }
    });
