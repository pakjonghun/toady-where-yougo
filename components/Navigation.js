import React from 'react';
import Link from 'next/link';
import { Menu } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const Navigation = () => {
  return (
    <Conatiner>
      <Menu mode="horizontal">
        <Menu.Item key="MainIcon">
          <Link href="/">
            <a>
              <SmileOutlined />
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="home">
          <Link href="/">
            <a>Home</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="explor">
          <Link href="/">
            <a>Explorer</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="myTrip">
          <Link href="/">
            <a>Home</a>
          </Link>
        </Menu.Item>
      </Menu>
    </Conatiner>
  );
};

export default Navigation;

const Conatiner = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
`;
