import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, BarChart, Target, Handshake, Megaphone, Users } from 'lucide-react';
import { Helmet } from 'react-helmet'; // Import react-helmet for metadata
import Footer from './Footer';
import business from '../assets/business.svg';
import { useNavigate } from 'react-router-dom';


const BusinessDevelopmentServices = () => {
  const [activeCard, setActiveCard] = useState(null);
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate('/Contact-Us');
    };
  

  const businessServices = [
    {
      icon: <BarChart className="w-8 h-8 text-blue-400" />,
      title: 'Market Research & Analysis',
      description: 'We uncover trends, audience insights, and competitive landscapes through in-depth research to guide your strategic decisions.',
    },
    {
      icon: <Target className="w-8 h-8 text-green-400" />,
      title: 'Strategic Planning',
      description: 'We craft actionable business plans with clear objectives and KPIs to align with your vision and drive measurable success.',
    },
    {
      icon: <Handshake className="w-8 h-8 text-purple-400" />,
      title: 'Partnership Development',
      description: 'We build strategic alliances to expand your reach and unlock new growth opportunities through valuable collaborations.',
    },
    {
      icon: <Megaphone className="w-8 h-8 text-orange-400" />,
      title: 'Sales & Marketing Strategies',
      description: 'Our tailored strategies blend digital and traditional channels to attract customers and boost conversions.',
    },
    {
      icon: <Users className="w-8 h-8 text-teal-400" />,
      title: 'Networking & Relationship Building',
      description: 'We connect you with industry peers and stakeholders through events and workshops to foster growth and innovation.',
    },
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* SEO Metadata */}
      <Helmet>
        <title>Business Development Services | Mrcitsoft Innovations</title>
        <meta
          name="description"
          content="Unlock growth with Mrcitsoft Innovations' business development services, including market research, strategic planning, and partnership development."
        />
        <meta
          name="keywords"
          content="business development services, market research, strategic planning, partnership development, sales marketing strategies, Mrcitsoft Innovations"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mrcitsoft.com/business-development-services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Business Development",
            "provider": {
              "@type": "Organization",
              "name": "Mrcitsoft Innovations",
              "url": "https://mrcitsoft.com",
            },
            "description": "Mrcitsoft Innovations provides expert business development services, including market research, strategic planning, and sales strategies.",
          })}
        </script>
      </Helmet>

      {/* Main Content Section */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex items-center justify-center py-16 overflow-hidden"
      >
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16 flex flex-col items-center justify-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Business Development <br className="sm:block hidden" />
              <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              At Mrcitsoft Innovations, we unlock growth opportunities with expert business development
              services, helping you thrive in today’s competitive marketplace.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors inline-flex items-center"
              aria-label="Explore business development services"
            >
              Explore Business Growth <ChevronRight className="ml-2 w-5 h-5" />
            </motion.a>
          </motion.section>

          {/* Business Development Services Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Our Business Development Offerings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {businessServices.map((service, index) => (
                <motion.article
                  key={index}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{
                    scale: activeCard === index ? 1.05 : 1,
                    opacity: 1,
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                  className="bg-gray-800 p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <a
                    href="#contact"
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Know More <ChevronRight className="ml-2 w-5 h-5" />
                  </a>
                </motion.article>
              ))}
            </div>
          </section>

          {/* Detailed Business Development Section */}
          <section className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            {/* Text Content */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Choose Our Business Development Services?
              </h2>
              <p className="text-gray-300 mb-8">
                With Mrcitsoft Innovations, you can unlock your full potential and achieve sustainable growth.
                Our strategic business development services guide you through a dynamic environment to prosperity.
              </p>
              <motion.a
                href="#Contact-Us"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors inline-flex items-center"
                aria-label="Get started with business development services"
                onClick={handleClick}
              >
                Get Started <ChevronRight className="ml-2 w-5 h-5" />
              </motion.a>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <img
                src={business}
                alt="Business development strategy illustration"
                className="w-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </section>
        </div>
      </motion.main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default BusinessDevelopmentServices;