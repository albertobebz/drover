import React from 'react';
import styled from 'styled-components';

// Component Dependent
import DealCard from 'DealCard';
import SectionTitle from 'SectionTitle';

// Component Style
const DealsWrapper = styled.section`
  padding-top: 50px;
`;

const SectionDeals = (props) => {
  return (
    <DealsWrapper>
      <SectionTitle sectionHeading="Latest deals"/>
      <div class="card-group">
        <DealCard
          src={"/assets/images/car_image2.png"}
          alt="Car deal"
          model="BMW seeries 2017"
          price="From 200£/week"
          extra="Including Compo Insurance"
          details="Diesel hybrid(68mpg)"
          nSeats="4 Seats"
        />
        <DealCard
          src={"/assets/images/car_image2.png"}
          alt="Car deal"
          model="Fiat 500"
          price="From 1000£/day"
          extra="Insurance"
          details="Electric"
          nSeats="1 Seat"
        />
        <DealCard
          src={"/assets/images/car_image2.png"}
          alt="Car deal"
          model="Porche"
          price="From 100£/week"
          extra="Including Compo Insurance"
          details="Automatic transmission"
          nSeats="2 Seats"
        />
        <DealCard
          src={"/assets/images/car_image2.png"}
          alt="Car deal"
          model="Ferrari Maranello"
          price="From 1£/month"
          extra="Including Nothing"
          details="Automatic tr"
          nSeats="2 Seats"
        />
      </div>
    </DealsWrapper>
  )
}

export default SectionDeals;
