import React from 'react';

type AvatarProps = {
  src: string;
  name: string;
  title: string;
};

const Avatar: React.FC<AvatarProps> = ({ src, name, title }) => {
  return (
    <div className="avatar" style={{ marginTop: '-90ch'}}>
      <img src={src} alt="Avatar" className="avatarImage" />
      <div className="textContainerAvatar">
        <div className="name">{name}</div>
        <div className="title">{title}</div>
      </div>
    </div>
  );
};

export default Avatar;
