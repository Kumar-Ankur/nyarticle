import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  createTheme,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  Skeleton,
} from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import constant from '../constants/Index';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import {
  setselectedArticle,
} from '../store/slice/articleSlice';
import useFetch from '../customHooks/useFetch';


const Article = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useFetch()

  const { articlesData, loading, error } = useSelector(
    (state) => state.article,
  );


  const theme = createTheme({
    palette: {
      primary: {
        main: 'rgba(159, 237, 215, 1)',
      },
      secondary: {
        main: 'rgba(2, 102, 112, 1)',
      },
    },
  });

  const CustomCardActionArea = styled(CardActionArea)`
    position: relative;

    &:hover::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to bottom,
        rgba(29, 31, 34, 0.9),
        rgba(53, 57, 43, 0.9)
      );
      z-index: 1;
    }

    &:hover .read-more-button {
      opacity: 1;
    }
  `;

  const CustomButton = styled(Button)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition:
      opacity 0.3s,
      transform 0.3s;
    z-index: 2;
  `;

  const navigateToDescription = (article) => {
    dispatch(setselectedArticle(article));
    navigate(`/articleDescription/${article.id}`);
  };

  const fetchArticles = () => {
    const cardWidth = `400px`;
    const cardHeight = '400px';
    return articlesData.map((article) => {
      return (
        <Card
          sx={{
            width: cardWidth,
            maxHeight: cardHeight,
            minHeight: cardHeight,
          }}
          key={article.id}
          onClick={() => navigateToDescription(article)}
        >
          <CustomCardActionArea>
            <CardMedia
              component="img"
              sx={{ height: 140 }}
              image={
                article?.media?.[0]?.['media-metadata']?.[1]?.url ??
                constant.IMAGE_PLACEHOLDER_URL
              }
              title={article.title}
              style={{
                objectFit: article?.media?.[0]?.['media-metadata']?.[1]?.url
                  ? 'cover'
                  : 'contain',
              }}
            />
            <CardContent
              style={{
                height: '260px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography gutterBottom variant="h5" component="div">
                {article.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {article.abstract}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                style={{ marginTop: 'auto' }}
              >
                {article.byline}
              </Typography>
            </CardContent>

            <CustomButton
              className="read-more-button"
              variant="text"
              style={{ color: 'white', fontSize: '1.5rem' }}
            >
              Learn More
            </CustomButton>
          </CustomCardActionArea>
        </Card>
      );
    });
  };

  const populatedSkeltonLoader = () => {
    return Array(6)
      .fill(0)
      .map((data, index) => {
        return (
          <Skeleton
            animation="wave"
            style={{ width: '400px', height: '400px' }}
            key={index}
          />
        );
      });
  };
  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: theme.palette.primary.main }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" align="center" color="black">
              {constant.HEADER_TITLE}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {error && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff',
            borderRadius: '12px',
            padding: '20px',
            textAlign: 'center',
          }}
        >
          <ErrorIcon />
          <Typography variant="h6" gutterBottom>
            {constant.ERROR_TITLE}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {error}
          </Typography>
        </div>
      )}

      <div className="article_container">
        {loading ? (
          <Box className="skelton_container">{populatedSkeltonLoader()}</Box>
        ) : (
          fetchArticles()
        )}
      </div>
    </>
  );
};

export default Article;
