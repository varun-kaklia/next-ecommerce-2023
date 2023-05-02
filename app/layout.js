import './globals.css'
import { DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({   
  weight: ["400", "500", "700"],
  subsets: ["latin"], 
})

export const metadata = {
  title: 'Ecommerce',
  description: 'Create by developer with Love..',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  )
}
