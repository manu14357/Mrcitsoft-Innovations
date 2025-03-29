import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // Import react-helmet for metadata
import { ChevronLeft, Clock, ArrowUp, Twitter, Linkedin, Facebook, Quote } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Footer from './Footer';
import blogPosts from './blogData';

const BlogPost = () => {
  const { id } = useParams();
  const [scrollProgress, setScrollProgress] = useState(0);
  const post = blogPosts.find((p) => p.id === parseInt(id)) || {};
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;
      setScrollProgress((scrollPosition / totalHeight) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    window.scrollTo(0, 0); // Scroll to top on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [id]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  if (!post.id) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex items-center justify-center p-4">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-gray-800/80 backdrop-blur-md p-10 rounded-2xl shadow-2xl border border-gray-700/50"
        >
          <h2 className="text-3xl font-bold text-red-400 mb-4">Blog Post Not Found</h2>
          <Link to="/blogs" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300">
            <ChevronLeft className="w-5 h-5 mr-2" /> Return to Blog List
          </Link>
        </motion.div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  const handleRelatedPostClick = (relatedId) => {
    navigate(`/blogs/${relatedId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = (content) => {
    const sections = content.split('\n\n');
    return sections.map((section, index) => {
      if (section.trim().startsWith('**') && section.trim().endsWith('**')) {
        return (
          <motion.h2
            key={index}
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            className="text-3xl md:text-4xl font-extrabold text-white mt-16 mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            {section.replace(/\*\*/g, '').trim()}
          </motion.h2>
        );
      }
      if (section.startsWith('>')) {
        return (
          <motion.blockquote
            key={index}
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            className="relative my-12 p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border-l-4 border-purple-500 text-gray-200 italic text-lg shadow-lg"
          >
            <Quote className="absolute -top-4 -left-4 w-8 h-8 text-purple-400 opacity-60" />
            {section.replace('>', '').trim()}
          </motion.blockquote>
        );
      }
      if (section.startsWith('```')) {
        const [langLine, ...codeLines] = section.split('\n');
        const language = langLine.replace('```', '').trim() || 'html';
        const codeContent = codeLines.join('\n').replace('```', '').trim();
        return (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            className="my-10 relative group"
          >
            <div className="bg-gray-900 rounded-t-xl px-4 py-2 text-sm text-gray-400 border-b border-gray-800">
              {language}
            </div>
            <SyntaxHighlighter 
              language={language} 
              style={oneDark} 
              customStyle={{ 
                padding: '1.5rem',
                borderRadius: '0 0 12px 12px',
                background: '#1a1b26',
                margin: 0,
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
              }}
            >
              {codeContent}
            </SyntaxHighlighter>
          </motion.div>
        );
      }
      if (section.match(/^\d+\./m)) {
        const items = section.split('\n').filter(item => item.match(/^\d+\./));
        return (
          <motion.ol
            key={index}
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            className="list-decimal pl-12 my-10 space-y-6 text-gray-200 marker:text-purple-400 marker:font-bold"
          >
            {items.map((item, i) => (
              <li key={i} className="text-lg leading-relaxed pl-3 hover:text-white transition-colors duration-300">
                {item.replace(/^\d+\.\s*/, '').trim()}
              </li>
            ))}
          </motion.ol>
        );
      }
      if (section.match(/^-\s+/m)) {
        const items = section.split('\n').filter(item => item.match(/^-\s+/));
        return (
          <motion.ul
            key={index}
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            className="list-disc pl-12 my-10 space-y-6 text-gray-200 marker:text-purple-400"
          >
            {items.map((item, i) => (
              <li key={i} className="text-lg leading-relaxed pl-3 hover:text-white transition-colors duration-300">
                {item.replace(/^-\s+/, '').trim()}
              </li>
            ))}
          </motion.ul>
        );
      }
      return (
        <motion.p
          key={index}
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="text-gray-200 text-lg leading-loose my-8"
          dangerouslySetInnerHTML={{
            __html: section
              .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-blue-300">$1</strong>')
              .replace(/\n/g, '<br/>')
          }}
        />
      );
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white font-sans flex flex-col">
      {/* SEO Metadata */}
      <Helmet>
        <title>{`${post.title} | Mrcitsoft Innovations Blog`}</title>
        <meta
          name="description"
          content={post.excerpt || `Read insights on ${post.category} from Mrcitsoft Innovations. ${post.title} explores key trends and tips.`}
        />
        <meta
          name="keywords"
          content={`${post.category.toLowerCase()} blog, ${post.title.toLowerCase()}, tech insights, Mrcitsoft Innovations, ${post.category.toLowerCase()} trends`}
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content={post.author} />
        <link rel="canonical" href={`https://mrcitsoft.com/blogs/${post.id}`} />
        <meta property="og:title" content={`${post.title} | Mrcitsoft Innovations Blog`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://mrcitsoft.com/blogs/${post.id}`} />
        <meta property="article:published_time" content={new Date(post.date).toISOString()} />
        <meta property="article:author" content={post.author} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "datePublished": post.date,
            "author": {
              "@type": "Person",
              "name": post.author,
            },
            "publisher": {
              "@type": "Organization",
              "name": "Mrcitsoft Innovations",
              "url": "https://mrcitsoft.com",
            },
            "url": `https://mrcitsoft.com/blogs/${post.id}`,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://mrcitsoft.com/blogs/${post.id}`,
            },
            "wordCount": post.content.split(' ').length,
          })}
        </script>
      </Helmet>

      {/* Scroll Progress */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 transition-all duration-300 shadow-lg" 
        style={{ width: `${scrollProgress}%` }} 
      />

      {/* Header */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="relative py-28 px-4 sm:px-8 bg-gradient-to-br from-gray-900 via-gray-850 to-gray-800 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <Link 
            to="/blogs" 
            className="group inline-flex items-center text-blue-300 hover:text-blue-200 mb-10 transition-all duration-300 bg-gray-800/50 px-4 py-2 rounded-full"
            aria-label="Back to blog list"
          >
            <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-2 transition-transform duration-300" /> 
            Back to Blogs
          </Link>
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 text-sm font-medium rounded-full mb-6 border border-blue-500/30 shadow-md">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent drop-shadow-md">
            {post.title}
          </h1>
          <div className="flex items-center text-gray-300 text-sm bg-gray-800/70 backdrop-blur-sm px-5 py-3 rounded-full w-fit shadow-inner">
            <Clock className="w-4 h-4 mr-2 text-blue-300" />
            <span>{post.readTime} • {post.author} • {post.date}</span>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="py-24 px-4 sm:px-8 flex-1 relative">
        <article className="container mx-auto max-w-4xl bg-gray-800/30 backdrop-blur-md p-10 rounded-2xl shadow-2xl border border-gray-700/30">
          {renderContent(post.content)}
          <div className="mt-20 flex flex-col sm:flex-row items-center justify-between border-t border-gray-700/50 pt-10 gap-6">
            <p className="text-gray-300 text-lg font-medium">Share this post:</p>
            <div className="flex gap-4">
              {[
                { Icon: Twitter, url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${window.location.href}` },
                { Icon: Linkedin, url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}` },
                { Icon: Facebook, url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}` },
              ].map(({ Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 bg-gray-800/50 p-3 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 shadow-md"
                  aria-label={`Share on ${Icon.name}`}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </article>
      </main>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="py-24 px-4 sm:px-8 bg-gradient-to-t from-gray-850 to-gray-800"
        >
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-extrabold text-white mb-16 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              Related Posts in {post.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((related) => (
                <motion.article
                  key={related.id}
                  whileHover={{ scale: 1.03, y: -5 }}
                  onClick={() => handleRelatedPostClick(related.id)}
                  className="group bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50 cursor-pointer"
                >
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 text-sm font-medium rounded-full mb-6 group-hover:scale-105 transition-transform duration-300">
                    {related.category}
                  </span>
                  <h3 className="text-2xl font-semibold text-white mb-4 line-clamp-2 group-hover:text-blue-200 transition-colors duration-300">
                    {related.title}
                  </h3>
                  <p className="text-gray-300 line-clamp-2 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {related.excerpt}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Scroll to Top */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: scrollProgress > 20 ? 1 : 0, scale: scrollProgress > 20 ? 1 : 0 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-10 right-10 bg-gradient-to-br from-blue-500 to-purple-500 text-white p-4 rounded-full shadow-2xl hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] transition-all duration-300 z-50 hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>

      <Footer />
    </div>
  );
};

export default BlogPost;