import '../Navbar/Navbar.scss'
import logoMRD from "../../assets/logoMRD.jpg"
import { NavLink } from 'react-router-dom'

export default function Navbar() {



    return (
        <div className='navbar'>
            <img src={logoMRD} alt="logo entreprise MRD" />
            <p>MRD</p>
            <nav className='nav'>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </div>
    )
}