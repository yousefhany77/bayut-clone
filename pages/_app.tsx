import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  QueryClientProvider,
  QueryClient,
  Hydrate,
  DehydratedState,
} from "react-query";
import { useState } from "react";
import NavBar from "../components/layout/NavBar";
import Head from "next/head";
import { Router } from "next/router";
import ProgressBar from "@badrap/bar-of-progress";
import Footer from "../components/layout/Footer";

// import("../mocks").then(({ setupMocks }) => setupMocks());

const progress = new ProgressBar({
  size: 3,
  color: "#facc15",
  className: "z-50 opacity-80",
  delay: 100,
});
function MyApp({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>) {
  const [queryClient] = useState(() => new QueryClient());
  Router.events.on("routeChangeStart", progress.start);
  Router.events.on("routeChangeComplete", progress.finish);
  Router.events.on("routeChangeError", progress.finish);
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <title>Bayut</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="description" content="Find proprties in the UAE" />
          <link
            rel="icon"
            href="/bx-building-house.svg"
            sizes="any"
            type="image/svg+xml"
          />
        </Head>
        <NavBar />

        <Component {...pageProps} />
        <Footer />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
