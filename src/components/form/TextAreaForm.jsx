import React from 'react';
import PropTypes from 'prop-types';

const TextAreaForm = ({ name, label, placeholder }) => {
  return (
    <div>
      <label
        className="text-left ml-2 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        htmlFor={name}>
        {label}
      </label>
      <textarea
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-light-text-primary"
        name={name}
        rows="10"
        placeholder={placeholder}
        required
        maxLength="500"
      />
    </div>
  );
};

TextAreaForm.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default TextAreaForm;
