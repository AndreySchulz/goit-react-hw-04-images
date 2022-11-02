import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import AppBox from './App.styled';

export class App extends Component {
  state = {
    query: '',
  };
  setQuery = query => {
    this.setState({ query });
  };

  render() {
    return (
      <AppBox>
        <Searchbar setQuery={this.setQuery} />
        <ImageGallery query={this.state.query} />
      </AppBox>
    );
  }
}
