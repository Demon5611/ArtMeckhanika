import React, { useState } from 'react';
import { Card, Modal } from 'react-bootstrap';
import NataAvodesCV from '../../assets/srcfiles/NataAvodesCV.pdf';

type ImageData = {
  id: number;
  src: string;
  title: string;
  description: string;
};

export default function GaleryPage(): JSX.Element {
  const imagesData: ImageData[] = [
    {
      id: 1,
      src: '/src/assets/img/interior.jpg',
      title: 'Картинка 1',
      description:
        'Описание изображения 1. Этот вопрос не раз ставил меня в тупик, потому что я родитель, и в то же время, обладаю  любопытством ребенка, выросшего в семье ученых. Скажем по-другому. Для меня это второй вопрос после "Есть ли Господь?" Я думаю, что ответ уже ясен из заглавной буквы слова',
    },
    {
      id: 2,
      src: '/src/assets/img/interior.jpg',
      title: 'Картинка 2',
      description: 'Описание изображения 2',
    },
    {
      id: 3,
      src: '/src/assets/img/interior.jpg',
      title: 'Картинка 3',
      description: 'Описание изображения 3',
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setShowModal(false);
  };
  const containerTextGalaryRight = {
    // display: 'flex',
    // flexWrap: 'wrap',
    // justifyContent: 'flex-start',
    // width: '48%',
  };
  return (
    <>
      <div className="containerTextGalaryTop">
        <h2>Кто мы такие и куда направляемся?</h2>
        <br />
        Этот вопрос не раз ставил меня в тупик, потому что я родитель, и в то же время, обладаю
        любопытством ребенка, выросшего в семье ученых. Скажем по-другому. Для меня это второй
        вопрос после "Есть ли Господь?".
        <div className="containerTextGalaryRightALL" style={containerTextGalaryRight}>
          <div className="textRight1">
            <h2 style={{ marginTop: '5ch' }}>ПРОЦЕСС ЭВОЛЮЦИИ</h2>
            <p style={{ textIndent: '2ch' }}>
              Это яркий вызов современной реальности Нет ничего хуже интеллектуальных шор навязанных
              нам….Кем навязанных? Социальными предрассудками, бизнесом и личными интересами
              отдельных групп людей. Каждая картина заставляет задуматься о том, что делают люди
              КАЖДЫЙ ДЕНЬ. Мы на пути эволюции или деградации как вида? Решать тебе…
            </p>
            <p className="material">Материал: смешанная техника, графика. Размеры работ 80/100см</p>
          </div>

          <div className="textRight1">
            <h2 style={{ marginTop: '4ch' }}>КОРОЛЕВ</h2>
            <p style={{ textIndent: '2ch' }}>Размышление на тему живопись и любимый город</p>
            <br />
            <p className="material">Материал: масло, пастель; графика. Размеры работ 30/40см</p>
          </div>

          <div className="textRight1">
            <h2 style={{ marginTop: '7ch', textIndent: '0ch' }}>МИГРАЦИОННЫЙ ЗАХВАТ</h2>
            <p style={{ textIndent: '2ch' }}>
              Эта проблема больше чем вам всем кажется… Слишком много людей мигрируют по странам и
              континентам – вы все еще сомневаетесь? Посмотрите статистику. Смешение культур, расс,
              ценностей… Давайте порассуждаем вместе..
            </p>
            <p className="material">
              Материал: цифровая графика, коллаж, печать на пенокартоне. Размеры работ 80/120см
            </p>
            <a
              href={NataAvodesCV}
              style={{ float: 'right' }}
              className="cv"
              download="NataAvodesCV.pdf"
            >
              Скачать NataAvodesCV.pdf
            </a>
          </div>
        </div>
        <div
          className="image-container"
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', width: '50%' }}
        >
          {imagesData.map((image, index) => (
            <Card
              key={image.id || index}
              onClick={() => openModal(image.src)}
              style={{ margin: '45px' }}
            >
              <Card.Img variant="top" src={image.src} />
            </Card>
          ))}
        </div>
      </div>

      <Modal show={showModal} onHide={closeModal} size="lg" centered>
        <Modal.Body>
          <img src={selectedImage} alt="Selected" style={{ width: '100%' }} />
        </Modal.Body>
      </Modal>
    </>
  );
}
