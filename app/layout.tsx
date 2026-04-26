import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InboxLift · Extension showcase",
  description:
    "UI showcase of a Gmail AI draft helper Chrome extension with Free / Pro tiers and Stripe billing. Built with WXT + React + Tailwind v4.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
