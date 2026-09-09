'use client';

import Image from "next/image";
import {Roboto, Nunito} from 'next/font/google';
import './styles.css';
import {useEffect, useState} from 'react';
import PopOver from './popup';

const nunito = Nunito({subsets: ['latin']});
const roboto = Roboto({subsets: ['latin']});

const ArtPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = imageInfoList[currentIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='overflow-scroll h-dvh'>
      <div className='grid-container'>
        <div className='art-grid-1'>
          {imageInfoList.map((imageInfo, index) => {
            const {path, className, name} = imageInfo;
            return (
              <div
                className={`${className} relative cursor-pointer hover:opacity-50`}
                key={path}
                onClick={() => {
                  setShowModal(true);
                  setCurrentIndex(index);
                }}
              >
                <Image
                  // objectFit='contain'
                  // objectPosition='left center'
                  src={path}
                  alt={name}
                  fill
                  // placeholder='blur'
                  sizes='auto' />
              </div>
            );
          })}
        </div>
      </div>
      {showModal && (
        <PopOver
          onClick={() => setShowModal(false)}
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

// Change to gallery 1 name
const fileNames = {
  tree: '/art/tree.png',
  spiral: '/art/spiral.jpg',
  soulSearching: '/art/soulSearching.jpg',
  moon: '/art/moon.png',
  fish: '/art/fish.png',
  untitled: '/art/Untitled.png',
  desk: '/art/desk.png',
  self: '/art/self.png',
  shell: '/art/shell.png',
  city: `/art/city.jpg`,
  bridge: '/art/bridge.png',
  arm: '/art/arm.png',
  kite: '/art/kite.png',
  existence: '/art/existence.jpg',
  searchin: '/art/searchin.png',
  turtle: '/art/turtle.png',
  // ray: '/art/ray.png',
  raySelf: '/art/ray_pose.png'
} as const;

const styles = Object.keys(fileNames);

type Names = keyof typeof fileNames;

export const imageInfoList = styles.map((name) => {
  return {path: fileNames[name as Names], className: name as Names, name};
});
