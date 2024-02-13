import { Card, CardMedia, Chip, Divider, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import constant from '../constants/Index';
import { useEffect } from 'react';
import {
    setArticleData,
    setError,
    setLoading,
    setselectedArticle,
  } from '../store/slice/articleSlice';

const ArticleDescription = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const { articlesData } = useSelector((state) => state.article);
 

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${constant.BASE_URL}${process.env.REACT_APP_API_KEY}`,
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const resp = await response.json();
      dispatch(setArticleData(resp.results || []));
      dispatch(setselectedArticle(resp.results[0]));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(setError(constant.BASE_ERROR));
    } finally {
      dispatch(setLoading(false));
      dispatch(setError(constant.BASE_ERROR));
    }
  };


  useEffect(() => {
    if(!articlesData.length) {
        fetchData()
      }
  }, [articlesData])

  const selectedArticle = articlesData.filter(
    (article) => article.id === Number(id),
  )[0];

  const renderFacet = (facets) => {
    return facets.map((facet, index) => {
      return <Chip key={index} label={facet}></Chip>;
    });
  };

  return (
    <div className="article_description_container">
      <Typography
        variant="h2"
        component="div"
        className="article_description_container-title"
      >
        {selectedArticle?.title}
      </Typography>

      <Typography
        variant="h5"
        className="article_description_container-abstract"
      >
        {selectedArticle?.abstract}
      </Typography>

      <Typography variant="h6" className="article_description_container-byline">
        {selectedArticle?.byline}
      </Typography>

      <Typography variant="h6" className="article_description_container-byline">
        Updated: {new Date(selectedArticle?.updated).toLocaleDateString()}
      </Typography>

      <Typography variant="h6" className="article_description_container-byline">
        Published:{' '}
        {new Date(selectedArticle?.published_date).toLocaleDateString()}
      </Typography>

      <Divider style={{ width: '100%' }} />

      <Card style={{ width: '100%'}}>
        <CardMedia
          component="img"
          style={{ width: '100%', objectFit: 'contain' }}
          image={
            selectedArticle?.media?.[0]?.['media-metadata']?.[2]?.url ??
            constant.IMAGE_PLACEHOLDER_URL
          }
          title={selectedArticle?.title}
        ></CardMedia>
      </Card>

      <Divider style={{ width: '100%' }} />

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        {selectedArticle?.des_facet.length &&
          renderFacet(selectedArticle.des_facet)}
      </div>
    </div>
  );
};

export default ArticleDescription;
