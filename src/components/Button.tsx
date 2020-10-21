import React from 'react';
import styled from 'styled-components';
import { borderColor, borderRadius, borderWidth } from '../css-variables';

const Button = styled.button`
  width: 100%;
  border-radius: ${borderRadius};
  border-width: ${borderWidth};
  border-color: ${borderColor};
`;

export default Button;
