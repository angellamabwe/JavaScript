async function getWeatherAW(woeid){
    try {
    const data = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`);
    const result = await data.json();
    //console.log(result);
    const tomorrow = result.consolidated_weather[1];
    console.log(`Temperatures in ${result.title} are ranging from 
        ${tomorrow.min_temp} and ${tomorrow.max_temp}`);
    } catch(error){
        alert(error);

    }
}
getWeatherAW(2487956);
getWeatherAW(44418); 