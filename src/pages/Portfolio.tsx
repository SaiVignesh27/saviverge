import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'LMS Portal for TECHLAB',
      category: 'EdTech',
      description: 'A learning management system for TECHLAB where students can take recorded classes, tests (coding, MCQ, fill in the blanks), submit assignments, and view leaderboards. Includes separate logins for trainers/admins and students.',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
      tools: ['React', 'Node.js', 'MongoDB', 'Express'],
      results: 'Enabled structured student progress tracking and streamlined class delivery.',
      testimonial: 'The LMS portal was perfectly tailored to our teaching model and helped scale our student base.',
      client: 'TECHLAB Admin'
    },
    {
      title: 'Freelance Startup Platform',
      category: 'Startup / College Project',
      description: 'A freelance job platform where recruiters post jobs and student freelancers apply. Includes skill/location-based auto matching, job tracking, payment status and two logins: recruiter and freelancer.',
      image: 'https://imgs.search.brave.com/MGlCthrJOUeMmCQXzInz_ailIf3-3FnLz8Cuf24eIu4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kM25q/amNiaGJvamJvdC5j/bG91ZGZyb250Lm5l/dC9hcGkvdXRpbGl0/aWVzL3YxL2ltYWdl/cHJveHkvaHR0cHM6/Ly9pbWFnZXMuY3Rm/YXNzZXRzLm5ldC93/cDFsY3dkYXYxcDEv/aUxkSUhDWEtkZnZy/bWNMRlVEY2prLzYx/NDIyYzdiZWI2ZjU5/MjJhOWM2ZjY2YTJk/MDc5N2FhL0dldHR5/SW1hZ2VzLTEyNzYz/ODk3ODIuanBlZz93/PTE1MDAmaD02ODAm/cT02MCZmaXQ9Zmls/bCZmPWZhY2VzJmZt/PWpwZyZmbD1wcm9n/cmVzc2l2ZSZhdXRv/PWZvcm1hdCxjb21w/cmVzcyZkcHI9MSZ3/PTEwMDA',
      tools: ['React', 'Firebase', 'Node.js'],
      results: 'Helped students initiate their startup journey with real project experience.',
      testimonial: 'Clean and efficient — a perfect bridge between students and freelance gigs.',
      client: 'College Project Lead'
    },
    {
      title: 'Home Groceries Delivery App',
      category: 'Retail Project',
      description: 'A full groceries delivery solution for a small store. Shop owners update stock, users order items, and delivery agents track orders through multiple stages. Features three user roles: customer, shop owner, delivery agent.',
      image: 'https://imgs.search.brave.com/44XgS4-nDhIV1xgOvIvauD-G9q62Ab3NKJnpr-QNaiQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9jYXJk/Ym9hcmQtbW9ja3Vw/LWJveC1vcmdhbmlj/LWdyb2Nlcmllcy1m/b29kLWRlbGl2ZXJ5/LWRvbmF0aW9uLWNv/bmNlcHQtY2FyZGJv/YXJkLWJveC1ncm9j/ZXJpZXMtZGVsaXZl/cnktZG9uYXRpb24t/MjAxOTAyNzIxLmpw/Zw',
      tools: ['React', 'Firebase', 'Realtime DB'],
      results: 'Digitized the entire order workflow and delivery chain.',
      testimonial: 'Loved how intuitive the order flow and agent tracking is!',
      client: 'Grocery Store Project'
    },
    {
      title: 'Farmease Agri Leasing & Crop Recommendation',
      category: 'AgriTech / College Project',
      description: 'A smart platform for agricultural land and machine leasing with crop recommendations based on PH, Nitrogen and other soil properties.',
      image: 'https://imgs.search.brave.com/rh0OXtbi7yQ5Jc2GnHFlFBWfdu8RtKKxNwBbBfJ7wBc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzY5Lzg3LzE1/LzM2MF9GXzY2OTg3/MTU2MF9lc3VIb3RT/NlpZaWRmMUNRRnNa/M1JLanZxV1RiVkVG/ei5qcGc',
      tools: ['React', 'Node.js', 'ML Model API'],
      results: 'Optimized crop decisions and equipment access for small farmers.',
      testimonial: 'Accurate and helpful — this solution really empowered our rural clients.',
      client: 'Agritech Startup College Project'
    },
    {
      title: 'MentorConnect Doubt Solving Platform',
      category: 'Education / College Project',
      description: 'Students post doubts, mentors accept and resolve them via personal chat. AI assistant answers generic queries. Two user logins: Student and Mentor.',
      image: 'https://imgs.search.brave.com/7FEXefxvlVDphTm0dUjFjCGTaaXcM_VrtIKmPT5MbfM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YmZsZHIuY29tL0ha/UEFSNjlXL2F0LzN2/Z2t2Z3R2cnM4ZzI3/NHJtZmdmazc3LzAx/MjUxNi0xMDczLWhl/cm93ZWIuanBnP2Ry/dXBhbC1pbWFnZS1z/dHlsZT1jYXJkXzF4/JndpZHRoPTgwMCZo/ZWlnaHQ9NDUwJnBy/ZWNyb3A9MTQyMiw4/MDAseDg5LHkwLHNh/ZmUmYXV0bz13ZWJw/Jmg9OTMxZmExN2Mm/aXRvaz1OUm4tTXFh/Mw',
      tools: ['React', 'Firebase', 'OpenAI API'],
      results: 'Improved academic support for hundreds of students.',
      testimonial: 'The perfect blend of human mentorship and AI support.',
      client: 'Academic Mentor Group'
    },
    {
      title: 'TS Hub – Teacher-Student Portal',
      category: 'EdTech',
      description: 'College-wide portal where students access notes uploaded by faculty. Doubt-solving system similar to MentorConnect. Logins for both students and faculty.',
      image: 'https://imgs.search.brave.com/ZXd4Vm_GI50M9b3mo0xqGhdCEowDhVt-TS7qZC5oADU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzRiLzI3/LzgxLzRiMjc4MTU5/OWE2OWEyZTZhMDQ2/ZGE4ZGU4NjhiMjIy/LmpwZw',
      tools: ['React', 'Node.js', 'MongoDB'],
      results: 'Centralized access to learning resources and mentoring.',
      testimonial: 'TS Hub created a unified academic space for our college.',
      client: 'College Admin'
    }
  ];


  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-800 to-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the success stories we've created for our clients across various industries
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gold-500 mb-2">10+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-500 mb-2">4+</div>
              <div className="text-gray-600">Domains Explored</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-500 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-800 mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600">Each project tells a story of innovation, collaboration, and success</p>
          </div>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-3">
                        {/* <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors duration-200" title="View project live">
                          <ExternalLink className="w-5 h-5" />
                        </button>
                        <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors duration-200" title="View source code">
                          <Github className="w-5 h-5" />
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="inline-block bg-gold-100 text-gold-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {project.category}
                  </div>
                  
                  <h3 className="text-3xl font-bold text-primary-800 mb-4">{project.title}</h3>
                  
                  <p className="text-gray-600 text-lg mb-6">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-primary-800 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, toolIndex) => (
                        <span key={toolIndex} className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-xl mb-6">
                    <h4 className="text-lg font-semibold text-green-800 mb-2">Results Achieved:</h4>
                    <p className="text-green-700">{project.results}</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-center mb-3">
                      <div className="flex text-gold-500 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">Client Testimonial</span>
                    </div>
                    <p className="text-gray-700 italic mb-3">"{project.testimonial}"</p>
                    <p className="text-sm text-gray-600 font-medium">- {project.client}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Success Story?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let's work together to create something amazing that will drive your business forward
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-gold-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gold-600 transition-colors duration-300"
            >
              Start Your Project
            </a>
            <a 
              href="/services"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-colors duration-300 border border-white/20"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;