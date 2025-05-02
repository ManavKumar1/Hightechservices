"use client";

import { useState } from "react";
import "./Testimonials.scss";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aarav Patel",
      location: "Mumbai",
      rating: 5,
      text: "Excellent service! My Samsung TV was fixed the same day I brought it in. The technician was very knowledgeable and explained everything clearly. Highly recommend!",
      image: "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=",
    },
    {
      name: "Kritika Sharma",
      location: "Delhi",
      rating: 5,
      text: "I was impressed with how quickly they diagnosed the issue with my LG Smart TV. Fair pricing and great customer service. Will definitely use their services again if needed.",
      image: "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=",
    },
    {
      name: "Raghav Nair",
      location: "Bangalore",
      rating: 4,
      text: "They fixed my Sony TV that other repair shops couldn't figure out. The repair was done professionally and has been working perfectly for months now.",
      image: "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=",
    },
    {
      name: "Meera Iyer",
      location: "Chennai",
      rating: 5,
      text: "Great experience from start to finish. They were honest about what needed to be fixed and didn't try to upsell unnecessary services. My TV works like new again!",
      image: "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className='testimonials'>
      <div className='testimonials__container'>
        <div className='testimonials__header'>
          <h2 className='testimonials__title'>What Our Customers Say</h2>
          <p className='testimonials__subtitle'>
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className='testimonials__carousel'>
          <button
            className='testimonials__arrow testimonials__arrow--prev'
            onClick={prevTestimonial}
            aria-label='Previous testimonial'
          >
            <ChevronLeft />
          </button>

          <div className='testimonials__content'>
            {testimonials.map((testimonial, index) => (
              <div
                className={`testimonials__item ${
                  index === currentIndex ? "active" : ""
                }`}
                key={index}
                aria-hidden={index !== currentIndex}
              >
                <div className='testimonials__profile'>
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className='testimonials__image'
                  />
                  <div className='testimonials__info'>
                    <h3 className='testimonials__name'>{testimonial.name}</h3>
                    <p className='testimonials__location'>
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <div className='testimonials__rating'>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`testimonials__star ${
                        i < testimonial.rating ? "filled" : ""
                      }`}
                    />
                  ))}
                </div>
                <p className='testimonials__text'>{testimonial.text}</p>
              </div>
            ))}
          </div>

          <button
            className='testimonials__arrow testimonials__arrow--next'
            onClick={nextTestimonial}
            aria-label='Next testimonial'
          >
            <ChevronRight />
          </button>
        </div>

        <div className='testimonials__indicators'>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`testimonials__indicator ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
