import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: 8px;
  color: ${(props) => props.theme.secondaryColor};
  background-color: ${(props) => props.theme.primaryColor};
  padding: ${(props) => props.theme['size-4']};
  font-size: ${(props) => props.theme.typeSizeBase};
  font-weight: bold;
  font-family: ${(props) => props.theme.fontFamily};
  border: none;
  box-sizing: border-box;

  &:hover {
    background-color: ${(props) => props.theme['primary-600']};
  }

  &:focus {
    background-color: ${(props) => props.theme['primary-600']};
    box-shadow: ${(props) => props.theme.dropShadow};
    outline: none;
  }

  &:active{
    background-color: ${(props) => props.theme['primary-700']};
  }

  color: ${props => {
    console.log('them', props.theme)
    return '#fff'
  }};

`;

type ButtonProps = {
  label: string;
  disabled?: boolean;
  size?: 'large' | 'small';
  type?: 'primary' | 'secondary';
  iconName?: string;
}

export function Button({ label, disabled, size = 'large', type = 'primary', iconName, ...rest  }: ButtonProps) {
  console.log('rest', rest)
  return (
    <StyledButton disabled={disabled}>
      {label}
    </StyledButton>
  );
};


export default Button ;
