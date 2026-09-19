import { demoAdapter } from "./adapters/demo.js";
import { sourceProducts } from "./engine.js";

const results = await sourceProducts(
  "customizable smart camera for edge vision",
  [demoAdapter]
);
console.log(JSON.stringify(results, null, 2));
