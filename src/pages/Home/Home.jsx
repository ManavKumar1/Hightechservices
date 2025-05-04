import Hero from "../../components/Hero/Hero"
import Services from "../../components/Services/Services"
import Brands from "../../components/Brands/Brands"
import Testimonials from "../../components/Testimonials/Testimonials"
import Contact from "../../components/Contact/Contact"
import "./Home.scss"
import { ArrowRight, CheckCircle, Clock, PenToolIcon as Tools } from "lucide-react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className='home'>
      <Hero />

      <section className='home__process'>
        <div className='home__process-container'>
          <div className='home__process-header'>
            <h2 className='home__process-title'>Our Repair Process</h2>
            <p className='home__process-subtitle'>
              We follow a simple and efficient process to get your TV back to
              perfect working condition
            </p>
          </div>

          <div className='home__process-steps'>
            <div className='home__process-step'>
              <div className='home__process-step-number'>1</div>
              <div className='home__process-step-content'>
                <h3>Diagnosis</h3>
                <p>
                  Our technicians will thoroughly examine your TV to identify
                  the exact issue.
                </p>
              </div>
            </div>

            <div className='home__process-step'>
              <div className='home__process-step-number'>2</div>
              <div className='home__process-step-content'>
                <h3>Quote</h3>
                <p>
                  We provide a transparent quote with no hidden fees before
                  proceeding with repairs.
                </p>
              </div>
            </div>

            <div className='home__process-step'>
              <div className='home__process-step-number'>3</div>
              <div className='home__process-step-content'>
                <h3>Repair</h3>
                <p>
                  Our skilled technicians perform the necessary repairs using
                  quality parts.
                </p>
              </div>
            </div>

            <div className='home__process-step'>
              <div className='home__process-step-number'>4</div>
              <div className='home__process-step-content'>
                <h3>Testing</h3>
                <p>
                  We thoroughly test your TV to ensure everything is working
                  perfectly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />

      <section className='home__cta'>
        <div className='home__cta-container'>
          <div className='home__cta-content'>
            <h2 className='home__cta-title'>Ready to Fix Your TV?</h2>
            <p className='home__cta-text'>
              Don't wait any longer. Contact us today for fast, reliable TV
              repair services.
            </p>
            <div className='home__cta-features'>
              <div className='home__cta-feature'>
                <CheckCircle className='home__cta-feature-icon' />
                <span>90-Day Warranty</span>
              </div>
              <div className='home__cta-feature'>
                <Tools className='home__cta-feature-icon' />
                <span>Expert Technicians</span>
              </div>
              <div className='home__cta-feature'>
                <Clock className='home__cta-feature-icon' />
                <span>Quick Turnaround</span>
              </div>
            </div>
            <Link to='/contact' className='home__cta-button'>
              Schedule a Repair <ArrowRight size={16} />
            </Link>
          </div>
          <div className='home__cta-image'>
            <img
              src='https://plus.unsplash.com/premium_photo-1723914092835-1d7a543f3243?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fG1vdGhlcmJvYXJkJTIwcmVwYWlyfGVufDB8fDB8fHww'
              alt='TV Repair'
            />
          </div>
        </div>
      </section>

      <Brands />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default Home
