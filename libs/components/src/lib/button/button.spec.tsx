import { render } from '@testing-library/react';
import Button from './button';

// expect.extend(jestDOM);

describe('Button', () => {
  it('should render successfully', () => {
    // Arrang: Setup the test data
    // BDD: given
    const fakeText = 'Button Text';


    // Act: Call your method
    // BDD: when
    const { baseElement, debug } = render(<Button label={fakeText} />);

    // Assert
    // BDD: then
    debug();
    expect(baseElement).toBeTruthy();
  });

  it('should render the label text', () => {
    // Arrang: Setup the test data
    // BDD: given
    const fakeText = 'Button Text';


    // Act: Call your method
    // BDD: when
    const {getByText} = render(<Button label={fakeText} />);

    // Assert
    // BDD: then
    expect(getByText(fakeText)).toBeInTheDocument();
  })
});
