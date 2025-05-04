"use client";

import "./Testimonials.scss";
import { Star, MessageSquare, Quote } from "lucide-react";
import { useState } from "react";

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      location: "Mumbai",
      rating: 5,
      date: "March 15, 2023",
      text: "Excellent service! My Samsung TV was fixed the same day I brought it in. The technician was very knowledgeable and explained everything clearly. The price was fair and the repair has been holding up perfectly. Highly recommend!",
      image: "https://placehold.co/600x400/png",
      service: "LCD Screen Repair",
    },
    {
      name: "Priya Menon",
      location: "Bangalore",
      rating: 5,
      date: "February 3, 2023",
      text: "I was impressed with how quickly they diagnosed the issue with my LG Smart TV. Fair pricing and great customer service. The technician was professional and fixed the problem in less than an hour. Will definitely use their services again if needed.",
      image: "https://placehold.co/600x400/png",
      service: "Smart TV Setup",
    },
    {
      name: "Amit Verma",
      location: "Delhi",
      rating: 4,
      date: "April 22, 2023",
      text: "They fixed my Sony TV that other repair shops couldn't figure out. The repair was done professionally and has been working perfectly for months now. The only reason for 4 stars instead of 5 is that it took a bit longer than expected, but the quality of work was excellent.",
      image: "https://placehold.co/600x400/png",
      service: "Power Supply Repair",
    },
    {
      name: "Sneha Reddy",
      location: "Hyderabad",
      rating: 5,
      date: "January 17, 2023",
      text: "Great experience from start to finish. They were honest about what needed to be fixed and didn't try to upsell unnecessary services. My TV works like new again! The technician was friendly and explained everything in terms I could understand.",
      image: "https://placehold.co/600x400/png",
      service: "Audio Repair",
    },
    {
      name: "Vikram Singh",
      location: "Chandigarh",
      rating: 5,
      date: "May 10, 2023",
      text: "I had a complicated issue with my Panasonic TV and was worried it might not be fixable. The team at HighTechServices not only fixed it but also gave me tips on how to prevent similar issues in the future. Very knowledgeable and professional service.",
      image: "https://placehold.co/600x400/png",
      service: "Screen Calibration",
    },
    {
      name: "Anjali Desai",
      location: "Ahmedabad",
      rating: 4,
      date: "June 5, 2023",
      text: "They repaired my TCL TV quickly and at a reasonable price. The technician was professional and explained what was wrong in detail. I appreciate their transparency and would use their services again.",
      image: "https://placehold.co/600x400/png",
      service: "Connectivity Issues",
    },
    {
      name: "Rohan Kapoor",
      location: "Pune",
      rating: 5,
      date: "July 12, 2023",
      text: "Outstanding service! My TV had been having issues for months, and I was considering buying a new one. The technician identified and fixed the problem in no time, saving me a lot of money. Extremely satisfied with the service.",
      image: "https://placehold.co/600x400/png",
      service: "Main Board Repair",
    },
    {
      name: "Neha Joshi",
      location: "Kolkata",
      rating: 5,
      date: "August 28, 2023",
      text: "I had my Samsung Smart TV set up by HighTechServices, and they did an excellent job. They connected all my devices, set up my streaming services, and even showed me how to use some features I didn't know about. Highly recommend their setup service!",
      image: "https://placehold.co/600x400/png",
      service: "Smart TV Setup",
    },
  ];

  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTestimonials = testimonials.filter((testimonial) => {
    const matchesFilter =
      filter === "all" ||
      testimonial.service.toLowerCase().includes(filter.toLowerCase());
    const matchesSearch =
      testimonial.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      testimonial.service.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const services = [...new Set(testimonials.map((t) => t.service))];

  return (
    <div className='testimonials-page'>
      <section className='testimonials-page__hero'>
        <div className='testimonials-page__hero-container'>
          <h1 className='testimonials-page__hero-title'>
            Customer Testimonials
          </h1>
          <p className='testimonials-page__hero-subtitle'>
            See what our satisfied customers have to say about our TV repair
            services
          </p>
        </div>
      </section>

      <section className='testimonials-page__content'>
        <div className='testimonials-page__content-container'>
          <div className='testimonials-page__filters'>
            <div className='testimonials-page__filter-group'>
              <label htmlFor='service-filter'>Filter by Service:</label>
              <select
                id='service-filter'
                className='testimonials-page__select'
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value='all'>All Services</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div className='testimonials-page__filter-group'>
              <label htmlFor='search'>Search:</label>
              <input
                type='text'
                id='search'
                className='testimonials-page__search'
                placeholder='Search testimonials...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className='testimonials-page__stats'>
            <div className='testimonials-page__stat'>
              <div className='testimonials-page__stat-number'>
                {testimonials.length}
              </div>
              <div className='testimonials-page__stat-label'>Total Reviews</div>
            </div>

            <div className='testimonials-page__stat'>
              <div className='testimonials-page__stat-number'>
                {(
                  testimonials.reduce((acc, curr) => acc + curr.rating, 0) /
                  testimonials.length
                ).toFixed(1)} ⭐️
              </div>
              <div className='testimonials-page__stat-label'>
                Average Rating
              </div>
            </div>

            <div className='testimonials-page__stat'>
              <div className='testimonials-page__stat-number'>
                {testimonials.filter((t) => t.rating === 5).length}
              </div>
              <div className='testimonials-page__stat-label'>
                5-Star Reviews
              </div>
            </div>
          </div>

          <div className='testimonials-page__grid'>
            {filteredTestimonials.length > 0 ? (
              filteredTestimonials.map((testimonial, index) => (
                <div className='testimonials-page__card' key={index}>
                  <div className='testimonials-page__card-header'>
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className='testimonials-page__card-image'
                    />
                    <div className='testimonials-page__card-info'>
                      <h3 className='testimonials-page__card-name'>
                        {testimonial.name}
                      </h3>
                      <p className='testimonials-page__card-location'>
                        {testimonial.location}
                      </p>
                      <div className='testimonials-page__card-service'>
                        {testimonial.service}
                      </div>
                    </div>
                  </div>

                  <div className='testimonials-page__card-rating'>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`testimonials-page__card-star ${
                          i < testimonial.rating ? "filled" : ""
                        }`}
                      />
                    ))}
                    <span className='testimonials-page__card-date'>
                      {testimonial.date}
                    </span>
                  </div>

                  <div className='testimonials-page__card-content'>
                    <Quote className='testimonials-page__card-quote' />
                    <p className='testimonials-page__card-text'>
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className='testimonials-page__no-results'>
                <MessageSquare size={48} />
                <h3>No testimonials found</h3>
                <p>Try adjusting your filters or search term</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
