import "./globals.css";
import pjson from '../../package.json';

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
          <div className="bg-marked  p-3 px-3 md:px-10  right-0 left-0 flex justify-between">
            <div className='text-xs'>v{pjson.version}</div>
            <div>
              <ThemeButton />
            </div>
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
