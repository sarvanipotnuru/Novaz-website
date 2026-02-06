export default function Contact() {
  return (
    <main className="min-h-screen bg-primary-light py-24">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Contact Us
          </h1>
          <p className="text-gray-700">
            Reach out to us for custom software or SaaS product development.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md p-10 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-primary mb-8 text-center">
            Send Us a Message
          </h2>

          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your requirement"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="button"
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition"
            >
              Submit
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-6 text-center">
            * This is a static contact form for demonstration purposes.
          </p>
        </div>

      </div>
    </main>
  );
}
