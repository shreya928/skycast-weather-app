import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';

import "./InfoBox.css";

export default function InfoBox({ info }) {

    const SUNNY_URL = "https://images.unsplash.com/photo-1464660439080-b79116909ce7?q=80&w=1202&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const CLOUD_URL = "https://images.unsplash.com/photo-1594156596782-656c93e4d504?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    // Select image based on weather
    let imageURL =
            info.weather.includes("rain")
                ? RAIN_URL
                : info.weather.includes("cloud")
                    ? CLOUD_URL
                    : info.temp < 10
                        ? COLD_URL
                        : SUNNY_URL;

    // Select weather icon
    let weatherIcon =
        info.humidity > 80
            ? <ThunderstormIcon />
            : info.temp > 20
                ? <WbSunnyIcon />
                : <AcUnitIcon />;

    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card
                    sx={{
                        maxWidth: 345,
                        backgroundColor: info.temp > 20 ? "#ffe0b2" : "#e3f2fd"
                    }}
                >
                    <CardMedia
                        sx={{ height: 140 }}
                        image={imageURL}
                        title="weather image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            {info.city} {weatherIcon}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                            <p>Temperature: {info.temp}°C</p>
                            <p>Humidity: {info.humidity}</p>
                            <p>Max Temp: {info.tempMax}°C</p>
                            <p>Min Temp: {info.tempMin}°C</p>
                            <p>
                                The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}°C
                            </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}