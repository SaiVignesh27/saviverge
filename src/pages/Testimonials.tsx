import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

emailjs.init('Kj2FSqKHPdJputSkk');

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    rating: 5,
    testimonial: ''
  });
  const [loading, setLoading] = useState(false);

  const testimonials = [
    {
      name: 'TECHLAB Admin',
      company: 'TECHLAB',
      position: 'Admin',
      rating: 4,
      testimonial: 'The LMS portal was perfectly tailored to our teaching model and helped scale our student base.',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'College Project Lead',
      company: 'Freelance Startup Platform',
      position: 'Mentor',
      rating: 5,
      testimonial: 'Clean and efficient — a perfect bridge between students and freelance gigs.',
      image: 'https://imgs.search.brave.com/MGlCthrJOUeMmCQXzInz_ailIf3-3FnLz8Cuf24eIu4/rs:fit:200:200:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC93cDFsY3dk/YXYxcDEvaUxkSUhD/WGtkZnZybWNMRlVE/Y2prL0dldHR5SW1h/Z2VzLTEyNzYzODk3/ODIuanBlZw'
    },
    {
      name: 'Grocery Store Project',
      company: 'Home Groceries Delivery App',
      position: 'Client',
      rating: 4,
      testimonial: 'Loved how intuitive the order flow and agent tracking is!',
      image: 'https://imgs.search.brave.com/44XgS4-nDhIV1xgOvIvauD-G9q62Ab3NKJnpr-QNaiQ/rs:fit:200:200:1/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9jYXJk/Ym9hcmQtbW9ja3Vw/LWJveC1vcmdhbmlj/LWdyb2Nlcmllcy1m/b29kLWRlbGl2ZXJ5/LWRvbmF0aW9uLWNv/bmNlcHQtY2FyZGJv/YXJkLWJveC1ncm9j/ZXJpZXMtZGVsaXZl/cnktZG9uYXRpb24t/MjAxOTAyNzIxLmpw/Zw'
    },
    {
      name: 'Agritech Startup College Project',
      company: 'Farmease',
      position: 'Mentor',
      rating: 5,
      testimonial: 'Accurate and helpful — this solution really empowered our rural clients.',
      image: 'https://imgs.search.brave.com/rh0OXtbi7yQ5Jc2GnHFlFBWfdu8RtKKxNwBbBfJ7wBc/rs:fit:200:200:1/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzY5Lzg3LzE1/LzM2MF9GXzY2OTg3/MTU2MF9lc3VIb3RT/NlpZaWRmMUNRRnNa/M1JLanZxV1RiVkVG/ei5qcGc'
    },
    {
      name: 'Academic Mentor Group',
      company: 'MentorConnect',
      position: 'Coordinator',
      rating: 4,
      testimonial: 'The perfect blend of human mentorship and AI support.',
      image: 'https://imgs.search.brave.com/7FEXefxvlVDphTm0dUjFjCGTaaXcM_VrtIKmPT5MbfM/rs:fit:200:200:1/g:ce/aHR0cHM6Ly9jZG4u/YmZsZHIuY29tL0ha/UEFSNjlXL2F0LzN2/Z2t2Z3R2cnM4ZzI3/NHJtZmdmazc3LzAx/MjUxNi0xMDczLWhl/cm93ZWIuanBnP2Ry/dXBhbC1pbWFnZS1z/dHlsZT1jYXJkXzF4/JndpZHRoPTgwMCZo/ZWlnaHQ9NDUwJnBy/ZWNyb3A9MTQyMiw4/MDAseDg5LHkwLHNh/ZmUmYXV0bz13ZWJw/Jmg9OTMxZmExN2Mm/aXRvaz1OUm4tTXFh/Mw'
    },
    {
      name: 'College Admin',
      company: 'TS Hub',
      position: 'Faculty',
      rating: 5,
      testimonial: 'TS Hub created a unified academic space for our college.',
      image: 'https://imgs.search.brave.com/ZXd4Vm_GI50M9b3mo0xqGhdCEowDhVt-TS7qZC5oADU/rs:fit:200:200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzRiLzI3/LzgxLzRiMjc4MTU5/OWE2OWEyZTZhMDQ2/ZGE4ZGU4NjhiMjIy/LmpwZw'
    }
  ];


  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send('service_yy16ir6', 'template_69qw9k6', {
        name: formData.name,
        email: formData.email,
        company: formData.company || 'N/A',
        rating: formData.rating,
        testimonial: formData.testimonial
      });
      alert('🎉 Thank you! Your testimonial has been submitted successfully.');
      setFormData({ name: '', email: '', company: '', rating: 5, testimonial: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      alert('❌ Something went wrong. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-800 to-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Client Testimonials</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear what our clients have to say about their experience working with SAVI Verge
          </p>
        </div>
      </section>

     {/* Main Testimonial Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-50 to-gold-50 p-10 md:p-14 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out border-2 border-white/70">

              {/* Animate presence handles testimonial transitions */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <Quote className="w-14 h-14 text-gold-500 mx-auto mb-6 drop-shadow-md" />

                  {/* Star rating */}
                  <div className="flex justify-center mb-6">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-7 h-7 ${
                            star <= testimonials[currentTestimonial].rating
                              ? 'text-gold-500 fill-gold-500'
                              : 'text-white stroke-gold-500'
                          } transition-colors duration-300`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial content */}
                  <p className="text-xl md:text-2xl text-gray-700 italic mb-8 leading-relaxed tracking-wide">
                    “{testimonials[currentTestimonial].testimonial}”
                  </p>

                  <div className="flex items-center justify-center gap-4">
                    {/* Avatar with initials */}
                    <div className="bg-gold-500 text-white w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold shadow-inner">
                      {testimonials[currentTestimonial].name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')
                        .slice(0, 2)}
                    </div>
                    <div className="text-center md:text-left">
                      <p className="text-lg font-semibold text-primary-800 tracking-wide">
                        {testimonials[currentTestimonial].name}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {testimonials[currentTestimonial].position}, {testimonials[currentTestimonial].company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              title="Previous testimonial"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-md rounded-full p-3 hover:bg-gray-100 transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-primary-700" />
            </button>

            <button
              onClick={nextTestimonial}
              title="Next testimonial"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-md rounded-full p-3 hover:bg-gray-100 transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6 text-primary-700" />
            </button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                title={`Go to testimonial ${index + 1}`}
                className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-gold-500 scale-110 shadow'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Submit Testimonial Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-800 mb-6">Share Your Experience</h2>
            <p className="text-xl text-gray-600">
              We'd love to hear about your experience working with SAVI Verge
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-primary-50 to-gold-50 p-8 rounded-2xl shadow-lg">
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Enter your company (optional)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                    title={`Rate ${star} star${star > 1 ? 's' : ''}`}
                    className="text-2xl focus:outline-none"
                  >
                    <Star 
                      className={`w-8 h-8 ${
                        star <= formData.rating 
                          ? 'text-gold-500 fill-current' 
                          : 'text-gray-300'
                      }`} 
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Testimonial *</label>
              <textarea
                name="testimonial"
                value={formData.testimonial}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                placeholder="Share your experience working with SAVI Verge..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gold-500 text-white py-4 rounded-lg text-lg font-semibold hover:bg-gold-600 transition-colors duration-300 flex items-center justify-center"
            >
              <Send className="mr-2 w-5 h-5" />
              Submit Testimonial
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;