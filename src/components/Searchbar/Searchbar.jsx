import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  SearchbarBox,
  SearchForm,
  SearchFormButton,
  SearchFormButtonSpan,
  SearchFormInput,
} from './Searchbar.styled';
class Searchbar extends Component {
  state = {
    input: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.setQuery(this.state.input);
  };
  render() {
    return (
      <SearchbarBox>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonSpan>Search</SearchFormButtonSpan>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.input}
            onChange={e => this.setState({ input: e.target.value })}
          />
        </SearchForm>
      </SearchbarBox>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  setQuery: PropTypes.func.isRequired,
};
