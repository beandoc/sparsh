import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Resources from './pages/Resources';
import Education from './pages/Education';
import Care from './pages/Care';
import PalliativeCare from './pages/PalliativeCare';
import CancerOverview from './pages/CancerOverview';
import Toolkit from './pages/Toolkit';
import SupportiveOncology from './pages/SupportiveOncology';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/education" element={<Education />} />
        <Route path="/care" element={<Care />} />
        <Route path="/palliative-care" element={<PalliativeCare />} />
        <Route path="/cancer-overview" element={<CancerOverview />} />
        <Route path="/toolkit" element={<Toolkit />} />
        <Route path="/supportive-care" element={<SupportiveOncology />} />
      </Routes>
    </Router>
  );
}

export default App;
