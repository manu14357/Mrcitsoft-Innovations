import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet'; // Add react-helmet for metadata
import { Code, Rocket, Users, Star, Monitor, Zap, Globe, Heart } from 'lucide-react';
import Navbar from './Navbar'; // Adjust path as needed
import Footer from './Footer'; // Adjust path as needed
import { story } from '../assets'; // Adjust path as needed

const About = () => {
  // Animation configurations
  const animationConfigs = {
    fadeIn: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    },
    staggerContainer: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
    },
    cardHover: { scale: 1.05, transition: { duration: 0.3, type: 'spring', stiffness: 300 } },
    imageSlide: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    },
  };

  // Reusable component for section headers
  const SectionHeader = ({ title, gradient = true }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
      {gradient ? (
        <>
          {title.split(' ')[0]} <span className="text-gradient">{title.split(' ')[1] || ''}</span>
        </>
      ) : title}
    </h2>
  );

  // Reusable card component
  const ServiceCard = ({ icon, title, desc, variants }) => (
    <motion.div
      variants={variants}
      whileHover={animationConfigs.cardHover}
      className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{desc}</p>
    </motion.div>
  );

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white flex flex-col">
      {/* SEO Metadata */}
      <Helmet>
        <title>About Us | Mrcitsoft Innovations - Tech Startup Excellence</title>
        <meta
          name="description"
          content="Learn about Mrcitsoft Innovations, a dynamic tech startup offering innovative digital solutions in software development, cybersecurity, and more."
        />
        <meta
          name="keywords"
          content="Mrcitsoft Innovations, about us, tech startup, digital transformation, software development, cybersecurity, India tech company"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mrcitsoft.com/About-Us" /> {/* Replace with your actual URL */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Mrcitsoft Innovations",
            "url": "https://mrcitsoft.com",
            "logo": "https://mrcitsoft.com/src/assets/Logo.png", // Replace with actual logo URL
            "description": "A vibrant tech startup delivering innovative digital solutions including software development, cybersecurity, and digital strategy.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN" // Add full address if available
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "info@mrcitsoft.com",
              "contactType": "Customer Service"
            }
          })}
        </script>
      </Helmet>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={animationConfigs.fadeIn}
          className="py-20 px-4 sm:px-8 "
        >
          <div className="container mx-auto max-w-5xl text-center">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
            >
              About Mrcitsoft Innovations
            </motion.h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Welcome to Mrcitsoft Innovations – a vibrant tech startup and your trusted partner in the digital world. We’re a team of innovators, creators, and strategists dedicated to driving excellence, delivering cutting-edge solutions, and empowering businesses to thrive in the digital age with our startup energy.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="Explore Our Journey"
            >
              Explore Our Journey
            </motion.a>
          </div>
        </motion.section>

        {/* Our Story Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animationConfigs.staggerContainer}
          className="py-16 px-4 sm:px-8 bg-gray-900/50"
        >
          <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-12">
            <motion.div variants={animationConfigs.fadeIn} className="flex-1">
              <SectionHeader title="Our Story" />
              <p className="text-gray-300 mb-4">
                Mrcitsoft Innovations was founded by tech enthusiasts with a bold vision: to revolutionize how businesses leverage technology. As a startup, we’re driven by creativity, integrity, and a passion for innovation, bridging the gap between advanced tech and practical business solutions.
              </p>
              <p className="text-gray-300 mb-4">
                From humble beginnings, we’ve grown with the agility and enthusiasm of a startup, tackling complex challenges with tailored solutions. Whether it’s web development, cybersecurity, or growth strategies, our dedication to excellence shines through in every project.
              </p>
              <p className="text-gray-300">
                We’re not just building a business – we’re igniting a movement. Our startup spirit ensures we deliver innovative ideas that make a lasting impact in the digital landscape.
              </p>
            </motion.div>
            <motion.div variants={animationConfigs.imageSlide} className="flex-1">
              <img
                src={story}
                alt="Team collaborating at Mrcitsoft Innovations"
                className="w-full object-cover rounded-2xl shadow-lg"
                loading="lazy"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Mission & Vision Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animationConfigs.staggerContainer}
          className="py-16 px-4 sm:px-8 bg-gradient-to-b from-gray-800/50 to-gray-900/80"
        >
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div variants={animationConfigs.fadeIn}>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center">
                  <Rocket className="w-8 h-8 mr-3 text-blue-400" /> Our Mission
                </h2>
                <p className="text-gray-300 mb-4">
                  Our mission at Mrcitsoft Innovations is to deliver transformative technology solutions that drive measurable success. As a startup, we provide innovative, reliable, and cost-effective services to empower businesses with cutting-edge digital tools.
                </p>
                <p className="text-gray-300">
                  We simplify complexity, offering tailored solutions in web development, cybersecurity, and more, fueled by the dynamic energy of a startup.
                </p>
              </motion.div>
              <motion.div variants={animationConfigs.fadeIn}>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center">
                  <Monitor className="w-8 h-8 mr-3 text-green-400" /> Our Vision
                </h2>
                <p className="text-gray-300 mb-4">
                  We aim to lead as a trailblazing tech startup in digital transformation, making innovation accessible to all businesses. Our vision is a future where technology drives efficiency, growth, and prosperity.
                </p>
                <p className="text-gray-300">
                  Staying ahead of trends, we deliver forward-thinking solutions with our startup spirit, creating lasting value for clients and communities.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* What We Do Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animationConfigs.staggerContainer}
          className="py-16 px-4 sm:px-8 bg-gray-900/50"
        >
          <div className="container mx-auto max-w-6xl">
            <SectionHeader title="What We Do" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Code className="w-10 h-10 text-teal-400" />,
                  title: 'Development',
                  desc: 'Innovative software solutions – from stunning websites to powerful mobile apps – tailored to your unique business needs.',
                },
                {
                  icon: <Zap className="w-10 h-10 text-yellow-400" />,
                  title: 'Cybersecurity',
                  desc: 'Robust protection strategies to safeguard your digital infrastructure against evolving threats.',
                },
                {
                  icon: <Globe className="w-10 h-10 text-purple-400" />,
                  title: 'Digital Strategy',
                  desc: 'Strategic planning and execution to accelerate your digital transformation and unlock growth opportunities.',
                },
              ].map((item, index) => (
                <ServiceCard key={index} {...item} variants={animationConfigs.fadeIn} />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animationConfigs.staggerContainer}
          className="py-16 px-4 sm:px-8 bg-gradient-to-b from-gray-800/50 to-gray-900/80"
        >
          <div className="container mx-auto max-w-6xl">
            <SectionHeader title="Why Choose Us" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Code className="w-10 h-10 text-blue-400" />,
                  title: 'Expertise',
                  desc: 'Our startup team blends fresh perspectives with deep technical and strategic expertise.',
                },
                {
                  icon: <Star className="w-10 h-10 text-yellow-400" />,
                  title: 'Innovation',
                  desc: 'We pioneer with the latest tools and trends to keep you ahead in the digital race.',
                },
                {
                  icon: <Users className="w-10 h-10 text-purple-400" />,
                  title: 'Customer-Centric',
                  desc: 'Your vision drives us – we craft solutions tailored to your specific goals.',
                },
                {
                  icon: <Rocket className="w-10 h-10 text-teal-400" />,
                  title: 'Reliability',
                  desc: 'Depend on us for high-quality delivery, on time and within budget, every time.',
                },
              ].map((item, index) => (
                <ServiceCard key={index} {...item} variants={animationConfigs.fadeIn} />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Our Values Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animationConfigs.staggerContainer}
          className="py-16 px-4 sm:px-8 bg-gray-900/50"
        >
          <div className="container mx-auto max-w-6xl">
            <SectionHeader title="Our Values" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Heart className="w-10 h-10 text-red-400" />,
                  title: 'Passion',
                  desc: 'We’re fueled by a love for technology and a drive to make a difference.',
                },
                {
                  icon: <Users className="w-10 h-10 text-green-400" />,
                  title: 'Collaboration',
                  desc: 'We partner with you, turning shared ideas into extraordinary outcomes.',
                },
                {
                  icon: <Star className="w-10 h-10 text-orange-400" />,
                  title: 'Excellence',
                  desc: 'We pursue perfection in every detail, delivering top-notch results.',
                },
              ].map((item, index) => (
                <ServiceCard key={index} {...item} variants={animationConfigs.fadeIn} />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Let’s Connect Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animationConfigs.fadeIn}
          className="py-20 px-4 sm:px-8 bg-gradient-to-t from-gray-800/50 to-gray-900/80"
        >
          <div className="container mx-auto max-w-4xl text-center">
            <SectionHeader title="Let’s Connect" />
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              At Mrcitsoft Innovations, we’re more than a startup – we’re your allies in the digital frontier. Let’s collaborate to unlock your potential with innovative technology solutions. Reach out today!
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="Get in Touch with Mrcitsoft Innovations"
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;