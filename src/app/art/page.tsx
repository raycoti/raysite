'use client';

import Image from 'next/image';
import './styles.css';
import {useEffect, useMemo, useState} from 'react';
import PopOver from './popup';
import {imageInfoList} from './imageInfoList';

const ArtPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = imageInfoList[currentIndex];
  const count = imageInfoList.length;
  const adjacentImages = useMemo(
    () => [
      imageInfoList[(currentIndex + 1) % count],
      imageInfoList[(currentIndex - 1 + count) % count]
    ],
    [currentIndex, count]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='h-dvh overflow-scroll bg-black'>
      <h1 className='sr-only'>Art gallery</h1>
      <div className='grid-container'>
        <div className='art-grid-1'>
          {imageInfoList.map(({path, className, title}, index) => (
            <button
              type='button'
              className={`${className} relative cursor-pointer hover:opacity-50 focus-visible:z-10 focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-white`}
              key={path}
              aria-label={`View ${title}`}
              onClick={() => {
                setShowModal(true);
                setCurrentIndex(index);
              }}
            >
              <Image
                src={path}
                alt=''
                fill
                sizes='(min-width: 49rem) 33vw, min(100vw, 33rem)'
                className='object-cover'
              />
            </button>
          ))}
        </div>
      </div>
      {showModal && (
        <PopOver
          onClose={() => setShowModal(false)}
          currentImage={currentImage}
          index={currentIndex}
          total={imageInfoList.length}
          adjacentImages={adjacentImages}
          onNextClick={() => setCurrentIndex((prev) => (prev + 1) % imageInfoList.length)}
          onPrevClick={() =>
            setCurrentIndex((prev) => (prev - 1 + imageInfoList.length) % imageInfoList.length)
          }
        />
      )}
    </div>
  );
};

export default ArtPage;
