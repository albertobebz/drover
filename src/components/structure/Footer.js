import React from 'react';
import styled from 'styled-components';

// Components Dependency
import SocialMediaIcon from 'SocialMediaIcon';
import FooterDisclaimer from 'FooterDisclaimer';

// Component Style
const FooterSection = styled.footer`
  background-color: #3A3751;
  padding: 50px 0;

  .row > div {
    margin-bottom: 20px;

    &:not(:last-of-type) {

      @media (max-width: 575px){
        border-bottom: 1px solid #979797;
      }
      @media (min-width: 576px){
        border-right: 1px solid #979797;
      }
    }
  }
`;

const ImportantLinks = styled.ul`

  a {
    color: #fff;
  }
`;

const Footer = (props) => {
  return (
    <FooterSection class="text-white">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
            <p class="footer-title">Address</p>
            <p class="white-font">Drover Club House 422 Kingsland Road London E8 4AA</p>
          </div>
          <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
            <p class="footer-title">Telephone</p>
            <p class="white-font">020 3808 7636</p>
          </div>
          <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
            <p class="footer-title">Important Links</p>
            <ImportantLinks>
              <li><a class="white-font" href="#">About</a></li>
              <li><a class="white-font" href="#">FAQs</a></li>
              <li><a class="white-font" href="#">Careers</a></li>
              <li><a class="white-font" href="#">Terms &amp; Conditions</a></li>
              <li><a class="white-font" href="#">Privacy Policy</a></li>
              <li><a class="white-font" href="#">PCO Car Hire</a></li>
              <li><a class="white-font" href="#">Uber Car Rental</a></li>
              <li><a class="white-font" href="#">Driving in Manchester?</a></li>
            </ImportantLinks>
          </div>
          <SocialMediaIcon/>
        </div>
        <FooterDisclaimer/>
      </div>
    </FooterSection>
  )
}

export default Footer;
