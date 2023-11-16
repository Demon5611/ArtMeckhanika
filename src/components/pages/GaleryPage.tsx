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

  const openModal = (imageSrc: string): void => {
    setSelectedImage(imageSrc);
    setShowModal(true);
  };

  const closeModal = (): void => {
    setSelectedImage(null);
    setShowModal(false);
  };

  return (
    <>
      <div className="containerTextGalaryTop">
        <h3 className="h3_textTop">Кто мы такие и куда направляемся?</h3>
        <br />
        <p style={{ textIndent: '2ch' }}>
          Этот вопрос не раз ставил меня в тупик, потому что я родитель, и в то же время, обладаю
          любопытством ребенка, выросшего в семье ученых. Скажем по-другому. Для меня это второй
          вопрос после "Есть ли Господь?". Я думаю, что ответ уже ясен из заглавной буквы слова
          "Господь". Но как насчет остального?
        </p>
        <div className="containerTextGalaryRightALL">
          <div className="textRight1">
            <h3 className="h1_1" style={{ marginTop: '1ch' }}>
              ПРОЦЕСС ЭВОЛЮЦИИ
            </h3>
            <p style={{ textIndent: '2ch' }}>
              Это яркий вызов современной реальности Нет ничего хуже интеллектуальных шор навязанных
              нам….Кем навязанных? Социальными предрассудками, бизнесом и личными интересами
              отдельных групп людей. Каждая картина заставляет задуматься о том, что делают люди
              КАЖДЫЙ ДЕНЬ. Мы на пути эволюции или деградации как вида? Решать тебе…
            </p>
            <p className="material">Материал: смешанная техника, графика. Размеры работ 80/100см</p>
          </div>

          <div className="textRight2">
            <h3 className="h2_2">КОРОЛЕВ</h3>
            <p style={{ textIndent: '2ch' }}>Размышление на тему живопись и любимый город</p>
            {/* <br /> */}
            <p className="material">Материал: масло, пастель; графика. Размеры работ 30/40см</p>
          </div>

          <div className="textRight3">
            <h3 className="h3_3">МИГРАЦИОННЫЙ ЗАХВАТ</h3>
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
              style={{ float: 'right', fontSize: '1ch' }}
              className="cv"
              download="NataAvodesCV.pdf"
            >
              Скачать CV NataAvodes
            </a>
          </div>
        </div>

        <div className="image-container">
          {imagesData.map((image, index) => (
            <Card key={image.id || index} onClick={() => openModal(image.src)}>
              <Card.Img src={image.src} />
            </Card>
          ))}
        </div>
      </div>

      <Modal show={showModal} onHide={closeModal} size="lg" centered>
        <Modal.Body>
          <img src={selectedImage || ''} alt="Selected" style={{ width: '100%' }} />
        </Modal.Body>
      </Modal>
    </>
  );
}
