import "@/styles/global.css";
import type { AppProps } from "next/app";
import { withAuthenticator } from "@aws-amplify/ui-react";
import Amplify from "aws-amplify";
import awsconfig from "../src/aws-exports";
import '@aws-amplify/ui-react/styles.css';


Amplify.configure(awsconfig)


function MyApp({ Component, pageProps, signOut, user }: AppProps) {
  return <Component {...pageProps} />;
}

export default withAuthenticator(MyApp);
