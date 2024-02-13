import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import Article from '../Articles';

// Mock the useNavigate hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('Article component', () => {
  test('renders without crashing', () => {
    render(
      <Provider store={store}>
        <Article />
      </Provider>
    );
  });

  test('capturing snapshot', () => {
    const { asFragment } = render(
        <Provider store={store}>
          <Article />
        </Provider>
      );
      expect(asFragment()).toMatchSnapshot();
  })

  test('renders app bar with correct title', () => {
    render(
      <Provider store={store}>
        <Article />
      </Provider>
    );

    expect(screen.getByText('NY Most Popular News')).toBeInTheDocument();
  });

  test('renders error message if error prop is passed', () => {
    const mockError = 'Failed to fetch data';

    render(
      <Provider store={store}>
        <Article />
      </Provider>
    );

    expect(screen.queryByText(mockError)).not.toBeInTheDocument();
  });

  test('renders loading skeleton when loading prop is true', () => {
    render(
      <Provider store={store}>
        <Article />
      </Provider>
    );

    expect(screen.queryAllByTestId('/^skeleton-loader-/')).toHaveLength(0);
  });

  test('renders articles when loading prop is false and no error', () => {
    render(
      <Provider store={store}>
        <Article />
      </Provider>
    );
    const mockArticles = [
      { id: 1, title: 'Article 1', abstract: 'Abstract 1', byline: 'Byline 1' },
      { id: 2, title: 'Article 2', abstract: 'Abstract 2', byline: 'Byline 2' },
    ];
    store.dispatch({ type: 'article/setArticlesData', payload: mockArticles });

  });
});
