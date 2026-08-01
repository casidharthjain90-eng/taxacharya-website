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

        {children}
      </body>
    </html>
  );
}