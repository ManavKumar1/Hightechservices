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
                Ajmer Rd,
                <br />
                Jaipur, Rajasthan
                <br />
                India
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
            <iframe
              title='Ajmer Road Jaipur Location'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.085245176473!2d75.74462807545349!3d26.893809259538294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db40c4844f857%3A0x203e6505a9aaefe4!2sAjmer%20Rd%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1714729300481!5m2!1sen!2sin'
              width='100%'
              height='450'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
