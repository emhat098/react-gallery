import { Suspense } from 'react';
import Photos from './components/photos';

function Gallery() {
  return (
    <>
      <div>
        <h1>Gallery</h1>
        <hr />
      </div>
      <Suspense fallback={<div>Loading ...</div>}>
        <Photos />
      </Suspense>
    </>
  );
}

export default Gallery;
