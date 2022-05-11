import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const ItemWork = ({ img, name, description, type, urlDemo, urlCode }) => {
  const { t } = useTranslation();

  return (
    <div className="group container max-w-sm w-[250px] lg:w-[220px] md:w-[220px] shadow-xl rounded-lg dark:shadow-dark-text-primary dark:shadow-sm border-t-4 border-generic mx-5 my-1 lg:my-2 md:my-2  flex justify-center items-center">
      <div className="group-hover:opacity-10">
        <div className="">
          <img
            className="w-[250px] lg:w-[220px] md:w-[220px] lg:h-[120px] md:h-[120px] h-[80px]"
            src={img}
          />
          <div className="absolute md:-mt-28 lg:-mt-28 items-end mx-3 -mt-20">
            <span className="items-center justify-center px-2 py-1 text-xs leading-none rounded-full bg-generic">
              {type}
            </span>
          </div>
        </div>
        <div className="py-1 px-2">
          <div className="font-semibold text-sm mb-1 text-generic"> {name}</div>
          <p className="text-gray-700 text-xs">{description}</p>
        </div>
      </div>
      <div className="absolute opacity-0 group-hover:opacity-100">
        <span className="text-sm font-bold tracking-wider leading-relaxed">{name}</span>
        <div>
          {urlCode ? (
            <a
              className="inline-flex items-center h-8 px-4 m-2 text-sm rounded-lg border-2
                hover:text-generic
                hover:border-generic"
              href={urlCode}
              target="_blank"
              rel="noreferrer">
              {t('work.code')}
            </a>
          ) : (
            ''
          )}
          <br />
          {urlDemo ? (
            <a
              className="inline-flex items-center h-8 px-4 m-2 text-sm rounded-lg border-2 hover:text-generic
            hover:border-generic"
              href={urlDemo}
              target="_blank"
              rel="noreferrer">
              {t('work.demo')}
            </a>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

ItemWork.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  urlCode: PropTypes.string,
  urlDemo: PropTypes.string,
};

export default ItemWork;
