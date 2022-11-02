import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '30341121-6e6aad8b98e32722614d9b080';

export const searchImageApi = (query, page = 1) => {
  return axios
    .get(`?key=${API_KEY}`, {
      params: {
        q: query,
        per_page: 12,
        page,
        orientation: 'horizontal',
        image_type: 'photo',
      },
    })
    .then(res => res.data);
};
