import ArticleRouter from "./router";
import { Provider } from 'react-redux';
import store from "./store";

function App() {
  return (
    <div className="App" data-testid="app">
      <Provider store={store} data-testid="provider">
        <ArticleRouter data-testid="article-router"/>
      </Provider>
      
    </div>
  );
}

export default App;
