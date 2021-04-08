import React, { useContext } from 'react';

import Image from '../components/Image';
import { Context } from '../Context';

const Photos = () => {
  // get all photos array from context
  const { allPhotos } = useContext(Context);

  // assign a class automatically for the display in the grid
  function getClass(i) {
    if (i % 2 === 0) {
      return 'big';
    } else if (i % 5 === 0) {
      return 'tall';
    } else {
      return 'wide';
    }
  }

  return (
    <>
      <main className='container'>
        <div className='photos-container'>
          {allPhotos.map((img, i) => (
            <Image key={img.id} img={img} className={getClass(i)} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Photos;
