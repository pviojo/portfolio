import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const typography = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Pablo Viojo",
  description: "Portfolio de Pablo Viojo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${typography.className}
          subpixel-antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
