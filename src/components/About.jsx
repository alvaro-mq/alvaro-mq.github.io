import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <div
      name="about"
      className="w-full h-screen bg-light-bg-primary text-light-text-primary dark:bg-dark-bg-primary dark:text-dark-text-primary">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-generic">{t('menu.about')}</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>{t('about.presentation')}</p>
          </div>
          <div>
            <p className="my-4">{t('about.description1')}</p>
            <p className="my-4">{t('about.description2')}</p>
            <p className="my-4">{t('about.description3')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
