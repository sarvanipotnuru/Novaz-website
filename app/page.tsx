import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="min-h-[85vh] flex items-center bg-gradient-to-b from-primary-light to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-primary mb-6">
            Building Scalable Software & SaaS Solutions
          </h1>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Novoz Infinity is a technology-driven company specializing in custom
            software development and SaaS product development. We help
            businesses and startups turn ideas into reliable, scalable, and
            modern digital solutions.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex justify-center gap-6 mt-10">
           

            <Link
              href="/contact"
              className="px-10 py-3 border-2 border-primary text-primary rounded-xl
                         hover:bg-primary hover:text-white transition font-medium"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Who We Are
          </h2>

          <p className="text-gray-700 max-w-4xl mx-auto">
            At Novoz Infinity, we focus on delivering high-quality software
            solutions that align with business goals. Our team combines
            technical expertise with modern architectures to build products
            that scale with your growth.
          </p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-primary-light py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary text-center mb-14">
            Our Services
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Custom Software Development
              </h3>
              <p className="text-gray-700">
                We build secure, scalable, and high-performance software
                tailored to your business requirements.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                SaaS Product Development
              </h3>
              <p className="text-gray-700">
                From idea to launch, we help you design, develop, and scale
                successful SaaS products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-primary mb-10">
            Why Choose Novoz Infinity
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-gray-700">
            <div className="bg-primary-light rounded-xl p-6">
              Modern Technology Stack
            </div>
            <div className="bg-primary-light rounded-xl p-6">
              Scalable & Secure Solutions
            </div>
            <div className="bg-primary-light rounded-xl p-6">
              Client-Centric Approach
            </div>
            <div className="bg-primary-light rounded-xl p-6">
              Quality & Reliability
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
