'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';

const services = [
  'Site Analysis, Research and Design',
  'Soft Landscaping',
  'Hard Landscaping',
  'Irrigation Plan and New Installations',
  'Seasonal Garden Maintenance',
];

const contactInfo = [
  {
    icon: '/position_icon.png',
    title: 'Location',
    text: 'Somerset West, Cape Town and surrounds.',
  },
  { icon: '/mobile_icon.png', title: 'Mobile', text: '082 357 0557' },
  { icon: '/envelope_icon.png', title: 'Email', text: 'maria@mkgardens.co.za' },
  {
    icon: '/clock_icon.png',
    title: 'Hours',
    text: 'Mon - Fri: 8am - 5pm\nWeekends and Public Holidays: Expect a response within a few hours',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    phone: '',
    service: '',
    description: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `New Contact Form Submission:\nName: ${formData.name}\nEmail: ${formData.email}\nWhatsApp: ${formData.whatsapp}\nPhone: ${formData.phone}\nService: ${formData.service}\nDescription: ${formData.description}`;
    window.open(
      `https://wa.me/+27823570557?text=${encodeURIComponent(whatsappMessage)}`,
      '_blank'
    );
  };

  return (
    <main className="relative min-h-screen mt-2">
      <div className="max-w-[1440px] mx-auto px-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-[80px] font-bold text-[#742365] mb-8">Contact</h1>
          <p className="text-[21px] text-[#2A2035] max-w-[864px] mx-auto font-medium">
            Get in touch with us to discuss your landscaping needs.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="max-w-[864px] mx-auto mb-24">
          <div className="space-y-6">
            <input
              type="text"
              placeholder="Enter your name"
              required
              className="w-full p-4 border border-[#B2639A] rounded-lg"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <div className="flex gap-6">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-1/2 p-4 border border-[#B2639A] rounded-lg"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <input
                type="tel"
                placeholder="Enter your WhatsApp number"
                required
                className="w-1/2 p-4 border border-[#B2639A] rounded-lg"
                value={formData.whatsapp}
                onChange={(e) =>
                  setFormData({ ...formData, whatsapp: e.target.value })
                }
              />
            </div>

            <input
              type="tel"
              placeholder="Enter contact number"
              required
              className="w-full p-4 border border-[#B2639A] rounded-lg"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />

            <div className="space-y-4">
              <p className="text-[18px] font-medium text-[#2A2035]">
                Select your service needs:
              </p>
              <div className="space-y-3">
                {services.map((service) => (
                  <label key={service} className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="service"
                      value={service}
                      checked={formData.service === service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-4 h-4 text-[#742365] border-[#B2639A]"
                    />
                    <span className="text-[16px] text-[#2A2035]">
                      {service}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <textarea
              placeholder="Enter description of your landscaping needs, your location or any questions"
              required
              rows={6}
              className="w-full p-4 border border-[#B2639A] rounded-lg resize-none"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />

            <button
              type="submit"
              className="w-full h-[69px] bg-[#742365] text-white text-[21px] 
                font-bold rounded-[35px] hover:bg-[#B2639A] transition-colors">
              Submit
            </button>
          </div>
        </form>

        {/* Contact Info Section with Background */}
        <div className="relative">
          <Image
            src="/prot.png"
            alt=""
            width={800}
            height={400}
            className="opacity-10 absolute bottom-0 right-0"
          />

          <div className="relative z-10 grid grid-cols-2 gap-x-16 gap-y-12 max-w-[864px] mx-auto py-16">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="flex flex-col items-center text-center">
                <Image
                  src={info.icon}
                  alt={info.title}
                  width={40}
                  height={40}
                />
                <h3 className="text-[18px] font-bold text-[#742365] mt-4 mb-2">
                  {info.title}
                </h3>
                <p className="text-[16px] text-[#2A2035]">{info.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
