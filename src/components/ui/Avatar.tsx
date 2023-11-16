import React from 'react';

type AvatarProps = {
  src: string;
  name: string;
  title: string;
};

export default function Avatar({ src, name, title }: AvatarProps): JSX.Element {
  return (
    <div className="avatar" style={{ marginTop: '-85ch' }}>
      <img src={src} alt="Avatar" className="avatarImage" />
      <div className="textContainerAvatar">
        <div className="name">{name}</div>
        <div className="title">{title}</div>
      </div>
    </div>
  );
}
