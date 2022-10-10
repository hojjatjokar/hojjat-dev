import React from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ButtonProps {
  children: React.ReactNode
}

const StyledButton = styled.div`
  color: pink;
`;


export function Button({children}: ButtonProps) {
  return (
    <StyledButton>
      
      <h1>Welcome to Button!</h1>
      {children}
      
    </StyledButton>
  );
};


export default Button;
