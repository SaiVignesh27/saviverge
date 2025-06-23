import React from 'react';
import { MessageSquare, FileText, CreditCard, Palette, Code, Rocket, CheckCircle, ArrowRight } from 'lucide-react';

const PHONE = import.meta.env.VITE_PUBLIC_PHONE;
const EMAIL = import.meta.env.VITE_PUBLIC_EMAIL;

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Contact Initiation',
      description: 'Reach out to us via contact form, WhatsApp, or email. We schedule a detailed consultation to understand your vision.',
      details: [
        'Initial consultation call',
        'Requirement gathering',
        'Project scope discussion',
        'Timeline estimation'
      ]
    },
    {
      icon: FileText,
      title: 'Personalized Quote',
      description: 'Based on your requirements, we provide a detailed, transparent quote with no hidden costs.',
      details: [
        'Detailed project breakdown',
        'Transparent pricing',
        '3-phase payment structure',
        'Project timeline'
      ]
    },
    {
      icon: CreditCard,
      title: 'Digital Contract & 30% Advance',
      description: 'Once you approve the quote, we create a digital contract and collect 30% advance payment to begin work.',
      details: [
        'Digital contract signing',
        '30% advance payment',
        'Project kickoff meeting',
        'Resource allocation'
      ]
    },
    {
      icon: Palette,
      title: 'Design Phase',
      description: 'Our design team creates wireframes and mockups. After your approval, we collect the second 30% payment.',
      details: [
        'Wireframe creation',
        'UI/UX design mockups',
        'Client review & feedback',
        '30% payment after approval'
      ]
    },
    {
      icon: Code,
      title: 'Development Phase',
      description: 'We bring your approved designs to life with clean, efficient code and modern technologies.',
      details: [
        'Frontend development',
        'Backend development',
        'Database integration',
        'Regular progress updates'
      ]
    },
    {
      icon: Rocket,
      title: 'Handover & Final Payment',
      description: 'We deliver the completed project, provide training, and collect the final 40% payment. 1-month free support included.',
      details: [
        'Quality assurance testing',
        'Project delivery',
        '40% final payment',
        '1-month free support'
      ]
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Transparent Process',
      description: 'No surprises - you know exactly what to expect at each stage'
    },
    {
      icon: CheckCircle,
      title: 'Flexible Payments',
      description: '3-phase payment structure reduces financial burden'
    },
    {
      icon: CheckCircle,
      title: 'Regular Updates',
      description: 'Stay informed with regular progress reports and previews'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Thorough testing ensures bug-free delivery'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-800 to-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">How It Works</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our proven 6-step process ensures smooth project delivery and complete client satisfaction
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-800 mb-6">Our Process</h2>
            <p className="text-xl text-gray-600">From initial contact to project delivery - here's how we work</p>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative">
                      <div className="absolute -left-8 top-0 w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        {index + 1}
                      </div>
                      <div className="bg-gradient-to-br from-primary-50 to-gold-50 p-8 rounded-2xl shadow-lg ml-8">
                        <div className="flex items-center mb-4">
                          <div className="bg-gold-100 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                            <IconComponent className="w-6 h-6 text-gold-600" />
                          </div>
                          <h3 className="text-2xl font-bold text-primary-800">{step.title}</h3>
                        </div>
                        <p className="text-gray-700 text-lg mb-6">{step.description}</p>
                        <div className="space-y-3">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-center">
                              <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                              <span className="text-gray-600">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="bg-white p-8 rounded-2xl shadow-2xl border-2 border-gray-100">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-6">
                          <IconComponent className="w-10 h-10 text-white" />
                        </div>
                        <h4 className="text-xl font-semibold text-primary-800 mb-4">Step {index + 1}</h4>
                        <div className="text-4xl font-bold text-gold-500 mb-2">
                          {index < 2 ? '0%' : index === 2 ? '30%' : index === 3 ? '60%' : index === 4 ? '90%' : '100%'}
                        </div>
                        <p className="text-gray-600">Project Progress</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-800 mb-6">Why Our Process Works</h2>
            <p className="text-xl text-gray-600">Designed for transparency, efficiency, and client satisfaction</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-800 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Payment Structure */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-800 mb-6">Payment Structure</h2>
            <p className="text-xl text-gray-600">Flexible payment plan that works for everyone</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center">
              <div className="text-4xl font-bold text-blue-600 mb-4">30%</div>
              <h3 className="text-xl font-semibold text-primary-800 mb-3">Contract Signing</h3>
              <p className="text-gray-600">Advance payment to secure your project slot and begin work</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl text-center">
              <div className="text-4xl font-bold text-purple-600 mb-4">30%</div>
              <h3 className="text-xl font-semibold text-primary-800 mb-3">Design Approval</h3>
              <p className="text-gray-600">After you approve the design mockups and wireframes</p>
            </div>
            
            <div className="bg-gradient-to-br from-gold-50 to-gold-100 p-8 rounded-2xl text-center">
              <div className="text-4xl font-bold text-gold-600 mb-4">40%</div>
              <h3 className="text-xl font-semibold text-primary-800 mb-3">Project Delivery</h3>
              <p className="text-gray-600">Final payment upon project completion and handover</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let's begin your journey from vision to reality with our proven process
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-gold-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gold-600 transition-colors duration-300 flex items-center justify-center group"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a 
              href={`https://wa.me/${PHONE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-colors duration-300 flex items-center justify-center border border-white/20"
            >
              <MessageSquare className="mr-2 w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;