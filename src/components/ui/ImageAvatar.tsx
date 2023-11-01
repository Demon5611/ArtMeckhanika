import React from 'react';
import Avatar from './Avatar';
import avatarimege from '../../assets/img/avatarImege.jpg'

function ImageAvatar():JSX.Element {
  return (
    <div>
      <Avatar
        src={avatarimege}
        name="NATA AVODES"
        title="художник   дизайнер   педагог"
      />
    </div>
  );
}

export default ImageAvatar;
