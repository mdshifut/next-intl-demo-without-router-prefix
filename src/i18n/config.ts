export type Locale = (typeof locales)[number];

export const languages = [
  {
    name: "English",
    code: "en",
  },
  {
    name: "French",
    code: "fr",
  },
  {
    name: "Spanish",
    code: "es",
  },
  {
    name: "Deutsch",
    code: "de",
  },
];

export const locales = languages.map((item) => item.code);

export const defaultLocale: Locale = "en";
