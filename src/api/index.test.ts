import { describe, expect, test } from "bun:test";
import { app } from ".";

describe("/api", () => {
  test("Get /", () => {
    const req = new Request("http://localhost/api");
    expect(app.fetch(req)).resolves.toMatchObject({ ok: false });
  });
});
