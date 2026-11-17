import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { SITE_URL, profile } from "@/data/portfolio";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
  display: "swap",
});

const title = "Myat Bhone Kyaw — Junior Full-Stack Developer";
const description =
  "Personal portfolio of Myat Bhone Kyaw, a Junior Full-Stack Developer based in Yangon, Myanmar, building web and cross-platform applications with React, Next.js, Supabase, and Flutter.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: "%s — Myat Bhone Kyaw",
  },
  description,
  applicationName: "Myat Bhone Kyaw — Developer Portfolio",
  authors: [{ name: profile.name, url: profile.links.github }],
  creator: profile.name,
  keywords: [
    "Myat Bhone Kyaw",
    "Junior Full-Stack Developer",
    "Next.js Developer",
    "Flutter Developer",
    "Supabase",
    "React",
    "Yangon",
    "Myanmar",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Myat Bhone Kyaw",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@Daehy-peels",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: "#060608",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-clip">
        <a
          href="#main"
          className="sr-only z-[100] rounded-btn bg-accent px-4 py-2 font-medium text-[#04140d] focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
