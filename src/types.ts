export type RawOffer = {
  marketplace: string;
  externalId: string;
  title: string;
  supplier: string;
  priceMin?: number;
  priceMax?: number;
  currency?: string;
  moq?: number;
  verifiedSupplier?: boolean;
  repeatBuyerSignal?: number;
  customizable?: boolean;
  finishedProduct?: boolean;
  tags?: string[];
};

export type NormalizedOffer = RawOffer & {
  canonicalTitle: string;
  canonicalSupplier: string;
  fingerprint: string;
};

export type RankedOffer = NormalizedOffer & {
  score: number;
  reasons: string[];
  vetoes: string[];
};

export interface MarketplaceAdapter {
  name: string;
  search(query: string): Promise<RawOffer[]>;
}
