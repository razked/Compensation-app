import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      he: {
        translations: {
          sidebar: {
            title: "מערכת כספים",
            compensation: "פיצויים",
            clientDebts: "חייבים",
            clientPayAdvanced: "לקוחות בהקפה",
          },
          compensation: {
            title: 'מעקב פיצויים',
            btnNew: 'פיצוי חדש',
            search: 'הקלד טלפון לחיפוש..',
            date: 'תאריך',
            fullName: 'שם הלקוח',
            phone: 'טלפון',
            address: 'כתובת',
            comment: 'מה קרה?',
            compensation: 'מה הפיצוי?',
            status: 'סטאטוס',
            doneDate: 'ת. מימוש',
            filterAll: 'הצג הכל',
            filterYes: 'מומשו',
            filterNo: 'לא מומשו',
            modalTitleNew: 'הוספת פיצוי חדש',
            modalTitleEdit: 'עריכת פיצוי'
          }
        },
      },
      en: {
        translations: {},
      },
    },
    fallbackLng: "he",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: ".", // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
