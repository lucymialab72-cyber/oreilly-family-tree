import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The O'Reilly Family Tree — Four Countries, One Family",
  description: "A heritage document tracing the O'Reilly, Coffey, Linnerud, and Jakubicek families from Ireland, Norway, and Czech Republic to Chicago.",
};

export const viewport = {
  viewportFit: "cover" as const,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
