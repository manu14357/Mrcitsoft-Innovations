import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar'; // Adjust path as needed
import Footer from './Footer'; // Adjust path as needed

const TermsOfService = () => {
  // Animation variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Terms of Service Content */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="flex-1 py-180 px-4 sm:px-8"
      >
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Terms of <span className="text-gradient">Service</span>
          </h1>

          <div className="space-y-8 text-gray-300">
            {/* Welcome */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Welcome to Mrcitsoft Innovations!</h2>
              <p>
                These terms and conditions outline the rules and regulations for the use of Mrcitsoft Innovations Pvt Ltd's Website, located at <a href="https://mrcitsoft.com" className="text-blue-400 hover:text-blue-300">https://mrcitsoft.com</a>.
              </p>
              <p className="mt-4">
                By accessing this website, we assume you accept these terms and conditions. Do not continue to use Mrcitsoft Innovations if you do not agree to take all of the terms and conditions stated on this page.
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Cookies</h2>
              <p>
                The website uses cookies to help personalize your online experience. By accessing Mrcitsoft Innovations, you agreed to use the required cookies. A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you and can only be read by a web server in the domain that issued the cookie to you.
              </p>
              <p className="mt-4">
                We may use cookies to collect, store, and track information for statistical or marketing purposes to operate our website. You have the ability to accept or decline optional Cookies. There are some required Cookies that are necessary for the operation of our website. These cookies do not require your consent as they always work. Please keep in mind that by accepting required Cookies, you also accept third-party Cookies, which might be used via third-party provided services if you use such services on our website, for example, a video display window provided by third parties and integrated into our website.
              </p>
            </div>

            {/* License */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">License</h2>
              <p>
                Unless otherwise stated, Mrcitsoft Innovations Pvt Ltd and/or its licensors own the intellectual property rights for all material on Mrcitsoft Innovations. All intellectual property rights are reserved. You may access this from Mrcitsoft Innovations for your own personal use subjected to restrictions set in these terms and conditions.
              </p>
              <p className="mt-4">You must not:</p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>Copy or republish material from Mrcitsoft Innovations</li>
                <li>Sell, rent, or sub-license material from Mrcitsoft Innovations</li>
                <li>Reproduce, duplicate or copy material from Mrcitsoft Innovations</li>
                <li>Redistribute content from Mrcitsoft Innovations</li>
              </ul>
              <p className="mt-4">This Agreement shall begin on the date hereof.</p>
            </div>

            {/* Hyperlinking to Our Content */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Hyperlinking to Our Content</h2>
              <p>
                The following organizations may link to our Website without prior written approval:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>Government agencies</li>
                <li>Search engines</li>
                <li>News organizations</li>
                <li>Online directory distributors</li>
                <li>System-wide Accredited Businesses</li>
              </ul>
              <p className="mt-4">
                These organizations may link to our home page, to publications, or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site.
              </p>
              <p className="mt-4">
                We may consider and approve other link requests from the following types of organizations:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>Commonly-known consumer and/or business information sources</li>
                <li>Dot.com community sites</li>
                <li>Associations or other groups representing charities</li>
                <li>Online directory distributors</li>
                <li>Internet portals</li>
                <li>Accounting, law, and consulting firms</li>
                <li>Educational institutions and trade associations</li>
              </ul>
              <p className="mt-4">
                We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Mrcitsoft Innovations Pvt Ltd; and (d) the link is in the context of general resource information.
              </p>
              <p className="mt-4">
                Approved organizations may hyperlink to our Website as follows:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>By use of our corporate name</li>
                <li>By use of the uniform resource locator being linked to</li>
                <li>Using any other description of our Website being linked to that makes sense within the context and format of content on the linking party's site</li>
              </ul>
              <p className="mt-4">
                No use of Mrcitsoft Innovations logo or other artwork will be allowed for linking absent a trademark license agreement.
              </p>
            </div>

            {/* Comments Section */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Comments</h2>
              <p>
                Mrcitsoft Innovations Pvt Ltd reserves the right to monitor all Comments and remove any Comments that can be considered inappropriate, offensive, or causes breach of these Terms and Conditions.
              </p>
              <p className="mt-4">You warrant and represent that:</p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so</li>
                <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent, or trademark of any third party</li>
                <li>The Comments do not contain any defamatory, libelous, offensive, indecent, or otherwise unlawful material, which is an invasion of privacy</li>
                <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity</li>
              </ul>
              <p className="mt-4">
                You hereby grant Mrcitsoft Innovations Pvt Ltd a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats, or media.
              </p>
            </div>

            {/* Content Liability */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Content Liability</h2>
              <p>
                We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are raised on your Website.
              </p>
            </div>

            {/* Reservation of Rights */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Reservation of Rights</h2>
              <p>
                We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time.
              </p>
            </div>

            {/* Removal of Links */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Removal of Links from Our Website</h2>
              <p>
                If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links, but we are not obligated to or so or to respond to you directly.
              </p>
              <p className="mt-4">
                We do not ensure that the information on this website is correct. We do not warrant its completeness or accuracy, nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.
              </p>
            </div>

            {/* Disclaimer */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Disclaimer</h2>
              <p>
                To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TermsOfService;