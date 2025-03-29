import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
} from './components'
import styles from './style'

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
      
      <Routes basename="/Mrcitsoft-Innovations">
        {/* Homepage */}
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
        {/* Web Services Page */}
        <Route path='/web-services' element={<WebServices />} />

        <Route path='/ui-services' element={<UIServices />} />

        <Route path='/Mobile-services' element={<MobileServices />} />

        <Route path='/cyber-security-services' element={<CyberSecurityServices />} />

        <Route path='/business-development-services' element={<BusinessDevelopmentServices />} />

        <Route path='/quality-assurance-services' element={<QualityAssuranceServices />} />

        <Route path='/privacy-Policy' element={<PrivacyPolicy />} />

        <Route path='/Terms-of-service' element={<TermsOfService />} />

        <Route path='/Contact-Us' element={<ContactForm />} />

        <Route path='/About-Us' element={<About />} />

        <Route path='/Career' element={<Career />} />

        <Route path='/Blogs' element={<Blogs />} />

        <Route path='/Blogs/:id' element={<BlogPost />} />

        <Route path='/support' element={<Support />} />
      </Routes>
    </div>
  )
}

export default App