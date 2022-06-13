import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { PageShell } from "../components/Layout/PageShell";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <PageShell>
        <Component {...pageProps} />
      </PageShell>
    </ChakraProvider>
  );
}

export default MyApp;
