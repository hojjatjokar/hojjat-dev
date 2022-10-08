import React from 'react';
import styled from 'styled-components';

const StyledText = styled.p`
  font-family: ''
`

type Props = {
  children: React.ReactNode;
}

const Text = ({children}: Props) => (
  <StyledText>
    {children}
  </StyledText>
);

export { Text }