import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LGLSDelhi from './pages/LGLSDelhi';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import LGLSDubai from './pages/LGLSDubai';
import LGLSNyc from './pages/LGLSNyc';
import LGLSUk from './pages/LGLSUk';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LGLSDubai />} />
        <Route path="/delhi" element={<LGLSDelhi />} />
        <Route path="/nyc" element={<LGLSNyc />} />
        <Route path="/uk" element={<LGLSUk />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
