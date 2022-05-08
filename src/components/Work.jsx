import React from 'react';
import { useTranslation } from 'react-i18next';
import WorkImg from '../assets/workImg.jpeg';

const Work = () => {
  const { t } = useTranslation();
  return (
    <div
      name="work"
      className="w-full md:h-screen bg-light-bg-primary text-light-text-primary dark:bg-dark-bg-primary dark:text-dark-text-primary">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-generic">
            {t('menu.work')}
          </p>
          <p className="py-6">{t('work.description')}</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-light-bg-secondary dark:shadow-dark-bg-secondary group container rounded-md flex justify-center items-center mx-auto content-div w-[250px]">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    {t('work.demo')}
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    {t('work.code')}
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-light-bg-secondary dark:shadow-dark-bg-secondary group container rounded-md flex justify-center items-center mx-auto content-div w-[250px]">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    {t('work.demo')}
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    {t('work.code')}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
