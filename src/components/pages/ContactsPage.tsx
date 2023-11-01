import React from 'react';
import { Button, Container } from 'react-bootstrap';
import ImageAvatar from '../ui/ImageAvatar';
import { FaEnvelope, FaVk, FaTelegramPlane } from 'react-icons/fa';
import iphoneForm from '../../assets/img/iphonForm.png';




export default function ContactsPage(): JSX.Element {
  return (
    <div className="iphone-container">
      <div className="avatarContainer">
        <div className="iphone-image">
          <img src={iphoneForm} alt="imgPhone" className="imgPhone" style={{height: '90ch'}} />

          <ImageAvatar />
          <Container
            className="d-flex flex-column justify-content-center flex-wrap align-items-center"
            style={{ height: '50vh', marginTop: '22ch', gap: '1ch' }}
          >
            <Button
              className="Btn"
              style={{ borderRadius: '2ch' }}
              href="https://t.me/nataavodes"
              variant="warning"
            >
              <FaTelegramPlane />
              <span className='span'>Telegram</span>
            </Button>

            <Button
              className="Btn"
              style={{ borderRadius: '2ch' }}
              href="https://vk.com/artmehanikastudio"
              variant="warning"
            >
              <FaVk />
              <span className='span' >VK</span>
            </Button>

            <Button
              className="Btn"
              style={{ borderRadius: '2ch' }}
              href="https://t.me/nataavodes"
              variant="warning"
            >
              <FaEnvelope />
              <span className='span' >E-mail</span>
            </Button>
          </Container>
        </div>
      </div>
    </div>
  );
}
