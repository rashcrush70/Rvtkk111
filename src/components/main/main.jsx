import './main.css';
import Our_college from './our-college';
import Professions from './prof/prof';
import MiniMap from './mini-map';
import Footer from '../footer/footer';
export default function Main(){
    return(
        <div>
            <Our_college/>
            <Professions/>
            <MiniMap/>
            <Footer/>
        </div>
    );
}