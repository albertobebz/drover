import React from 'react';
import LogoBrand from 'LogoBrand';
import styled from 'styled-components';

// Component Style
const NavWrapper = styled.div`
  border-bottom: 1px solid #d8d8d8;

  @media (min-width: 992px) {
    .navbar-nav a:not(:last-child) {
      border-right: 1px solid #d8d8d8;
    }
  }
`;

const Btn = styled.button`
	background: #199fff;
	color: #fff;

  @media (max-width: 991px) {
    margin: 15px 0;
  }

  i {
    margin-right: 10px;
  }
`;

const Nav = (props) => {
  return (
    <NavWrapper>
      <nav class="navbar navbar-toggleable-md navbar-light container">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <LogoBrand />
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <Btn class="btn btn-default center-block d-flex align-items-center">
            <i class="fa fa-phone" aria-hidden="true"></i>
            Call us to discuss: 0203 383 2838
          </Btn>
          <div class="navbar-nav ml-auto">
            <a class="nav-item nav-link active" href="#">About<span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="#">Login</a>
          </div>
        </div>
      </nav>
    </NavWrapper>
  );
};

export default Nav;
