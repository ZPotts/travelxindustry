let getWeather: Function;
let getWeatherFromDB: Function;
let getWeatherFromAPI: Function;
let addWeatherToDB: Function;

getWeather = (lat?:(number|null), lng?:(number|null)) => {
    // what to do if lat/lng are undefined
    //what to do if API call donesn't work
    return(`getWeather called - lat:${lat}, lng:${lng}`);

    
}



export default getWeather;