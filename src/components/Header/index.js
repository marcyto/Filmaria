
import {Link } from 'react-router-dom';
import './header.css';


export default function Header(){
    return(
        <header>
           
            <Link className='logo' to='/'>FILMARIA</Link>
            <Link className='salvos' to='/salvos'>Salvos</Link>
           
        </header>
        

    );
}