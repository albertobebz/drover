import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Component Style
const Heading = styled.h2`
  margin-bottom: 20px;
  font-size: 34px;
  line-height: 1.2;
`;

const SectionTitle = ({sectionHeading}) => <Heading class="text-center">{sectionHeading}</Heading>

SectionTitle.PropTypes = {
  sectionHeading: PropTypes.string.isRequired
}

export default SectionTitle;
