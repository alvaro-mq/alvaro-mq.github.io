import React, { useState } from 'react';
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri';

const DarkModeSwitch = () => {
  const [isOn, setIsOn] = useState(() => {
    if (localStorage.getItem('theme') === 'light') {
      return true;
    }
    return false;
  });

  const toogleSwitch = () => {
    setIsOn(!isOn);
  };

  if (isOn) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }

  if (
    localStorage.theme === 'light' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

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
