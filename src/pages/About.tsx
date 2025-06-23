import React from 'react';
import { Users, Target, Lightbulb, Award } from 'lucide-react';

const About = () => {
  const tools = [
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'WordPress', category: 'CMS' },
    { name: 'Figma', category: 'Design' },
    { name: 'Shopify', category: 'E-commerce' },
    { name: 'MongoDB', category: 'Database' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We\'re committed to empowering businesses with exceptional digital experiences that drive real results.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our success. We work closely with you to understand your unique needs and goals.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We stay ahead of the curve with the latest technologies and design trends to keep you competitive.'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Every project meets our high standards for design, functionality, and user experience.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-primary-800 mb-6">About SAVI Verge</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From Vision to Verge - We're passionate about transforming your digital dreams into reality
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
            <h2 className="text-3xl font-bold text-primary-800 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700 text-md">
              <p>
                SAVI Verge started from a simple goal — to help college students build meaningful final-year projects that weren’t just functional but portfolio-worthy. What began as a one-person effort during my engineering days quickly evolved into a full-fledged agency.
              </p>
              <p>
                After delivering multiple successful academic projects — from dashboards and LMS systems to mini-apps and landing pages — I realized the need for reliable and well-designed digital services for real-world businesses. I transitioned from college projects to building live websites and platforms for startups, freelancers, and local brands.
              </p>
            </div>
            </div>

            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-gold-500 mb-2">10+</div>
                    <div className="text-gray-600">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gold-500 mb-2">1+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gold-500 mb-2">24/7</div>
                    <div className="text-gray-600">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-800 mb-6">Our Mission</h2>
            <p className="text-xl text-gold-600 font-medium max-w-4xl mx-auto">
              <span>
                At SAVI Verge, we empower startups and small businesses with clean, goal-driven websites 
                — built using modern tech with a personal touch.
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-primary-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-800 mb-6">Tools & Technologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use the latest and most reliable technologies to build exceptional digital experiences
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group">
                <div className="text-2xl font-bold text-primary-800 mb-2 group-hover:text-gold-600 transition-colors duration-200">
                  {tool.name}
                </div>
                <div className="text-sm text-gray-600">{tool.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-800 mb-6">Meet Our Founder</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary-50 to-gold-50 p-8 md:p-12 rounded-2xl shadow-xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
                  KSV
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold text-primary-800 mb-2">K Sai Vignesh</h3>
                  <p className="text-xl text-gold-600 font-medium mb-4">Founder & Lead Developer</p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    With a passion for creating exceptional digital experiences, Sai Vignesh founded SAVI Verge 
                    to help businesses transform their vision into reality. His expertise in modern web technologies 
                    and commitment to client success drives everything we do at SAVI Verge.
                  </p>
                  <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <a 
                      href="mailto:saivigneshkadiri@gmail.com"
                      className="text-primary-600 hover:text-primary-800 font-medium transition-colors duration-200"
                    >
                      saivigneshkadiri@gmail.com
                    </a>
                    <a 
                      href="tel:+918688959653"
                      className="text-primary-600 hover:text-primary-800 font-medium transition-colors duration-200"
                    >
                      +91 86889 59653
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;