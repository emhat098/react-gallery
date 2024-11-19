import React, { Suspense } from 'react';
import Loading from '../../components/loading/loading';

const Photos = React.lazy(() => import('./components/photos'));

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
