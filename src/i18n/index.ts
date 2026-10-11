import { translations as en } from './en';
import { translations as zhCN } from './zh-cn';
import { translations as es } from './es';
import { translations as de } from './de';
import { translations as fr } from './fr';
import { translations as ja } from './ja';

export const dictionaries = {
  en,
  'zh-cn': zhCN,
  es,
  de,
  fr,
  ja,
} as const;

export type Locale = keyof typeof dictionaries;

export function getTranslations(locale: string) {
  const normalized = locale.toLowerCase();
  const supported = Object.keys(dictionaries) as Locale[];

  const matched = supported.find(
    (item) => item === normalized,
  );

  return dictionaries[matched ?? 'en'];
}
