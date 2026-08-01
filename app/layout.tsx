import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.taxacharya.com"),

  title: "Taxacharya | Income Tax, GST, Company Registration & Compliance",

  description:
    "Professional Chartered Accountant services including Income Tax Return Filing, GST Registration, GST Return Filing, Company Registration, MSME Registration, Trademark Registration and Business Compliance across India.",

  keywords: [
    "Income Tax",
    "GST Registration",
    "GST Return Filing",
    "Company Registration",
    "Trademark Registration",
    "MSME Registration",
    "Chartered Accountant",
    "Tax Consultant",
    "Taxacharya",
    "Business Compliance",
    "ITR Filing",
  ],

  authors: [
    {
      name: "Taxacharya",
      url: "https://www.taxacharya.com",
    },
  ],

  creator: "Taxacharya",
  publisher: "Taxacharya",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Taxacharya | Income Tax, GST & Compliance",
    description:
      "Professional Chartered Accountant services across India.",
    url: "https://www.taxacharya.com",
    siteName: "Taxacharya",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Taxacharya",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Taxacharya | Income Tax, GST & Compliance",
    description:
      "Professional Chartered Accountant services across India.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "Taxacharya",
  url: "https://www.taxacharya.com",
  logo: "https://www.taxacharya.com/logo.jpg",
  image: "https://www.taxacharya.com/og-image.jpg",
  telephone: "+91-7488211785",
  email: "admin@taxacharya.com",
  description:
    "Professional Chartered Accountant services including Income Tax Return Filing, GST Registration, GST Return Filing, Company Registration, MSME Registration, Trademark Registration and Business Compliance.",

  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },

  areaServed: "India",

  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script>

        {/* Structured Data */}
        <Script
          id="schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        {children}
      </body>
    </html>
  );
}