import React from 'react';
import { Routes, Route } from 'react-router-dom'; // No BrowserRouter here
import { 
  Billing, 
  Business, 
  CardDeal, 
  Clients, 
  CTA, 
  Footer, 
  Hero, 
  Navbar, 
  Stats, 
  Testimonials,
  WebServices,
  UIServices,
  MobileServices,
  CyberSecurityServices,
  BusinessDevelopmentServices,
  QualityAssuranceServices,
  PrivacyPolicy,
  TermsOfService,
  ContactForm,
  About,
  Career,
  Blogs,
  BlogPost,
  Support
} from './components';
import styles from './style';

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      {/* Navbar (Visible on all pages) */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Content with Routing */}
      <Routes>
        <Route
          path='/'
          element={
            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Hero />
                <Stats />
                <Business />
                <Billing />
                <CardDeal />
                <Testimonials />
                <CTA />
                <Footer />
              </div>
            </div>
          }
        />
        <Route path='/web-services' element={<WebServices />} />
        <Route path='/ui-services' element={<UIServices />} />
        <Route path='/mobile-services' element={<MobileServices />} />
        <Route path='/cyber-security-services' element={<CyberSecurityServices />} />
        <Route path='/business-development-services' element={<BusinessDevelopmentServices />} />
        <Route path='/quality-assurance-services' element={<QualityAssuranceServices />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-of-service' element={<TermsOfService />} />
        <Route path='/contact-us' element={<ContactForm />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/career' element={<Career />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogs/:id' element={<BlogPost />} />
        <Route path='/support' element={<Support />} />
      </Routes>
    </div>
  );
};

export default App;
