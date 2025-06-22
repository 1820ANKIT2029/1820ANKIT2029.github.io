import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

  const to = "ankitkumar00002250908@gmail.com"; // <-- your receiving Gmail address
  const subject = encodeURIComponent(`Profolio website visit by ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

  const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;

  window.open(gmailURL, "_blank");
  };

  return (
    <section id="contact" className="py-16">
      <div className="container  mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <div className="max-w-lg mx-auto rounded-lg shadow-md p-8 bg-base-200">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block font-medium mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border rounded-lg"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="w-full font-medium py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </section>
  );
};

export default Contact;
