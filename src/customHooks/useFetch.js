// useFetch.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataAction } from '../store/slice/articleSlice';

const useFetch = () => {
  const { articlesData, loading, error } = useSelector(
    (state) => state.article,
  );
  const dispatch  = useDispatch()

  useEffect(() => {
    if (!articlesData.length) {
      dispatch(fetchDataAction());
    }
  }, [dispatch, articlesData]);

  return { articlesData, loading, error };
};

export default useFetch;
