import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Paintbrush, Smartphone, Users, Repeat } from 'lucide-react';
import { Helmet } from 'react-helmet'; // Import react-helmet for metadata
import Footer from './Footer';
import uiux from '../assets/uiux.svg';
import { useNavigate } from 'react-router-dom';


const UIServices = () => {
  const [activeCard, setActiveCard] = useState(null);
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate('/Contact-Us');
    };
  

  const uiServices = [
    {
      icon: <Paintbrush className="w-8 h-8 text-blue-400" />,
      title: 'User Interface (UI) Design',
      description: 'We craft visually stunning interfaces that enhance usability, prioritizing clarity, simplicity, and functionality to ensure effortless navigation for your users.',
    },
    {
      icon: <Smartphone className="w-8 h-8 text-green-400" />,
      title: 'Responsive Design',
      description: 'Our designs adapt seamlessly across desktops, tablets, and smartphones, ensuring a consistent and optimized experience for every user, no matter the device.',
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: 'User Experience (UX) Design',
      description: 'We dive deep into user needs and behaviors, creating user-centric designs through thorough research to deliver exceptional experiences and meaningful interactions.',
    },
    {
      icon: <Repeat className="w-8 h-8 text-orange-400" />,
      title: 'Iterative Design Process',
      description: 'Our iterative approach refines designs based on user feedback and testing, ensuring your products evolve to meet changing needs and expectations.',
    },
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* SEO Metadata */}
      <Helmet>
        <title>UI/UX Design Services | Mrcitsoft Innovations</title>
        <meta
          name="description"
          content="Discover top-tier UI/UX design services at Mrcitsoft Innovations. We create intuitive, responsive, and user-centric designs to elevate your digital experience."
        />
        <meta
          name="keywords"
          content="UI design, UX design, responsive design, user interface design, user experience design, Mrcitsoft Innovations, UI/UX services"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mrcitsoft.com/ui-services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "UI/UX Design",
            "provider": {
              "@type": "Organization",
              "name": "Mrcitsoft Innovations",
              "url": "https://mrcitsoft.com",
            },
            "description": "Mrcitsoft Innovations offers expert UI/UX design services, including user interface design, responsive design, and user experience optimization.",
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
              UI/UX Design <br className="sm:block hidden" />
              <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              At Mrcitsoft Innovations, we transform user experiences with captivating UI/UX design services,
              creating seamless and intuitive interfaces that leave a lasting impression.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors inline-flex items-center"
              aria-label="Explore UI/UX design services"
            >
              Explore UI/UX Services <ChevronRight className="ml-2 w-5 h-5" />
            </motion.a>
          </motion.section>

          {/* UI/UX Design Services Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Our UI/UX Design Offerings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {uiServices.map((service, index) => (
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

          {/* Detailed UI/UX Section */}
          <section className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            {/* Text Content */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Choose Our UI/UX Design Services?
              </h2>
              <p className="text-gray-300 mb-8">
                With Mrcitsoft Innovations, you can elevate your digital presence with captivating UI/UX design
                services that delight users and drive results. Our team focuses on creating experiences that
                inspire and connect with your audience, blending aesthetics with functionality.
              </p>
              <motion.a
                href="#Contact-Us"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors inline-flex items-center"
                aria-label="Get started with UI/UX design services"
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
                src={uiux}
                alt="UI/UX design process illustration"
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

export default UIServices;