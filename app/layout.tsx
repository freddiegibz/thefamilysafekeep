import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
const inter = Inter({ variable: '--font-body', subsets: ['latin'] });
const playfair = Playfair_Display({ variable: '--font-editorial', subsets: ['latin'], style: ['normal','italic'] });
export const metadata: Metadata = {
  title: 'The Family Safekeep | Give your family a place to start',
  description: 'One clear family hand-off. The If I’m Not Here digital binder. PDF and Notion for $27.',
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
 return <html lang="en"><body className={`${inter.variable} ${playfair.variable}`}>{children}</body></html>;
}
