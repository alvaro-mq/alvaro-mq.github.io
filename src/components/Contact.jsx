import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiSend } from 'react-icons/fi';
import InputForm from './form/InputForm';
import TextAreaForm from './form/TextAreaForm';
import config from '../config.json';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div
      name="contact"
      className="w-full h-screen flex justify-center items-center p-4 bg-light-bg-primary text-light-text-primary dark:bg-dark-bg-primary dark:text-dark-text-primary">
      <form
        method="POST"
        action={config.URL_CONTACT_FORM}
        className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-generic">{t('menu.contact')}</p>
          <p className="py-6">{t('contact.description')}</p>
        </div>
        <InputForm
          name="name"
          label={t('form.label.name')}
          type="text"
          placeholder={t('form.placeholder.name')}
        />
        <InputForm
          name="email"
          label={t('form.label.email')}
          type="email"
          placeholder={t('form.placeholder.email')}
        />
        <TextAreaForm
          name="message"
          label={t('form.label.message')}
          placeholder={t('form.placeholder.message')}
        />
        <button
          type="submit"
          className="group border-2 px-4 py-3 my-8 mx-auto flex items-center rounded-lg hover:border-generic hover:text-generic">
          {t('contact.collaborate')}
          <span className="ml-2 group-hover:-rotate-45 duration-300">
            <FiSend />
          </span>
        </button>
      </form>
    </div>
  );
};

export default Contact;
