import { Hono } from "hono";
import { logger } from "hono/logger";
import { indexHandler } from "./apis";
import { counterHandler } from "./apis/counter";

const app = new Hono();

app.get("*", logger());

const nDefault = "0";

app.get("/", ...indexHandler(nDefault));

app.post("/counter", ...counterHandler(nDefault));
// biome-ignore lint/style/noDefaultExport: <explanation>
export default app;
