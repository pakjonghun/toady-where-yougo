import React from 'react';
import AppLayout from '../components/appLayout';
import faker from 'faker';
import styled from 'styled-components';
import { Button, Modal, Card } from 'antd';

const Home = () => {
  function info() {
    Modal.success({
      title: 'Login',
      content: (
        <LoginButtons>
          <LoginButton>Kakao</LoginButton>
          <LoginButton>Naver</LoginButton>
        </LoginButtons>
      ),
      onOk() {},
    });
  }

  return (
    <AppLayout>
      <Main>
        <MainCard title="1분만에 여행을 계획해보세요" bordered={false}>
          <StartButton size={'large'} type="primary" onClick={info}>
            시작
          </StartButton>
        </MainCard>
      </Main>
    </AppLayout>
  );
};

export default Home;

const Main = styled.div`
  height: 100%;
  background-image: url(${faker.image.image()});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const LoginButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginButton = styled(Button)`
  margin-top: 0.4rem;
  width: 100%;
`;

const StartButton = styled(Button)`
  display: block;
  margin: 0 auto;
`;

const MainCard = styled(Card)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;

  div {
    color: white;
    font-size: 2rem;
  }
`;
