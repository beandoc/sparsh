import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Resources from './pages/Resources';
import Education from './pages/Education';
import Care from './pages/Care';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/education" element={<Education />} />
        <Route path="/care" element={<Care />} />
        {/* Fallback route or 404 can be added later */}
      </Routes>
    </Router>
  );
}

export default App;
