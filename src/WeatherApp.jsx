import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const[weatherInfo, setWeatherInfo] = useState({
        city:"Delhi",
        feelsLike: 32.56,
        humidity: 9,
        temp: 35.29,
        tempMax: 35.29,
        tempMin: 35.29,
        weather: "overcast clouds"
    });

    let updateInfo = (result) =>{
        setWeatherInfo(result);
    }

    return(
        <div style={{textAlign : "center"}}>
        <h2>Weather App</h2>
        <SearchBox updateInfo={updateInfo}/>
        <br></br>
        <br></br>
        <InfoBox info={weatherInfo}/>
        </div>
    );
}