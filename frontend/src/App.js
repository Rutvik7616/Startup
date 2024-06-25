import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import PrivateRoute from './components/PrivateRoute';

import Frontpagee from './components/frontpage/Frontpagee';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Registration from './components/Register/Registraion';
import Event from './components/Event/Event';
import Membership from './components/membership/Membership';
import AboutUs from './components/Aboutus/About-us';
import Hirementor from './components/Mentor/Hirementor';
import Funding from './components/Funding/Funding';
import ITstartup from './components/Mentor/ITstartup';
import Biotech from './components/Mentor/Biotech';
import Travel from './components/Mentor/Travel';
import Ecommerce from './components/Mentor/Ecommerce';
import Food from './components/Mentor/Food';
import Contactus from './components/Contact us/Contactus';
import Startup from './components/Startup/Startup';
import Investors from './components/Investor/Investors';
import Portfolio from './components/Portfolio/Portfolio';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Frontpagee />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route path="/home" element={<PrivateRoute element={Home} />} />
          <Route path="/event" element={<PrivateRoute element={Event} />} />
          <Route path="/membership" element={<PrivateRoute element={Membership} />} />
          <Route path="/aboutus" element={<PrivateRoute element={AboutUs} />} />
          <Route path="/mentor" element={<PrivateRoute element={Hirementor} />} />
          <Route path="/funding" element={<PrivateRoute element={Funding} />} />
          <Route path="/itstartup" element={<PrivateRoute element={ITstartup} />} />
          <Route path="/biotech" element={<PrivateRoute element={Biotech} />} />
          <Route path="/travel" element={<PrivateRoute element={Travel} />} />
          <Route path="/ecommerce" element={<PrivateRoute element={Ecommerce} />} />
          <Route path="/food" element={<PrivateRoute element={Food} />} />
          <Route path="/contactus" element={<PrivateRoute element={Contactus} />} />
          <Route path="/startup" element={<PrivateRoute element={Startup} />} />
          <Route path="/investors" element={<PrivateRoute element={Investors} />} />
          <Route path="/portfolio" element={<PrivateRoute element={Portfolio} />} />

          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
