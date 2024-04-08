console.log("JEL")

const API = "Y736T2TCB8JH5EWDRS4YRG4XG";

function fetchDataFromAPI() {
    fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/India?unitGroup=us&key=" + API).then(res => res.json()).then(data => {
        getDataToUI(data);
    });
}

fetchDataFromAPI();

function getDataToUI(data) {
    // const table = document.getElementById('root');
    // table.style.border = "1px solid black";
    // const tableHeader1 = document.createElement('th');
    // const tableHeader2 = document.createElement('th');
    // const tableHeader3 = document.createElement('th');
    // const tablerow1 = document.createElement('tr');
    // const tablerow2 = document.createElement('tr');
    // tableHeader1.style.border = "1px solid black";
    // tableHeader2.style.border = "1px solid black";
    // tableHeader3.style.border = "1px solid black";

    // tableHeader1.innerText = "Header1";
    // tableHeader2.innerText = "Header2";
    // tableHeader3.innerText = "Header3";

    // const tableData1 = document.createElement('td');
    // const tableData2 = document.createElement('td');
    // const tableData3 = document.createElement('td');

    // tableData1.innerText = "Data1"
    // tableData2.innerText = "Data2"
    // tableData3.innerText = "Data3"

    // tablerow1.appendChild(tableHeader1);
    // tablerow1.appendChild(tableHeader2);
    // tablerow1.appendChild(tableHeader3);
    // tablerow2.appendChild(tableData1);
    // tablerow2.appendChild(tableData2);
    // tablerow2.appendChild(tableData3);
    // table.appendChild(tablerow1);
    // table.appendChild(tablerow2);

    const days = data.days;

    for(i = 0 ; i < days.length ; i++) {
        console.log(i);
    }
}

// getDataToUI();