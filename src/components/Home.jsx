import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import dibujo from '../assets/avatar.png';

const Home = () => {
  const { t } = useTranslation();
  return (
    <div name="home" className="w-full h-screen bg-light-bg-primar dark:bg-dark-bg-primary">
      {/* Container */}
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="grid sm:grid-cols-3 gap-8 px-4">
          <div className="sm:col-span-2 max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className="text-generic text-2xl">{t('home.greetings')}</p>
            <h1 className="text-7xl font-bold text-light-text-primary dark:text-dark-text-primary">
              Alvaro Mamani
            </h1>
            <h2 className="text-4xl font-bold text-light-text-accent dark:text-dark-text-accent">
              {t('home.iAm')}
            </h2>
            <p className="text-light-text-secondary dark:text-dark-text-secondary py-4 max-w-[700px]">
              {t('home.presentation')}
            </p>
          </div>
          <div className="grid place-items-center sm:place-items-start">
            <img src={dibujo} alt="alvaro" className="w-[180px] sm:w-[400px]" />
          </div>
        </div>
        <Link to="work" smooth={true} duration={500}>
          <button className="group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 text-light-text-primary dark:text-dark-text-primary dark:border-light-bg-primary rounded-lg">
            {t('home.viewWork')}
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
