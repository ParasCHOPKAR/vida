"use client";

import { useState } from "react";
import "./certificate.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function CertificateSection() {
  const [activeImage, setActiveImage] = useState(null);

  // All certificate images
  const certificates = [
    "/certificates/01.jpg",
    "/certificates/02.jpg",
    "/certificates/03.jpg",
    "/certificates/04.jpg",
    "/certificates/05.jpg",
    "/certificates/06.jpg",
    "/certificates/07.jpg",
    "/certificates/08.jpg",
    "/certificates/09.jpg",
    "/certificates/10.jpg",
    "/certificates/11.jpg",
    "/certificates/12.jpg",
    "/certificates/13.jpg",
    "/certificates/14.jpg",
    "/certificates/15.jpg",
    "/certificates/16.jpg",
    "/certificates/17.jpg",
  ];

  return (
    <section className="certificate-section">

      {/* HEADER */}
      <div className="certificate-header">
        <p className="tag">// Certifications</p>
        <h2>
          Our Accreditation & <span>Quality Certificates</span>
        </h2>
        <p className="sub-text">
          VIDA Lifesciences ensures quality with globally recognized certifications.
        </p>
      </div>

      {/* SLIDER */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        loop={true}
        slidesPerView={4}
        spaceBetween={25}
        breakpoints={{
          1200: { slidesPerView: 4 },
          992: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
        }}
        className="certificate-slider"
      >
        {certificates.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="certificate-card-slider"
              onClick={() => setActiveImage(img)}
            >
              <img src={img} alt={`Certificate ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* POPUP MODAL */}
      {activeImage && (
        <div className="certificate-modal" onClick={() => setActiveImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            
            {/* CLOSE BUTTON */}
            <button className="close-btn" onClick={() => setActiveImage(null)}>
              ✕
            </button>

            {/* BIG IMAGE */}
            <img src={activeImage} alt="Certificate Preview" className="modal-image" />
          </div>
        </div>
      )}

    </section>
  );
}
