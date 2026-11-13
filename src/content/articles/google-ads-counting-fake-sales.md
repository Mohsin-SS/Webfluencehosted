---
title: 'Why Google Ads shows more sales than your Shopify store'
description: 'If Google Ads reports more conversions than your store actually received, your tracking is counting the wrong action. How to check it and fix it.'
date: 2026-11-13
order: 1
---

If Google Ads reports more sales than your Shopify store, your conversion tracking is almost always counting something other than a completed purchase, such as a page view or an "add to cart". The fix is to rebuild tracking so a conversion fires only when an order is placed, then check Google's numbers against Shopify regularly.

## How does this happen?

A Google Ads conversion is whatever action you tell Google to count. When an account is set up quickly, the conversion is often tied to a page loading (for example a product page or the cart page) instead of the order confirmation. Every visitor who reaches that page is then reported as a "sale", even if they never pay.

The result looks good in the Google Ads dashboard and bad in the bank account: the campaigns appear profitable while the store's real orders tell a different story.

## A real example: Adoro (ECS)

When Webfluence took over performance marketing for [Adoro (ECS)](/work/adoro), Google Ads was counting page views as sales, so its reports looked far better than the store did. We rebuilt the tracking around purchases, and every campaign is now checked against Shopify in a daily tracker.

Once Google was optimising for real orders instead of page views, the account could be judged and scaled on actual revenue. In the period covered by the case study, Adoro's monthly sales grew by 57%.

## How do I check my own account?

1. **Compare the numbers.** Take the last 30 days of conversions in Google Ads and the orders from Google traffic in Shopify. A large gap, especially with Google higher, means tracking is wrong.
2. **Open the conversion action.** In Google Ads, go to *Goals → Conversions → Summary* and open each action marked as *Primary*. Check what it counts. It should be a purchase, not a page view, form view or add to cart.
3. **Check the source.** Purchases should come from your store's checkout (for Shopify, the Google & YouTube app or a Google tag event on the order status page), not from a rule like "URL contains /products".
4. **Look for duplicates.** Two primary actions that both count the same purchase will double your conversions.
5. **Set the count to "One".** For purchases, each order should be counted once, even if the customer reloads the thank-you page.

## What should a correct setup look like?

- One primary conversion: **purchase**, fired only after payment or order confirmation, with the order value attached.
- Secondary actions (add to cart, begin checkout) kept as *Secondary*, so they inform you without steering the bidding.
- A simple daily or weekly sheet comparing Google-reported purchases with Shopify orders, so a broken tag is caught within days, not months.

## Why it matters before you increase budget

Google's automated bidding learns from whatever you mark as a conversion. If that is a page view, Google will find you more page views, at the cost of the sales you actually want. Fixing tracking first means every rupee added to the budget is spent chasing real orders.

Need a second pair of eyes on your tracking? [Talk to Webfluence](/contact) about a performance marketing audit.
