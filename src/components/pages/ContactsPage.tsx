import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { FaEnvelope, FaVk, FaTelegramPlane } from 'react-icons/fa';
import ImageAvatar from '../ui/ImageAvatar';
import iphoneForm from '../../assets/img/iphonForm.png';

export default function ContactsPage(): JSX.Element {
  const styleBtn = {
    borderColor: 'grey',
    borderRadius: '2ch',
    background: 'radial-gradient(circle,  #f3e51f, #ffc107,)',
  };

  return (
    <div className="iphone-container">
      <div className="avatarContainer">
        <div className="iphone-image">
          <img src={iphoneForm} alt="imgPhone" className="imgPhone" style={{ height: '90ch' }} />

          <ImageAvatar />
          <Container
            className="d-flex flex-column justify-content-center flex-wrap align-items-center"
            style={{ height: '50vh', marginTop: '22ch', gap: '1ch' }}
          >
            <Button
              className="Btn"
              style={styleBtn}
              href="https://t.me/nataavodes"
              variant="warning"
            >
              <FaTelegramPlane />
              <span className="span">Telegram</span>
            </Button>

            <Button
              className="Btn"
              style={styleBtn}
              href="https://vk.com/artmehanikastudio"
              variant="warning"
            >
              <FaVk />
              <span className="span">VK</span>
            </Button>

            <Button
              className="Btn"
              style={styleBtn}
              href="mailto:nataliya.mur@mail.ru"
              variant="warning"
            >
              <FaEnvelope />
              <span className="span">E-mail</span>
            </Button>
          </Container>
        </div>
      </div>
    </div>
  );
}
