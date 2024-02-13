import { createSlice } from '@reduxjs/toolkit';
import constant from '../../constants/Index';

const articleSlice = createSlice({
  name: 'article',
  initialState: {
    articlesData: [],
    loading: false,
    error: null,
    selectedArticle: null,
  },
  reducers: {
    setArticleData: (state, { payload }) => {
      return {
        ...state,
        articlesData: payload,
      };
    },
    setLoading: (state, { payload }) => {
      return {
        ...state,
        loading: payload,
      };
    },
    setError: (state, { payload }) => {
      return {
        ...state,
        error: payload,
      };
    },
    setselectedArticle: (state, { payload }) => {
      return {
        ...state,
        selectedArticle: payload,
      };
    },
  },
});

export const fetchDataAction = () => async (dispatch) => {
  try {
    const response = await fetch(
      `${constant.BASE_URL}${process.env.REACT_APP_API_KEY}`,
    );
    const resp = await response.json();
    dispatch(articleSlice.actions.setArticleData(resp.results || []));
    dispatch(articleSlice.actions.setselectedArticle(resp.results[0]));
    dispatch(articleSlice.actions.setLoading(false));
  } catch (error) {
    dispatch(articleSlice.actions.setLoading(false));
    dispatch(articleSlice.actions.setError(constant.BASE_ERROR));
  }
};

export const { setArticleData, setLoading, setError, setselectedArticle } =
  articleSlice.actions;
export default articleSlice.reducer;
