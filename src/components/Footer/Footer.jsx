import { Link } from "react-router-dom";
import "./Footer.scss";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Tv,
} from "lucide-react";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__section'>
          <Link to='/' className='footer__logo'>
            {/* <Tv className='footer__logo-icon' />
             */}
            <img src={logo} className='navbar__logo-img' alt='' />
            <span>Hi-Tech Services</span>
          </Link>
          <p className='footer__description'>
            Professional TV repair services with over 15 years of experience. We
            fix all brands and models.
          </p>
        </div>

        <div className='footer__section'>
          <h3 className='footer__title'>Quick Links</h3>
          <ul className='footer__links'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About Us</Link>
            </li>
            <li>
              <Link to='/services'>Services</Link>
            </li>
            <li>
              <Link to='/testimonials'>Testimonials</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>

        <div className='footer__section'>
          <h3 className='footer__title'>Services</h3>
          <ul className='footer__links'>
            <li>
              <Link to='/services'>LCD/LED Repair</Link>
            </li>
            <li>
              <Link to='/services'>Smart TV Setup</Link>
            </li>
            <li>
              <Link to='/services'>Screen Replacement</Link>
            </li>
            <li>
              <Link to='/services'>Power Issues</Link>
            </li>
            <li>
              <Link to='/services'>Audio Problems</Link>
            </li>
          </ul>
        </div>

        <div className='footer__section'>
          <h3 className='footer__title'>Contact Us</h3>
          <ul className='footer__contact'>
            <li>
              <Phone size={18} />
              {/* <span>+91-9799964120</span> */}
              <a href='tel:+919799964120'>+91-9799964120</a>
            </li>
            <li>
              <Mail size={18} />
              {/* <span>
                help.hitechservices <br />
                @gmail.com
              </span> */}
              <span>
                <a href='mailto:help.hitechservices@gmail.com'>
                  help.hitechservices <br /> @gmail.com
                </a>
              </span>
            </li>
            <li>
              <MapPin size={18} />
              <span>
                Near Samurai Garden Purani <br />
                Chungi Ajmer Rd, Jaipur, Rajasthan
              </span>
            </li>
          </ul>
          <div className='footer__social'>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Facebook size={20} />
            </a>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Instagram size={20} />
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className='footer__bottom'>
        <p>
          &copy; {new Date().getFullYear()} HighTechServices. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
