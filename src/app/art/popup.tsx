import Image from 'next/image';
import {useEffect} from 'react';
import type {ImageInfo} from './imageInfoList';
import './popover.css';

interface PopOverProps {
  currentImage: ImageInfo;
  onClose: () => void;
  onNextClick: () => void;
  onPrevClick: () => void;
}

const PopOver = ({currentImage, onClose, onNextClick, onPrevClick}: PopOverProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        onNextClick();
      } else if (event.key === 'ArrowLeft') {
        onPrevClick();
      } else if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNextClick, onPrevClick]);

  return (
    <div
      className='overlay'
      role='dialog'
      aria-modal='true'
      aria-label={currentImage.name}
      onClick={onClose}
    >
      <button
        type='button'
        className='nav-arrow nav-arrow-prev'
        onClick={(event) => {
          event.stopPropagation();
          onPrevClick();
        }}
        aria-label='Previous image'
      >
        &#10094;
      </button>
      <div className='popover-content'>
        <div className='popover-image-column'>
          <Image
            src={currentImage.path}
            alt={currentImage.name}
            fill
            sizes='50vw'
            className='object-contain object-center'
          />
        </div>
        <div className='popover-description-column'>{currentImage.description}</div>
      </div>
      <button
        type='button'
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
