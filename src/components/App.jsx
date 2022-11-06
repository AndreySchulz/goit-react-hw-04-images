import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import AppBox from './App.styled';
import { useState } from 'react';

export function App() {
  const [query, setQuery] = useState('');

  return (
    <AppBox>
      <Searchbar setQuery={setQuery} />
      <ImageGallery query={query} />
    </AppBox>
  );
}
