import { app } from "@/api";
import type { RequestHandler } from "@builder.io/qwik-city";

export const onRequest: RequestHandler = async (context) => {
  context.send(
    await app.fetch(context.request, {
      _runtime: context,
    }),
  );
};
