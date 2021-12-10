import react from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const AppLayout = ({ children }) => {
  return (
    <Container>
      <Navigation />
      {children}
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem;
  width: 100vw;
  height: 100vh;
`;

export default AppLayout;
