import pjson from "../../../package.json";
import "../globals.scss";
import type {Metadata} from "next";
import {IBM_Plex_Sans, Roboto_Mono} from "next/font/google";

import {config} from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Providers from "../providers";
import ThemeButton from "@/components/ThemeButton";
import Script from "next/script";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faHome} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
config.autoAddCss = false;

const typography = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Pablo Viojo",
    default: "Pablo Viojo",
  },
  description: "Portfolio de Pablo Viojo",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`
          subpixel-antialiased`}
      >
        {process?.env?.NODE_ENV === "production" ? (
          <>
            <Script src='https://www.googletagmanager.com/gtag/js?id=G-T9M1XZ8MZP'></Script>
            <Script id='google-analytics'>
              {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-T9M1XZ8MZP');`}
            </Script>
          </>
        ) : null}
        <Providers>
          <div className=' p-3 px-3  absolute top-0 right-0 left-0'>
            <div className='inner md:px-10 px-2 flex justify-between'>
              <div>
                <Link href='/'>
                  <FontAwesomeIcon icon={faHome} className='mr-2' />
                  Inicio
                </Link>
              </div>
              <ThemeButton />
            </div>
          </div>
          {children}
          <div className='mb-5 inner md:px-10 px-2'>
            <div className='inner p-3 flex justify-between items-end'>
              <div className='text-xs'>
                <FontAwesomeIcon icon={faHeart} className='mr-2 color-purple' />
                Made with Next.js, TypeScript and Tailwind CSS
                <br />
                <br />
                Fork on{" "}
                <a
                  className='underline'
                  href='https://github.com/pviojo/portfolio'
                  target='_blank'
                  rel='noreferrer'
                >
                  GitHub
                </a>
              </div>
              <div className='text-xs'>v{pjson.version}</div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
