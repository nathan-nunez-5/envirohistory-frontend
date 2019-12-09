import axios from 'axios';
import { SEARCH_SUCCESS, SEARCH_FAIL } from './types';

export const submitSearch = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    console.log('Data:', formData);
    const res = await axios.post(
      'http://localhost:8000/api/search',
      formData,
      config
    );

    dispatch({
      type: SEARCH_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SEARCH_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
