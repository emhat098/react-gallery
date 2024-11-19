import PropTypes from 'prop-types';
import './photo.css';

const Photo = ({ author, download_url }) => {
  return (
    <figure className='figure'>
      <img
        src={download_url}
        alt={author}
        height={144}
        width={144 * (16 / 9)}
      />
      <figcaption>{author}</figcaption>
    </figure>
  );
};

Photo.propTypes = {
  id: PropTypes.string,
  author: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  url: PropTypes.string,
  download_url: PropTypes.string,
};

export default Photo;
