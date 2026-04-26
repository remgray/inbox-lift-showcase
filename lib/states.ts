export type StateMeta = {
  slug: string;
  index: string;
  surface: string;
  label: string;
  blurb: string;
};

export const states: StateMeta[] = [
  {
    slug: "free-tier",
    index: "01",
    surface: "Popup · Free",
    label: "Free tier with usage meter",
    blurb:
      "Default popup for Free users: usage meter (3 / 5 drafts this month), recent drafts list, and a soft Pro nudge banner. Limit and recent state both persist via chrome.storage.sync.",
  },
  {
    slug: "paywall",
    index: "02",
    surface: "Paywall + pricing",
    label: "Limit reached → pricing modal",
    blurb:
      "What buyers see when the free quota is exhausted: a hard 5/5 popup state side-by-side with the pricing modal. Upgrade CTA hands off to Stripe Checkout from the service worker.",
  },
  {
    slug: "gmail-compose",
    index: "03",
    surface: "Content script",
    label: "Drafting in Gmail",
    blurb:
      "Floating Draft-with-AI button injected into Gmail's compose toolbar. Click summons a side drawer that pulls the original thread into context, picks tone, and streams a reply.",
  },
  {
    slug: "pro-tier",
    index: "04",
    surface: "Popup · Pro",
    label: "Pro unlocked",
    blurb:
      "After upgrade: PRO badge replaces the usage meter, draft count is informational only, and tone presets / custom templates appear as new tabs. State driven by Stripe webhook → chrome.storage.sync.",
  },
  {
    slug: "billing",
    index: "05",
    surface: "Options · Billing",
    label: "Subscription & invoices",
    blurb:
      "Full options page: current plan card, daily-usage chart for the past 30 days, invoice history, and a Manage-subscription button that hands off to the Stripe Customer Portal.",
  },
];

export function getState(slug: string): StateMeta | undefined {
  return states.find((s) => s.slug === slug);
}
