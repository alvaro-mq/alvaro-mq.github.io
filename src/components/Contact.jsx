import React from 'react';
import { useTranslation } from 'react-i18next';
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
        <input
          className="p-2 bg-[#ccd6f6] text-light-text-primary"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] text-light-text-primary"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 text-light-text-primary"
          name="message"
          rows="10"
          placeholder="Message"></textarea>
        <button
          type="submit"
          className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          {t('contact.collaborate')}
        </button>
      </form>
    </div>
  );
};

export default Contact;
