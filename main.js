

let operation = []

const countryHandler = () => {
    let countryValue = document.getElementById('country-selection').value
    let selectElement = document.getElementById('select-operation');

    operation.length = 0;
    selectElement.innerHTML = '';


    if (countryValue == "Afghanistan") {
        operation.push("Returns and displacement in Afghanistan")

    }
    else if (countryValue == "Burkina Faso") {
        operation.push("Burkina Faso Crisis")
    }
    else if (countryValue == "Democratic Republic of the Congo") {
        operation.push("Ituri", "Kasai", "Kasai Central", "Kasai Oriental", "Lomami", "K23 Crisis Response", "Nord Kivu", "Rest of DRC", "Sankuru", "Sud Kivu", "Tanganyika")

    }
    else if (countryValue == "Ethiopia") {
        operation.push("Countrywide Monitoring", "Ethiopia - Gedeo and West Guji Rapid Response", "Northern Ethiopia Crisis")

    }
    operation.forEach(function (op) {
        let option = document.createElement('option');
        option.value = op;
        option.text = op;
        selectElement.appendChild(option);
    });
}

const makeRequest = () => {
    let country = document.getElementById('country-selection').value
    let operation = document.getElementById('select-operation').value
    window.open(`https://dtmapi.iom.int/api/idpAdmin0Data/GetAdmin0Datav2?CountryName=${country}&Operation=${operation}`, '_blank');
}

const pageLoadHandler = () => {

    countryHandler()
}