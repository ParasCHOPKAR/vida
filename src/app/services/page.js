"use client";

import "./services.css";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="services-page">

      {/* ================= HERO SECTION ================= */}
      <section className="hero-section">
        <div className="hero-left">
          <p className="hero-tag">  VIDA Lifesciences Services</p>

          <h1>
            Where Healthcare Technology<br />
            Meets Precision & Reliability
          </h1>

          <p className="hero-subtext">
            VIDA Lifesciences ensures world-class support through expert workshops,
            maintenance programs, and certified training designed for modern
            healthcare environments.
          </p>

        </div>

        <div className="hero-right">
          <img src="/images/hero_01.jpg" alt="Healthcare Team" />
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="service-wrapper">

        <div className="service-header">
          <p className="section-tag">   Our Services</p>
          <h2>Services We Provide to <span>Elevate Healthcare Standards</span></h2>
        </div>

        <div className="services-grid">

          {/* CARD 1 */}
          <div className="service-card">
            <div className="service-icon">🛠️</div>
            <h3>Equipment Maintenance Workshops</h3>
            <p>
              Hands-on practical sessions covering maintenance, sterilization cycles,
              troubleshooting, and safe equipment operation.
            </p>
            <Link href="/contact" className="learn-more">Learn More →</Link>
          </div>

          {/* CARD 2 */}
          <div className="service-card">
            <div className="service-icon">🔧</div>
            <h3>AMC / CMC Services</h3>
            <p>
              Comprehensive annual maintenance ensuring equipment reliability,
              performance, and long product lifespan.
            </p>
            <Link href="/contact" className="learn-more">Learn More →</Link>
          </div>

          {/* CARD 3 */}
          <div className="service-card">
            <div className="service-icon">🏥</div>
            <h3>Healthcare Training</h3>
            <p>
              Certified training programs for hospital staff covering sterilization
              standards, infection control, and workflow optimization.
            </p>
            <Link href="/contact" className="learn-more">Learn More →</Link>
          </div>

        </div>
      </section>
    </main>
  );
}
