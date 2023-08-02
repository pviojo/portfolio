"use client";

import {SessionProvider} from "next-auth/react";
import {ThemeProvider} from "next-themes";
import {ReactNode} from "react";

export default function Providers({children}: {children: ReactNode}) {
  return (
    <ThemeProvider attribute='class'>
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  );
}
