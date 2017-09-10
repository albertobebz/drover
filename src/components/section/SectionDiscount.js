import React from 'react';
import styled from 'styled-components';

const DiscountHero = styled.div`
  background: url('assets/images/bp-hero.jpg') center center no-repeat;
  background-size: cover;
  margin-bottom: 50px;
  padding: 60px 0;
`;

const List = styled.ul`

  i {
    color: #5dcb7f;
    font-size: 40px;
    margin-right: 10px;
  }
`;

const SectionDiscount = (props) => {
  return (
    <DiscountHero>
      <section class="hero bp-card p-top-lg p-bottom-lg">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-8 text-white">
              <h2>Exclusive discounts at thousands of petrol stations across the UK</h2>
              <List>
                <li class="d-flex align-items-center"><i class="fa fa-check" aria-hidden="true"></i>Get a <b>FREE BP Fuel Card</b> as part of your rental</li>
                <li class="d-flex align-items-center"><i class="fa fa-check" aria-hidden="true"></i><b>5 pence discount</b> to pump prices on both diesel and petrol</li>
                <li class="d-flex align-items-center"><i class="fa fa-check" aria-hidden="true"></i>Over thousands of sites across the UK including all BP stations</li>
              </List>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
              <img class="img-fluid center-block" src={"assets/images/bp-card.png"} alt="Discount Card" />
            </div>
          </div>
        </div>
      </section>
    </DiscountHero>
  );
}

export default SectionDiscount;
