import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./index.scss";
import { WeatherInfo } from "./Pages/WeatherInfo/WeatherInfo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter
      basename="WeatherReactViteApi"
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<WeatherInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
