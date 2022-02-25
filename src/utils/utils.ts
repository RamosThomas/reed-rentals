import { JSON } from "./types";

/**
 * Random Alpha-Numeric ID Generator
 *
 * @param length
 * @returns
 */
const generateAlphaNumericId = (length: number) => {
  const chars: string =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-+=_,./;'[]{}:<>?";
  let id = "";

  do {
    let randomByte = Math.floor(chars.length * Math.random());
    id += chars[randomByte];
  } while (id.length < length);

  return id;
};

/**
 * Function to parse `document.cookie` into an object
 *
 * @param cookies
 * @returns cookies as an object
 */
const parseCookies = (cookies: string) => {
  const cookieArray: string[] = cookies.split("; ");
  const result: JSON = {};
  for (let i in cookieArray) {
    const keyValuePair: string[] = cookieArray[i].split("=");
    result[keyValuePair[0]] = keyValuePair[1];
  }

  return result;
};

export { generateAlphaNumericId, parseCookies };
