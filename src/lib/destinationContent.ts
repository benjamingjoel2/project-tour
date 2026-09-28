/**
 * Shared blocks for the destination-page "End-to-end services" and
 * "Projectour guarantee" sections. Identical copy on every destination
 * page except for the `{C}` country-name substitution in GUARANTEE. That
 * sameness is the thin-content problem flagged in CLAUDE.md; these blocks
 * are the fallback until each page has material of its own.
 */

export const SERVICES: [title: string, body: string][] = [
  ['Popular itineraries', 'Ready-priced packages you can start selling right away.'],
  ['Bespoke trips', "Forward your client's inquiry and we quote, book and run every detail."],
  ['Transportation', 'Airport pickups, trusted drivers, intercity transfers and car hire.'],
  ['Accommodation', 'Net B2B rates and partner perks from hotels we have used ourselves.'],
  ['Concierge', 'Dedicated end-to-end support for your VIPs, handled over WhatsApp.'],
  ['Groups & MICE', 'Large-scale arrangements for enterprises, incentives, groups and events.'],
];

export const GUARANTEE: [title: string, body: string][] = [
  [
    'Signature packages',
    'Ready-to-sell itineraries for {C}, already priced and operable — start selling without building a product from scratch.',
  ],
  [
    'Lowest B2B pricing',
    'Net rates negotiated directly with operators in {C}. Your margin sits on top, and the operator never sees what you charge your client.',
  ],
  [
    'One quote, one number',
    'Every component of the trip priced together and returned as one itemised net rate, so you quote your client once.',
  ],
  [
    'Seamless logistics',
    'Pickups, transfers, drivers and guides coordinated as one chain in {C}, not six separate email threads.',
  ],
  [
    'Standardised service',
    'The same brief, the same checks and the same handover in {C} as in every other destination Projectour covers.',
  ],
  [
    'On-the-ground support',
    'A local team in {C} during the trip. Routine questions are handled quietly; a real problem reaches a person immediately.',
  ],
];
