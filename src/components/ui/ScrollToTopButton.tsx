import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTopButton(): JSX.Element | null {
  const [isVisible, setIsVisible] = useState<boolean | Element>(false);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = (): void => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter') {
      // Handle the key event (in this case, triggering scroll to top)
      scrollToTop();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    <div
      className="scroll-to-top"
      onClick={scrollToTop}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <FaArrowUp />
    </div>
  );
}
