import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <i className="ri-menu-line"></i>
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
                    <a href="https://youtube.com/watch?v=1L79h-bcmp8"><i className="ri-youtube-fill"></i></a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar