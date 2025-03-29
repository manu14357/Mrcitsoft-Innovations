import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Search, Smartphone, Shield, Repeat } from 'lucide-react';
import { Helmet } from 'react-helmet'; // Import react-helmet for metadata
import Footer from './Footer';
import qa from '../assets/qa.svg'; // Assuming QA image exists

const QualityAssuranceServices = () => {
  const [activeCard, setActiveCard] = useState(null);

  const qaServices = [
    {
      icon: <Search className="w-8 h-8 text-blue-400" />,
      title: 'Comprehensive Testing',
      description: 'We perform functional, regression, performance, and usability testing to ensure your digital products are flawless and reliable.',
    },
    {
      icon: <Smartphone className="w-8 h-8 text-green-400" />,
      title: 'Cross-Platform Compatibility',
      description: 'We test across devices, browsers, and OS to guarantee consistent performance and a seamless user experience everywhere.',
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: 'Security Testing',
      description: 'Our penetration testing and vulnerability scans protect your digital assets from cyber threats and breaches.',
    },
    {
      icon: <Repeat className="w-8 h-8 text-orange-400" />,
      title: 'Continuous Improvement',
      description: 'We refine your products iteratively with user feedback and best practices to meet evolving audience needs.',
    },
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* SEO Metadata */}
      <Helmet>
        <title>Quality Assurance Services | Mrcitsoft Innovations</title>
        <meta
          name="description"
          content="Ensure flawless digital solutions with Mrcitsoft Innovations' QA services, including comprehensive testing, security testing, and cross-platform compatibility."
        />
        <meta
          name="keywords"
          content="quality assurance services, QA testing, software testing, security testing, cross-platform testing, Mrcitsoft Innovations"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mrcitsoft.com/quality-assurance-services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Quality Assurance",
            "provider": {
              "@type": "Organization",
              "name": "Mrcitsoft Innovations",
              "url": "https://mrcitsoft.com",
            },
            "description": "Mrcitsoft Innovations provides expert quality assurance services, including comprehensive testing, security testing, and continuous improvement for digital products.",
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
              Quality Assurance <br className="sm:block hidden" />
              <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              At Mrcitsoft Innovations, we ensure flawless performance with rigorous quality assurance services,
              delivering high-quality digital solutions that exceed expectations.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors inline-flex items-center"
              aria-label="Explore quality assurance services"
            >
              Explore QA Services <ChevronRight className="ml-2 w-5 h-5" />
            </motion.a>
          </motion.section>

          {/* Quality Assurance Services Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Our Quality Assurance Offerings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {qaServices.map((service, index) => (
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

          {/* Detailed Quality Assurance Section */}
          <section className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            {/* Text Content */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Choose Our Quality Assurance Services?
              </h2>
              <p className="text-gray-300 mb-8">
                With Mrcitsoft Innovations, your digital solutions are tested rigorously for performance,
                reliability, and security. We deliver superior quality assurance services that ensure a
                seamless user experience and meet the highest standards.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors inline-flex items-center"
                aria-label="Get started with quality assurance services"
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
                src={qa}
                alt="Quality assurance testing process illustration"
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

export default QualityAssuranceServices;