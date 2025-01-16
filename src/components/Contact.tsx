import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  // const formId = import.meta.env.REACT_APP_FORMID; // Replace with your Form ID
  // const apiKey = import.meta.env.REACT_APP_APIKEY; // Replace with your API Key
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // try {
    //   const response = await fetch(`https://forms.googleapis.com/v1/forms/${formId}/responses:create?key=${apiKey}`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       "itemResponses": [
    //         {
    //           "item": {
    //             "title": "Name" // Make sure this title matches your Google form title exactly
    //           },
    //           "response": name
    //         },
    //         {
    //           "item": {
    //             "title": "Email" // Make sure this title matches your Google form title exactly
    //           },
    //           "response": email
    //         },
    //         {
    //           "item": {
    //             "title": "Message" // Make sure this title matches your Google form title exactly
    //           },
    //           "response": message
    //         }
    //       ]
    //     }),
    //   });

    //   if (!response.ok) {
    //     const errorData = await response.json();
    //     throw new Error(`HTTP error ${response.status}: ${errorData.error.message}`);
    //   }

    //   toast.success("Message sent successfully!");
    //   setName('');
    //   setEmail('');
    //   setMessage('');
    // } catch (error) {
    //   console.error('Error submitting form:', error);
    //   toast.error("An error occurred while sending the message.");
    // }

    toast.error("Contact form not working Now!!.");
  };

  return (
    <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center mb-8">Contact Me</h2>
        <div className="max-w-lg mx-auto bg-white dark:bg-gray-700 rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Name</label>
              <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-100" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-100" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Message</label>
              <textarea id="message" rows={4} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-100" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300">Send Message</button>
          </form>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
    </section>
  );
};

export default Contact;