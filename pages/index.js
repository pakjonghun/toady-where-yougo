import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginRequest } from '../reducers/user';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginRequest());
  }, []);
  return <div>hihi</div>;
};

export default Home;
