import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (response.ok) setSubmitted(true);
  };

  return (
    <section id="contact" className="h-screen py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">📬 Contact Me</h2>

        {submitted ? (
          <p className="text-green-500 mt-4">Thank you! I will get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 max-w-lg mx-auto">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              onChange={handleChange}
              className="w-full p-3 mb-3 border rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              onChange={handleChange}
              className="w-full p-3 mb-3 border rounded"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              required
              onChange={handleChange}
              className="w-full p-3 mb-3 border rounded"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-500 transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
