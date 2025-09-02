import { useAppContext } from "../../Context/Context";
import { Loading } from "../Loading/Loading";
import "./PlaceWeather.scss";

export const PlaceWeather = () => {
  const { cityRes, city } = useAppContext();
  if (!city || !cityRes) return;

  const { description, icon } = cityRes.weather[0];
  const { temp, feels_like, temp_min, temp_max, pressure } = cityRes.main;
  
  const { speed, deg, gust } = cityRes.wind;
  const dt = new Date(cityRes.dt * 1000);
  const sunrise = new Date(cityRes.sys?.sunrise * 1000);
  const sunset = new Date(cityRes.sys?.sunset * 1000);

  return cityRes ? (
    <div className="inform-place">
      <div className="inform-place-actual">
        <h2>Загальна інформація</h2>
        <h2>Місце: {cityRes.name}</h2>
        <p>Час запиту: {dt.toLocaleString()}</p>
        <p>Видимість: {cityRes.visibility} км.</p>
        <p>Швидкість вітру: {speed}м/с</p>
        <p>Напрямок вітру: {deg}</p>
        <p>Світнок: {sunrise.toLocaleString()}</p>
        <p>Захід сонця: {sunset.toLocaleString()}</p>
      </div>
      <div className="inform-place-temperature">
        <h2>Температурна інформація</h2>
        <p>Температура: {temp}°C</p>
        <p className="inform-place-status">
          Статус: {description}{" "}
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="Loading..."
          />
        </p>
        <p>Відчуваєтсья як: {feels_like}°C</p>
        <p>Температурний мінімум: {temp_min}°C</p>
        <p>Температурний максимум: {temp_max}°C</p>
        <p>Тиск: {pressure}</p>
      </div>
    </div>
  ) : (
    <Loading />
  );
};
