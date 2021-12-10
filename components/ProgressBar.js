import React from 'react';
import { Progress } from 'antd';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ProgressBar = ({ curPage }) => {
  const { curOption, totalOptions } = useSelector(
    state => state.frontCommonReducer
  );

  return <ProgressContainer percent={curOption / totalOptions} />;
};

export default ProgressBar;

const ProgressContainer = styled(Progress)`
  height: 5vh;
`;
