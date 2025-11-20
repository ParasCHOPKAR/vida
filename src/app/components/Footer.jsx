"use client";
import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      {/* TOP SECTION */}
      <div className="footerContainer">

        {/* COLUMN 1 */}
        <div className="footerCol footerAbout">
          <img src="/images/logo_01.jpg" alt="Vida Logo" className="footerLogo" />
          <p className="footerAboutText">
            Vida Life Sciences is committed to improving healthcare through
            innovative medical equipment, advanced solutions, and world-class
            maintenance services.
          </p>

          {/* SOCIAL ICONS */}
          <div className="socialIcons">
            <a href="#">
              <img src="/images/facebook.webp" alt="Facebook" className="social-icon" />
            </a>
            <a href="#">
              <img src="/images/instagram.png" alt="Instagram" className="social-icon" />
            </a>
            <a href="#">
              <img src="/images/linkedin.webp" alt="LinkedIn" className="social-icon" />
            </a>
            <a href="#">
              <img src="/images/whatsapp.jpg" alt="WhatsApp" className="social-icon" />
            </a>
          </div>
        </div>

        {/* COLUMN 2 — QUICK LINKS */}
        <div className="footerCol">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Vida</a></li>
            <li><a href="/products">Our Products</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* COLUMN 3 — PRODUCTS */}
        <div className="footerCol">
          <h3>Products</h3>
          <ul>
            <li><a href="/products/autoclave">Autoclave Horizontal / Vertical</a></li>
            <li><a href="/products/cssd">All CSSD Equipments</a></li>
            <li><a href="/products/cssd-furniture">CSSD Furniture</a></li>
            <li><a href="/products/bedpan">Bed Pan Washer</a></li>
            <li><a href="/products/scrub-unit">Scrub Units</a></li>
            <li><a href="/products/endoscopy">Endoscopy Cabinet</a></li>
            <li><a href="/products/pass-box">Interlocking Pass Box</a></li>
          </ul>
        </div>

        {/* COLUMN 4 — SERVICES */}
        <div className="footerCol">
          <h3>Services</h3>
          <ul>
            <li><a href="/services/workshops">Equipment Maintenance Workshops</a></li>
            <li><a href="/services/amc">AMC / CMC</a></li>
            <li><a href="/services/training">Healthcare Training</a></li>
          </ul>

          <div className="footerContact">
            <p><i className="fas fa-map-marker-alt"></i> Mumbai, Maharashtra</p>
            <p><i className="fas fa-phone-alt"></i> +91 98765 43210</p>
            <p><i className="fas fa-envelope"></i> info@vidalife.in</p>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="footerDivider"></div>

      {/* COPYRIGHT */}
      <div className="footerBottom">
        <p>© {new Date().getFullYear()} Vida Life Sciences. All Rights Reserved.</p>
      </div>

    </footer>
  );
}
