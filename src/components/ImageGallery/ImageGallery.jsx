import { Component } from 'react';
import PropTypes from 'prop-types';
import { searchImageApi } from '../../utils/imageApi';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import { ImageGalleryBox } from './ImageGallery.styled';
class ImageGallery extends Component {
  state = {
    images: [],
    isLoading: false,
    isOpen: false,
    error: null,
    totalPages: 0,
    page: 1,
    query: '',
    modalData: {},
  };
  static getDerivedStateFromProps(nextProps, state) {
    if (nextProps.query !== state.query) {
      return { page: 1, query: nextProps.query };
    }
    return state;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevProps.query !== this.props.query ||
      prevState.page !== this.state.page
    ) {
      this.searchImage();
    }
  }
  searchImage = () => {
    this.setState({ isLoading: true });
    searchImageApi(this.props.query, this.state.page)
      .then(data =>
        this.setState(prev => ({
          images:
            this.state.page === 1 ? data.hits : [...prev.images, ...data.hits],
          totalPages: Math.ceil(data.totalHits / 12),
        }))
      )
      .catch(err => this.setState({ error: err.message }))
      .finally(() => this.setState({ isLoading: false }));
  };
  updatePage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };
  openModal = modalData => {
    this.setState({ isOpen: true, modalData: { modalData } });
  };
  closeModal = () => {
    this.setState({ isOpen: false, modalData: {} });
  };

  render() {
    const { images, isLoading, totalPages, page, isOpen, modalData } =
      this.state;
    return (
      <>
        <ImageGalleryBox>
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              image={image}
              openModal={this.openModal}
            />
          ))}
        </ImageGalleryBox>

        {isLoading && <Loader />}

        {images.length > 0 && totalPages > page && (
          <Button updatePage={this.updatePage} />
        )}
        {isOpen && <Modal closeModal={this.closeModal} modalData={modalData} />}
      </>
    );
  }
}
export default ImageGallery;

ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
  modalData: PropTypes.object.isRequired,
};
