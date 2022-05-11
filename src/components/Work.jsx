import React from 'react';
import { useTranslation } from 'react-i18next';
import Work1 from '../assets/project1.png';
import Work2 from '../assets/project2.png';
import Work3 from '../assets/project3.png';
import Work4 from '../assets/project4.png';
import Work5 from '../assets/project5.png';
import Work6 from '../assets/project6.png';
import Work7 from '../assets/project7.png';
import Work8 from '../assets/project8.png';
import config from '../config.json';

import ItemWork from './ItemWork';

const Work = () => {
  const { t } = useTranslation();
  return (
    <div
      name="work"
      className="w-full md:h-screen bg-light-bg-primary text-light-text-primary dark:bg-dark-bg-primary dark:text-dark-text-primary">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-generic">
            {t('menu.work')}
          </p>
          <p className="pt-6">{t('work.description')}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4 self-center">
          <ItemWork
            img={Work1}
            name={t('projects.modemManager.name')}
            type="Open source"
            description={t('projects.modemManager.description')}
            urlCode={config.URL_MM_CODE}
            urlDemo={config.URL_MM_DEMO}
          />
          <ItemWork
            img={Work7}
            name={t('projects.carbone.name')}
            type="Open source"
            description={t('projects.carbone.description')}
            urlCode={config.URL_CB_CODE}
            urlDemo={config.URL_CB_DEMO}
          />
          <ItemWork
            img={Work4}
            name={t('projects.alertaBot.name')}
            type="Open source"
            description={t('projects.alertaBot.description')}
            urlDemo={config.URL_AB_DEMO}
            urlCode={config.URL_AB_CODE}
          />
          <ItemWork
            img={Work5}
            name={t('projects.motiva.name')}
            type="Open source"
            description={t('projects.motiva.description')}
            urlDemo={config.URL_MT_DEMO}
            urlCode={config.URL_MT_CODE}
          />
          <ItemWork
            img={Work2}
            name={t('projects.ajayumpi.name')}
            type="Game"
            description={t('projects.ajayumpi.description')}
            urlDemo={config.URL_AJ_DEMO}
          />
          <ItemWork
            img={Work6}
            name={t('projects.mpgm.name')}
            type="Game"
            description={t('projects.mpgm.description')}
          />
          <ItemWork
            img={Work3}
            name={t('projects.ciudadania.name')}
            type="Open source"
            description={t('projects.ciudadania.description')}
            urlDemo={config.URL_CI_DEMO}
          />
          <ItemWork
            img={Work8}
            name={t('projects.mensajeria.name')}
            type="Open source"
            description={t('projects.mensajeria.description')}
            urlDemo={config.URL_MJ_DEMO}
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
