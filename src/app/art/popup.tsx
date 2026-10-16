import Image, {getImageProps} from 'next/image';
import {useEffect, useId, useRef, useState} from 'react';
import {preload} from 'react-dom';
import type {ImageInfo} from './imageInfoList';
import './popover.css';

interface PopOverProps {
  currentImage: ImageInfo;
  /** Position of the current image, for the "image 3 of 17" announcement. */
  index: number;
  total: number;
  /** The previous and next images, downloaded in the background so the arrows feel instant. */
  adjacentImages: ImageInfo[];
  onClose: () => void;
  onNextClick: () => void;
  onPrevClick: () => void;
}

const hasDescription = (image: ImageInfo) => image.description.trim() !== '';

// Width hint for the popup image: full width when there's no description column. Shared by the
// popup image and the background preloads, so both request the same file.
const popupImageSizes = (image: ImageInfo) =>
  hasDescription(image)
    ? '(max-width: 1032px) 100vw, (max-width: 1376px) and (pointer: coarse) 100vw, 75vw'
    : '100vw';

const PopOver = ({
  currentImage,
  index,
  total,
  adjacentImages,
  onClose,
  onNextClick,
  onPrevClick
}: PopOverProps) => {
  const [loadedPath, setLoadedPath] = useState<string | null>(null);
  const isLoading = loadedPath !== currentImage.path;
  const showDescription = hasDescription(currentImage);
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

  // Start downloading the neighbors at the size the popup will show them.
  useEffect(() => {
    adjacentImages.forEach((image) => {
      const {props} = getImageProps({
        src: image.path,
        alt: '',
        fill: true,
        sizes: popupImageSizes(image)
      });
      preload(props.src, {as: 'image', imageSrcSet: props.srcSet, imageSizes: props.sizes});
    });
  }, [adjacentImages]);

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
          {isLoading && <span className='popover-spinner' aria-hidden='true' />}
          <Image
            key={currentImage.path}
            src={currentImage.path}
            alt={currentImage.title}
            fill
            loading='eager'
            sizes={popupImageSizes(currentImage)}
            onLoad={() => setLoadedPath(currentImage.path)}
            className={`object-contain object-center transition-opacity duration-300 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
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
        {/* Without a description the column is skipped and the image fills the width, centered.
            The title stays for screen readers, since it names the dialog. */}
        {showDescription ? (
          <div className='popover-description-column'>
            {/* Stop clicks here from closing the popup, so the text can be read and selected. */}
            <div className='popover-description-card' onClick={(event) => event.stopPropagation()}>
              <h2 id={titleId} className='mb-3 font-heading text-2xl'>
                {currentImage.title}
              </h2>
              <p className='font-body'>{currentImage.description}</p>
            </div>
          </div>
        ) : (
          <h2 id={titleId} className='sr-only'>
            {currentImage.title}
          </h2>
        )}
      </div>
      {/* Announces the new image to screen readers when using the arrows. */}
      <p className='sr-only' aria-live='polite'>
        {`${currentImage.title}, image ${index + 1} of ${total}`}
      </p>
    </dialog>
  );
};

export default PopOver;
