import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ImageGalleryItemBox,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  state = {
    modalData: null,
  };

  render() {
    const { largeImageURL, webformatURL, tags } = this.props.image;
    return (
      <ImageGalleryItemBox>
        <ImageGalleryItemImage
          src={webformatURL}
          alt={tags}
          onClick={() => this.props.openModal({ largeImageURL, tags })}
        />
      </ImageGalleryItemBox>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  image: PropTypes.arrayOf(
    PropTypes.shape({
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
