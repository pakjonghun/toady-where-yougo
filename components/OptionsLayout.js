import React from 'react';
import styled from 'styled-components';
import ProgressBar from '../components/ProgressBar';

const OptionsLayout = ({ children }) => {
  return (
    <Container>
      <ProgressBar />
      {children}
    </Container>
  );
};

export default OptionsLayout;

const Container = styled.div`
  position: relative;
  padding: 2rem;
  max-width: 1000px;
`;
