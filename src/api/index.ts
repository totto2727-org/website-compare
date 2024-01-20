import type { Bindings } from "@/feature/common/lib/hono";
import type { RequestEvent } from "@builder.io/qwik-city";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { logger } from "hono/logger";

const app = new Hono<Bindings<unknown, RequestEvent>>().basePath("/api");
app.get("/*", logger(), (_) => {
  throw new HTTPException(404);
});

export { app };
