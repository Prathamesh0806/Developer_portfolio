import "./Testimonials.css";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination
} from "swiper/modules";

import {
  FaStar,
  FaQuoteLeft
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/data/testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <section
      id="testimonials"
      className="testimonials section"
    >
      <div className="container">

        <div className="section-title">
          <h2>
            Client <span>Love</span>
          </h2>

          <p>
            Hear from the brands and founders
            I've helped grow.
          </p>
        </div>

        <Swiper
          modules={[
            Autoplay,
            Navigation,
            Pagination
          ]}
          autoplay={{
            delay: 5000
          }}
          navigation
          pagination={{
            clickable: true
          }}
          loop
          className="testimonial-swiper"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="testimonial-card">

                <FaQuoteLeft
                  className="quote-icon"
                />

                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <p className="review">
                  "{item.review}"
                </p>

                <div className="client-info">
                  <h3>{item.name}</h3>
                  <span>{item.company}</span>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Testimonials;