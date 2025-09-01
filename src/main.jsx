import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WeatherInfo } from "./Pages/WeatherInfo/WeatherInfo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter
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
