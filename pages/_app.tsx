import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { atomWithQuery, queryClientAtom } from "jotai/query";
import ThemeProvider from "../provider/ThemeProvider";
import { Provider } from "jotai";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {/* @ts-ignore */}
      <Provider initialValues={[[queryClientAtom, queryClient]]}>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
