// src/app/layout.tsx
import React from 'react';
import './globals.css'
import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'

// Load the Mulish Google Font
const mulish = Mulish({
  subsets: ['latin'],
  display: 'swap',
})

// Metadata for SEO and head info
export const metadata: Metadata = {
  title: 'Yogafit',
  description: 'Developed by Ajay',
}

// Root layout component used by App Router
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${mulish.className} antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
