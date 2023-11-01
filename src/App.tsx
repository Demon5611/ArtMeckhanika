import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactsPage from './components/pages/ContactsPage';
import GaleryPage from './components/pages/GaleryPage';
import MainPage from './components/pages/MainPage';
import NavBar from './components/ui/NavBar';

function App(): JSX.Element {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/gallery" element={<GaleryPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </>
  );
}

export default App;
