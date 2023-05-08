const api_key = ""

async function getCityCoordinates(city_name){
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&appid=${api_key}`)
    const data = await response.json()
    return data[0]
}

async function getTemperature(latitude, longitude){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}&units=metric`)
    const data = await response.json()
    return data.main.temp
}

async function displayTemperature(){
    const city_name = document.getElementById("city").value
    try {
        const coordinates = await getCityCoordinates(city_name)
        const temperature = await getTemperature(
            coordinates.lat,
            coordinates.lon
        )
        const temp_display = document.getElementById("temperature")
        temp_display.textContent = temperature
    } catch (error) {
        console.log(error)
    }
}