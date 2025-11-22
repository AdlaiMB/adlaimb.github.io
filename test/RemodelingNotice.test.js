import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";
import RemodelingNotice from "../src/components/RemodelingNotice.astro";

test("correct render of RemodelingNotice component", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(RemodelingNotice);

  expect(result).toContain(
    'img src="/logo.svg" width="70" height="70" alt="personal logo"'
  );
  expect(result).toContain("Website under remodeling, come back later.");
});
