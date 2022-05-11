import React, { useState } from 'react';
import { FaBars, FaTimes, FaAngleUp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Link, animateScroll } from 'react-scroll';
import SelectLanguage from './SelectLanguage';
import DarkModeSwitch from './DarkModeSwitch';
import SocialMediaMobile from './socialMedia/SocialMediaMobile';
import SocialMedia from './socialMedia/SocialMedia';
import SocialMediaMedium from './socialMedia/SocialMediaMedium';

const NavBar = () => {
  const { t } = useTranslation();
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <div className="navbar">
      <div>
        <div className="w-[80px] bg-logo-light dark:bg-logo-dark h-[80px] content-div"></div>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li className="hover:text-generic hover:text-xl">
          <Link to="home" smooth={true} duration={500} activeClass="active" spy={true}>
            {t('menu.home')}
          </Link>
        </li>
        <li className="hover:text-generic hover:text-xl">
          <Link to="about" smooth={true} duration={500} activeClass="active" spy={true}>
            {t('menu.about')}
          </Link>
        </li>
        <li className="hover:text-generic hover:text-xl">
          <Link to="skills" smooth={true} duration={500} activeClass="active" spy={true}>
            {t('menu.skills')}
          </Link>
        </li>
        <li className="hover:text-generic hover:text-xl">
          <Link to="work" smooth={true} duration={500} activeClass="active" spy={true}>
            {t('menu.work')}
          </Link>
        </li>
        <li className="hover:text-generic hover:text-xl">
          <Link to="contact" smooth={true} duration={500} activeClass="active" spy={true}>
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
      <div className="md:hidden">
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
      {!nav ? (
        <div className="fixed top-[92%] lg:left-[90%] left-[85%]">
          <button className="animate-bounce" onClick={scrollToTop}>
            <FaAngleUp size={40} />
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default NavBar;
