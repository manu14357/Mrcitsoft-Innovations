import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet'; // Import react-helmet for metadata
import Navbar from './Navbar'; // Adjust path as needed
import Footer from './Footer'; // Adjust path as needed

const Career = () => {
  // Animation variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const internshipPositions = [
    {
      title: 'Software Development Intern',
      responsibilities: 'Assist in software development projects, learn coding languages and frameworks, collaborate with team members on development tasks.',
      requirements: 'Pursuing a degree in Computer Science or related field, basic understanding of programming concepts, eagerness to learn and grow.',
    },
    {
      title: 'Web Development Intern',
      responsibilities: 'Support web development projects, learn front-end and back-end technologies, assist in building and maintaining websites.',
      requirements: 'Pursuing a degree in Computer Science, Web Development, or related field, familiarity with HTML, CSS, JavaScript, and web development frameworks.',
    },
    {
      title: 'Digital Marketing Intern',
      responsibilities: 'Assist in digital marketing initiatives, learn social media management, content creation, and campaign optimization.',
      requirements: 'Pursuing a degree in Marketing, Communications, or related field, interest in digital marketing trends and strategies, strong communication skills.',
    },
    {
      title: 'Cybersecurity Intern',
      responsibilities: 'Support cybersecurity initiatives, learn about threat detection and prevention, assist in implementing security measures.',
      requirements: 'Pursuing a degree in Cybersecurity, Information Technology, or related field, basic knowledge of cybersecurity concepts, strong analytical skills.',
    },
  ];

  const benefits = [
    { title: 'Hands-On Learning', description: 'Gain valuable experience working on real-world projects and tasks relevant to your field of study.' },
    { title: 'Mentorship and Guidance', description: 'Receive guidance from experienced professionals who are passionate about helping you succeed.' },
    { title: 'Networking Opportunities', description: 'Build connections and expand your professional network by collaborating with our team & interacting with clients and partners.' },
    { title: 'Personal and Professional Growth', description: 'Develop valuable skills, gain confidence, and grow both personally and professionally during your internship.' },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* SEO Metadata */}
      <Helmet>
        <title>Internship Opportunities | Mrcitsoft Innovations</title>
        <meta
          name="description"
          content="Explore tech internship opportunities at Mrcitsoft Innovations in software development, web development, digital marketing, and cybersecurity."
        />
        <meta
          name="keywords"
          content="internship opportunities, tech internships, software development intern, web development intern, cybersecurity intern, Mrcitsoft Innovations"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mrcitsoft.com/Career" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            "title": "Tech Internship Opportunities",
            "description": "Join Mrcitsoft Innovations as an intern in software development, web development, digital marketing, or cybersecurity. Gain hands-on experience and mentorship.",
            "hiringOrganization": {
              "@type": "Organization",
              "name": "Mrcitsoft Innovations",
              "url": "https://mrcitsoft.com",
            },
            "employmentType": "INTERN",
            "datePosted": "2025-03-28",
            "validThrough": "2025-12-31",
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
        className="py-20 px-4 sm:px-8 flex items-center justify-center"
      >
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Kickstart Your <span className="text-blue-400">Tech Career</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Join Mrcitsoft Innovations’ internship program and gain hands-on experience in the dynamic field of technology.
          </p>
          <motion.a
            href="#apply"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
            aria-label="Apply for internship opportunities"
          >
            Apply Now
          </motion.a>
        </section>
      </motion.main>

      {/* Benefits Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
        className="py-16 px-4 sm:px-8 bg-gradient-to-b from-gray-800 to-gray-900"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Our <span className="text-blue-400">Internship Program?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.article
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Internship Positions Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
        className="py-16 px-4 sm:px-8 bg-gray-800/50"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Available <span className="text-blue-400">Internship Positions</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {internshipPositions.map((position, index) => (
              <motion.article
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700 hover:border-blue-500 transition-colors"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{position.title}</h3>
                <p className="text-gray-300 mb-4">
                  <span className="font-semibold text-white">Responsibilities:</span> {position.responsibilities}
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold text-white">Requirements:</span> {position.requirements}
                </p>
              </motion.article>
            ))}
          </div>
          <p className="text-center text-gray-300 mt-8">
            *Note: Our internship program is open to students and recent graduates seeking valuable learning opportunities. We welcome applicants from diverse backgrounds and experiences.
          </p>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
        className="py-16 px-4 sm:px-8 text-center bg-gradient-to-b from-gray-800 to-gray-800"
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-blue-400">Join Our Internship Program?</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            At Mrcitsoft Innovations, we believe in providing equal opportunities for all interns to thrive and succeed in their chosen field.
          </p>
          <motion.a
            href="mailto:careers@mrcitsoft.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
            aria-label="Apply now for tech internships"
          >
            Apply Now <ChevronRight className="ml-2 w-5 h-5" />
          </motion.a>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Career;