import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import NavBar from './components/ui/NavBar';
import Footer from './components/ui/Footer';

function App(): JSX.Element {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
