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
  max-width: 1000px;
`;

export default AppLayout;
