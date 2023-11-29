import  React  from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTopButton from './components/ui/ScrollToTopButton';




createRoot(document.getElementById('root') as HTMLElement).render(
<BrowserRouter>
        <div className="main-container">
      <Container>
        <App />
        <ScrollToTopButton />
      </Container>
    </div>
 </BrowserRouter>,
);
