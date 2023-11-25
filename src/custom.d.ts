declare module 'react-scroll' {
  import type * as React from 'react';

  interface ScrollLinkProps {
    to: string;
    smooth?: boolean;
    duration?: number;
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode; 
  }

  export const Link: React.FC<ScrollLinkProps>;
}
