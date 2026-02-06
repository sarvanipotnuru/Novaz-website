export default function Services() {
  return (
    <main className="services-page">
      {/* Header */}
      <section className="services-hero reveal">
        <h1>Our Services</h1>
        <p>
          Novoz Infinity specializes in building scalable software solutions
          and SaaS products that help businesses streamline operations,
          improve efficiency, and support long-term growth.
        </p>
      </section>

      {/* Services */}
      <section className="services-section">
        {/* Custom Software Development */}
        <div className="service-card reveal">
          <h2>Custom Software Development</h2>
          <p>
            We design and develop custom software solutions tailored to the
            unique requirements of each business. Our focus is on delivering
            reliable, secure, and scalable applications that align with
            organizational goals.
          </p>

          <ul>
            <li>Requirement analysis and solution planning</li>
            <li>Custom application design and development</li>
            <li>Scalable and secure system architecture</li>
            <li>Testing, deployment, and maintenance</li>
            <li>Ongoing support and enhancements</li>
          </ul>
        </div>

        {/* SaaS Product Development */}
        <div className="service-card reveal">
          <h2>SaaS Product Development</h2>
          <p>
            We help businesses and startups build end-to-end SaaS products,
            from concept to deployment. Our SaaS solutions are designed for
            scalability, performance, and ease of use.
          </p>

          <ul>
            <li>Product ideation and technical architecture</li>
            <li>Multi-tenant SaaS application development</li>
            <li>Subscription-based and role-based systems</li>
            <li>Cloud-ready and scalable infrastructure</li>
            <li>Continuous improvement and product scaling</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
