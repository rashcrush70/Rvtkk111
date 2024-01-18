import './main.css';
import rvtk from './rvtk.png'
export default function Our_college(){
    return(<div className='our-college'>
    <div className='left-side'>
        <h1>Respublican higher technical College</h1>
        <div className='links'>
            <a href="#" className="link">About us</a>
            <a href="#" className="link">How to gen into</a>
        </div>    
    </div>
    <img src={rvtk}  alt="rvtk-image" width="100%"/>
</div>);
}