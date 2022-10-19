import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button }  from './button';


const Story: ComponentMeta<typeof Button> = {
  component: Button,
  title: 'Button', 
};
export default Story;

const theme = {
  primaryColor: '#003060',
  secondaryColor: '#fff',
  'primary-600': '#002A54',
  'primary-700': '#002448',
  fontFamily: 'Open Sans',
  typeSizeBase: '16px',
  'size-1': '8px',
  'size-2': '10px',
  'size-3': '14px',
  'size-4': '24px',
  'size-5': '42px',
  'size-6': '68px',
  dropShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
}
const Template: ComponentStory< typeof Button > = (args) => (
  <ThemeProvider theme={theme}>
    <Button {...args} />
  </ThemeProvider>
);

export const Primary = Template.bind({})

export const PrimarySmall = Template.bind({})


Primary.args = {
  label: 'Button Text'
}

PrimarySmall.args = {
  label: 'Button Text',
  size: 'small'
}