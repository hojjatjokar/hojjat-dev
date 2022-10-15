import React from 'react';
// import styled from 'styled-components';

type ButtonProps = {
  label: string;
}

export function Button({ label }: ButtonProps) {
  // return null
  return (
    <button>
      {label}
    </button>
  );
};


export default Button ;
