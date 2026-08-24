import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LeadSaaS — Find opportunities with a reason",
  description:
    "Discover relevant prospects and company accounts, understand the opportunity behind them, and turn that intelligence into controlled outreach.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
