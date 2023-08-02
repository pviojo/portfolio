import "../globals.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import Providers from '../providers';

config.autoAddCss = false;

function AuthLayout(
  {
    children,
  }: {
    children: React.ReactNode,
  }) {

  return (
    <html lang="en" suppressHydrationWarning className="h-full bg-gray-100">
      <body className="h-full subpixel-antialiased">
        <Providers>
          <main>
            <div className="min-h-full">
              {children}
            </div>
          </main>
        </Providers>
      </body>
    </html >
  )
}

export default AuthLayout;