import React from 'react';
import HTML from '../assets/html.png';
import Node from '../assets/node.png';
import JavaScript from '../assets/javascript.png';
import ReactJs from '../assets/react.png';
import Mongo from '../assets/mongo.png';
import Postgres from '../assets/postgres.png';
import Nestjs from '../assets/nestjs.png';
import Github from '../assets/github.png';
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
          <div className="hover:scale-110 duration-500">
            <img src={HTML} alt="HTML icon" className="w-20 mx-auto" />
            <p>HTML</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img src={JavaScript} alt="Nodejs icon" className="w-20 mx-auto" />
            <p>JavaScript</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img src={Node} alt="HTML icon" className="w-20 mx-auto" />
            <p>NodeJs</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img src={ReactJs} alt="HTML icon" className="w-20 mx-auto" />
            <p>ReactJs</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img src={Nestjs} alt="HTML icon" className="w-20 mx-auto" />
            <p>Nestjs</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img src={Mongo} alt="HTML icon" className="w-20 mx-auto" />
            <p>Mongo</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img src={Postgres} alt="HTML icon" className="w-20 mx-auto" />
            <p>Postgres</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img src={Github} alt="HTML icon" className="w-20 mx-auto" />
            <p>Git/Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
