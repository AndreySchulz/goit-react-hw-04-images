import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SearchbarBox,
  SearchForm,
  SearchFormButton,
  SearchFormButtonSpan,
  SearchFormInput,
} from './Searchbar.styled';
function Searchbar({ setQuery }) {
  const [input, setInput] = useState('');
  // state = {
  //   input: '',
  // };

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(input.trim());
  };

  return (
    <SearchbarBox>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonSpan>Search</SearchFormButtonSpan>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
      </SearchForm>
    </SearchbarBox>
  );
}

export default Searchbar;

Searchbar.propTypes = {
  setQuery: PropTypes.func.isRequired,
};
