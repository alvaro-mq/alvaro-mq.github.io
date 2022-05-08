import React from 'react';
import { useTranslation } from 'react-i18next';

const SelectLanguage = () => {
  const { i18n } = useTranslation();

  const changeLanguageHandler = (e) => {
    const language = e.target.value;
    i18n.changeLanguage(language);
  };

  return (
    <select
      onChange={changeLanguageHandler}
      className="bg-light-bg-primary dark:bg-dark-bg-primary text-light-text-primary dark:text-dark-text-primary font-bold mx-3 rounded focus:outline-none focus:shadow-outline">
      <option value="en">EN</option>
      <option value="es">ES</option>
    </select>
  );
};

export default SelectLanguage;
