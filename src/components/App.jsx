import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

export class App extends React.Component {
  state = {};

  render() {
    return (
      <>
        <Searchbar />
        <ImageGallery />
        <ImageGalleryItem />
        <Loader />
        <Button />
        <Modal />
      </>
    );
  }
}
