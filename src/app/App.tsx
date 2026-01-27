import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { VendorLanding } from './pages/VendorLanding';
import { CustomerLanding } from './pages/CustomerLanding';
import { ProviderLanding } from './pages/ProviderLanding';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { CookiePolicy } from './pages/CookiePolicy';
import { ErrandLanding } from './pages/ErrandLanding';
import { AboutUs } from './pages/AboutUs';
import { HelpCenter } from './pages/HelpCenter';
import { Safety } from './pages/Safety';
import { TermsOfService } from './pages/TermsOfService';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vendor" element={<VendorLanding />} />
      <Route path="/customer" element={<CustomerLanding />} />
      <Route path="/provider" element={<ProviderLanding />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/cookies" element={<CookiePolicy />} />
      <Route path="/errands" element={<ErrandLanding />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/help" element={<HelpCenter />} />
      <Route path="/safety" element={<Safety />} />
      <Route path="/terms" element={<TermsOfService />} />
    </Routes>
  );
}
