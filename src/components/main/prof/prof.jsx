import '../../main/main.css';
import ProfCard from './profession';
import car_service from './car-service.png';
import building from './building.png';
import budget from './budget-accounting.png';
import gas from './gas.png';
import management from './management.png';
import oil from './oil.png';
import radio from './radio.png';
import standartization from './standardization.png';
import { useTranslation, initReactI18next } from 'react-i18next';
import i18n from 'i18next';


i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: require('./../../translations/en.json')
      },
      ru: {
        translation: require('./../../translations/ru.json')
      },
      kz: {
        translation: require('./../../translations/kz.json') // Если есть файл перевода для казахского языка
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default function Professions(){
    const { t } = useTranslation();
    return(
        <div className='professions-section'>
                <h1>Professions</h1>
                <div className='professions'> 
                    <ProfCard description={t('j1')} image_url={car_service}/>
                    <ProfCard description={t('j2')} image_url={building}/>
                    <ProfCard description={t('j3')} image_url={budget}/>
                    <ProfCard description={t('j4')} image_url={gas}/>
                    <ProfCard description={t('j5')} image_url={management}/>
                    <ProfCard description={t('j6')} image_url={oil}/>
                    <ProfCard description={t('j7')} image_url={radio}/>
                    <ProfCard description={t('j8')}image_url={standartization}/>
                </div>
            </div>
    );
}
