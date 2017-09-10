import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';

// Components Dependency
import Nav from 'Nav';
import SectionRent from 'SectionRent';
import SectionSponsors from 'SectionSponsors';
import SectionDeals from 'SectionDeals';
import SectionHowWorks from 'SectionHowWorks';
import SectionDiscount from 'SectionDiscount';
import SectionReviews from 'SectionReviews';
import Footer from 'Footer';

// Global App Style - thanks to injectGlobal helper built in styled components
injectGlobal`

  @font-face {
    font-family: 'avenir-next';
    src: url('assets/fonts/avenir-next.eot') format('eot'),
         url('assets/fonts/avenir-next.woff') format('woff'),
         url('assets/fonts/avenir-next.woff') format('woff2'),
         url('assets/fonts/avenir-next.ttf') format('truetype');
  }

  body,
  html {
    font-family: 'avenir-next', Arial, sans-serif;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
`;

class App extends Component {

  render() {
    return (
      <div>
        <Nav/>
        <SectionRent/>
        <SectionSponsors/>
        <SectionDeals/>
        <SectionHowWorks/>
        <SectionDiscount/>
        <SectionReviews/>
        <Footer/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('.drover-app'));
