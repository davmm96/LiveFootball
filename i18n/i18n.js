 import I18n from "react-native-i18n";
 import en from "./languages/en";
 import es from "./languages/es";

 I18n.fallbacks = true;

 I18n.translations = {
    en,
    es
 };

 export default I18n;