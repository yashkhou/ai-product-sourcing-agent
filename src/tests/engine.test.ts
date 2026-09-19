import test from "node:test";
import assert from "node:assert/strict";
import { sourceProducts } from "../engine.js";
import { demoAdapter } from "../adapters/demo.js";

test("finished customizable hardware ranks above component-only listings", async () => {
  const results = await sourceProducts("smart camera vision", [demoAdapter]);
  assert.ok(results.length >= 2);
  assert.equal(results[0].finishedProduct, true);
  assert.equal(results[0].customizable, true);
  assert.ok(results[0].score > results[1].score);
});
