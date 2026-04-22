import Image from 'next/image';
import {imageInfoList} from './page';
import './popover.css';

interface PopOverProps {
  currentImage: (typeof imageInfoList)[number];
  onClick: () => void;
}

const PopOver = ({currentImage, onClick}: PopOverProps) => {
  return (
    <div className='overlay' onClick={onClick}>
      <Image
        fill
        src={currentImage.path}
        alt={currentImage.name}
        objectFit='contain'
        objectPosition='center center'
      />
    </div>
  );
};

export default PopOver;

/* 


*/
