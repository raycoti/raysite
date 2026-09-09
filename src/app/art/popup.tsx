import Image from 'next/legacy/image';
import {useEffect} from 'react';
import {imageInfoList} from './page';
import './popover.css';

interface PopOverProps {
  currentImage: (typeof imageInfoList)[number];
  onClick: () => void;
  onNextClick: () => void;
  onPrevClick: () => void;
}

const PopOver = ({currentImage, onClick, onNextClick, onPrevClick}: PopOverProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        onNextClick();
      } else if (event.key === 'ArrowLeft') {
        onPrevClick();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNextClick, onPrevClick]);

  return (
    <div className='overlay' onClick={onClick}>
      <button
        className='nav-arrow nav-arrow-prev'
        onClick={(event) => {
          event.stopPropagation();
          onPrevClick();
        }}
        aria-label='Previous image'
      >
        &#10094;
      </button>
      <Image
        layout='fill'
        src={currentImage.path}
        alt={currentImage.name}
        objectFit='contain'
        objectPosition='center center'
      />
      <button
        className='nav-arrow nav-arrow-next'
        onClick={(event) => {
          event.stopPropagation();
          onNextClick();
        }}
        aria-label='Next image'
      >
        &#10095;
      </button>
    </div>
  );
};

export default PopOver;

/* 


*/
