import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Logo from '../assets/logoN.png';

const NavBar = () => {
  const { t } = useTranslation();
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar">
      <div>
        <img src={Logo} alt="Logo image" style={{ width: '80px' }} />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>{t('menu.home')}</li>
        <li>{t('menu.about')}</li>
        <li>{t('menu.skills')}</li>
        <li>{t('menu.work')}</li>
        <li>{t('menu.contact')}</li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu*/}
      <ul className={nav ? 'navbar_mobile' : 'hidden'}>
        <li className="navbar_mobile_li">{t('menu.home')}</li>
        <li className="navbar_mobile_li">{t('menu.about')}</li>
        <li className="navbar_mobile_li">{t('menu.skills')}</li>
        <li className="navbar_mobile_li">{t('menu.work')}</li>
        <li className="navbar_mobile_li">{t('menu.contact')}</li>
      </ul>

      {/* Social icons */}
      <div className="hidden"></div>
    </div>
  );
};

export default NavBar;
