'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }

    try {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('Something went wrong. Please try again later.');
    }
  };

  return (
    <section className="mt-[50px]" id="Contact">
      <div className="bg-gradient-to-r from-pink-100 bg-pink-200 text-white w-full min-h-[200px] font-poppins">
        <h1 className="flex justify-center items-center text-black text-4xl font-bold py-6">
          Contact Me
        </h1>

        <div className="max-w-xl mx-auto p-4">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
            
            <div className="flex flex-col sm:flex-row sm:items-center">
              <label htmlFor="name" className="w-full sm:w-24 font-extrabold text-gray-700 mb-2 sm:mb-0">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Full Name"
                className="flex-grow p-3 border text-black border-gray-300 placeholder-gray-400 rounded-md"
              />
            </div>

           
            <div className="flex flex-col sm:flex-row sm:items-center">
              <label htmlFor="email" className="w-full sm:w-24 font-extrabold text-gray-700 mb-2 sm:mb-0">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="flex-grow p-3 border text-black border-gray-300 placeholder-gray-400 rounded-md"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start">
              <label htmlFor="message" className="w-full sm:w-24 font-extrabold text-gray-700 mb-2 sm:mb-0">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here"
                rows={5}
                className="flex-grow p-3 border text-black border-gray-300 placeholder-gray-400 rounded-md resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>

            {status && <p className="text-center mt-2 text-sm text-gray-700">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
