import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { logger } from "hono/logger";

const app = new Hono();
app.use("*", logger());

app.use("/favicon.svg", serveStatic({ path: "./static/favicon.svg" }));
app.use("/favicon.ico", serveStatic({ path: "./static/favicon.ico" }));
app.use("/favicon.png", serveStatic({ path: "./static/favicon.png" }));

app.use("/static/*", serveStatic({ root: "." }));

app.get("/", (c) => c.text("Hello Bun!"));

export default app;
