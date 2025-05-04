import Contact from "../../components/Contact/Contact";
import "./Contact.scss";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const ContactPage = () => {
  return (
    <div className='contact-page'>
      <section className='contact-page__hero'>
        <div className='contact-page__hero-container'>
          <h1 className='contact-page__hero-title'>Contact Us</h1>
          <p className='contact-page__hero-subtitle'>
            Get in touch with our team for all your TV repair needs
          </p>
        </div>
      </section>

      <section className='contact-page__info'>
        <div className='contact-page__info-container'>
          <div className='contact-page__info-grid'>
            <div className='contact-page__info-card'>
              <div className='contact-page__info-icon'>
                <MapPin />
              </div>
              <h3 className='contact-page__info-title'>Our Location</h3>
              <p className='contact-page__info-text'>
                123 Repair Street
                <br />
                Tech City, TC 12345
                <br />
                United States
              </p>
            </div>

            <div className='contact-page__info-card'>
              <div className='contact-page__info-icon'>
                <Clock />
              </div>
              <h3 className='contact-page__info-title'>Business Hours</h3>
              <p className='contact-page__info-text'>
                Monday - Friday: 9AM - 6PM
                <br />
                Saturday: 10AM - 4PM
                <br />
                Sunday: Closed
              </p>
            </div>

            <div className='contact-page__info-card'>
              <div className='contact-page__info-icon'>
                <Phone />
              </div>
              <h3 className='contact-page__info-title'>Phone</h3>
              <p className='contact-page__info-text'>Main: +91-9799964120</p>
            </div>

            <div className='contact-page__info-card'>
              <div className='contact-page__info-icon'>
                <Mail />
              </div>
              <h3 className='contact-page__info-title'>Email</h3>
              <p className='contact-page__info-text'>
                info@hightechservices.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <Contact />

      <section className='contact-page__map'>
        <div className='contact-page__map-container'>
          <h2 className='contact-page__map-title'>Find Us</h2>
          <div className='contact-page__map-frame'>
            {/* Placeholder for map - in a real project, you would embed a Google Map or similar */}
            <div className='contact-page__map-placeholder'>
              <MapPin size={48} />
              <p>Map Placeholder</p>
              <p>123 Repair Street, Tech City, TC 12345</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
