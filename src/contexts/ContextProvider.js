import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(null);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const setMode = (arg) => {
    setCurrentMode(arg);
    localStorage.setItem('themeMode', arg);
    setThemeSettings(false);
  };
  const setColor = (arg) => {
    setCurrentColor(arg);
    console.log(arg);
    localStorage.setItem('currentColor', arg);
    setThemeSettings(false);
  };

  const handleClicked = (click) => {
    setIsClicked({ ...initialState, [click]: true });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClicked,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
