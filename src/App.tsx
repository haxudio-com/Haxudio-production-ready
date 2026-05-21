import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
<<<<<<< HEAD
=======

// Pages ko lazy load kar rahe hain taake unka bundle size alag ho jaye
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Projects = lazy(() => import('./pages/Projects'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
>>>>>>> f5079009c7551ac1688c3bfd6c58c83a766da18f

// Pages ko lazy load kar rahe hain taake unka bundle size alag ho jaye
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Projects = lazy(() => import('./pages/Projects'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

// Scroll to top on route change (Optimized to prevent Forced Reflow)
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // requestAnimationFrame se browser tabhi scroll karega jab wo bilkul free hoga, bojh nahi padega
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    });
  }, [pathname]);
  return null;
}

// Jab tak lazy page load ho, tab tak ye simple loading spinner dikhega
function PageLoader() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-bg-main">
      <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Suspense lagana lazmi hai lazy loading ke liye */}
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      {!isContactPage && <WhatsAppButton />}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}