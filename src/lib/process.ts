/**
 * How a trip runs through Projectour, from brief to report.
 *
 * Six steps, all handled by people. This replaced the nine-stage software
 * pipeline when the company stopped selling software: the steps here
 * describe what the operations team and the local operator do, not what a
 * system does on its own.
 *
 *  n     ordinal label (01..06)
 *  name  the step
 *  one   one line, used in lists
 *  body  full copy, used on /how and in the homepage accordion
 *  who   who carries the step — the agency, Projectour, or the operator in
 *        the destination
 */
export interface Step {
  n: string;
  name: string;
  one: string;
  body: string;
  who: 'You' | 'Projectour' | 'Local operator';
}

export const PROCESS: Step[] = [
  {
    n: '01',
    name: 'Brief',
    one: 'Send the inquiry as it arrived. We ask for what is missing.',
    body: 'Forward the client’s inquiry as it came in — dates, party, budget band, must-haves. Where anything is missing we come back with specific questions, not a form.',
    who: 'You',
  },
  {
    n: '02',
    name: 'Quote',
    one: 'Priced with the operator in the destination. One net rate.',
    body: 'We build the operationally realistic version of the trip with the operator on the ground and return one net rate, itemised. Your markup sits on top; the operator never sees what you charge.',
    who: 'Projectour',
  },
  {
    n: '03',
    name: 'Confirm',
    one: 'On your yes, every component is re-checked before it is booked.',
    body: 'A quote is a snapshot. When your client accepts we go back to every supplier and confirm the room, the vehicle and the rate are still as quoted. Any change comes back to you as a specific question.',
    who: 'Projectour',
  },
  {
    n: '04',
    name: 'Book',
    one: 'Deposits and balances on agreed terms, confirmed in writing.',
    body: 'Payment terms are set on the quote. Deposits, balances and supplier payments are confirmed by a person, in writing, every time. Nothing about money happens silently.',
    who: 'Projectour',
  },
  {
    n: '05',
    name: 'Prepare',
    one: 'Vouchers, pickups, ground contacts and one number for the trip.',
    body: 'Before departure your client has vouchers, pickup times, hotel confirmations and a single in-destination contact. Anything still outstanding is chased by us, not discovered at the airport.',
    who: 'Local operator',
  },
  {
    n: '06',
    name: 'Run',
    one: 'The local team runs the trip. You hear about what matters.',
    body: 'Drivers, guides and hotels are dispatched and managed in-country. Routine questions are answered on the ground; anything touching safety, money or what was sold reaches you immediately. Afterwards, a short report and any open item closed.',
    who: 'Local operator',
  },
];
