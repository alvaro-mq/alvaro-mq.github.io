import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';

const Home = () => {
  const { t } = useTranslation();
  return (
    <div name="home" className="w-full h-screen bg-[#682F48]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#4DA2F7]">{t('home.greetings')}</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#FFF5FB]">Alvaro Mamani</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#EFEFDC]">{t('home.iAm')}</h2>
        <p className="text-[#EFEFDC] py-4 max-w-[700px]">{t('home.presentation')}</p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
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
