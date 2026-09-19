import { dedupeOffers } from "./dedupe.js";
import { normalizeOffer } from "./normalize.js";
import { planQueries } from "./planner.js";
import { scoreOffer } from "./score.js";
import type { MarketplaceAdapter, RankedOffer } from "./types.js";

export async function sourceProducts(
  objective: string,
  adapters: MarketplaceAdapter[],
  queryLimit = 8
): Promise<RankedOffer[]> {
  const queries = planQueries(objective, queryLimit);
  const raw = [];
  for (const adapter of adapters) {
    for (const query of queries) raw.push(...await adapter.search(query));
  }
  const normalized = dedupeOffers(raw.map(normalizeOffer));
  return normalized
    .map((offer) => scoreOffer(offer, objective))
    .sort((a, b) => b.score - a.score || a.canonicalTitle.localeCompare(b.canonicalTitle));
}
