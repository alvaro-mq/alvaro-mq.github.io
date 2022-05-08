import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import SelectLanguage from './SelectLanguage';
import DarkModeSwitch from './DarkModeSwitch';

const NavBar = () => {
  const { t } = useTranslation();
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar">
      <div>
        <div className="w-[80px] bg-logo-light dark:bg-logo-dark h-[80px] content-div"></div>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            {t('menu.home')}
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            {t('menu.about')}
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            {t('menu.skills')}
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            {t('menu.work')}
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            {t('menu.contact')}
          </Link>
        </li>
        <li>
          <SelectLanguage />
        </li>
        <li className="px-1">
          <DarkModeSwitch />
        </li>
      </ul>

      {/* Hamburger */}
      <div className="md:hidden z-10">
        {!nav ? (
          <div className="flex">
            <SelectLanguage className="m-4" />
            <FaBars onClick={handleClick} />
          </div>
        ) : (
          <FaTimes onClick={handleClick} />
        )}
      </div>

      {/* Mobile menu*/}
      <ul className={nav ? 'navbar_mobile' : 'hidden'}>
        <li className="navbar_mobile_li">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            {t('menu.home')}
          </Link>
        </li>
        <li className="navbar_mobile_li">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            {t('menu.about')}
          </Link>
        </li>
        <li className="navbar_mobile_li">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            {t('menu.skills')}
          </Link>
        </li>
        <li className="navbar_mobile_li">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            {t('menu.work')}
          </Link>
        </li>
        <li className="navbar_mobile_li">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            {t('menu.contact')}
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden"></div>
    </div>
  );
};

export default NavBar;
