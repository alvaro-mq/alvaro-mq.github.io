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
import ItemSkill from './ItemSkill';

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
          <ItemSkill src={HTML} alt="HTML icon" description="HTML" />
          <ItemSkill src={JavaScript} alt="Javascript icon" description="JavaScript" />
          <ItemSkill src={Node} alt="Nodejs icon" description="NodeJs" />
          <ItemSkill src={ReactJs} alt="ReactJs icon" description="ReactJs" />
          <ItemSkill src={Nestjs} alt="Nestjs icon" description="NestJs" />
          <ItemSkill src={Mongo} alt="Mongo icon" description="Mongo" />
          <ItemSkill src={Postgres} alt="Postgres icon" description="Postgres" />
          <ItemSkill src={Github} alt="Github icon" description="Git/Github" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
