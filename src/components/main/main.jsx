import './main.css';
import Our_college from './our-college';
import Professions from './prof/prof';
import MiniMap from './mini-map';
import Footer from '../footer/footer';
import { useTranslation, initReactI18next } from 'react-i18next';
import i18n from 'i18next';


i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: require('./../translations/en.json')
      },
      ru: {
        translation: require('./../translations/ru.json')
      },
      kz: {
        translation: require('./../translations/kz.json') // Если есть файл перевода для казахского языка
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });
export default function Main(){
    const { t } = useTranslation();
    return(
        <div>
            <Our_college/>
            <Professions/>
            <MiniMap/>
            <Footer/>
        </div>
    );
}