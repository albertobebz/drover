import React from 'react';

// Components Dependent
import HireCar from 'HireCar';
import Form from 'Form';

// Component Styles
import styled from 'styled-components';

const Rent = styled.div`
  padding: 50px 20px;

  @media (min-width: 992px) {
    padding: 50px 0;
  }
`;

const SectionRent = (props) => {
  return (
    <Rent class="container">
      <div class="row d-flex justify-content-between">
        <HireCar/>
        <Form/>
      </div>
    </Rent>
  )
}

export default SectionRent;
