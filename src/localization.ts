const _translations: Record<string, string> = {};

_translations["phone"] = "telefon";

export function msg(key: string): string {
  if (document.documentElement.lang === "en") {
    return key;
  }

  return _translations[key] || key;
}
