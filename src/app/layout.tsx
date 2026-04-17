import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const SITE_URL = "https://thannlab.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Thannlab | Premium Digital Agency — Johannesburg, South Africa",
    template: "%s | Thannlab Digital Agency",
  },
  description:
    "Thannlab is South Africa's premier digital agency. We build high-performance websites, brand identities, and digital strategies that grow businesses. Based in Johannesburg.",
  keywords: [
    "digital agency South Africa",
    "web design Johannesburg",
    "web development South Africa",
    "branding agency Johannesburg",
    "Next.js agency",
    "SEO agency South Africa",
    "Shopify developer South Africa",
    "UI UX design South Africa",
    "Thannlab",
    "digital marketing Johannesburg",
    "website design South Africa",
    "ecommerce development South Africa",
  ],
  authors: [{ name: "Thannlab", url: SITE_URL }],
  creator: "Thannlab",
  publisher: "Thannlab",
  category: "Digital Agency",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: SITE_URL,
    siteName: "Thannlab Digital Agency",
    title: "Thannlab | Premium Digital Agency — Johannesburg, South Africa",
    description:
      "South Africa's premier digital agency building high-performance websites, brand identities, and digital strategies that drive real business growth.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Thannlab — Premium Digital Agency South Africa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thannlab | Premium Digital Agency — South Africa",
    description:
      "South Africa's premier digital agency. We build websites, brands & digital strategies that grow businesses.",
    images: ["/og-image.png"],
    creator: "@thannlab",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "add-your-google-search-console-token-here",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Thannlab",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
        width: 200,
        height: 60,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+27-69-167-8332",
        email: "nathan@thannlab.com",
        contactType: "customer service",
        availableLanguage: "English",
        areaServed: "ZA",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Johannesburg",
        addressRegion: "Gauteng",
        addressCountry: "ZA",
      },
      sameAs: [
        "https://github.com/NathanMabasa/thannlabfinal",
      ],
      foundingDate: "2022",
      description:
        "South Africa's premier digital agency specialising in web design, web development, brand identity, and digital strategy.",
      areaServed: {
        "@type": "Country",
        name: "South Africa",
      },
      knowsAbout: [
        "Web Design",
        "Web Development",
        "Brand Identity",
        "SEO",
        "E-Commerce",
        "UI/UX Design",
        "Digital Strategy",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Thannlab Digital Agency",
      description:
        "Premium digital agency based in Johannesburg, South Africa.",
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
      inLanguage: "en-ZA",
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: "Thannlab",
      image: `${SITE_URL}/og-image.png`,
      url: SITE_URL,
      telephone: "+27691678332",
      email: "nathan@thannlab.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Johannesburg",
        addressRegion: "Gauteng",
        postalCode: "2000",
        addressCountry: "ZA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -26.2041,
        longitude: 28.0473,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      priceRange: "$$",
      currenciesAccepted: "ZAR",
      paymentAccepted: "EFT, Credit Card",
      hasMap: "https://maps.google.com/?q=Johannesburg,Gauteng,South+Africa",
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "Thannlab | Premium Digital Agency — Johannesburg, South Africa",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      description:
        "South Africa's premier digital agency building high-performance websites, brand identities, and digital strategies.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
        ],
      },
      inLanguage: "en-ZA",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [SITE_URL],
        },
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#services`,
      name: "Thannlab Digital Services",
      provider: { "@id": `${SITE_URL}/#organization` },
      serviceType: [
        "Web Design",
        "Web Development",
        "Brand Identity Design",
        "SEO",
        "E-Commerce Development",
        "UI/UX Design",
        "Digital Strategy",
        "Content Marketing",
      ],
      areaServed: {
        "@type": "Country",
        name: "South Africa",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href={SITE_URL} />
        <meta name="geo.region" content="ZA-GP" />
        <meta name="geo.placename" content="Johannesburg" />
        <meta name="geo.position" content="-26.2041;28.0473" />
        <meta name="ICBM" content="-26.2041, 28.0473" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
