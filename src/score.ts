import type { NormalizedOffer, RankedOffer } from "./types.js";

export function scoreOffer(offer: NormalizedOffer, objective: string): RankedOffer {
  let score = 0;
  const reasons: string[] = [];
  const vetoes: string[] = [];
  const text = (offer.canonicalTitle + " " + (offer.tags ?? []).join(" ")).toLowerCase();
  const terms = objective.toLowerCase().split(/[^a-z0-9]+/).filter((x) => x.length > 2);
  const hits = terms.filter((term) => text.includes(term)).length;

  score += Math.min(30, hits * 6);
  if (offer.finishedProduct) {
    score += 20;
    reasons.push("finished product");
  }
  if (offer.customizable) {
    score += 20;
    reasons.push("customizable");
  }
  if (offer.verifiedSupplier) {
    score += 15;
    reasons.push("verified supplier");
  }
  if ((offer.repeatBuyerSignal ?? 0) >= 0.5) {
    score += 10;
    reasons.push("repeat-buyer signal");
  }
  if ((offer.moq ?? 9999) <= 100) {
    score += 5;
    reasons.push("low MOQ");
  }
  if (!offer.finishedProduct) vetoes.push("component-only listing");
  if (!offer.customizable) vetoes.push("no customization signal");
  return { ...offer, score: Math.min(100, score), reasons, vetoes };
}
