import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Providers from './providers';
import ThemeButton from '@/components/ThemeButton';
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${typography.className}
          subpixel-antialiased`}
      >
        <Providers>
          <div className=''>
            <div className="inner text-right p-3 pr-3 md:pr-10 md:relative absolute right-0">
              <ThemeButton />
            </div>
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
