'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Send, Linkedin, Github } from 'lucide-react';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false); // To track form submission status

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);

    // Set submitted state to true to show feedback message
    setSubmitted(true);

    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50">
      {submitted && (
        <p className="text-green-500 mb-4">
          Thank you for your message! We&apos;ll get back to you soon.
        </p>
      )}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
      <p className="text-lg text-gray-600 mb-8">We&apos;d love to hear from you!</p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone Number</h3>
            <p className="text-gray-600 mb-2">+92 300 2351026</p>
            <Link href="tel:+923002351026" className="inline-flex items-center text-green-600 hover:text-green-700">
              <Phone className="w-5 h-5 mr-2" />
              Call Us
            </Link>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Send a Message</h3>
            <Link href="https://wa.me/923002351026?text=Hello,%20I%20have%20a%20question" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-green-600 hover:text-green-700">
              <Send className="w-5 h-5 mr-2" />
              Send a WhatsApp Message
            </Link>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://www.linkedin.com/in/rizviraza74" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://github.com/Raza1974" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900">
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              {/* Discord Link */}
              <Link href="https://discord.gg/your-discord-invite" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700">
                <Image
                  src="/images/DISCHORD.jpg"
                  alt="Discord"
                  width={30} // Adjust as needed
                  height={30} // Adjust as needed
                />
                <span className="sr-only">Discord</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-green-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-green-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-green-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
