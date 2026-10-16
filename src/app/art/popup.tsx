import Image from 'next/image';
import {useEffect, useId, useRef} from 'react';
import type {ImageInfo} from './imageInfoList';
import './popover.css';

interface PopOverProps {
  currentImage: ImageInfo;
  /** Position of the current image, for the "image 3 of 17" announcement. */
  index: number;
  total: number;
  onClose: () => void;
  onNextClick: () => void;
  onPrevClick: () => void;
}

const PopOver = ({currentImage, index, total, onClose, onNextClick, onPrevClick}: PopOverProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  // Open as a modal <dialog>: the browser keeps focus inside it and makes the rest of the page
  // unreachable. On close, focus goes back to whatever opened it (the gallery tile).
  useEffect(() => {
    const dialog = dialogRef.current;
    const opener = document.activeElement as HTMLElement | null;
    dialog?.showModal();
    closeButtonRef.current?.focus();
    return () => {
      dialog?.close();
      opener?.focus();
    };
  }, []);

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
    <dialog
      ref={dialogRef}
      className='overlay'
      aria-labelledby={titleId}
      onClick={onClose}
      onCancel={(event) => {
        // Escape: let React unmount the dialog instead of the browser closing it.
        event.preventDefault();
        onClose();
      }}
    >
      <button
        ref={closeButtonRef}
        type='button'
        className='popover-close'
        onClick={(event) => {
          event.stopPropagation();
          onClose();
        }}
        aria-label='Close'
      >
        &#10005;
      </button>
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
            alt={currentImage.title}
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
            <h2 id={titleId} className='mb-3 font-heading text-2xl'>
              {currentImage.title}
            </h2>
            {currentImage.description && <p className='font-body'>{currentImage.description}</p>}
          </div>
        </div>
      </div>
      {/* Announces the new image to screen readers when using the arrows. */}
      <p className='sr-only' aria-live='polite'>
        {`${currentImage.title}, image ${index + 1} of ${total}`}
      </p>
    </dialog>
  );
};

export default PopOver;
