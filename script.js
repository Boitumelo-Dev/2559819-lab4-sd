
async function getData(){
    var name = document.getElementById("country-name").value
    
    fetch ("https://restcountries.com/v3.1/name/" + name)
    .then(body => body.text())
    .then(name => {
        var res = JSON.parse(name);
        document.getElementById("capital").innerHTML = "Capital: " +res[0].capital[0]

        document.getElementById("population").innerHTML = "Population: " + res[0].population
        
        document.getElementById("region").innerHTML = "Population: " + res[0].region
        
        document.getElementById("flag-con").innerHTML = "Flag:";
        
        const image = document.querySelector("img")
        image.src = res[0].flags.png

    });
}