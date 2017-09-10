import React from 'react';
import styled from 'styled-components';

// Component Style
const Disclaimer = styled.div`
  color: #747094;
`;

const FooterDisclaimer = () => {
  return (
    <Disclaimer class="row text-center">
      <div class="col-xs-12 col-xs-offset-0 col-sm-12 col-sm-offset-0 col-md-12 col-md-offset-0">
        <p>Drover Limited is authorised and regulated by the Financial Conduct Authority for entering into regulated hire agreements under firm reference number 773030.  Drover Limited is also an Appointed Representative of Ambant Underwriting Services Limited (for general insurance intermediary business), a company authorised and regulated by the Financial Conduct Authority under firm reference number 597301 to carry on insurance mediation activities. Drover Limited is registered in England and Wales company number 09829742. Registered office at 422 Kingsland Road, London, E8 4AA.</p>
      </div>
    </Disclaimer>
  );
}

export default FooterDisclaimer;
