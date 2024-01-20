import { Style } from "hono/css";
import type { Child } from "hono/jsx";
import { Htmx } from "./meta";

type Props = { children: Child; head: Child; lang?: string };

export function Layout({ lang = "ja", ...props }: Props) {
  return (
    <html lang={lang}>
      <head>
        {props.head}
        <Htmx />
        <Style />
      </head>
      <body>{props.children}</body>
    </html>
  );
}
