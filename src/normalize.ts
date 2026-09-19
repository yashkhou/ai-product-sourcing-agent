import { createHash } from "node:crypto";
import type { RawOffer, NormalizedOffer } from "./types.js";

const clean = (value: string) =>
  value.toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g, " ").trim();

export function normalizeOffer(offer: RawOffer): NormalizedOffer {
  const canonicalTitle = clean(offer.title);
  const canonicalSupplier = clean(offer.supplier);
  const material = [
    canonicalTitle,
    canonicalSupplier,
    offer.priceMin ?? "",
    offer.currency ?? ""
  ].join("|");
  return {
    ...offer,
    canonicalTitle,
    canonicalSupplier,
    fingerprint: createHash("sha256").update(material).digest("hex").slice(0, 16)
  };
}
