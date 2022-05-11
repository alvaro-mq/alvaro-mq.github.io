import React from 'react';
import PropTypes from 'prop-types';

const ItemWork = ({ img, description }) => {
  return (
    <div className="max-w-sm w-[250px] shadow-xl rounded-lg dark:shadow-dark-text-primary dark:shadow-sm border-t-4 border-generic mx-5 my-2">
      <img className="w-[250px] h-[150px]" src={img} />
      <div className="py-1 px-2">
        <div className="font-semibold text-lg mb-1 text-generic"> {description}</div>
        <p className="text-gray-700 text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, sint. Ut, aliquam ad. Rerum.
        </p>
      </div>
    </div>
  );
};

ItemWork.propTypes = {
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ItemWork;
