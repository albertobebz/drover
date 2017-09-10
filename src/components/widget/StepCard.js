import React from 'react';
import PropTypes from 'prop-types';

const StepCard = ({src,alt,stepDescr}) => {
  return (
    <div class="col-xs-12 col-md-4">
      <img class="card-img-top img-fluid" src={src}  alt={alt}/>
      <h3>{stepDescr}</h3>
    </div>
  );
}

StepCard.propTypes = {
  stepDescr: PropTypes.string.isRequired
}

export default StepCard;
