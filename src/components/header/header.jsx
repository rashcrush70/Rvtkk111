import logo from './logo.png';
import './header.css';
import Burger from './burger';

export default function Header(){
        return <header>
            <div className="container">
                
                <img src={logo} alt="logo" className='logo'/>
                
                <div className='btn-group'>
                    <select name="changeLang" className='changeLang' defaultValue="ru">
                        <option value="ru">RU</option>
                        <option value="eng">EN</option>
                        <option value="каз">KZ</option>
                    </select>
                    <a href="login.html" className='Login'>Sign In</a>
                </div>
                
            </div>
            <Burger/>
        </header>
}