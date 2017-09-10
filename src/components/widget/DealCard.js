import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Component Style
const DealCarWrapper = styled.div`
  border: none;

  .small {
    border-bottom: 1px solid #F7F7F7;
  }
`;

const DealCard = ({src,alt,model,price,extra,details,nSeats}) => {
  return (
    <DealCarWrapper class="card col-xs-12">
      <img class="card-img-top img-fluid" src={src}  alt={alt}/>
      <div class="card-block">
        <h4 class="card-title">{model}</h4>
        <h5>{price}</h5>
        <p class="small">{extra}</p>
        <p class="card-text">{details}</p>
        <small>{nSeats}</small>
      </div>
    </DealCarWrapper>
  );
}

DealCard.propTypes = {
  model:   PropTypes.string.isRequired,
  price:   PropTypes.string.isRequired,
  extra:   PropTypes.string,
  details: PropTypes.string,
  nSeats:  PropTypes.string
}

export default DealCard;
