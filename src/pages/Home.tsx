import React from 'react';
import processandprice from "../assets/SAVI Verge Process and Pricing Details.pdf"
import process from "../assets/SAVI Verge Process Details.pdf"
import price from "../assets/SAVI Verge Pricing Details.pdf"
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Zap, Shield, Palette, Headphones, CheckCircle } from 'lucide-react';

const Home = () => {
  const highlights = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising quality'
    },
    {
      icon: Shield,
      title: 'SEO-Optimized',
      description: 'Built for search engines and user experience'
    },
    {
      icon: Palette,
      title: 'Custom Design',
      description: 'Unique designs tailored to your brand identity'
    },
    {
      icon: Headphones,
      title: 'Post-Launch Support',
      description: '1-month free support and maintenance included'
    }
  ];

  const whyChooseUs = [
    'Transparent Pricing with No Hidden Costs',
    'Personalized Quotes Based on Your Needs',
    'Flexible 3-Phase Payment Structure',
    'Modern Technology Stack',
    'Responsive Design Guaranteed'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logo Animation */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center shadow-2xl animate-float">
                <span className="text-white font-bold text-3xl">SAVI</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              SAVI <span className="text-gold-400">Verge</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-slide-up">
              From Vision to Verge
            </p>
            
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-slide-up">
              Empowering businesses with beautiful, functional digital presence. We transform your vision into reality with cutting-edge web solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link
                to="/contact"
                className="bg-gold-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gold-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              {/* <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group border border-white/20">
                <Download className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                Download Pricing & Process PDFs
              </button> */}
              <a href={processandprice} download>
                <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group border border-white/20">
                  <Download className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  Download Pricing & Process PDFs
                </button>
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-800 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in creating exceptional digital experiences that drive results for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Web Design', desc: 'Beautiful, user-centric designs', icon: '🎨' },
              { title: 'Web Development', desc: 'Modern, scalable solutions', icon: '💻' },
              { title: 'SEO Optimization', desc: 'Search engine visibility', icon: '🚀' },
              { title: 'E-commerce', desc: 'Online stores that convert', icon: '🛒' }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-800 mb-4">Our Highlights</h2>
            <p className="text-xl text-gray-600">Why thousands of businesses trust SAVI Verge</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-gold-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-200 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-gold-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-800 mb-2">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary-800 mb-6">Why Choose SAVI Verge?</h2>
              <p className="text-xl text-gray-600 mb-8">
                At SAVI Verge, we don't just build websites—we engineer digital growth. With design precision, technical expertise, and end-to-end support, we’re the digital partner every business needs to stand out.
              </p>

              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-gold-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <div className="flex items-center mb-4">
                  <div className="flex text-gold-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">5.0 (50+ reviews)</span>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "Working with SAVI Verge was a game-changer. Their ability to translate our ideas into a polished, fast, and user-friendly platform set a new benchmark for us."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-white font-semibold">
                    AK
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-800">Ankit Khurana</p>
                    <p className="text-sm text-gray-600">Founder, EduVerse Academy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Why Choose Us */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary-800 mb-6">Why Choose SAVI Verge?</h2>
              <p className="text-xl text-gray-600 mb-8">
                At SAVI Verge, we don’t treat your website as just another project — we treat it like our own digital vision coming to life. Every pixel, every interaction, and every line of code is crafted with care, precision, and purpose.
              </p>

              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-gold-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                {/* <div className="flex items-center mb-4">
                  <div className="flex text-gold-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">5.0 (50+ client praises)</span>
                </div> */}
                <p className="text-gray-700 italic mb-4">
                  "Every client we work with gets a tailored digital experience — from strategy to deployment. I personally ensure that what we deliver not only meets expectations but inspires confidence in your brand online."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-white font-semibold">
                    KV
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-800">K Sai Vignesh</p>
                    <p className="text-sm text-gray-600">Founder, SAVI Verge</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gradient-to-r from-primary-800 to-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Download our detailed pricing packages and workflow process to understand how we can help transform your digital presence.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href={price} download>
            <button className="bg-gold-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gold-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group">
              <Download className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              Pricing Packages PDF
            </button>
            </a>
            <a href={process} download>
            <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group border border-white/20">
              <Download className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              Workflow & Process PDF
            </button>
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <Link
              to="/contact"
              className="inline-flex items-center text-gold-400 hover:text-gold-300 text-lg font-semibold transition-colors duration-200 group"
            >
              Or get a personalized quote now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;