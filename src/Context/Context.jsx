import axios from "axios";
import { createContext, useContext, useEffect, useRef, useState } from "react";

const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [cityError, setCityError] = useState(false);
  const [listSearches, setlistSearches] = useState(() => {
    const list = localStorage.getItem("searches");
    return list ? JSON.parse(list) : [];
  });
  const [position, setPosition] = useState(null);
  const key = "39d64c97b795988c322ff6228a8dc8a7";
  const [city, setCity] = useState(null);
  const [cityRes, setCityRes] = useState(null);
  const cityNameRef = useRef();
  const apiKey = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}&lang=ua`;

  useEffect(() => {
    localStorage.setItem("searches", JSON.stringify(listSearches));
  }, [listSearches]);

  useEffect(() => {
    const fetchCity = async () => {
      try {
        const response = await axios.get(apiKey);
        setCityRes(response.data);
        setCityError(false);
        const { coord } = response.data;
        if (coord && coord.lat && coord.lon) {
          setPosition([coord.lat, coord.lon]);
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setCityError(true)
          // setCityRes(undefined);
        } else {
          console.error("Помилка запиту:", error.message);
        }
      }
    };
    if (city) {
      fetchCity();
    }
  }, [city]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition([pos.coords.latitude, pos.coords.longitude]);
          fetchLonLat(pos.coords.latitude, pos.coords.longitude);
        },
        (err) => {
          console.error("Геолокация недоступна:", err);
        }
      );
    }
  }, []);

  useEffect(() => {});

  const searchCity = () => {
    const isCity = cityNameRef.current.value.trim();
    if (isCity.length === 0) return;
    setCity(isCity);
    cityNameRef.current.value = "";
    if (listSearches.includes(isCity)) return;
    listSearches.length > 25 && setlistSearches([]);
    setlistSearches([...listSearches, isCity]);
  };
  const searchCityEnter = (e) => {
    if (e.key != "Enter") return;
    const isCity = cityNameRef.current.value.trim();
    if (isCity.length === 0) return;
    setCity(isCity);
    cityNameRef.current.value = "";
    if (listSearches.includes(isCity)) return;
    listSearches.length > 25 && setlistSearches([]);
    setlistSearches([...listSearches, isCity]);
  };

  async function fetchLonLat(lat, lon) {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
      );
      console.log(response);

      // const realPosition = response.data
      setCity(response.data.name);
    } catch (error) {
      console.log(error.message);
    }
  }
  const footerList = ["Контакти", "Зоряна карта", "Поради", "Мапа"];
  return (
    <AppContext.Provider
      value={{
        key,
        city,
        cityNameRef,
        searchCity,
        cityRes,
        position,
        setPosition,
        listSearches,
        setCity,
        searchCityEnter,
        footerList,
        setCityRes,
        cityError,
        setCityError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("context not within");
  }
  return context;
};
