"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main>
  <section className="hero hero-image-bg">
  {/* Dark overlay for readability */}
  <div className="hero-overlay"></div>

  {/* Content */}
  <div className="hero-content">
    <h1>
      Novoz Infinity builds scalable software and SaaS products that help
      businesses grow sustainably.
    </h1>

    <p>
      We design, develop, and deploy modern software solutions and SaaS
      platforms for startups and enterprises.
    </p>

    <div className="hero-actions">
      <a href="/book-demo" className="btn primary">Book a Demo</a>
      <a href="/talk-to-experts" className="btn">Talk to Experts</a>
    </div>
  </div>
</section>



      {/* WHAT WE DO */}
   <section className="what-we-do">
  <div className="what-header reveal">
    <h2>What We Do</h2>
    <p>
      Novoz Infinity builds modern SaaS platforms and custom software solutions
      that solve real business problems and scale with growth.
    </p>
  </div>

  <div className="what-grid">
    <div className="what-card reveal">
      <h3>SaaS Platforms</h3>
      <p>
        We design and build scalable SaaS products with modern architecture,
        cloud readiness, and security-first approach.
      </p>
    </div>

    <div className="what-card reveal">
      <h3>Custom Software</h3>
      <p>
        Tailor-made software solutions aligned exactly to your business needs
        and workflows.
      </p>
    </div>

    <div className="what-card reveal">
      <h3>Product Engineering</h3>
      <p>
        From idea validation to production-ready systems, we engineer products
        built to scale.
      </p>
    </div>
  </div>
</section>



      {/* CORE OFFERINGS */}
      <section className="services">
        <h2 className="reveal">Our Core Offerings</h2>

        <div className="service-grid">
          <div className="service-card reveal">
            <h3>SaaS Products</h3>
            <p>
              Ready-to-deploy platforms like <strong>WAVOZ</strong> for
              automation and CRM.
            </p>
          </div>

          <div className="service-card reveal">
            <h3>Custom Software Development</h3>
            <p>Tailored solutions built specifically for your business.</p>
          </div>

          <div className="service-card reveal">
            <h3>Product Engineering</h3>
            <p>From idea to scalable, production-ready products.</p>
          </div>

          <div className="service-card reveal">
            <h3>Automation & Integrations</h3>
            <p>Reduce manual work and increase operational efficiency.</p>
          </div>
        </div>
      </section>

      {/* WHY NOVOZ */}
<section className="why-novoz reveal">
  <h2>Why Novoz Infinity</h2>

  <div className="why-grid">
    <div className="why-card">
      <h3>Product-First Mindset</h3>
      <p>We focus on building products, not just delivering projects.</p>
    </div>

    <div className="why-card">
      <h3>Built for Scale</h3>
      <p>Architected for performance, security, and future growth.</p>
    </div>

    <div className="why-card">
      <h3>Business-Centric Engineering</h3>
      <p>Technology decisions aligned with real business outcomes.</p>
    </div>

    <div className="why-card">
      <h3>Long-Term Partner</h3>
      <p>We grow with you beyond launch and delivery.</p>
    </div>
  </div>
</section>

    </main>
  );
}
