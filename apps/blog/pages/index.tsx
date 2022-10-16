import styled from 'styled-components';
import { Button } from '@hojjat-dev/components';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome blog 👋
            </h1>
          </div>

          <Button label='Button' />
        </div>
      </div>
    </StyledPage>
  );
}

export default Index;
