import '../styles/globals.css'
import {wrapper} from '../store/store'
import Router from "next/router";
import React from "react";
import Spinner from "../public/icons/Spinner";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return(
      <>
        {loading ? (
            <Spinner style={{height: '20vh', width: '20vw', margin: '20% 40%'}}/>
        ) : (
            <Component {...pageProps} />
        )}
        </>
  )
}

export default wrapper.withRedux(MyApp)
