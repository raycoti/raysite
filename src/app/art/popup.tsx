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

// Turn a camelCase image name into a title, e.g. 'soulSearching' -> 'Soul Searching'.
const formatTitle = (name: string) =>
  name.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\b\w/g, (letter) => letter.toUpperCase());

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

  const title = formatTitle(currentImage.name);

  return (
    <div className='overlay' role='dialog' aria-modal='true' aria-label={title} onClick={onClose}>
      <div className='popover-content'>
        <div className='popover-image-column'>
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
          <Image
            src={currentImage.path}
            alt={currentImage.name}
            fill
            sizes='(max-width: 1032px) 100vw, (max-width: 1376px) and (pointer: coarse) 100vw, 75vw'
            className='object-contain object-center'
          />
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
        <div className='popover-description-column'>
          {/* Stop clicks here from closing the popup, so the text can be read and selected. */}
          <div className='popover-description-card' onClick={(event) => event.stopPropagation()}>
            <h2 className='mb-3 font-heading text-2xl'>{title}</h2>
            <p className='font-body'>{currentImage.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopOver;
