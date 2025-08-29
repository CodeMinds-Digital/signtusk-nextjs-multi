import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'SignTusk - Secure Document Signing & Sharing Platform',
  description: 'Transform your document workflows with SignTusk. Send, track, and sign documents securely with real-time analytics, multi-party workflows, and enterprise-grade security.',
  keywords: 'document signing, e-signature, document sharing, digital signatures, document tracking, secure documents',
  authors: [{ name: 'SignTusk Team' }],
  creator: 'SignTusk',
  publisher: 'SignTusk',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://signtusk.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SignTusk - Secure Document Signing & Sharing Platform',
    description: 'Transform your document workflows with SignTusk. Send, track, and sign documents securely with real-time analytics, multi-party workflows, and enterprise-grade security.',
    url: 'https://signtusk.com',
    siteName: 'SignTusk',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SignTusk - Secure Document Signing Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SignTusk - Secure Document Signing & Sharing Platform',
    description: 'Transform your document workflows with SignTusk. Send, track, and sign documents securely with real-time analytics, multi-party workflows, and enterprise-grade security.',
    images: ['/og-image.jpg'],
    creator: '@signtusk',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
