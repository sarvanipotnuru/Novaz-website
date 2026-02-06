export default function About() {
  return (
    <main className="min-h-screen bg-primary-light py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">
            About Novoz Infinity
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Novoz Infinity is a technology-driven company focused on delivering
            modern, scalable, and reliable software solutions for businesses
            and startups.
          </p>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Who We Are */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Who We Are
            </h2>
            <p className="text-gray-700">
              We are a team of passionate developers and problem solvers who
              specialize in building custom software and SaaS products. Our
              goal is to help organizations transform ideas into scalable
              digital solutions using modern technologies.
            </p>
          </div>

          {/* What We Do */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              What We Do
            </h2>
            <p className="text-gray-700">
              We design, develop, and deliver high-quality software solutions,
              focusing on performance, security, and user experience. Our
              services are tailored to meet unique business requirements.
            </p>
          </div>

          {/* Our Vision */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700">
              Our vision is to empower businesses through technology by creating
              innovative software solutions that drive growth, efficiency, and
              long-term success.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Why Choose Us
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Focus on scalable and modern solutions</li>
              <li>Expertise in custom software & SaaS products</li>
              <li>Client-centric development approach</li>
              <li>Commitment to quality and reliability</li>
            </ul>
          </div>

        </div>

      </div>
    </main>
  );
}
