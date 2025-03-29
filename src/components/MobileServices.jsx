import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Smartphone, Layers, Users, Gauge, CheckCircle, Wrench } from 'lucide-react';
import { Helmet } from 'react-helmet'; // Import react-helmet for metadata
import Footer from './Footer';
import mobile from '../assets/mobile.svg'; // Adjust the path as necessary

const MobileServices = () => {
  const [activeCard, setActiveCard] = useState(null);

  const mobileServices = [
    {
      icon: <Smartphone className="w-8 h-8 text-blue-400" />,
      title: 'iOS and Android Apps',
      description: 'We develop mobile apps for both iOS and Android platforms, ensuring maximum reach and accessibility for your target audience.',
    },
    {
      icon: <Layers className="w-8 h-8 text-green-400" />,
      title: 'Native & Cross-Platform',
      description: 'Choose native apps for optimal performance or cross-platform solutions for cost-effectiveness—we’ve got you covered.',
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: 'User-Centric Design',
      description: 'Our apps feature intuitive interfaces and seamless navigation, designed with the user in mind to enhance their experience.',
    },
    {
      icon: <Gauge className="w-8 h-8 text-orange-400" />,
      title: 'Performance Optimization',
      description: 'We optimize apps for speed and performance, ensuring smooth operation across devices and network conditions.',
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-teal-400" />,
      title: 'Quality Assurance',
      description: 'Rigorous testing ensures your app is bug-free and meets the highest quality standards before launch.',
    },
    {
      icon: <Wrench className="w-8 h-8 text-yellow-400" />,
      title: 'Maintenance & Support',
      description: 'Ongoing support keeps your app updated, secure, and running smoothly post-launch.',
    },
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* SEO Metadata */}
      <Helmet>
        <title>Mobile App Development Services | Mrcitsoft Innovations</title>
        <meta
          name="description"
          content="Explore expert mobile app development services at Mrcitsoft Innovations. We build iOS, Android, native, and cross-platform apps with user-centric design."
        />
        <meta
          name="keywords"
          content="mobile app development, iOS app development, Android app development, cross-platform apps, mobile solutions, Mrcitsoft Innovations"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mrcitsoft.com/mobile-services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Mobile App Development",
            "provider": {
              "@type": "Organization",
              "name": "Mrcitsoft Innovations",
              "url": "https://mrcitsoft.com",
            },
            "description": "Mrcitsoft Innovations provides mobile app development services, including iOS and Android apps, native and cross-platform solutions, and ongoing support.",
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
              Mobile App Development <br className="sm:block hidden" />
              <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              At Mrcitsoft Innovations, we create powerful, user-friendly mobile apps that help your
              business thrive in the digital world, tailored to your unique needs.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors inline-flex items-center"
              aria-label="Explore mobile app development services"
            >
              Explore Mobile Services <ChevronRight className="ml-2 w-5 h-5" />
            </motion.a>
          </motion.section>

          {/* Mobile Development Services Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Our Mobile App Development Offerings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {mobileServices.map((service, index) => (
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

          {/* Detailed Mobile Development Section */}
          <section className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            {/* Text Content */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Choose Our Mobile App Development Services?
              </h2>
              <p className="text-gray-300 mb-8">
                With Mrcitsoft Innovations, your mobile development needs are in expert hands. We leverage
                the latest technologies to deliver innovative mobile app solutions that engage customers
                and drive business growth through seamless experiences.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors inline-flex items-center"
                aria-label="Get started with mobile app development services"
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
                src={mobile}
                alt="Mobile app development process illustration"
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

export default MobileServices;