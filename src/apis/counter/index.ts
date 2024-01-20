import { getCookie, setCookie } from "hono/cookie";
import { createFactory } from "hono/factory";

const factory = createFactory();

export const counterHandler = (nDefault: string) =>
  factory.createHandlers((c) => {
    const nRaw = getCookie(c, "n");
    const plusRaw = c.req.query("plus");

    if (!(nRaw && plusRaw)) {
      setCookie(c, "n", nDefault);
      return c.html(nDefault);
    }

    const n = Number.parseInt(nRaw);
    const plus = Number.parseInt(plusRaw);
    if (Number.isNaN(n) || Number.isNaN(plus)) {
      setCookie(c, "n", nDefault);
      return c.html(nDefault);
    }

    const newN = `${n + plus}`;
    setCookie(c, "n", newN);
    return c.html(newN);
  });
