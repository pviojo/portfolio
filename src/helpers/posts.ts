import {SHA256} from "crypto-js";

export function generateHash(slug: string) {
  return SHA256(`${slug}-${process.env.SALT}`).toString();
}
