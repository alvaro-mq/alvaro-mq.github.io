import React from 'react';
import PropTypes from 'prop-types';

const ItemSkill = ({ src, alt, description }) => {
  return (
    <div className="hover:scale-110 duration-500">
      <img src={src} alt={alt} className="w-20 mx-auto" />
      <p>{description}</p>
    </div>
  );
};

ItemSkill.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ItemSkill;
