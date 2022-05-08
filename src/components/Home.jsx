import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';

const Home = () => {
  const { t } = useTranslation();
  return (
    <div name="home" className="w-full h-screen bg-light-bg-primar dark:bg-dark-bg-primary">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-generic text-2xl">{t('home.greetings')}</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-light-text-primary dark:text-dark-text-primary">
          Alvaro Mamani
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-light-text-accent dark:text-dark-text-accent">
          {t('home.iAm')}
        </h2>
        <p className="text-light-text-secondary dark:text-dark-text-secondary py-4 max-w-[700px]">
          {t('home.presentation')}
        </p>
        <div>
          <button className="group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 text-light-text-primary dark:text-dark-text-primary dark:border-light-bg-primary">
            <Link to="work" smooth={true} duration={500}>
              {t('home.viewWork')}
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
