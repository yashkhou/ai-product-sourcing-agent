# AI Product Sourcing Agent

Marketplace-agnostic sourcing intelligence for turning a product objective into multiple search angles, normalizing offers, deduplicating candidates and ranking them from observed listing evidence.

This public repository contains no private supplier database or scraped catalogue. The included marketplace adapter is synthetic; authorized real-market adapters plug into the same interface.

## Included

- Query expansion for sourcing objectives
- Marketplace adapter contract
- Offer normalization and stable fingerprints
- Cross-market deduplication
- Evidence-based ranking
- Explicit vetoes for component-only and non-customizable listings
- Synthetic adapter and CLI demo
- Tests for ranking and query planning

## Run

Install dependencies, then run `npm test` or `npm run demo`.

## Ranking model

The example scorer rewards objective relevance, finished products, customization, verified suppliers, repeat-buyer evidence and lower MOQ. Vetoes remain explicit so a numeric score cannot hide a weak product type.

## Public vs private boundary

Public: adapter contract, normalization, dedupe, query planning, scoring and synthetic examples.

Private: production marketplace sessions, supplier communications, proprietary catalogues, operational databases, credentials and commercial sourcing history.
