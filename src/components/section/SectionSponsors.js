import React from 'react';
import styled from 'styled-components';

// Component Dependent
import SponsorCard from 'SponsorCard';

// Component Style
const SponsorsWrapper = styled.div`
  background-color: #F7F7F7;
  padding: 25px 0;
`;

const SectionSponsors = (props) => {
  return (
    <SponsorsWrapper>
      <div class="container text-center">
        <div class="row">
          <SponsorCard
            src={"/assets/images/uber_logo.png"}
            alt="Uber logo"
            text="We are an Uber preferred Partner"
          />
          <SponsorCard
            src={"/assets/images/bp-castrol.png"}
            alt="Castrol logo"
            text="We are backed by world class investors"
          />
          <SponsorCard
            src={"/assets/images/rac_logo.png"}
            alt="Rac logo"
            text="Comprehensive insurance included in every booking"
          />
        </div>
      </div>
    </SponsorsWrapper>
  );
}

export default SectionSponsors;
