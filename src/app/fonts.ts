import {Nunito, Roboto} from 'next/font/google';

// Load each font once and expose it as a CSS variable. Tailwind maps these to
// `font-heading` / `font-body` in globals.css.
export const nunito = Nunito({subsets: ['latin'], display: 'swap', variable: '--font-nunito'});
export const roboto = Roboto({subsets: ['latin'], display: 'swap', variable: '--font-roboto'});
