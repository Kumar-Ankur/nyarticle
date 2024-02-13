import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Article from '../components/Articles';
import ArticleDescription from '../components/ArticleDescription';

const ArticleRouter = () => {
    return (
        <Router data-testid="article-router">
            <Routes>
                <Route exact path='/' element={<Article />}></Route>
                <Route path="/articleDescription/:id" element={<ArticleDescription />}></Route>
                <Route path='*' element={<Article />}></Route>
            </Routes>
        </Router>
    )
}

export default ArticleRouter;