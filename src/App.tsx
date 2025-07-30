import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LGLSDelhi2025 from './pages/LGLSDelhi2025';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import LGLSDubai2026 from './pages/LGLSDubai2026';
import LGLSNyc2026 from './pages/LGLSNyc2026';
import LGLSUk2026 from './pages/LGLSUk2026';
import LGLSDelhi2026 from './pages/LGLSDelhi2026';
import About from './pages/About';
import RecommendationLetters from './pages/RecommendationLetters';
import GoToTop from './components/GoToTop';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LGLSDubai2026 />} />
        <Route path="/delhi-25" element={<LGLSDelhi2025 />} />
        <Route path="/delhi-26" element={<LGLSDelhi2026 />} />
        <Route path="/nyc-26" element={<LGLSNyc2026 />} />
        <Route path="/uk-26" element={<LGLSUk2026 />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/recommendation-letters"
          element={<RecommendationLetters />}
        />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <GoToTop />
    </Router>
  );
}

export default App;
