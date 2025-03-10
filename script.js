async function getData() {
    var name = document.getElementById("country-name").value;
    try {
        let response = await fetch("https://restcountries.com/v3.1/name/" + name);
        if (!response.ok) throw new Error("Country not found");
        let res = await response.json();
        
        document.getElementById("capital").innerHTML = "<strong>Capital:</strong> " + (res[0].capital ? res[0].capital[0] : "N/A");
        document.getElementById("population").innerHTML = "<strong>Population:</strong> " + res[0].population;
        document.getElementById("region").innerHTML = "<strong>Region:</strong> " + res[0].region;
        document.getElementById("flag").src = res[0].flags.png;
        
        let codes = res[0].borders || [];
        let borderList = document.getElementById("bc-list");
        borderList.innerHTML = "";
        
        for (let code of codes) {
            let borderResponse = await fetch("https://restcountries.com/v3.1/alpha/" + code);
            let borderRes = await borderResponse.json();
            let listItem = document.createElement("li");
            listItem.textContent = borderRes[0].name.common;
            borderList.appendChild(listItem);
            let pic = document.createElement("img");
            pic.src = borderRes[0].flags.png;
            borderList.appendChild(pic);
        }
    } catch (error) {
        alert(error.message);
    }
}
