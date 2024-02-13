import ArticleRouter from "./router";
import { Provider } from 'react-redux';
import store from "./store";

function App() {
  return (
    <div className="App" data-testid="app">
      <Provider store={store}>
        <ArticleRouter />
      </Provider>
      
    </div>
  );
}

export default App;
