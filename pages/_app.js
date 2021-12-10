import wrapper from '../store';
import GlobalStyle from '../styles/GlobalStyle';
import Navigation from '../components/Navigation';
import 'antd/dist/antd.css';

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(App);
