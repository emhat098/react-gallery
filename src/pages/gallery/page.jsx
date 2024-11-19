import { Suspense } from 'react';
import Photos from './components/photos';
import Loading from '../../components/loading/loading';

function Gallery() {
  return (
    <>
      <div>
        <h1>Gallery</h1>
        <hr />
      </div>
      <Suspense fallback={<Loading />}>
        <Photos />
      </Suspense>
    </>
  );
}

export default Gallery;
