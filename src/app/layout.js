import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: "No 1 Home care services in Gravesend Kent",
  description:
    "Grandmind Care LTD, where compassionate care meets cutting-edge convenience. Our mission is to make the journey smoother for both carers and those in need of care",
  metadataBase: new URL("https://grandmindcare.co.uk"),
  applicationName: "Grandmind Care",
  referrer: "origin-when-cross-origin",
  keywords: ["Personalised Care Plans", "Skilled Professionals", "Caring", "Quality Care, Personalised", "Home Care Services", "Respite Care", "Healthcare Assistants", "Wake-In Carers", "Live-In Carers", "Care Assistants", "Care Managers", "Support Workers", "Nurses"] ,
  creator: "Grandmind Care LTD",
  publisher: "Grandmind Care LTD",
  openGraph: {
    title: "No 1 Home care services in Gravesend Kent",
    description:
    "Grandmind Care LTD, where compassionate care meets cutting-edge convenience. Our mission is to make the journey smoother for both carers and those in need of care",
    url: "https://grandmindcare.co.uk/",
    images:"/Images/home/LOGO.SVG",
    siteName: "Grandmind Care",

    locale: "en_GB",
    type: "website",
  },
  icons: {
    other: {
      rel: "preconnect",
      url: "https://fonts.googleapis.com",
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
        {/* <title>Grandmind Care</title> */}
      </head>
      <body className={inter.className}>
        {children}
        </body>
    </html>
  )
}
