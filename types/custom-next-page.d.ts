import { NextPage } from "next";

export type CustomNextPage<P = {}, IP = P> = NextPage<P, IP> & {
  requireAuth?: boolean;
};
