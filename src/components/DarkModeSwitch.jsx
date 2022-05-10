import React, { useEffect, useState } from 'react';
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri';

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return 'dark';
    }
  }
  return 'dark';
};

const DarkModeSwitch = () => {
  const [isOn, setIsOn] = useState(getInitialTheme);

  const toogleSwitch = () => {
    setIsOn(isOn === 'dark' ? 'light' : 'dark');
  };

  const rawSetTheme = (theme) => {
    const root = window.document.documentElement;
    const isDark = theme === 'dark';

    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(theme);

    localStorage.setItem('color-theme', theme);
  };

  useEffect(() => {
    rawSetTheme(isOn);
  }, [isOn]);

  return (
    <div
      onClick={toogleSwitch}
      className="flex-start flex-h-[50px] rounded-[50px] bg-zinc-100 p-[5px] shadow-inner hover:cursor-pointer dark:bg-zinc-700">
      {isOn ? (
        <RiSunFill className="h-6 w-6 text-yellow-300" />
      ) : (
        <RiMoonClearFill className="h-6 w-6 text-slate-200" />
      )}
    </div>
  );
};

export default DarkModeSwitch;
