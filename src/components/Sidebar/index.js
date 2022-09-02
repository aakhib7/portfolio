import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/name_logo3.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub, faYoutube, faSkype,} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
   <div className='nav-bar'>
    <Link className='logo' to='/'>
        <img src={LogoS} alt='logo'/>
        <img className='sub-logo' src={LogoSubtitle} alt='syed-aakhib'/>
    </Link>
    <nav>
        <NavLink exact="true" activeclassname="active" to='/'>
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className='about-link' to='/about'>
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to='/contact'>
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
    </nav>
    <ul>
        <li>
            <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/syed-aakhib-74110295'>
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
            </a>
        </li>
        <li>
            <a target="_blank" rel='noreferrer' href='https://github.com/aakhib7'>
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
            </a>
        </li>
        <li>
            <a target="_blank" rel='noreferrer' href='https://www.youtube.com/channel/UC2U_y8smR0hH2dHs2lWSwFw'>
                <FontAwesomeIcon icon={faYoutube} color="#4d4d4e"/>
            </a>
        </li>
        <li>
            <a target="_blank" rel='noreferrer' href='skype:live:aakhib5147'>
                <FontAwesomeIcon icon={faSkype} color="#4d4d4e"/>
            </a>
        </li>
    </ul>
   </div>
)
export default Sidebar