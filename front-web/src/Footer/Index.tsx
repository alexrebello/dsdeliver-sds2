import './style.css'
import { ReactComponent as YoutubeIcon} from '../Img/youtube.svg'
import { ReactComponent as LinkedinIcon} from '../Img/linkedin.svg'
import { ReactComponent as InstagramIcon} from '../Img/instagram.svg'

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com" target="_new">
                    <YoutubeIcon />   
                </a>
                <a href="https://www.linkedin.com" target="_new">
                    <LinkedinIcon />
                </a>
                <a href="https://www.instagram.com" target="_new()">
                    <InstagramIcon />
                </a>
            </div>
        </footer>        
    )
}

export default Footer;