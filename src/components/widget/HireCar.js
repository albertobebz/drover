import React from 'react';
import styled from 'styled-components';

// Component Style
const Hireblock = styled.div`

  h1 {
    margin-bottom: 20px;
    font-size: 50px;
    font-weight: 500;
    line-height: 1.2;
  }

  .stars {

    li {
      font-size: 18px;
      margin-bottom: 10px;
    }

    i {
      color: #FFD700;
      margin-right: 10px;
    }
  }
`;

const HireCar = (props) => {
  return (
    <Hireblock class="col-xs-12 col-md-6">
      <h1 class="">Rent a private hire vehicle in Manchester!</h1>
      <h5 class="medium">With Drover, you get:</h5>
      <ul class="stars">
        <li><i class="fa fa-star" aria-hidden="true"></i>Extensive range of Uber-ready cars to choose from</li>
        <li><i class="fa fa-star" aria-hidden="true"></i>Deposit from only £199</li>
        <li><i class="fa fa-star" aria-hidden="true"></i>Fully comp. insurance, servicing &amp; breakdown cover included</li>
        <li><i class="fa fa-star" aria-hidden="true"></i>The longer you book, the cheaper it is</li>
        <li><i class="fa fa-star" aria-hidden="true"></i>Get car docs instantly</li>
      </ul>
    </Hireblock>
  );
};

export default HireCar;
