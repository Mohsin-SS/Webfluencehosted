---
title: 'Website tracking setup checklist'
description: 'What to set up so you can measure your website and ads: Google Analytics 4, Search Console, lead and purchase events, the Meta pixel and Google Ads conversions.'
date: 2026-11-13
order: 2
---

Before running ads or judging a website's performance, make sure these are set up and working. Each item says what it is for and how to check it.

## 1. Google Analytics 4

- **What it does:** shows visitors, where they came from, and what they did.
- **Set up:** create a GA4 property with a *Web* data stream for your domain, and add the Google tag to every page.
- **Check:** open *Reports → Realtime* in GA4 and visit your site from your phone. You should appear within a minute.
- **Watch for:** each page counted once. If page views look roughly double, the site and Google's enhanced measurement may both be sending them.

## 2. Lead and sales events

- **Leads:** send a `generate_lead` event when someone clicks your phone number, email or WhatsApp link, or submits a working enquiry form.
- **Sales (online stores):** send a `purchase` event with the order value, only after the order is confirmed.
- **Mark them:** in GA4, go to *Admin → Events* and mark these as **key events**. New events can take up to 24 hours to appear in that list.

## 3. Google Search Console

- **What it does:** shows the Google searches your site appears for, and problems with indexing.
- **Set up:** add a *Domain* property and verify it with a DNS TXT record at your domain provider.
- **Then:** submit your sitemap (usually `/sitemap.xml`) under *Sitemaps*.

## 4. Bing Webmaster Tools

- **What it does:** the same as Search Console for Bing, which also supplies results to Microsoft Copilot and other AI assistants.
- **Set up:** sign in and choose *Import from Google Search Console*. It copies your verified sites and sitemaps.

## 5. Google Ads conversions

- **Import or create:** import GA4 key events into Google Ads, or use a Google Ads conversion action.
- **Primary vs secondary:** only real outcomes (purchases, qualified leads) should be *Primary*. Page views and add-to-cart should not.
- **Check:** compare Google Ads conversions with real orders or inquiries for the same period.

## 6. Meta pixel and Conversions API

- **Set up:** install the Meta pixel through your store platform or tag, with the Conversions API if available.
- **Events:** `Purchase` with value for stores; `Lead` or `Contact` for service businesses.
- **Check:** use *Events Manager → Test events* while you browse your own site.

## 7. A simple reconciliation sheet

Each week, write down orders or inquiries from your own records next to what Google Ads, Meta and GA4 report. When the numbers drift apart, a tag has broken. Catching that in days, not months, protects your ad budget.

Want this set up or audited for you? [Contact Webfluence](/contact).
