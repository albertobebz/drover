import React from 'react';
import styled from 'styled-components';

// Component Dependent
import StepCard from 'StepCard';
import SectionTitle from 'SectionTitle';

// Component Styles
const HowWorks = styled.section`
  padding: 50px 0;
`;

const SectionHowWorks = (props) => {
  return (
    <HowWorks>
      <div class="container">
        <SectionTitle sectionHeading="How Drover works for drivers"/>
        <div class="row text-center">
          <StepCard
            src={"/assets/images/d-4-d-step-1.png"}
            alt="Step One"
            stepDescr="Step 1: Call us now and reserve your hire car"
          />
          <StepCard
            src={"/assets/images/d-4-d-step-2.png"}
            alt="Step One"
            stepDescr="Step 2: Pick up an Uber-ready PCO car and start making money."
          />
          <StepCard
            src={"/assets/images/d-4-d-step-3.png"}
            alt="Step One"
            stepDescr="Step 3: Return the car when you no longer need it"
          />
        </div>
      </div>
    </HowWorks>
  );
}

export default SectionHowWorks;
