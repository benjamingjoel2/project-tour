/**
 * The one place the contact domain is written down.
 *
 * Both the general address and all 137 per-country helplines derive from it,
 * so correcting the domain is a one-line change here rather than an edit
 * across the footer, About, Terms, Privacy and the destination layout.
 *
 * NOTE: this is spelled "projecture", which differs from the brand name
 * "Projectour". That is as specified — but it is the kind of difference that
 * looks like a typo to anyone reading it later, so it is called out here
 * rather than left to be silently "corrected" by a future edit. If the
 * mailboxes actually live on projectour.com, this constant is the only thing
 * that needs to change.
 */
export const CONTACT_DOMAIN = 'projecture.com';

/** General enquiries address, used in the footer and the legal pages. */
export const CONTACT_EMAIL = `hello@${CONTACT_DOMAIN}`;
