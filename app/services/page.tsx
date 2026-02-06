export default function Services() {
  return (
    <main className="min-h-screen bg-primary-light py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Our Services
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We specialize in building scalable, secure, and high-performance
            software solutions tailored to business needs.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Custom Software Development
            </h2>
            <p className="text-gray-700 mb-4">
              We design and develop custom software solutions tailored to your
              specific business requirements, ensuring scalability, security,
              and performance.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Business-specific software solutions</li>
              <li>Scalable and secure architecture</li>
              <li>Web & enterprise applications</li>
              <li>Ongoing support and maintenance</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              SaaS Product Development
            </h2>
            <p className="text-gray-700 mb-4">
              From idea to launch, we help you build robust SaaS products with
              modern technology, optimized for growth and user experience.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>End-to-end SaaS product development</li>
              <li>Cloud-based and multi-tenant solutions</li>
              <li>Scalable subscription models</li>
              <li>Continuous improvements & scaling</li>
            </ul>
          </div>

        </div>

      </div>
    </main>
  );
}
