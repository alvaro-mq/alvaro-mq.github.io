import React, { useState } from 'react';
import { FaBars, FaTimes, FaAngleUp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import SelectLanguage from './SelectLanguage';
import DarkModeSwitch from './DarkModeSwitch';
import SocialMediaMobile from './SocialMediaMobile';
import SocialMedia from './SocialMedia';
import SocialMediaMedium from './SocialMediaMedium';
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
        <li className="hover:border-b-2 hover:border-generic hover:animate-bounce">
          <Link to="home" smooth={true} duration={500}>
            {t('menu.home')}
          </Link>
        </li>
        <li className="hover:border-b-2 hover:border-generic hover:animate-bounce">
          <Link to="about" smooth={true} duration={500}>
            {t('menu.about')}
          </Link>
        </li>
        <li className="hover:border-b-2 hover:border-generic hover:animate-bounce">
          <Link to="skills" smooth={true} duration={500}>
            {t('menu.skills')}
          </Link>
        </li>
        <li className="hover:border-b-2 hover:border-generic hover:animate-bounce">
          <Link to="work" smooth={true} duration={500}>
            {t('menu.work')}
          </Link>
        </li>
        <li className="hover:border-b-2 hover:border-generic hover:animate-bounce">
          <Link to="contact" smooth={true} duration={500}>
            {t('menu.contact')}
          </Link>
        </li>
        <li className="px-1">
          <SelectLanguage />
        </li>
        <li className="px-1 mt-0">
          <DarkModeSwitch />
        </li>
      </ul>

      {/* Hamburger */}
      <div className="md:hidden z-10">
        {!nav ? (
          <div className="flex">
            <SelectLanguage />
            <DarkModeSwitch />
            <FaBars onClick={handleClick} className="ml-3 mt-2" />
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
        {/* Social icons */}
        <li>
          <SocialMediaMobile />
        </li>
      </ul>

      {/* Social icons */}
      <SocialMedia />
      <SocialMediaMedium />

      {/* Return button */}
      <div className="fixed top-[92%] left-[90%]">
        <button className="animate-bounce">
          <Link to="home" smooth={true} duration={500}>
            <FaAngleUp size={40} />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
