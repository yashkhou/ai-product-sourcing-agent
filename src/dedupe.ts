import type { NormalizedOffer } from "./types.js";

export function dedupeOffers(offers: NormalizedOffer[]): NormalizedOffer[] {
  const byKey = new Map<string, NormalizedOffer>();
  for (const offer of offers) {
    const key = offer.fingerprint;
    const current = byKey.get(key);
    if (!current) {
      byKey.set(key, offer);
      continue;
    }
    const currentSignals = Number(current.verifiedSupplier) +
      Number(current.finishedProduct) + Number(current.customizable);
    const nextSignals = Number(offer.verifiedSupplier) +
      Number(offer.finishedProduct) + Number(offer.customizable);
    if (nextSignals > currentSignals) byKey.set(key, offer);
  }
  return [...byKey.values()];
}
