import React from 'react';
import { Col, Container, Image } from 'react-bootstrap';
import monky1 from '../../assets/img/monky1.jpeg';
import monky2 from '../../assets/img/monky2.jpg';
import NataAvodesBio from '../../assets/srcfiles/NataAvodesBio.pdf';
import ImgHeader from '../ui/ImgHeader';
import GalaryPage from './GaleryPage';
import ContactsPage from './ContactsPage';

export default function MainPage(): JSX.Element {
  return (
    <div id='main'>
      <Container className="containerMainPage" id='main'>
        <ImgHeader />
        <Container>
          <div className="containerText">
            <h3 className="firstText">Добрый день )</h3>
            <div className="textAround1">
              Мне 36 лет, замужем, двое детей, кошка и пёс. Родилась и проживаю в самом космическом
              городе России — Королёв, Московская область. Проработать с чертежами ракет 10 лет, а
              затем начать в 2020 году вид деятельности как художник… «Приправить» старт пандемией и
              СВО… Как Вы считаете — это оптимизм или безумие? Это желание делать то, что может
              изменить взгляд многих людей на действительность — создавать соцарт своего времени
              помноженный на любовь к своему городу и его жителям.
            </div>
            <Col md={12} className="text-end">
              <Image className="img2" src={monky1} />
              <h3>Мне есть ЧТО сказать</h3>
              <p>
                Так начался мой путь как художника. Вдохновение для создания своих работ я черпаю из
                острых социальных вопросов, не касающихся тем политики и религии. Моя цель –
                человек, зритель, личность и её место в этом мире.
              </p>
            </Col>

            <Image className="img3" src={monky2} />
            <h3 className="h3_MainText3">Серийное производство</h3>
            <div className="textMainImg3">
              К процессу создания своих работ отношусь очень внимательно и скрупулезно, так как
              картины, чаще всего, создаю сериями. За каждым проектом стоит тщательно собранный
              исторический, художественный, а иногда и научный материал. Картины воплощаю
              преимущественно в графике. Выбор техники исполнения -коллаж, масло, акварель, цифровая
              иллюстрация, фото-зависит от проекта в целом и его концепции. Пример такой работы -
              серия картин «Обратный процесс эволюции», 2021 год.
              <br />
              <a
                href={NataAvodesBio}
                style={{ fontSize: '1ch' }}
                className="cv"
                download="NataAvodes-bio.pdf"
              >
                Скачать био. NataAvodes
              </a>
            </div>
          </div>
        </Container>
      </Container>
      <GalaryPage />
      <ContactsPage />
    </div>
  );
}
