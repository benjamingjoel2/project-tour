/**
 * "Local Helpline" mailto address for a destination, e.g. Azerbaijan ->
 * azerbaijan@projecture.com. The domain comes from lib/contact.ts, which is
 * the single place it is written down.
 *
 * Ported from hyperporter-3.html's openDest(), which did
 * `name.toLowerCase().replace(/[^a-z]/g,'')` -- fine for plain-ASCII names,
 * but it silently drops accented letters instead of transliterating them:
 * a name with a diaeresis (e.g. u-umlaut) had that letter stripped
 * entirely rather than folded down to a plain "u". Normalizing to NFD and
 * stripping the combining-mark range first fixes that.
 */
import { CONTACT_DOMAIN } from './contact';

export function helplineEmail(name: string): string {
  const slug = name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z]/g, '');
  return `${slug}@${CONTACT_DOMAIN}`;
}
