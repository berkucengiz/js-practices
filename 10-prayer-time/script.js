const imsak = document.getElementById("imsak");
const gunes = document.getElementById("gunes");
const ogle = document.getElementById("ogle");
const ikindi = document.getElementById("ikindi");
const aksam = document.getElementById("aksam");
const yatsi = document.getElementById("yatsi");

const city = document.getElementById("city");
const temp = document.getElementById("temp");
const date = document.getElementById("date");
const locationEl = document.getElementById("location");
const btnSearch= document.getElementById("btn-search");

let currentCity = "istanbul"


const fetchData = async (cityName) => {
    const url = `https://muslimsalat.p.rapidapi.com/${cityName}.json`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f0accdc758msh17e6a78006018bbp16ef2bjsnc94c9de48712',
            'X-RapidAPI-Host': 'muslimsalat.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
        addData(data);
    } catch (error) {
        console.error(error);
    }
};
const addData = (props) => {
    locationEl.innerText=props.query;
    temp.innerText= props.today_weather.temperature + `\xB0 C`;
    date.innerText=props.items[0].date_for;
    imsak.innerText=props.items[0].fajr;
    gunes.innerText=props.items[0].shurooq;
    ogle.innerText=props.items[0].dhuhr;
    ikindi.innerText=props.items[0].asr;
    aksam.innerText=props.items[0].maghrib;
    yatsi.innerText=props.items[0].isha;

};
window.onload = async () => {
    await fetchData(currentCity);
};


btnSearch.addEventListener("click", async () => {
    const enteredCity = city.value.trim();
    console.log(enteredCity);
    await fetchData(enteredCity);
});

