import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import NavBar from './components/ui/NavBar';
import Footer from './components/ui/Footer';

function App(): JSX.Element {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
