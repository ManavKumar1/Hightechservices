import { Link } from "react-router-dom";
import "./Hero.scss";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroimage from "../../assets/heroimage.avif";
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
            src={heroimage}
            // src='https://images.unsplash.com/photo-1646821804389-9778ce2a4fd7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='TV Repair Technician'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
