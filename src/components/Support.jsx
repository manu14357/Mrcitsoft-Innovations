import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, HelpCircle, Mail, Phone, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet'; // Import react-helmet for metadata
import Navbar from './Navbar'; // Adjust path
import Footer from './Footer'; // Adjust path
import confetti from 'canvas-confetti';

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issue: '',
    message: '',
  });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const WEB3FORMS_ACCESS_KEY = 'e45b743c-6632-442b-9cc7-13c22c4637df'; // Your Web3Forms Access Key

  const faqs = [
    {
      question: 'How do I get started with your services?',
      answer: 'Simply head to our Contact page, fill out the form with your project details, and we’ll reach out to discuss your needs and next steps.',
    },
    {
      question: 'What is the typical response time for support requests?',
      answer: 'We aim to respond to all support requests within 24-48 hours during business days. For urgent issues, please mark your request as high priority.',
    },
    {
      question: 'Do you offer ongoing support after project completion?',
      answer: 'Yes! We provide tailored maintenance and support plans to ensure your project runs smoothly post-launch. Contact us for details.',
    },
    {
      question: 'How can I track my project progress?',
      answer: 'We provide regular updates via email and can set up a dedicated project dashboard upon request. Reach out to your project manager for more info.',
    },
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name || formData.name.length < 2) return 'Name must be at least 2 characters.';
    if (!emailRegex.test(formData.email)) return 'Please enter a valid email.';
    if (!formData.issue) return 'Please select an issue type.';
    if (!formData.message || formData.message.length < 10) return 'Message must be at least 10 characters.';
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
    data.append('subject', `Support Request: ${formData.issue}`);
    data.append('message', formData.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const result = await response.json();
      setIsSubmitting(false);
      if (result.success) {
        setStatus({ type: 'success', message: 'Support request submitted! We’ll get back to you soon.' });
        setFormData({ name: '', email: '', issue: '', message: '' });
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white font-sans flex flex-col">
      {/* SEO Metadata */}
      <Helmet>
        <title>Support | Mrcitsoft Innovations - Customer Assistance</title>
        <meta
          name="description"
          content="Get expert support from Mrcitsoft Innovations. Submit a request or explore FAQs for technical support, billing inquiries, and project assistance."
        />
        <meta
          name="keywords"
          content="Mrcitsoft Innovations support, tech support services, customer support, technical assistance, project support, billing help"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mrcitsoft.com/support" />
        <meta property="og:title" content="Support | Mrcitsoft Innovations" />
        <meta
          property="og:description"
          content="Need help? Contact Mrcitsoft Innovations for top-notch customer support and technical assistance."
        />
        <meta property="og:url" content="https://mrcitsoft.com/support" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Support - Mrcitsoft Innovations",
            "description": "Contact Mrcitsoft Innovations for customer support, technical assistance, and project inquiries.",
            "url": "https://mrcitsoft.com/support",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+1234567890",
                "contactType": "Customer Service",
                "email": "support@mrcitsoft.com",
                "availableLanguage": "English",
                "hoursAvailable": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "17:00"
                }
              }
            ],
          })}
        </script>
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <motion.main
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="py-20 px-4 sm:px-8 text-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
          >
            We’re Here to <span className="text-blue-400">Help</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            Got questions or need assistance? Our team at Mrcitsoft Innovations provides top-notch customer support to ensure your success.
          </motion.p>
        </div>
      </motion.main>

      {/* FAQ Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
        className="py-20 px-4 sm:px-8 bg-gray-900/50"
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
            Frequently Asked <span className="text-blue-400">Questions</span>
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                  <HelpCircle className="w-6 h-6 mr-2 text-blue-300" /> {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Support Form Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
        className="py-20 px-4 sm:px-8 bg-gradient-to-t from-gray-850 to-gray-800 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
            Submit a <span className="text-blue-400">Support Request</span>
          </h2>
          <motion.form
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-gray-800/50 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-gray-700/30 relative overflow-hidden"
            noValidate
          >
            <AnimatePresence>
              {isSubmitting && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                  className="absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg"
                />
              )}
            </AnimatePresence>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 bg-transparent border border-gray-600/50 rounded-xl text-white focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/30 outline-none transition-all duration-300 peer placeholder-transparent"
                  placeholder="Your Name"
                  required
                  aria-label="Your Name"
                />
                <label className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-300 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-400 peer-focus:bg-gray-800/80 peer-focus:px-2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base group-hover:text-blue-300">
                  Your Name
                </label>
              </div>
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 bg-transparent border border-gray-600/50 rounded-xl text-white focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/30 outline-none transition-all duration-300 peer placeholder-transparent"
                  placeholder="Your Email"
                  required
                  aria-label="Your Email"
                />
                <label className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-300 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-400 peer-focus:bg-gray-800/80 peer-focus:px-2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base group-hover:text-blue-300">
                  Your Email
                </label>
              </div>
            </div>
            <div className="mt-8 relative group">
              <select
                name="issue"
                value={formData.issue}
                onChange={handleChange}
                className="w-full p-4 bg-gray-800/70 text-white border border-gray-600/50 rounded-xl focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/30 outline-none transition-all duration-300 appearance-none cursor-pointer"
                required
                aria-label="Select Issue Type"
              >
                <option value="" disabled>Select Issue Type</option>
                <option value="Technical Support">Technical Support</option>
                <option value="Billing Inquiry">Billing Inquiry</option>
                <option value="Project Assistance">Project Assistance</option>
                <option value="Other">Other</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 group-hover:text-blue-300 transition-colors duration-300" />
            </div>
            <div className="mt-8 relative group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 bg-transparent border border-gray-600/50 rounded-xl text-white focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/30 outline-none transition-all duration-300 peer placeholder-transparent resize-none"
                placeholder="Describe your issue..."
                rows="6"
                required
                aria-label="Describe your issue"
              />
              <label className="absolute left-4 top-4 text-gray-400 transition-all duration-300 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-400 peer-focus:bg-gray-800/80 peer-focus:px-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base group-hover:text-blue-300">
                Describe your issue...
              </label>
            </div>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="mt-10 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 relative overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed shadow-lg"
              aria-label={isSubmitting ? 'Submitting support request' : 'Submit support request'}
            >
              <span className="relative z-10 text-lg font-semibold">
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </span>
              <motion.span
                className="absolute inset-0 bg-white/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 2, opacity: 0.5 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
            <AnimatePresence>
              {status && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className={`mt-6 p-5 rounded-xl text-center shadow-md backdrop-blur-md ${
                    status.type === 'success'
                      ? 'bg-green-900/70 text-green-200 border border-green-500/40'
                      : 'bg-red-900/70 text-red-200 border border-red-500/40'
                  }`}
                  role="alert"
                >
                  {status.message}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>

          {/* Quick Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <h3 className="text-3xl font-semibold text-white mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Need Immediate Help?
            </h3>
            <div className="flex flex-col md:flex-row justify-center gap-8 text-gray-300">
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-2 text-blue-300" />
                <a
                  href="mailto:support@mrcitsoft.com"
                  className="hover:text-blue-200 transition-colors duration-300"
                  aria-label="Email support at support@mrcitsoft.com"
                >
                  support@mrcitsoft.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-2 text-blue-300" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-blue-200 transition-colors duration-300"
                  aria-label="Call support at +1 (234) 567-890"
                >
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center">
                <Clock className="w-6 h-6 mr-2 text-blue-300" />
                <span>Mon-Fri, 9 AM - 5 PM EST</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Support;