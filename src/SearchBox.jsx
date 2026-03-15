import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    const [error, setError] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const api_key = import.meta.env.VITE_API_KEY;

    let getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${api_key}&units=metric`);
        let jsonResponse = await response.json();

        if (jsonResponse.cod === "404") {
            setError("City not found ❌");
            return null;
        }

        setError(""); // clear error if city valid

        let result = {
            city: jsonResponse.name,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description
        };

        return result;
    };

    let [city, setCity] = useState("");

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        evt.preventDefault();

        let newInfo = await getWeatherInfo();

        if (newInfo) {
            updateInfo(newInfo);
            setCity("");
        }
    };
    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                {error && <p style={{ color: "red" }}>{error}</p>}
                <br></br>
                <br></br>
                <Button variant="contained" type='submit'>Search</Button>
            </form>
        </div>
    )
}