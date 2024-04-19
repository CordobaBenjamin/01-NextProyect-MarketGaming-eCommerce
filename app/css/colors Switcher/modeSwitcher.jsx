'use client'
import React, { createContext, useState, useContext } from "react";

// Crear el contexto del modo
const ModeContext = createContext();

// Hook personalizado para usar el contexto del modo
const UseMode = () => {
  return useContext(ModeContext);
};

const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const changeMode = (newMode) => {
    setMode(newMode);
  };

  return (
    <ModeContext.Provider value={{ mode, changeMode }}>
      {children}
    </ModeContext.Provider>
  );
};

const ModeSwitcher = () => {
  const { mode, changeMode } = UseMode();

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    changeMode(newMode);
  };

  return (
    <button onClick={toggleMode} className={`font-bold text-base lg:text-xl`}>
      {mode === "light" ? "Dark" : "Light"}
    </button>
  );
};

export { ModeSwitcher, UseMode as useMode, ModeProvider };
