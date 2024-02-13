import { Card, CardMedia, Chip, Divider, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import constant from '../constants/Index';
import useFetch from '../customHooks/useFetch';

const ArticleDescription = () => {
  const { id } = useParams();
  useFetch();
  const { articlesData } = useSelector((state) => state.article);

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
        role="heading"
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

      <Card style={{ width: '100%' }}>
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
