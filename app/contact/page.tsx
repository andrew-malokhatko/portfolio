"use client"

import { useState } from 'react';
import Image from 'next/image';
import andrew from "@/public/andrew.jpg";

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="w-full mt-[5%] mx-auto px-4 py-8 mb-24">    
      <div className="flex h-full justify-center gap-8">
        <div className='flex flex-col justify-between gap-2 w-5/6 min-h-full'>
        <div className='flex flex-col gap-6 mt-6'>
          <h1 className="w-full text-3xl font-bold">Get in touch</h1>
          <div>
            <p className="mb-4 text-sm text-text-shadow">Have questions? I'd love to hear from you. Send me a message and I'll respond ASAP.</p>
            <Image src={andrew} alt="Andrew Malokhatko" className='rounded-md'/>
          </div>
        </div>
          <div className="space-y-2">
            <p>📍 Bratislava, Slovakia</p>
            <p>✉️ andrew.malokhatko@gmail.com</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-2 w-full">
          <div>
            <label htmlFor="name" className="mb-1 text-text-shadow text-xs">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-background border-border-dark focus-visible:bg-background-secondary outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1 text-text-shadow text-xs">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-background border-border-dark focus-visible:bg-background-secondary outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1 text-text-shadow text-xs">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded h-72 bg-background border-border-dark focus-visible:bg-background-secondary outline-none"
              required
            />
          </div>

          <button 
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-400 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
