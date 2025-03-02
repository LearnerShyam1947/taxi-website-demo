import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import CarDetailsPage from './pages/CarDetailsPage';
import CarsPage from './pages/CarsPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <style>
        {`html { scroll-behavior: smooth; }`}
      </style>
      <TopBar />
      <Navbar />
      <main className="overflow-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cars" element={<CarsPage />} />
          <Route path="/cars/:id" element={<CarDetailsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;