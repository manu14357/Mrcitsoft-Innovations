import React, { useState } from 'react';
import { Helmet } from 'react-helmet'; // For metadata
import { motion } from 'framer-motion';
import { ChevronRight, Globe, Code, ShoppingCart, BarChart, Shield } from 'lucide-react';
import Footer from './Footer';
import WebDevelopment from '../assets/WebDevelopment.svg';
import { useNavigate } from 'react-router-dom';

const WebServices = () => {
  const [activeCard, setActiveCard] = useState(null);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Contact-Us');
  };

  const designServices = [
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: 'Professional Web Design',
      description: 'Create a stunning online presence with our professional web design services. We craft visually appealing, user-friendly websites tailored to your brand and audience for maximum engagement.',
    },
    {
      icon: <Code className="w-8 h-8 text-green-400" />,
      title: 'Custom Website Design',
      description: 'We specialize in unique, visually stunning websites that reflect your brand identity and business goals, ensuring your message resonates with your target audience.',
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-purple-400" />,
      title: 'E-commerce Development',
      description: 'Build a robust, scalable online store to showcase products, manage inventory, and process transactions securely, driving sales and growth effortlessly.',
    },
    {
      icon: <BarChart className="w-8 h-8 text-orange-400" />,
      title: 'SEO Optimization',
      description: 'Boost your website\'s visibility on search engines with our SEO services, optimizing content and structure to attract organic traffic and increase conversions.',
    },
  ];

  const developmentFeatures = [
    'Custom Website Design',
    'Responsive Web Design',
    'Content Management Systems (CMS)',
    'Performance Optimization',
    'Security',
    'Maintenance & Support',
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* SEO Metadata */}
      <Helmet>
        <title>Web Design & Development Services | Mrcitsoft Innovations</title>
        <meta
          name="description"
          content="Discover professional web design and development services at Mrcitsoft Innovations. From custom websites to e-commerce solutions, we empower your digital presence."
        />
        <meta
          name="keywords"
          content="web design services, web development, custom website design, e-commerce development, SEO optimization, Mrcitsoft Innovations"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mrcitsoft.com/web-services" />
        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Web Design & Development Services | Mrcitsoft Innovations" />
        <meta
          property="og:description"
          content="Boost your online presence with Mrcitsoft Innovations’ web design and development services, including custom designs and e-commerce solutions."
        />
        <meta property="og:url" content="https://mrcitsoft.com/web-services" />
        <meta property="og:type" content="website" />
        {/* Schema Markup for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Web Design and Development",
            "provider": {
              "@type": "Organization",
              "name": "Mrcitsoft Innovations",
              "url": "https://mrcitsoft.com",
            },
            "description": "Professional web design and development services including custom websites, e-commerce solutions, and SEO optimization.",
            "areaServed": "Global",
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
          <motion.article
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16 flex flex-col items-center justify-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Web Design & <br className="sm:block hidden" />
              <span className="text-gradient">Development Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              At Mrcitsoft Innovations, we empower your digital presence with stunning, high-performing websites
              tailored to your business needs. From custom designs to robust development, we've got you covered.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
              aria-label="Explore Web Services"
            >
              Explore Services
            </motion.button>
          </motion.article>

          {/* Web Design Services Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Web Design Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {designServices.map((service, index) => (
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
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <a
                    href="#"
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn More <ChevronRight className="ml-2 w-5 h-5" />
                  </a>
                </motion.article>
              ))}
            </div>
          </section>

          {/* Web Development Section */}
          <section className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            {/* Text Content */}
            <motion.article
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Web Development Services</h2>
              <p className="text-gray-300 mb-8">
                At Mrcitsoft Innovations, we create powerful websites and applications that drive your
                business forward. Our team combines the latest technologies and best practices to deliver
                reliable, secure, and high-performing digital solutions tailored to your needs.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {developmentFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <Shield className="w-6 h-6 text-green-400 mr-3" />
                    <span className="text-white">{feature}</span>
                  </motion.div>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
                aria-label="Get Started with Web Development"
                onClick={handleClick}
              >
                Get Started
              </motion.button>
            </motion.article>

            {/* Image */}
            <motion.figure
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <img
                src={WebDevelopment}
                alt="Illustration of Web Development Services at Mrcitsoft Innovations"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.figure>
          </section>
        </div>
      </motion.main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default WebServices;