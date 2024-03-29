import { Provider } from 'react-redux';
import Navbar from '../components/Navbar';
import store from '../redux/store';
// import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
