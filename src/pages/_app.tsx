import { type AppType } from "next/app";
import { api } from "~/utils/api";
import Head from 'next/head';
import "../styles/globals.css";
import '../styles/styles.css';

const MyApp: AppType = ({ Component, pageProps }) => {

  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
