import './main.css';
import { useTranslation, initReactI18next } from 'react-i18next';
import rvtk from './rvtk.png'
export default function Our_college(){
    const { t } = useTranslation();
    return(<div className='our-college'>
    <div className='left-side'>
        <h1>{t('koll')}</h1>
        <div className='links'>
            <a href="#" className="link">{t('ass')}</a>
            <a href="#" className="link">{t('How')}</a>
        </div>    
    </div>
    <img src={rvtk}  alt="rvtk-image" width="100%"/>
</div>);
}