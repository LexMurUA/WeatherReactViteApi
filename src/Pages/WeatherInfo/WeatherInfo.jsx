import { Loading } from "../../components/Loading/Loading";
import { MapWindow } from "../../components/MapWindow/MapWindow";
import { PlaceWeather } from "../../components/PlaceWeather/PlaceWeather";
import { useAppContext } from "../../Context/Context";
import search from "../../images/search.svg";
import "./WeatherInfo.scss";
export const WeatherInfo = () => {
  const { setPosition } = useAppContext();
  const {
    key,
    apiKey,
    cityNameRef,
    searchCity,
    cityRes,
    city,
    position,
    searchCityEnter,
    cityError,
    setCityError,
  } = useAppContext();

  return (
    <>
      <div className="search-weather">
        <h1>Доброго дня!</h1>
        <div className="search-weather-in">
          <label htmlFor="cityName">Введіть ваше місто:</label>
          {cityError ? (
            <input
              className="error-input"
              onKeyDown={searchCityEnter}
              ref={cityNameRef}
              id="cityName"
              type="text"
              placeholder="Такого міста не має."
            />
          ) : (
            <input
              onKeyDown={searchCityEnter}
              ref={cityNameRef}
              id="cityName"
              type="text"
            />
          )}

          <img src={search} alt="Пошук" onClick={searchCity} />
        </div>
      </div>
      {/* {cityRes === undefined && (
        <p style={{ color: "red" }}>Місто не знайдено</p>
      )} */}
      {city === null ? (
        <>
          <p>Пошук вашого місцезнаходження:</p>
          <Loading />
        </>
      ) : (
        <PlaceWeather />
      )}
      {position != null && <MapWindow />}
    </>
  );
};
