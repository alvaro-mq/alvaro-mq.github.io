import React from 'react';
import HTML from '../assets/html.png';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();
  return (
    <div
      name="skills"
      className="w-full h-screen bg-light-bg-primary text-light-text-primary dark:bg-dark-bg-primary dark:text-dark-text-primary">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl inline font-bold border-b-4 border-generic">{t('menu.skills')}</p>
          <p className="py-4">{t('skills.description')}</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-sm shadow-light-text-secondary hover:scale-110 duration-500">
            <img src={HTML} alt="HTML icon" className="w-20 mx-auto" />
            <p>HTML</p>
          </div>
          <div className="shadow-sm shadow-light-text-secondary hover:scale-110 duration-500">
            <img src={HTML} alt="HTML icon" className="w-20 mx-auto" />
            <p>HTML</p>
          </div>
          <div className="shadow-sm shadow-light-text-secondary hover:scale-110 duration-500">
            <img src={HTML} alt="HTML icon" className="w-20 mx-auto" />
            <p>HTML</p>
          </div>
          <div className="shadow-sm shadow-light-text-secondary hover:scale-110 duration-500">
            <img src={HTML} alt="HTML icon" className="w-20 mx-auto" />
            <p>HTML</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
