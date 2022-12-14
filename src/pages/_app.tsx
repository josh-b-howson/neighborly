import "../styles/globals.scss";
import type { AppType } from "next/dist/shared/lib/utils";

const MyApp: AppType = ({
  Component,
  pageProps: {...pageProps },
}) => {
  return (
    <Component {...pageProps} />
  );
};

export default MyApp;
