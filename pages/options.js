import React from 'react';
import styled from 'styled-components';
import ProgressBar from '../components/ProgressBar';

const Options = ({ children }) => {
  return (
    <Container>
      <ProgressBar />
      {children}
    </Container>
  );
};

export default Options;

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`;
