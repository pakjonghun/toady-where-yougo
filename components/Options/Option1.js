import { Avatar } from 'antd';
import faker from 'faker';
import styled from 'styled-components';
import { Button } from 'antd';

const Option1 = () => {
  <>
    <PageCount>1/2</PageCount>
    <Title>성별과 연령대를 알려주세요</Title>
    <Boxs>
      <BoxWrapper>
        <Box>ICON</Box>
        <Title>남자</Title>
      </BoxWrapper>
      <BoxWrapper>
        <Box>ICON</Box>
        <Title>여자</Title>
      </BoxWrapper>
    </Boxs>
    <Boxs>
      <Btn>ICON</Btn>
      <Btn>ICON</Btn>
      <Btn>ICON</Btn>
      <Btn>ICON</Btn>
      <Btn>ICON</Btn>
      <Btn>ICON</Btn>
    </Boxs>
  </>;
};

export default Option1;
const PageCount = styled.span`
  font-size: 1.2rem;
`;
const Title = styled.h1`
  font-size: 1.5rem;
`;
const Boxs = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
const BoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Box = styled.div`
  padding: 1rem 1.3rem;
  background-color: gray;
  color: lightgray;
`;

const Btn = styled(Button)`
  background-color: lightgray;
  font-optical-sizing: gray;
`;
