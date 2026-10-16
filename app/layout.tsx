import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Mujahid Zareen | SQA Engineer — Manual & Performance Testing",
  description: "Explore Mujahid Zareen’s work in manual, API and performance testing across fintech, CMS and industrial e-commerce. Based in Lahore, Pakistan.",
  openGraph: { title: "Mujahid Zareen — Quality in every release", description: "SQA Engineer specializing in manual, API and performance testing, with a developer’s perspective on software quality.", type: "website", locale: "en_US" },
  twitter: { card: "summary", title: "Mujahid Zareen | SQA Engineer", description: "Manual, API and performance testing. Lahore, Pakistan." },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
