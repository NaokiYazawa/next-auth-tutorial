import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { NextComponentType } from "next";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import AuthGuard from "../components/AuthGuard";

export type CustomAppProps = AppProps<{ session: Session }> & {
  Component: NextComponentType & { requireAuth?: boolean };
};

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: CustomAppProps) {
  return (
    <SessionProvider session={session}>
      <Layout>
        {Component.requireAuth ? (
          <AuthGuard>
            <Component {...pageProps} />
          </AuthGuard>
        ) : (
          <Component {...pageProps} />
        )}
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
