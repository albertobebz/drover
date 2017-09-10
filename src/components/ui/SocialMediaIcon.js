import React from 'react';
import styled from 'styled-components';

// Component Style
const SharingEconomy = styled.img`
  width: 50%;

  @media (min-width: 576px) {
    width: 100%;
  }
`;

const SharingIcons = styled.ul`

  li {
    margin-right: 10px;
    font-size: 40px;
  }
`;

const SocialMediaIcon = () => {
  return (
    <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
      <p class="footer-title">Social Media</p>
      <SharingIcons class="d-flex">
        <li><a href="#"><i class="fa fa-linkedin-square text-white" title="Linkedin" alt="Linkedin"></i></a></li>
        <li><a href="#"><i class="fa fa-twitter text-white" title="Twitter" alt="Twitter"></i></a></li>
        <li><a href="#"><i class="fa fa-facebook text-white" title="Facebook" alt="Facebook"></i></a></li>
      </SharingIcons>
      <SharingEconomy alt="Sharing" src={'assets/images/sharing-economy-footer.png'}/>
    </div>
  );
}

export default SocialMediaIcon;
