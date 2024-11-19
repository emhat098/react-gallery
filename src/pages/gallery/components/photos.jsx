import getPhotos from './get-photos';

let dataPhotos = null;

const Photos = async () => {
  if (!dataPhotos) {
    dataPhotos = await getPhotos();
  }

  return (
    <ul>
      {dataPhotos &&
        dataPhotos.length > 0 &&
        dataPhotos.map((photo) => <li key={photo.id}>{photo.author}</li>)}
    </ul>
  );
};

export default Photos;
