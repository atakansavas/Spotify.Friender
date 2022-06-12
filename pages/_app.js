import Toast from "../src/global/toast";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Toast />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
