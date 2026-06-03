import './globals.css'
import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '600', '800'] })

export const metadata = {
  title: 'AirDosa | AI-Powered Instant Dosa Delivery',
  description: "Get hot, crispy dosas delivered to your balcony in under 10 minutes by AirDosa's AI-powered drones.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  )
}
