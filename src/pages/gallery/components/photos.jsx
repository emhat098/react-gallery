import './photos.css';
import { fetchData } from '../../../data/fetch-data';
import Photo from './photo';
import use from '../../../utils/use';

const Photos = () => {
  const dataPhotos = use(
    fetchData('https://picsum.photos/v2/list?page=1&limit=100'),
  );
  return (
    <ul>
      {dataPhotos &&
        dataPhotos.length > 0 &&
        dataPhotos.map((photo) => (
          <li key={photo.id}>
            <Photo {...photo} />
          </li>
        ))}
    </ul>
  );
};

export default Photos;
