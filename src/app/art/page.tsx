'use client';

import Image from 'next/image';
import './styles.css';
import {useEffect, useState} from 'react';
import PopOver from './popup';
import {imageInfoList} from './imageInfoList';

const ArtPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = imageInfoList[currentIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='h-dvh overflow-scroll bg-black'>
      <div className='grid-container'>
        <div className='art-grid-1'>
          {imageInfoList.map(({path, className, name}, index) => (
            <button
              type='button'
              className={`${className} relative cursor-pointer hover:opacity-50`}
              key={path}
              aria-label={`View ${name}`}
              onClick={() => {
                setShowModal(true);
                setCurrentIndex(index);
              }}
            >
              <Image src={path} alt={name} fill sizes='(min-width: 49rem) 33vw, 50vw' />
            </button>
          ))}
        </div>
      </div>
      {showModal && (
        <PopOver
          onClose={() => setShowModal(false)}
          currentImage={currentImage}
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
