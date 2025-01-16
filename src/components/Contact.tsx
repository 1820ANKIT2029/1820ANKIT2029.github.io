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
    else console.log(response.status);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>
      
      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Email Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Message Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Message</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="form-control">
          <button
            type="submit"
            className="btn btn-primary w-full"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
