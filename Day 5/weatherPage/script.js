//const API = "9D33JTBCE2NC2PEXETJ9PA93V";

function fetchDataFromAPI() {
    fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/India?unitGroup=us&key=" + API).then(res => res.json()).then(data => {
        getDataToUI(data);
    });
}

fetchDataFromAPI();

function getDataToUI(data) {

    const days = data.days;
    const table = document.getElementById('root');


    const dateTime = document.createElement('th');
    const tempMax = document.createElement('th');
    const tempMin = document.createElement('th');
    const temp = document.createElement('th');
    const humidity = document.createElement('th');
    const windspeed = document.createElement('th');
    const tablerow1 = document.createElement('tr');

    dateTime.innerText = "Date";
    tempMax.innerText = "Maximum Temperature";
    tempMin.innerText = "Minimum Temperature";
    temp.innerText = "Temperature"
    humidity.innerText = "Humidity";
    windspeed.innerText = "Wind Speed";


    tablerow1.appendChild(dateTime);
    tablerow1.appendChild(tempMax);
    tablerow1.appendChild(tempMin);
    tablerow1.appendChild(temp);
    tablerow1.appendChild(humidity);
    tablerow1.appendChild(windspeed);
    table.appendChild(tablerow1);


    for (i = 0; i < days.length; i++) {
        const singleDay = days[i];

        const dateTime_data = document.createElement('td');
        const tempMax_data = document.createElement('td');
        const tempMin_data = document.createElement('td');
        const temp_data = document.createElement('td');
        const humidity_data = document.createElement('td');
        const windspeed_data = document.createElement('td');
        const tablerow_data = document.createElement('tr');

        dateTime_data.innerText = singleDay.datetime;
        tempMax_data.innerText = singleDay.tempmax;
        tempMin_data.innerText = singleDay.tempmin;
        temp_data.innerText = singleDay.temp;
        humidity_data.innerText = singleDay.humidity;
        windspeed_data.innerText = singleDay.windspeed;


        tablerow_data.appendChild(dateTime_data);
        tablerow_data.appendChild(tempMax_data);
        tablerow_data.appendChild(tempMin_data);
        tablerow_data.appendChild(temp_data);
        tablerow_data.appendChild(humidity_data);
        tablerow_data.appendChild(windspeed_data);
        table.appendChild(tablerow_data);
    }
}