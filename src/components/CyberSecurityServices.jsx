import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Shield, AlertTriangle, Lock, Key, Globe, Mail } from 'lucide-react';
import { Helmet } from 'react-helmet'; // Import react-helmet for metadata
import Footer from './Footer';
import Security from '../assets/Security.svg';

const CyberSecurityServices = () => {
  const [activeCard, setActiveCard] = useState(null);

  const cyberServices = [
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: 'Endpoint Detection & Response (EDR)',
      description: 'Secure your devices with EDR solutions that monitor, detect, and respond to suspicious activities and threats, keeping your data safe.',
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-400" />,
      title: 'Vulnerability Assessment',
      description: 'Identify and fix weaknesses in your systems with thorough scans, fortifying your defenses against potential cyber attacks.',
    },
    {
      icon: <Lock className="w-8 h-8 text-green-400" />,
      title: 'Firewall',
      description: 'Protect your network from unauthorized access with a robust Firewall that controls traffic based on strict security rules.',
    },
    {
      icon: <Key className="w-8 h-8 text-purple-400" />,
      title: 'Two-Factor Authentication (2FA)',
      description: 'Enhance account security with 2FA, requiring dual verification to reduce the risk of unauthorized access.',
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-400" />,
      title: 'Web Application Assessment',
      description: 'Secure your web applications by identifying vulnerabilities and addressing risks to protect sensitive data.',
    },
    {
      icon: <Mail className="w-8 h-8 text-teal-400" />,
      title: 'Email Security',
      description: 'Block phishing, malware, and spam with advanced email security, safeguarding your communication channels.',
    },
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* SEO Metadata */}
      <Helmet>
        <title>Cyber Security Services | Mrcitsoft Innovations</title>
        <meta
          name="description"
          content="Protect your business with Mrcitsoft Innovations' cyber security services, including EDR, vulnerability assessments, firewalls, and more."
        />
        <meta
          name="keywords"
          content="cyber security services, endpoint detection, vulnerability assessment, firewall, two-factor authentication, email security, Mrcitsoft Innovations"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mrcitsoft.com/cyber-security-services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Cyber Security",
            "provider": {
              "@type": "Organization",
              "name": "Mrcitsoft Innovations",
              "url": "https://mrcitsoft.com",
            },
            "description": "Mrcitsoft Innovations provides tailored cyber security services, including endpoint detection, firewalls, and email security for businesses.",
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
              Cyber Security <br className="sm:block hidden" />
              <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Leave the complexity of IT security to Mrcitsoft Innovations. We deliver tailored, cost-effective cyber security services,
              protecting your business so you can focus on growth with peace of mind.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors inline-flex items-center"
              aria-label="Explore cyber security services"
            >
              Explore Cyber Security <ChevronRight className="ml-2 w-5 h-5" />
            </motion.a>
          </motion.section>

          {/* Cyber Security Services Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Our Cyber Security Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {cyberServices.map((service, index) => (
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

          {/* Detailed Cyber Security Section */}
          <section className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            {/* Text Content */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Trust Our Cyber Security Services?
              </h2>
              <p className="text-gray-300 mb-8">
                With 50% of SMBs facing cyber attacks yearly, your IT security is critical. At Mrcitsoft
                Innovations, we manage your security systems, protect against malware, secure passwords,
                and safeguard your data—delivering peace of mind at a cost-effective price.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors inline-flex items-center"
                aria-label="Get started with cyber security services"
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
                src={Security}
                alt="Cyber security protection illustration"
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

export default CyberSecurityServices;