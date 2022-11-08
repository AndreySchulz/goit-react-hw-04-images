import PropTypes from 'prop-types';
import { searchImageApi } from '../../utils/imageApi';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import { ImageGalleryBox } from './ImageGallery.styled';
import { useState, useEffect } from 'react';
import { useCallback } from 'react';
function ImageGallery({ query }) {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [modalData, setModalData] = useState({});

  const updatePage = () => {
    setPage(prev => prev + 1);
  };
  const openModal = modalData => {
    setIsOpen(true);
    setModalData(modalData);
  };
  const closeModal = () => {
    setIsOpen(false);
    setModalData({});
  };
  const searchImage = useCallback(() => {
    setIsLoading(true);
    searchImageApi(query, page)
      .then(data => {
        setImages(prev => (page === 1 ? data.hits : [...prev, ...data.hits]));
        setTotalPages(Math.ceil(data.totalHits / 12));
      })
      .catch(err => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [query, page]);
  useEffect(() => {
    if (page === 1 && query) {
      searchImage();
    } else {
      setPage(1);
    }

    setError(null);
    // eslint-disable-next-line
  }, [query]);

  useEffect(() => {
    if (!query) return;

    searchImage();
    // eslint-disable-next-line
  }, [page]);

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      <ImageGalleryBox>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            openModal={openModal}
          />
        ))}
      </ImageGalleryBox>

      {isLoading && <Loader />}

      {images.length > 0 && totalPages > page && (
        <Button updatePage={updatePage} />
      )}
      {isOpen && <Modal closeModal={closeModal} modalData={modalData} />}
    </>
  );
}

export default ImageGallery;

ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
};
