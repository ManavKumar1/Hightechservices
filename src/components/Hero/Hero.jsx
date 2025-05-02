import { Link } from "react-router-dom";
import "./Hero.scss";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero__container'>
        <div className='hero__content'>
          <h1 className='hero__title'>Professional TV Repair Services</h1>
          <p className='hero__subtitle'>
            Expert repairs for all TV brands and models with same-day service
            available
          </p>
          <div className='hero__features'>
            <div className='hero__feature'>
              <CheckCircle className='hero__feature-icon' />
              <span>15+ Years Experience</span>
            </div>
            <div className='hero__feature'>
              <CheckCircle className='hero__feature-icon' />
              <span>90-Day Warranty</span>
            </div>
            <div className='hero__feature'>
              <CheckCircle className='hero__feature-icon' />
              <span>All Brands Serviced</span>
            </div>
          </div>
          <div className='hero__cta'>
            <Link to='/contact' className='hero__button hero__button--primary'>
              Book a Repair
            </Link>
            <Link
              to='/services'
              className='hero__button hero__button--secondary'
            >
              Our Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <div className='hero__image'>
          <img
            src='https://placehold.co/600x400/png'
            alt='TV Repair Technician'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
