import React, { useCallback } from 'react';
import { Progress, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurOption } from '../reducers/FrontCommon';
import styled from 'styled-components';

const ProgressBar = ({ curPage }) => {
  const dispatch = useDispatch();
  const { curOption, totalOptions } = useSelector(
    state => state.frontCommonReducer
  );
  const onClick = useCallback(() => {
    dispatch(updateCurOption({ curOption: curPage || 0 }));
  }, [curOption]);
  console.log(curOption, totalOptions);
  return (
    <Container>
      <Progress percent={curOption / totalOptions}></Progress>
      <Button.Group>
        <Button onClick={onClick} type="danger">
          이전
        </Button>
        <Button onClick={onClick} type="primary">
          다음
        </Button>
      </Button.Group>
    </Container>
  );
};

export default ProgressBar;

const Container = styled.div`
  position: absolute;
  width: 100%;
`;
