import Layout from '../components/Layout';
import '../styles/tailwind.css';
import firebase from '../firebase/initFirebase';

firebase();

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
