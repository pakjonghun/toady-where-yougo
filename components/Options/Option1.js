import styled from 'styled-components';
import { Button } from 'antd';
import {
  ManOutlined,
  WomanOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons';

const Option1 = () => {
  return (
    <Container>
      <PageCount>1 / 2</PageCount>
      <Title>성별과 연령대를 알려주세요</Title>
      <Boxs>
        <InnerWrapper>
          <BoxWrapper>
            <Box>
              <ManOutlined />
            </Box>
            <Message>남자</Message>
          </BoxWrapper>
          <BoxWrapper>
            <Box>
              <WomanOutlined />
            </Box>
            <Message>여자</Message>
          </BoxWrapper>
        </InnerWrapper>
      </Boxs>

      <SecondBoxWrapper>
        <Btn>10대</Btn>
        <Btn>20대</Btn>
        <Btn>30대</Btn>
        <Btn>40대</Btn>
        <Btn>50대</Btn>
        <Btn>60대</Btn>
      </SecondBoxWrapper>

      <PagingButtons>
        <Button>
          <ArrowLeftOutlined />
          이전
        </Button>
        <Button>
          다음
          <ArrowRightOutlined />
        </Button>
      </PagingButtons>
    </Container>
  );
};

export default Option1;

const PagingButtons = styled.div`
  bottom: 20%;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const InnerWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  position: relative;
  margin-top: 3rem;
`;
const PageCount = styled.span`
  font-size: 0.9rem;
  color: lightgray;
`;

const Title = styled.h1`
  font-size: 1.4rem;
  margin: 1rem 0;
  font-weight: 700;
`;

const Boxs = styled.div`
  display: flex;
  justify-content: center;
`;

const Message = styled.span`
  margin-top: 0.5rem;
  width: 100%;
  font-weight: 600;
  text-align: center;
  font-size: 0.8rem;
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
`;

const SecondBoxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5rem;
  margin-bottom: 5rem;
`;

const Box = styled.div`
  padding: 1rem;
  background-color: gray;
  color: lightgray;
  border-radius: 0.8rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;

const Btn = styled.div`
  padding: 1.3rem 2rem;
  background-color: lightgray;
  border-radius: 0.7rem;
  text-align: center;
  color: gray;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;
