import { Container } from 'react-bootstrap';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTopButton from './components/ui/ScrollToTopButton';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Container className="main-container">
      <App />
      <ScrollToTopButton />
    </Container>
  </React.StrictMode>,
);
