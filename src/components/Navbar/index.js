import './Navbar.css';
import React, { useState } from 'react';


const Navbar = () => {

        const [isUlVisible, setIsUlVisible] = useState(false);

        const handleIconClick = () => {
            setIsUlVisible(!isUlVisible);
        };

        return (
            <nav className='navbar'>
                
                <div className='container'>
                    <i className="ri-menu-line" onClick={handleIconClick}></i> 
                    {isUlVisible && (
                        <ul>
                            <li>
                                <a href='#navbar' onClick={handleIconClick}>Topo</a>
                            </li>
                            <li>
                                <a href='#about' onClick={handleIconClick}>Sobre</a>
                            </li>
                            <li>
                                <a href='#equipe' onClick={handleIconClick}>Equipe</a>
                            </li>
                            <li>
                                <a href='#agenda'onClick={handleIconClick}>Agenda</a>
                            </li>
                            <li>
                                <a href='#recomendacoes' onClick={handleIconClick}>Recomendações</a>
                            </li>
                        </ul>
                    )}
                </div>  
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