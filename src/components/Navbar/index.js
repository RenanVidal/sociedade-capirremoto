import Siderbar from '../Sidebar';
import './Navbar.css';


const Navbar = () => {
    return (
        <nav className='navbar'>
            
                <i className="ri-menu-line" id="outer-container"></i>
               
                {/* <div id="page-wrap">
                    <Siderbar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                </div> */}
            
            {/* <div className='container'>
                <i className="ri-menu-line"></i>
                <ul>
                    <li>
                        <a href='#navbar'>Topo</a>
                    </li>
                    <li>
                        <a href='#about'>Sobre</a>
                    </li>
                    <li>
                        <a href='#equipe'>Equipe</a>
                    </li>
                    <li>
                        <a href='#agenda'>Agenda</a>
                    </li>
                    <li>
                        <a href='#recomendacoes'>Recomendações</a>
                    </li>
                </ul>
            </div> */}
            <ul >
                <li>
                    <a href="https://www.facebook.com/Capirremoto"><i className="ri-facebook-fill"></i></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/capirremoto/"><i className="ri-instagram-line"></i></a>
                </li>
                <li>
                    <a href="https://www.twitch.tv/capirremoto"><i className="ri-twitch-fill"></i></a>
                </li>
                <li>
                    <a href="https://twitter.com/capirremoto"><i className="ri-twitter-fill"></i></a>
                </li>
                <li>
                    <a href="https://www.youtube.com/@SociedadeCapirremoto"><i className="ri-youtube-fill"></i></a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar