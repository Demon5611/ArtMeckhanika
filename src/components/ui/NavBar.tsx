import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoKNata from '../../assets/img/logoNataAvodes.png';

export default function NavBar(): JSX.Element {
  useEffect(() => {
    const navBar = document.querySelector('.nuvBar');

    if (navBar) {
      const scrollHandler = () => {
        if (window.scrollY > 0) {
          navBar.classList.add('fixed');
        } else {
          navBar.classList.remove('fixed');
        }
      };

      window.addEventListener('scroll', scrollHandler);

      return () => {
        window.removeEventListener('scroll', scrollHandler);
      };
    }
  }, []);

  return (
    <Container>
      <Navbar className="nuvBar" variant="light">
        <img src={logoKNata} width="30%" height="30%" className="me-auto me-9" alt="logo" />
        <Nav className="ms-4">
          <Nav.Link href="/">Главная</Nav.Link>
          <Nav.Link href="/gallery">Галерея</Nav.Link>
          <Nav.Link href="/contacts">Контакты</Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  );
}
