import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // Import react-helmet for metadata
import Navbar from './Navbar'; // Adjust path
import Footer from './Footer'; // Adjust path
import blogPosts from './blogData'; // Adjust path
import confetti from 'canvas-confetti';

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const WEB3FORMS_ACCESS_KEY = 'e45b743c-6632-442b-9cc7-13c22c4637df'; // Your Web3Forms Access Key

  const categories = [
    'All',
    'Digital Marketing',
    'Cybersecurity',
    'Web Development',
    'Artificial Intelligence',
    'Cloud Computing',
    'Mobile Development',
    'Data Science',
    'UI/UX Design',
    'Blockchain',
  ];

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
    hover: { scale: 1.03, y: -8, transition: { duration: 0.3 } },
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubscribeStatus(null);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubscribeStatus({ type: 'error', message: 'Please enter a valid email.' });
      setIsSubmitting(false);
      return;
    }

    const data = new FormData();
    data.append('access_key', WEB3FORMS_ACCESS_KEY);
    data.append('email', email);
    data.append('subject', 'Newsletter Subscription');
    data.append('message', 'User subscribed to the newsletter');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const result = await response.json();
      setIsSubmitting(false);

      if (result.success) {
        setSubscribeStatus({ type: 'success', message: 'Subscribed successfully! Check your inbox.' });
        setEmail('');
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#3b82f6', '#9333ea', '#22c55e'],
        });
      } else {
        setSubscribeStatus({ type: 'error', message: 'Subscription failed. Please try again.' });
      }
    } catch (error) {
      setIsSubmitting(false);
      setSubscribeStatus({ type: 'error', message: 'An error occurred. Please try later.' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white font-sans flex flex-col">
      {/* SEO Metadata */}
      <Helmet>
        <title>Tech Blog - Insights from Mrcitsoft Innovations</title>
        <meta
          name="description"
          content="Explore expert tech insights on Digital Marketing, Cybersecurity, Web Development, UI/UX Design, and more at Mrcitsoft Innovations' blog."
        />
        <meta
          name="keywords"
          content="tech blog, UI/UX design blog, cybersecurity insights, web development tips, Mrcitsoft Innovations, technology trends"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mrcitsoft.com/blogs" />
        <meta property="og:title" content="Tech Blog - Insights from Mrcitsoft Innovations" />
        <meta property="og:description" content="Dive into expert advice on technology, design, and business strategies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mrcitsoft.com/blogs" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Mrcitsoft Innovations Blog",
            "description": "Expert insights on technology, design, and business strategies from Mrcitsoft Innovations.",
            "publisher": {
              "@type": "Organization",
              "name": "Mrcitsoft Innovations",
              "url": "https://mrcitsoft.com",
            },
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "datePublished": post.date,
              "author": {
                "@type": "Person",
                "name": post.author,
              },
              "url": `https://mrcitsoft.com/blogs/${post.id}`,
            })),
          })}
        </script>
      </Helmet>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <motion.main
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="py-28 px-4 sm:px-8 text-center  overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
          >
            Explore Our <span className="text-blue-400">Tech Insights</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 leading-relaxed"
          >
            Dive into expert advice on technology, design, and business strategies from Mrcitsoft Innovations.
          </motion.p>
        </div>
      </motion.main>

      {/* Filter Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
        className="py-12 px-4 sm:px-8 bg-gray-800/30 backdrop-blur-md sticky top-0 z-20"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="sr-only">Blog Categories</h2> {/* Hidden heading for accessibility */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(147, 51, 234, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 shadow-md whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 border border-gray-700/50'
                }`}
                onClick={() => setSelectedCategory(category)}
                aria-label={`Filter blogs by ${category}`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Blog Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
        className="py-20 px-4 sm:px-8 flex-1"
      >
        <div className="container mx-auto max-w-6xl">
          {filteredPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <h3 className="text-2xl font-semibold text-gray-300">
                No posts found in this category yet.
              </h3>
              <p className="text-gray-300 mt-2">
                Check back soon for new tech insights!
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="p-8">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 text-xs font-semibold rounded-full mb-6 shadow-sm">
                      {post.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 line-clamp-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {post.title}
                    </h2>
                    <p className="text-gray-300 mb-6 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-gray-400 text-sm mb-6 bg-gray-900/50 px-4 py-2 rounded-full w-fit">
                      <Clock className="w-4 h-4 mr-2 text-blue-300" />
                      <span>{post.readTime}</span>
                      <span className="mx-2">•</span>
                      <span>{post.author}</span>
                      <span className="mx-2">•</span>
                      <span>{post.date}</span>
                    </div>
                    <Link
                      to={`/blogs/${post.id}`}
                      className="group inline-flex items-center text-blue-300 hover:text-blue-200 transition-all duration-300 bg-gray-900/50 px-4 py-2 rounded-full"
                      aria-label={`Read more about ${post.title}`}
                    >
                      Read More 
                      <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
        className="py-20 px-4 sm:px-8 text-center bg-gradient-to-t from-gray-850 to-gray-800 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent"
          >
            Stay Ahead with <span className="text-blue-400">Tech Insights</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-10 leading-relaxed"
          >
            Subscribe for the latest updates on technology trends and insights from Mrcitsoft Innovations.
          </motion.p>
          <form onSubmit={handleSubscribe} noValidate>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex justify-center items-center max-w-md mx-auto shadow-xl relative"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 rounded-l-full bg-gray-800/70 backdrop-blur-md text-white border border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 disabled:opacity-60"
                disabled={isSubmitting}
                required
                aria-label="Email for newsletter subscription"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(147, 51, 234, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-r-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
                aria-label="Subscribe to newsletter"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </motion.button>
            </motion.div>
            <AnimatePresence>
              {subscribeStatus && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className={`mt-6 p-4 rounded-xl text-center shadow-md backdrop-blur-md ${
                    subscribeStatus.type === 'success'
                      ? 'bg-green-900/70 text-green-200 border border-green-500/40'
                      : 'bg-red-900/70 text-red-200 border border-red-500/40'
                  }`}
                >
                  {subscribeStatus.message}
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Blogs;