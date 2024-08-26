import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Hero from './Components/Hero/Hero'; // Adjust path as needed
import Showcase from './Components/Showcase/Showcase'; // Adjust path as needed
import Youtube from './Components/Youtube/Youtube'; // Adjust path as needed
import RecentlyAdded from './Components/Recents/RecentlyAdded'; // Adjust path as needed
import ContactUs from './Components/Contact/Contact'; // Adjust path as needed
import Courses from './Components/Courses/Courses'; // Adjust path as needed
import Team from './Components/Team/Team'; // Adjust path as needed
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy'; // Adjust path as needed
import TermsAndConditions from './Components/TermsAndConditions/TermsAndConditions'; // Adjust path as needed
import ShippingAndDelivery from './Components/ShippingAndDelivery/ShippingAndDelivery'; // Adjust path as needed
import CancellationAndRefundPolicy from './Components/CancellationAndRefundPolicy/CancellationAndRefundPolicy'; // Adjust path as needed
import Portfolio from './Components/Portfolio/Portfolio';
import Blog from './Components/Blog/Blog';
import Newsletter from './Components/Newsletter/Newsletter';
const App = () => {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Showcase />
              <Youtube />
              <RecentlyAdded />
            </>
          } />
          <Route path="/contact-us" element={ <ContactUs /> } />
          <Route path="/courses" element={ <Courses /> } />
          <Route path="/portfolio" element={ <Portfolio /> } />
          <Route path="/team" element={ <Team /> } />
          <Route path="/privacy-policy" element={ <PrivacyPolicy /> } />
          <Route path="/terms-and-conditions" element={ <TermsAndConditions /> } />
          <Route path="/shipping-and-delivery" element={ <ShippingAndDelivery /> } />
          <Route path="/cancellation-and-refunds" element={ <CancellationAndRefundPolicy /> } />
          <Route path="/blog" element={ <Blog /> } />
          <Route path="/newsletter" element={ <Newsletter /> } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
