import type { PricingPlan } from "@/lib/pricing-data";
import { ORGANIZATION_ID } from "@/lib/site";

const PRICE_CURRENCY = "NPR";

export interface PricingSchemaOptions {
  /** All plans rendered in the pricing section. */
  plans: PricingPlan[];
  /** Absolute URL of the page the pricing section lives on. */
  pageUrl: string;
  /** Fragment id of the pricing section, e.g. "seo-pricing". */
  anchor: string;
  /** Catalog name, e.g. "SEO packages and pricing in Nepal". */
  catalogName: string;
  /** schema.org serviceType applied to every plan. */
  serviceType: string;
  /** Appended to the plan name, e.g. "SEO Plan" -> "Growth SEO Plan". */
  planSuffix: string;
  /** Regions the quoted prices apply to. Same shape as the Service areaServed. */
  areaServed: Record<string, string>[];
}

type JsonLd = Record<string, unknown>;

function planSlug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

/** Stable @id so the Service can reference an offer instead of repeating it. */
export function pricingOfferId(pageUrl: string, plan: PricingPlan) {
  return `${pageUrl}#offer-${planSlug(plan.name)}`;
}

export function pricingCatalogId(pageUrl: string) {
  return `${pageUrl}#pricing`;
}

/**
 * Price block for one plan. Plans without an `amount` are quote-only, so they
 * carry a currency and no number rather than a price Google would treat as real.
 */
function priceSpecification(plan: PricingPlan, offerId: string): JsonLd {
  if (!plan.amount) {
    return {
      "@type": "PriceSpecification",
      "@id": `${offerId}-price`,
      priceCurrency: PRICE_CURRENCY,
      valueAddedTaxIncluded: false,
      description: plan.priceNote ?? "Quoted to scope",
    };
  }

  return {
    "@type": "UnitPriceSpecification",
    "@id": `${offerId}-price`,
    price: plan.amount,
    priceCurrency: PRICE_CURRENCY,
    valueAddedTaxIncluded: false,
    ...(plan.unitText
      ? {
          unitText: plan.unitText,
          unitCode: plan.unitText === "MONTH" ? "MON" : undefined,
          billingDuration: 1,
          billingIncrement: 1,
        }
      : { priceType: "https://schema.org/InvoicePrice" }),
  };
}

export function buildPricingOffers({
  plans,
  pageUrl,
  anchor,
  catalogName,
  serviceType,
  planSuffix,
  areaServed,
}: PricingSchemaOptions): JsonLd[] {
  const sectionUrl = `${pageUrl}#${anchor}`;

  return plans.map((plan, i) => {
    const offerId = pricingOfferId(pageUrl, plan);
    const offerName = `${plan.name} ${planSuffix}`;

    return {
      "@type": "Offer",
      "@id": offerId,
      name: offerName,
      description: plan.description,
      url: sectionUrl,
      category: catalogName,
      position: i + 1,
      availability: "https://schema.org/InStock",
      businessFunction: "http://purl.org/goodrelations/v1#Sell",
      seller: { "@id": ORGANIZATION_ID },
      eligibleRegion: areaServed,
      ...(plan.amount ? { price: plan.amount, priceCurrency: PRICE_CURRENCY } : {}),
      priceSpecification: priceSpecification(plan, offerId),
      itemOffered: {
        "@type": "Service",
        "@id": `${offerId}-service`,
        name: offerName,
        description: plan.description,
        serviceType,
        provider: { "@id": ORGANIZATION_ID },
        areaServed,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${offerName} inclusions`,
          itemListElement: plan.features.map((feature, j) => ({
            "@type": "Offer",
            position: j + 1,
            itemOffered: { "@type": "Service", name: feature },
          })),
        },
      },
    };
  });
}

/** The pricing section as its own OfferCatalog entity, emitted as a JSON-LD block. */
export function buildPricingCatalogJsonLd(options: PricingSchemaOptions): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": pricingCatalogId(options.pageUrl),
    name: options.catalogName,
    url: `${options.pageUrl}#${options.anchor}`,
    numberOfItems: options.plans.length,
    provider: { "@id": ORGANIZATION_ID },
    itemListElement: buildPricingOffers(options),
  };
}

/** @id-only references, so the Service links the offers without duplicating them. */
export function pricingOfferRefs(plans: PricingPlan[], pageUrl: string): JsonLd[] {
  return plans.map((plan) => ({ "@id": pricingOfferId(pageUrl, plan) }));
}
