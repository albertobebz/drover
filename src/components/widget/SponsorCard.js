import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Component Style
const Logo = styled.img`
  height: 100px;
  width: auto;
`;

const SponsorCard = ({src,alt,text}) => {
  return (
    <div class="col-12 col-lg-4">
      <div>
        <Logo src={src} alt={alt} />
        <div class="card-block">
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

SponsorCard.propTypes = {
  text:  PropTypes.string.isRequired
}

export default SponsorCard;
