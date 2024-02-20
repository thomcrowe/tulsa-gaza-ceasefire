import { DM_Sans, Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

import GoogleAnalytics from './GoogleAnalytics';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata = {
  title: {
    template: 'Gaza Ceasefire Pilgrimage',
    default: 'Gaza Casefire Pilgrimage in Tulsa - A Via Dolorosa of Solidarity',
  },
  description:
    'Join us for the annual Gaza Ceasefire Pilgrimage in Tulsa on March 30th! This powerful event brings together people of all faiths and backgrounds to promote peace, understanding, and reconciliation. Learn about the history of the Gaza Strip and its ongoing struggles, and participate in moving ceremonies and discussions that foster greater empathy and unity. Let us work together towards a more just and peaceful world for all.',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full bg-white antialiased',
        inter.variable,
        dmSans.variable,
      )}
    >
      <body className="flex min-h-full">
        <GoogleAnalytics />
        <div className="flex w-full flex-col">{children}</div>
      </body>
    </html>
  )
}
