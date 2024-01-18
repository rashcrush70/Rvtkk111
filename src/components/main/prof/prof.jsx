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

export default function Professions(){
    return(
        <div className='professions-section'>
                <h1>Professions</h1>
                <div className='professions'> 
                    <ProfCard description='Обслуживание и ремонт авто' image_url={car_service}/>
                    <ProfCard description='Строительство' image_url={building}/>
                    <ProfCard description='Учет и аудит' image_url={budget}/>
                    <ProfCard description='Монтаж и эксплуатация систем газоснабжения' image_url={gas}/>
                    <ProfCard description='Менеджмент' image_url={management}/>
                    <ProfCard description='Эскплутация нефтяных' image_url={oil}/>
                    <ProfCard description='Радиотехника' image_url={radio}/>
                    <ProfCard description='Стандартизация' image_url={standartization}/>
                </div>
            </div>
    );
}
