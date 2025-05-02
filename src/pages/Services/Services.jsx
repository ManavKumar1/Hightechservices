import "./Services.scss"
import { Tv, Settings, Zap, Volume2, Smartphone, Wrench, Monitor, Wifi, HardDrive, Shield } from "lucide-react"
import { Link } from "react-router-dom"

const ServicesPage = () => {
  const services = [
    {
      icon: <Tv />,
      title: "LCD/LED TV Repair",
      description: "Expert repair for all LCD and LED TV issues including screen damage, backlight problems, and more.",
      details: [
        "Screen replacement",
        "Backlight repair",
        "Power board issues",
        "Main board repair",
        "T-Con board replacement",
      ],
    },
    {
      icon: <Settings />,
      title: "Smart TV Setup",
      description:
        "Professional setup and configuration of your Smart TV, including network connection and app installation.",
      details: [
        "Network configuration",
        "App installation and setup",
        "Firmware updates",
        "Account setup",
        "Streaming service configuration",
      ],
    },
    {
      icon: <Zap />,
      title: "Power Issues",
      description:
        "Fixing power-related problems such as TVs not turning on, random shutdowns, or standby light issues.",
      details: [
        "Power supply repair",
        "Capacitor replacement",
        "Voltage regulator issues",
        "Standby light problems",
        "Random shutdown fixes",
      ],
    },
    {
      icon: <Volume2 />,
      title: "Audio Problems",
      description: "Resolving sound issues including no audio, distorted sound, or speaker damage for all TV models.",
      details: [
        "Speaker replacement",
        "Audio board repair",
        "Sound distortion fixes",
        "Audio jack repair",
        "Bluetooth audio setup",
      ],
    },
    {
      icon: <Smartphone />,
      title: "Remote Control Repair",
      description: "Fixing or replacing damaged remote controls and programming universal remotes for your TV.",
      details: [
        "Button repair",
        "Battery contact cleaning",
        "IR sensor replacement",
        "Universal remote programming",
        "Smart remote setup",
      ],
    },
    {
      icon: <Wrench />,
      title: "Preventive Maintenance",
      description: "Regular maintenance service to extend the life of your TV and prevent future problems.",
      details: ["Dust removal", "Component inspection", "Heat sink cleaning", "Ventilation check", "Software updates"],
    },
    {
      icon: <Monitor />,
      title: "Screen Calibration",
      description: "Professional calibration of your TV screen for optimal color accuracy, contrast, and brightness.",
      details: [
        "Color calibration",
        "Contrast adjustment",
        "Brightness optimization",
        "Viewing angle improvement",
        "HDR setup",
      ],
    },
    {
      icon: <Wifi />,
      title: "Connectivity Issues",
      description: "Resolving connectivity problems with Wi-Fi, Bluetooth, HDMI, and other connection types.",
      details: [
        "Wi-Fi troubleshooting",
        "HDMI port repair",
        "Bluetooth connectivity",
        "USB port repair",
        "Network adapter issues",
      ],
    },
    {
      icon: <HardDrive />,
      title: "Software Updates",
      description: "Installing the latest firmware and software updates to improve your TV's performance and features.",
      details: [
        "Firmware installation",
        "Operating system updates",
        "App updates",
        "Bug fixes",
        "Feature enhancements",
      ],
    },
    {
      icon: <Shield />,
      title: "Extended Warranty",
      description: "Comprehensive warranty plans to protect your TV against future issues and provide peace of mind.",
      details: [
        "90-day repair warranty",
        "1-year extended plans",
        "2-year protection plans",
        "Parts and labor coverage",
        "Priority service",
      ],
    },
  ]

  return (
    <div className="services-page">
      <section className="services-page__hero">
        <div className="services-page__hero-container">
          <h1 className="services-page__hero-title">Our Services</h1>
          <p className="services-page__hero-subtitle">
            Comprehensive TV repair and maintenance services for all brands and models
          </p>
        </div>
      </section>

      <section className="services-page__content">
        <div className="services-page__content-container">
          <div className="services-page__intro">
            <h2 className="services-page__intro-title">Professional TV Repair Services</h2>
            <p className="services-page__intro-text">
              At HighTechServices, we offer a wide range of professional TV repair and maintenance services. Our team of
              certified technicians has the expertise to handle all types of TV issues, from simple fixes to complex
              repairs. We service all major brands and models, ensuring your entertainment system is back up and running
              in no time.
            </p>
            <p className="services-page__intro-text">
              All our repairs come with a 90-day warranty, and we use only high-quality replacement parts to ensure
              lasting results. Whether you need a screen replacement, power supply repair, or help setting up your Smart
              TV, we've got you covered.
            </p>
          </div>

          <div className="services-page__grid">
            {services.map((service, index) => (
              <div className="services-page__card" key={index}>
                <div className="services-page__card-header">
                  <div className="services-page__card-icon">{service.icon}</div>
                  <h3 className="services-page__card-title">{service.title}</h3>
                </div>
                <p className="services-page__card-description">{service.description}</p>
                <ul className="services-page__card-details">
                  {service.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="services-page__cta">
            <div className="services-page__cta-content">
              <h2 className="services-page__cta-title">Need a TV Repair?</h2>
              <p className="services-page__cta-text">
                Contact us today to schedule a repair or get a free consultation from our expert technicians.
              </p>
              <Link to="/contact" className="services-page__cta-button">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
