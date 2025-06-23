import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Database, ShoppingCart, Code, Palette, Search, Server, Headphones } from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: Globe,
      title: 'Static Website',
      price: '₹5,000 - ₹12,000',
      description: 'Perfect for small businesses and personal portfolios',
      features: [
        '1-3 responsive pages',
        'Modern design',
        'Contact form integration',
        'SEO-friendly structure',
        'Mobile optimized',
        'Basic analytics setup'
      ]
    },
    {
      icon: Database,
      title: 'Dynamic Website',
      price: '₹15,000 - ₹30,000',
      description: 'Feature-rich websites with content management',
      features: [
        '4-8 dynamic pages',
        'Content Management System',
        'Admin panel',
        'Database integration',
        'User authentication',
        'Advanced SEO features'
      ]
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Store',
      price: '₹30,000 - ₹75,000',
      description: 'Complete online store with payment integration',
      features: [
        'Product catalog',
        'Shopping cart & checkout',
        'Payment gateway integration',
        'Order management dashboard',
        'Inventory tracking',
        'Customer accounts'
      ]
    },
    {
      icon: Code,
      title: 'Custom Web App (MERN)',
      price: '₹60,000 - ₹2,00,000+',
      description: 'Complex applications with advanced functionality',
      features: [
        'Custom functionality',
        'Full-stack development',
        'Advanced user management',
        'API development',
        'Real-time features',
        'Scalable architecture'
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Palette,
      title: 'Logo Design',
      price: '₹2,000 - ₹8,000',
      description: 'Professional brand identity design'
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      price: '₹5,000 - ₹15,000',
      description: 'Improve your search engine rankings'
    },
    {
      icon: Server,
      title: 'Web Hosting',
      price: '₹2,000 - ₹10,000/year',
      description: 'Reliable hosting solutions'
    },
    {
      icon: Headphones,
      title: 'Website Maintenance',
      price: '₹3,000 - ₹8,000/month',
      description: 'Ongoing support and updates'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-800 to-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive web solutions tailored to your business needs and budget
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-800 mb-6">Core Services</h2>
            <p className="text-xl text-gray-600">Choose the perfect solution for your business</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="flex items-center mb-6">
                    <div className="bg-gold-100 w-12 h-12 rounded-xl flex items-center justify-center mr-4 group-hover:bg-gold-200 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary-800">{service.title}</h3>
                      <p className="text-gold-600 font-semibold text-lg">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex justify-center lg:justify-start">
                    <Link
                      to="/contact"
                      className="inline-block px-8 py-3 bg-primary-800 text-white text-lg font-semibold rounded-xl hover:bg-primary-900 transition-colors duration-300 shadow-md"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-800 mb-6">Additional Services</h2>
            <p className="text-xl text-gray-600">Complete your digital presence with our add-on services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group">
                  <div className="bg-primary-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-800 mb-2">{service.title}</h3>
                  <p className="text-gold-600 font-semibold mb-3">{service.price}</p>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-20 bg-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Why Choose Our Services?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Our proven process ensures quality delivery and complete client satisfaction
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-400 mb-4">01</div>
              <h3 className="text-xl font-semibold mb-3">Consultation</h3>
              <p className="text-gray-300">We understand your vision and requirements</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-400 mb-4">02</div>
              <h3 className="text-xl font-semibold mb-3">Development</h3>
              <p className="text-gray-300">Expert development with regular updates</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-400 mb-4">03</div>
              <h3 className="text-xl font-semibold mb-3">Delivery</h3>
              <p className="text-gray-300">Launch and ongoing support</p>
            </div>
          </div>

          <div className="mt-12">
            <a 
              href="/how-it-works"
              className="inline-block bg-gold-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gold-600 transition-colors duration-300"
            >
              Learn More About Our Process
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;