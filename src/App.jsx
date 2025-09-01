import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import { Header } from './Pages/Header/Header';
import { Aside } from './Pages/Aside/Aside';
import { Footer } from './Pages/Footer/Footer';
import { Main } from './Pages/Main/Main';
import { Outlet } from 'react-router-dom';
import { AppContextProvider } from './Context/Context';

function App() {

  return (
    <AppContextProvider>
      <Header />
      <Aside />
      <Main>
        <Outlet/>
      </Main>
      <Footer />
    </AppContextProvider>
    
  );
}

export default App;
