const _translations = {};
_translations["phone"] = "telefon";
export function msg(key) {
    if (document.documentElement.lang === "en") {
        return key;
    }
    return _translations[key] || key;
}
//# sourceMappingURL=localization.js.map