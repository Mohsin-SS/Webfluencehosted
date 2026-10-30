export interface ZelviorData {
  client: { name: string; url: string };
  engagement: string;
  capturedOn: string;
  services: string[];
  paymentMethods: Array<{
    chips: Array<{ label: string; status: 'live' | 'in-progress' | 'planned' | 'done' }>;
  }>;
  values: Array<{
    title: string;
    body: string;
    status: 'live' | 'in-progress' | 'planned' | 'done';
  }>;
}

export const zelvior: ZelviorData = {
  client: {
    name: 'Zelvior Official',
    url: 'https://zelviorofficial.pk',
  },
  engagement: 'Ongoing',
  capturedOn: 'October 2026',
  services: [
    'Shopify store design',
    'Technical fixes',
    'Checkout & payments',
    'SEO',
    'Digital marketing',
  ],
  paymentMethods: [
    {
      chips: [
        { label: 'Visa / Mastercard', status: 'live' },
        { label: 'UnionPay', status: 'live' },
        { label: 'Cash on delivery', status: 'live' },
        { label: 'Bank transfer', status: 'planned' },
      ],
    },
  ],
  values: [
    {
      title: 'Storefront design',
      body: 'Collection and product pages built around large photography, quiet layouts and a buy flow that settles size first.',
      status: 'live',
    },
    {
      title: 'Technical stability',
      body: 'Theme, app and configuration issues traced and fixed before a customer finds them. Ongoing audit as new drops are added.',
      status: 'in-progress',
    },
    {
      title: 'Checkout & payments',
      body: 'Card and cash on delivery confirmed end to end on desktop and mobile. Bank transfer is next.',
      status: 'in-progress',
    },
    {
      title: 'SEO foundations',
      body: 'Titles, descriptions, canonical URLs, alt text and internal linking across the live catalogue.',
      status: 'in-progress',
    },
    {
      title: 'Digital marketing',
      body: 'Campaign structure, creative briefing and ad-to-landing-page alignment for Instagram, Facebook and WhatsApp.',
      status: 'in-progress',
    },
  ],
};
