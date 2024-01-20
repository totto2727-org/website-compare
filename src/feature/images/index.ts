import { Hono } from "hono";

export const imagesApp = new Hono().basePath("images");
