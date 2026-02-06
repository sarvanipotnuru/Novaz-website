"use client";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-card">
        <h2>Contact Us</h2>
        <p>Let’s discuss how we can help your business grow.</p>

        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="tel" placeholder="Phone Number" required />
          <textarea placeholder="Your Message" rows={4} required />

          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
