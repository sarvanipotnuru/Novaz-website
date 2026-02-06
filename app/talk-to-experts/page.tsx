"use client";

export default function TalkToExperts() {

  // 👇 Submit handler
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      type: "Talk to Experts",
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("✅ Our experts will contact you soon!");
      e.currentTarget.reset();
    } else {
      alert("❌ Something went wrong. Please try again.");
    }
  }

  return (
    <section className="contact">
      <div className="contact-card">
        <h2>Talk to Our Experts</h2>
        <p>
          Share your requirements and our experts will guide you with the
          right technical and business solutions.
        </p>

        {/* 👇 Form */}
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
          />

          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            required
          />

          <textarea
            name="message"
            rows={4}
            placeholder="Tell us about your idea or challenge"
            required
          />

          <button type="submit" className="btn primary">
            Talk to Experts
          </button>
        </form>
      </div>
    </section>
  );
}
