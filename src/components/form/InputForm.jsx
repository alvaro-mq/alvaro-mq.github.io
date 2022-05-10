import React from 'react';
import PropTypes from 'prop-types';

const InputForm = ({ name, label, type, placeholder }) => {
  return (
    <div className="mb-6">
      <label
        className="text-left ml-2 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        htmlFor={name}>
        {label}:
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-light-text-primary"
        type={type}
        placeholder={placeholder}
        name={name}
        required
        maxLength="50"
      />
    </div>
  );
};

InputForm.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default InputForm;
