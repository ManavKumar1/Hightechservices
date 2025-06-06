"use client";

import React, { useRef, useState } from "react";
import "./Contact.scss";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_9rd9yv3",
        "template_h6cv8dk",
        formRef.current,
        "4-IMH60Z4tknGjSjp"
      )
      .then(
        (result) => {
          setIsSubmitting(false);
          setSubmitMessage(
            "Thank you! Your message has been sent successfully."
          );
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });

          setTimeout(() => setSubmitMessage(""), 5000);
        },
        (error) => {
          setIsSubmitting(false);
          setSubmitMessage("Oops! Something went wrong. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <section className='contact'>
      <div className='contact__container'>
        <div className='contact__header'>
          <h2 className='contact__title'>Contact Us</h2>
          <p className='contact__subtitle'>
            Have questions or need a repair? Get in touch with our team today.
          </p>
        </div>

        <div className='contact__content'>
          <div className='contact__info'>
            <h3 className='contact__info-title'>Get In Touch</h3>
            <p className='contact__info-text'>
              We're here to help with all your TV repair needs. Contact us for a
              free consultation or to schedule a repair.
            </p>

            <div className='contact__info-items'>
              <div className='contact__info-item'>
                <div className='contact__info-icon'>
                  <Phone />
                </div>
                <div className='contact__info-content'>
                  <h4>Phone</h4>
                  {/* <p>+91-9799964120</p> */}
                  <a href='tel:+919799964120'>+91-9799964120</a>
                </div>
              </div>

              <div className='contact__info-item'>
                <div className='contact__info-icon'>
                  <Mail />
                </div>
                <div className='contact__info-content'>
                  <h4>Email</h4>
                  {/* <p>help.hitechservices@gmail.com</p> */}
                  <p className='contact-page__info-text'>
                    <a href='mailto:help.hitechservices@gmail.com'>
                      help.hitechservices@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className='contact__info-item'>
                <div className='contact__info-icon'>
                  <MapPin />
                </div>
                <div className='contact__info-content'>
                  <h4>Address</h4>
                  <p>
                    Near Samurai Garden Purani Chungi
                    <br />
                    Ajmer Rd, Jaipur, Rajasthan
                  </p>
                </div>
              </div>

              <div className='contact__info-item'>
                <div className='contact__info-icon'>
                  <Clock />
                </div>
                <div className='contact__info-content'>
                  <h4>Business Hours</h4>
                  <p>Mon-Fri: 9AM - 6PM</p>
                  <p>Sat: 10AM - 4PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className='contact__form-container'>
            <form
              ref={formRef}
              className='contact__form'
              onSubmit={handleSubmit}
            >
              <div className='contact__form-group'>
                <label htmlFor='name'>Full Name</label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='contact__form-row'>
                <div className='contact__form-group'>
                  <label htmlFor='email'>Email</label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className='contact__form-group'>
                  <label htmlFor='phone'>Phone</label>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className='contact__form-group'>
                <label htmlFor='subject'>Subject</label>
                <select
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value=''>Select a subject</option>
                  <option value='Repair Quote'>Repair Quote</option>
                  <option value='Technical Support'>Technical Support</option>
                  <option value='General Inquiry'>General Inquiry</option>
                  <option value='Feedback'>Feedback</option>
                </select>
              </div>

              <div className='contact__form-group'>
                <label htmlFor='message'>Message</label>
                <textarea
                  id='message'
                  name='message'
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type='submit'
                className='contact__form-button'
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}{" "}
                {!isSubmitting && <Send size={16} />}
              </button>

              {submitMessage && (
                <div className='contact__form-message'>{submitMessage}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
