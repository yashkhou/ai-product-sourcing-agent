import type { MarketplaceAdapter, RawOffer } from "../types.js";

const catalogue: RawOffer[] = [
  {
    marketplace: "demo-market-a",
    externalId: "A-101",
    title: "Customizable smart camera edge vision terminal",
    supplier: "Synthetic Supplier Alpha",
    priceMin: 42,
    currency: "USD",
    moq: 50,
    verifiedSupplier: true,
    repeatBuyerSignal: 0.72,
    customizable: true,
    finishedProduct: true,
    tags: ["camera", "vision", "edge"]
  },
  {
    marketplace: "demo-market-b",
    externalId: "B-404",
    title: "Industrial camera sensor board",
    supplier: "Synthetic Supplier Beta",
    priceMin: 8,
    currency: "USD",
    moq: 500,
    verifiedSupplier: true,
    repeatBuyerSignal: 0.31,
    customizable: false,
    finishedProduct: false,
    tags: ["camera", "board", "component"]
  }
];

export const demoAdapter: MarketplaceAdapter = {
  name: "demo",
  async search(query) {
    const terms = query.toLowerCase().split(/[^a-z0-9]+/).filter((x) => x.length > 3);
    return catalogue.filter((offer) =>
      terms.some((term) => offer.title.toLowerCase().includes(term))
    );
  }
};
