"use client";

import { redirect } from 'next/navigation';

export function redirectTo(url: string) {
  redirect(url);
}