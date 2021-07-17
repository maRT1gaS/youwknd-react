import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import common_en from '../languages/en/common.json';
import common_ru from '../languages/ru/common.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
    fallbackLng: "ru",
    whitelist: ["ru", "en"],
    resources: {
        en: {
            translation: common_en
        },
        ru: {
            translation: common_ru
        }
    },
    debug: false,
    detection: {
        order: ["localStorage"],
        caches: ["localStorage"],
    },
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;