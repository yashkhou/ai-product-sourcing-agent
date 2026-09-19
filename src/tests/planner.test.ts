import test from "node:test";
import assert from "node:assert/strict";
import { planQueries } from "../planner.js";

test("query planner expands camera intent", () => {
  const queries = planQueries("smart camera", 8);
  assert.ok(queries.some((item) => item.includes("vision")));
  assert.equal(queries.length, new Set(queries).size);
});
