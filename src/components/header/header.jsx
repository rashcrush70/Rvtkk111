import logo from './logo.png';
import './header.css';
import Burger from './burger';
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
  
  export default function Header() {
    const { t } = useTranslation();
  
    return (
      <header>
        <div className="container">
          <img src={logo} alt="logo" className="logo" />
          <div className="btn-group">
            <select onChange={(e) => i18n.changeLanguage(e.target.value)}>
              <option value="en">EN</option>
              <option value="ru">RU</option>
              
              <option value="kz">KZ</option>
            </select>
            <a href="login.html" className="Login">{t('SING')}</a>
          </div>
        </div>
        <Burger />
      </header>
    );
  }