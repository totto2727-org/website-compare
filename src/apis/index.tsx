import { getCookie, setCookie } from "hono/cookie";
import { createFactory } from "hono/factory";

const factory = createFactory();

export const indexHandler = (nDefault: string) =>
  factory.createHandlers(async (c) => {
    const pages = await import("@/pages");
    const nRaw = getCookie(c, "n");

    const returnDefault = () => {
      setCookie(c, "n", nDefault);
      return c.html(<pages.IndexPage initN={Number.parseInt(nDefault)} />);
    };

    if (!nRaw) {
      return returnDefault();
    }

    const n = Number.parseInt(nRaw);

    if (Number.isNaN(n)) {
      returnDefault();
    }

    return c.html(<pages.IndexPage initN={n} />);
  });
