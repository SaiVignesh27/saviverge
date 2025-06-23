import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Clock, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const PHONE = import.meta.env.VITE_PUBLIC_PHONE;
const EMAIL = import.meta.env.VITE_PUBLIC_EMAIL;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;

emailjs.init(EMAILJS_PUBLIC_KEY);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    brandName: '',
    email: '',
    phone: '',
    websiteType: '',
    budgetRange: '',
    hasAssets: false,
    deadline: '',
    requirements: ''
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name: formData.name,
        brandName: formData.brandName || 'N/A',
        email: formData.email,
        phone: formData.phone,
        websiteType: formData.websiteType,
        budgetRange: formData.budgetRange,
        hasAssets: formData.hasAssets ? 'Yes' : 'No',
        deadline: formData.deadline || 'Not specified',
        requirements: formData.requirements
      });
      alert('🎉 Thank you! Your project details have been submitted successfully.');
      setFormData({
        name: '',
        brandName: '',
        email: '',
        phone: '',
        websiteType: '',
        budgetRange: '',
        hasAssets: false,
        deadline: '',
        requirements: ''
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      alert('❌ Something went wrong. Please try again or contact us via WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  const websiteTypes = [
    'Static Website',
    'Dynamic Website',
    'E-commerce Store',
    'Custom Web Application',
    'Portfolio Website',
    'Blog/News Website',
    'Other'
  ];

  const budgetRanges = [
    '₹5,000 - ₹15,000',
    '₹15,000 - ₹30,000',
    '₹30,000 - ₹75,000',
    '₹75,000 - ₹1,50,000',
    '₹1,50,000+',
    'Not Sure'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-800 to-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your vision into reality? Let's start a conversation about your project
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gold-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-200 transition-colors duration-300">
                <Phone className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-2">Phone</h3>
              <a href={`tel:${PHONE}`} className="text-gray-600 hover:text-gold-600 transition-colors duration-200">
                +91-868XXXXXX3
              </a>
            </div>

            <div className="text-center group">
              <div className="bg-gold-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-200 transition-colors duration-300">
                <Mail className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-2">Email</h3>
              <a href={`mailto:${EMAIL}`} className="text-gray-600 hover:text-gold-600 transition-colors duration-200">
                {EMAIL}
              </a>
            </div>

            <div className="text-center group">
              <div className="bg-gold-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-200 transition-colors duration-300">
                <MessageCircle className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-2">WhatsApp</h3>
              <a 
                href={`https://wa.me/${PHONE.replace(/\s+/g, '')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gold-600 transition-colors duration-200"
              >
                Chat with us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-800 mb-6">Get Your Personalized Quote</h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you with a detailed proposal
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Brand Name</label>
                <input
                  type="text"
                  name="brandName"
                  value={formData.brandName}
                  onChange={handleInputChange}
                  placeholder="Enter your brand name (optional)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Website Type *</label>
                <select
                  name="websiteType"
                  value={formData.websiteType}
                  onChange={handleInputChange}
                  required
                  title="Select website type"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                >
                  <option value="">Select website type</option>
                  {websiteTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range *</label>
                <select
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleInputChange}
                  required
                  title="Select budget range"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Deadline</label>
                <input
                  type="date"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleInputChange}
                  placeholder="Select project deadline"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="hasAssets"
                  checked={formData.hasAssets}
                  onChange={handleInputChange}
                  title="I have design assets (logos, images, content) ready"
                  className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-700">
                  I have design assets (logos, images, content) ready
                </label>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Project Requirements *</label>
              <textarea
                name="requirements"
                value={formData.requirements}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                placeholder="Please describe your project requirements, features needed, design preferences, and any specific functionality you'd like to include..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gold-500 text-white py-4 rounded-lg text-lg font-semibold hover:bg-gold-600 transition-colors duration-300 flex items-center justify-center"
            >
              <Send className="mr-2 w-5 h-5" />
              Get Personalized Quotation
            </button>

            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-4">Or get in touch directly:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${PHONE.replace(/\s+/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors duration-300 flex items-center justify-center"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  WhatsApp Chat
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="bg-primary-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-900 transition-colors duration-300 flex items-center justify-center"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  Send Email
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-primary-50 p-8 rounded-2xl inline-block">
              <Clock className="w-12 h-12 text-gold-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary-800 mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Monday - Friday:</strong> 9:00 AM - 7:00 PM</p>
                <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
                <p><strong>Sunday:</strong> Closed</p>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                * Emergency support available 24/7 via WhatsApp
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;