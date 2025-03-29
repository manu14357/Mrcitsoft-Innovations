import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet'; // Import react-helmet for metadata
import confetti from 'canvas-confetti'; // Add confetti effect
import Navbar from './Navbar'; // Adjust path as needed
import Footer from './Footer'; // Adjust path as needed

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    projectType: 'Estimation',
    isHuman: false,
  });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const WEB3FORMS_ACCESS_KEY = 'e45b743c-6632-442b-9cc7-13c22c4637df'; // Your Web3Forms Access Key

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name || formData.name.length < 2) return 'Name must be at least 2 characters.';
    if (!emailRegex.test(formData.email)) return 'Please enter a valid email.';
    if (!formData.phone || formData.phone.length < 10) return 'Phone must be at least 10 digits.';
    if (!formData.message || formData.message.length < 10) return 'Message must be at least 10 characters.';
    if (!formData.isHuman) return 'Please confirm you are human.';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setStatus({ type: 'error', message: validationError });
      return;
    }

    setIsSubmitting(true);
    const data = new FormData();
    data.append('access_key', WEB3FORMS_ACCESS_KEY);
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('message', formData.message);
    data.append('projectType', formData.projectType);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const result = await response.json();
      setIsSubmitting(false);
      if (result.success) {
        setStatus({ type: 'success', message: 'Thank you! We’ll get back to you soon.' });
        setFormData({ name: '', email: '', phone: '', message: '', projectType: 'Estimation', isHuman: false });
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#3b82f6', '#9333ea', '#22c55e'],
        });
      } else {
        setStatus({ type: 'error', message: 'Submission failed. Please try again.' });
      }
    } catch (error) {
      setIsSubmitting(false);
      setStatus({ type: 'error', message: 'An error occurred. Please try later.' });
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* SEO Metadata */}
      <Helmet>
        <title>Contact Us | Mrcitsoft Innovations - Start Your Project</title>
        <meta
          name="description"
          content="Contact Mrcitsoft Innovations to bring your tech ideas to life. Get in touch for UI/UX design, software development, and more. Let’s collaborate today!"
        />
        <meta
          name="keywords"
          content="contact Mrcitsoft Innovations, UI/UX design consultation, software development inquiry, tech project estimation, get in touch"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mrcitsoft.com/Contact-Us" />
        <meta property="og:title" content="Contact Us | Mrcitsoft Innovations" />
        <meta property="og:description" content="Ready to scale your business? Contact Mrcitsoft Innovations for expert tech solutions." />
        <meta property="og:url" content="https://mrcitsoft.com/Contact-Us" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Mrcitsoft Innovations",
            "description": "Get in touch with Mrcitsoft Innovations to collaborate on your next tech project, from ideation to full-scale solutions.",
            "url": "https://mrcitsoft.com/Contact-Us",
            "publisher": {
              "@type": "Organization",
              "name": "Mrcitsoft Innovations",
              "url": "https://mrcitsoft.com",
            },
          })}
        </script>
      </Helmet>

      {/* Navbar */}
      <Navbar />

      {/* Main Content Section */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 py-20 px-4 sm:px-8" // Adjusted padding from py-200 to py-20
      >
        <div className="container mx-auto max-w-4xl relative">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-center mb-12"
          >
            Get in <span className="text-gradient">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 text-center mb-12"
          >
            Ready to bring your product idea to life? Let’s collaborate to scale your business and transform your ideas into reality!
          </motion.p>
          <motion.form
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-gray-700/50 relative overflow-hidden"
            noValidate // Prevents default HTML validation to use custom logic
          >
            {/* Progress Bar */}
            <AnimatePresence>
              {isSubmitting && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                  className="absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600"
                />
              )}
            </AnimatePresence>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-transparent border border-gray-600 rounded-lg text-white focus:border-transparent focus:ring-2 focus:ring-blue-500/50 outline-none transition-all duration-300 peer"
                  placeholder=" "
                  required
                  aria-label="Your Name"
                />
                <label className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-300 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base">
                  Your Name
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-transparent border border-gray-600 rounded-lg text-white focus:border-transparent focus:ring-2 focus:ring-blue-500/50 outline-none transition-all duration-300 peer"
                  placeholder=" "
                  required
                  aria-label="Your Email"
                />
                <label className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-300 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base">
                  Your Email
                </label>
              </div>
            </div>
            <div className="mt-6 relative">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 bg-transparent border border-gray-600 rounded-lg text-white focus:border-transparent focus:ring-2 focus:ring-blue-500/50 outline-none transition-all duration-300 peer"
                placeholder=" "
                required
                aria-label="Your Phone Number"
              />
              <label className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-300 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base">
                Your Phone Number
              </label>
            </div>
            <div className="mt-6 relative">
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all duration-300 appearance-none"
                aria-label="Project Type"
              >
                <option value="Estimation">Estimation</option>
                <option value="Prototype">Prototype</option>
                <option value="Minimum Viable Product">Minimum Viable Product</option>
                <option value="Complete Solution">Complete Solution</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            <div className="mt-6 relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 bg-transparent border border-gray-600 rounded-lg text-white focus:border-transparent focus:ring-2 focus:ring-blue-500/50 outline-none transition-all duration-300 peer resize-none"
                placeholder=" "
                rows="5"
                required
                aria-label="Tell us about your idea"
              />
              <label className="absolute left-3 top-4 text-gray-400 transition-all duration-300 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base">
                Tell us about your idea...
              </label>
            </div>
            <div className="mt-6 flex items-center">
              <input
                type="checkbox"
                name="isHuman"
                checked={formData.isHuman}
                onChange={handleChange}
                className="w-5 h-5 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-400 transition-all duration-300"
                id="isHuman"
                aria-label="Confirm you are human"
              />
              <label htmlFor="isHuman" className="ml-2 text-gray-300 hover:text-white transition-colors duration-300">
                Are you human?
              </label>
            </div>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="mt-8 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 relative overflow-hidden disabled:opacity-50"
              aria-label={isSubmitting ? 'Sending message' : 'Send message'}
            >
              <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              <motion.span
                className="absolute inset-0 bg-white/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 2, opacity: 0.5 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            <AnimatePresence>
              {status && (
                <motion.div
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className={`mt-4 p-4 rounded-lg text-center ${
                    status.type === 'success'
                      ? 'bg-green-900/80 text-green-300 border border-green-500/50'
                      : 'bg-red-900/80 text-red-300 border border-red-500/50'
                  }`}
                >
                  {status.message}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>

          {/* Interesting Content Section */}
          <section
            className="mt-16 text-center"
          >
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Transform Your Ideas into Reality
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg text-gray-300 max-w-2xl mx-auto mb-8"
            >
              From a fleeting thought to a market-ready product, we turn your vision into reality with cutting-edge technology and creative expertise.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <motion.article
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.2)' }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800/50 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-2">Ideation & Estimation</h3>
                <p className="text-gray-300">
                  We brainstorm and budget your dream, delivering a roadmap to success.
                </p>
              </motion.article>
              <motion.article
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.2)' }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800/50 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-2">Prototype Development</h3>
                <p className="text-gray-300">
                  Test your concept with a sleek prototype, built for iteration and insight.
                </p>
              </motion.article>
              <motion.article
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.2)' }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800/50 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-2">Full-Scale Solutions</h3>
                <p className="text-gray-300">
                  Launch with confidence using our end-to-end development expertise.
                </p>
              </motion.article>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(147, 51, 234, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
              aria-label="Start your project today"
            >
              Start Your Project Today <ChevronRight className="ml-2 w-5 h-5" />
            </motion.a>
          </section>
        </div>
      </motion.main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactForm;