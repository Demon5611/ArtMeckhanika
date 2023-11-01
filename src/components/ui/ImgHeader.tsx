import React from 'react';
import Image from 'react-bootstrap/Image';
import headerImg from '../../assets/img/__.jpg'

export default function ImgHeader():JSX.Element {
  return (
     <Image style={{ width: '100%', marginBottom:'4ch', marginTop:'2ch'}} src={headerImg}  />
  )
}
