import "./About.scss";
import { CheckCircle, Award, Users, Clock } from "lucide-react";

const teamMembers = [
  {
    name: "Ravi Mehra",
    position: "Founder & Lead Technician",
    bio: "With over 20 years of experience in TV and electronics repair, Ravi leads our team with unmatched technical knowledge and commitment to quality.",
    image: "https://placehold.co/600x400/png",
  },
  {
    name: "Anita Iyer",
    position: "Smart TV Specialist",
    bio: "Anita is certified by multiple leading TV brands and has 12+ years of experience in configuring and repairing Smart TVs.",
    image: "https://placehold.co/600x400/png",
  },
  {
    name: "Kunal Sharma",
    position: "Electronics Technician",
    bio: "Kunal specializes in chip-level diagnostics and PCB repairs, with a background in electrical engineering from IIT Delhi.",
    image: "https://placehold.co/600x400/png",
  },
  {
    name: "Pooja Deshmukh",
    position: "Customer Service Manager",
    bio: "Pooja ensures smooth coordination between technicians and customers, delivering a professional and friendly experience every time.",
    image: "https://placehold.co/600x400/png",
  },
];

const About = () => {
  return (
    <div className='about'>
      <section className='about__hero'>
        <div className='about__hero-container'>
          <h1 className='about__hero-title'>About HighTechServices</h1>
          <p className='about__hero-subtitle'>
            Your trusted partner for professional TV repair services across
            India
          </p>
        </div>
      </section>

      <section className='about__story'>
        <div className='about__story-container'>
          <div className='about__story-content'>
            <h2 className='about__story-title'>Our Story</h2>
            <p className='about__story-text'>
              HighTechServices was founded in 2005 in Pune with a mission to
              provide affordable and reliable TV repair services across India.
              What started as a two-person operation has now expanded to major
              cities like Mumbai, Delhi, and Bangalore.
            </p>
            <p className='about__story-text'>
              With over 15 years of experience, our team of certified
              technicians can repair all types of TVs, from CRT to OLED and
              Smart TVs. We're committed to delivering high-quality service and
              complete customer satisfaction.
            </p>
            <p className='about__story-text'>
              We understand how important your TV is in your daily life, which
              is why we prioritize quick turnaround times without compromising
              quality.
            </p>
          </div>
          <div className='about__story-image'>
            <img
              src='https://images.unsplash.com/photo-1642229408339-572fa3328d10?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzMHx8fGVufDB8fHx8fA%3D%3D'
              alt='HighTechServices workshop'
            />
          </div>
        </div>
      </section>

      <section className='about__values'>
        <div className='about__values-container'>
          <div className='about__values-header'>
            <h2 className='about__values-title'>Our Values</h2>
            <p className='about__values-subtitle'>
              The principles that guide our business and ensure we deliver the
              best service
            </p>
          </div>

          <div className='about__values-grid'>
            <div className='about__values-item'>
              <div className='about__values-icon'>
                <CheckCircle />
              </div>
              <h3 className='about__values-item-title'>Quality</h3>
              <p className='about__values-item-text'>
                We use only genuine replacement parts and follow best practices
                to ensure lasting repairs.
              </p>
            </div>

            <div className='about__values-item'>
              <div className='about__values-icon'>
                <Award />
              </div>
              <h3 className='about__values-item-title'>Integrity</h3>
              <p className='about__values-item-text'>
                Honest diagnostics, no hidden charges, and clear communication
                at every step.
              </p>
            </div>

            <div className='about__values-item'>
              <div className='about__values-icon'>
                <Users />
              </div>
              <h3 className='about__values-item-title'>Customer Focus</h3>
              <p className='about__values-item-text'>
                Every decision we make starts with what's best for the customer.
              </p>
            </div>

            <div className='about__values-item'>
              <div className='about__values-icon'>
                <Clock />
              </div>
              <h3 className='about__values-item-title'>Efficiency</h3>
              <p className='about__values-item-text'>
                We work fast and smart to minimize downtime for our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='about__team'>
        <div className='about__team-container'>
          <div className='about__team-header'>
            <h2 className='about__team-title'>Meet Our Team</h2>
            <p className='about__team-subtitle'>
              Our certified technicians are passionate about technology and
              customer care
            </p>
          </div>

          <div className='about__team-grid'>
            {teamMembers.map((member, index) => (
              <div key={index} className='about__team-member'>
                <div className='about__team-member-image'>
                  <img src={member.image} alt={member.name} />
                </div>
                <h3 className='about__team-member-name'>{member.name}</h3>
                <p className='about__team-member-position'>{member.position}</p>
                <p className='about__team-member-bio'>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
