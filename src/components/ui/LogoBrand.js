import React, { Component } from 'react';
import styled from 'styled-components';

// Component Style
const Logo = styled.a`
  img {
    height: 38px;
    width: auto;

    @media (min-width: 992px) {
      margin-right: 20px;
    }
  }
`;

const LogoBrand = () => {
  return (
    <Logo class="navbar-brand" href="#">
      <img src={"/assets/images/drover_logo.png"} alt="Drover Logo"/>
    </Logo>
  )
}

export default LogoBrand;
