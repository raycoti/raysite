import Image from 'next/image';
import {Roboto, Nunito} from 'next/font/google';
import './styles.css';
const nunito = Nunito({subsets: ['latin']});
const roboto = Roboto({subsets: ['latin']});

const ArtPage = () => {
  return (
    <div className='overflow-scroll h-dvh'>
      <div className='grid-container'>
        <div className='art-grid'>
          {imageInfo.map(({path, className, name}) => {
            return (
              <div className={`${className} relative`} key={path}>
                <Image
                  fill
                  objectFit='contain'
                  objectPosition='left center'
                  src={path}
                  alt={name}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ArtPage;

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
  ray: '/art/ray.png'
} as const;

const styles = Object.keys(fileNames);

type Names = keyof typeof fileNames;

const imageInfo = styles.map((name) => {
  return {path: fileNames[name as Names], className: name as Names, name};
});
