# InboxLift · Extension UI Showcase

A live preview of an AI Gmail draft helper Chrome extension with Free / Pro tiers and Stripe billing. Companion portfolio piece to my Chrome extension service on Fiverr.

> **What this is**: a Next.js app on Vercel that mocks each user-facing scene of the extension so buyers can see, before commissioning anything, how a paid-tier Chrome extension actually flows.
>
> **What this isn't**: the production extension itself. Source for the live extension stays private.

## The five scenes

| # | Scene | What it shows |
|---|---|---|
| 01 | Popup · Free tier | Usage meter, recent drafts, soft Pro nudge banner |
| 02 | Paywall + pricing | Limit-reached popup beside the Free vs Pro pricing modal |
| 03 | Drafting in Gmail | Mock Gmail compose with floating button + side drawer |
| 04 | Popup · Pro unlocked | PRO badge, no usage cap, tone presets and templates tabs |
| 05 | Options · Billing | Current plan, 30-day usage chart, invoices, manage subscription |

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4
- TypeScript strict mode
- Statically prerendered, deployed on Vercel

## Local

```bash
yarn install
yarn dev   # http://localhost:3000
```
