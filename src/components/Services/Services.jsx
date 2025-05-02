import "./Services.scss"
import { Tv, Settings, Zap, Volume2, Smartphone, Wrench } from "lucide-react"

const Services = () => {
  const services = [
    {
      icon: <Tv />,
      title: "LCD/LED TV Repair",
      description: "Expert repair for all LCD and LED TV issues including screen damage, backlight problems, and more.",
    },
    {
      icon: <Settings />,
      title: "Smart TV Setup",
      description:
        "Professional setup and configuration of your Smart TV, including network connection and app installation.",
    },
    {
      icon: <Zap />,
      title: "Power Issues",
      description:
        "Fixing power-related problems such as TVs not turning on, random shutdowns, or standby light issues.",
    },
    {
      icon: <Volume2 />,
      title: "Audio Problems",
      description: "Resolving sound issues including no audio, distorted sound, or speaker damage for all TV models.",
    },
    {
      icon: <Smartphone />,
      title: "Remote Control Repair",
      description: "Fixing or replacing damaged remote controls and programming universal remotes for your TV.",
    },
    {
      icon: <Wrench />,
      title: "Preventive Maintenance",
      description: "Regular maintenance service to extend the life of your TV and prevent future problems.",
    },
  ]

  return (
    <section className="services">
      <div className="services__container">
        <div className="services__header">
          <h2 className="services__title">Our Services</h2>
          <p className="services__subtitle">
            We offer a comprehensive range of TV repair and maintenance services for all brands and models
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <div className="services__card" key={index}>
              <div className="services__icon">{service.icon}</div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
