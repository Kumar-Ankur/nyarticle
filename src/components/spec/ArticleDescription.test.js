import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ArticleDescription from '../ArticleDescription';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import useFetch from '../../customHooks/useFetch';
// useFetch

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

jest.mock('../../customHooks/useFetch')

describe('ArticleDescription component',  () => {
  test('renders article description correctly', () => {
    // Mocked article data
    const articleData = {
      id: 1,
      title: 'Test Article',
      abstract: 'Test abstract',
      byline: 'Test byline',
      updated: '2022-01-01',
      published_date: '2022-01-01',
      media: [
        {
          'media-metadata': [{ url: 'test_image_url' }],
        },
      ],
      des_facet: ['facet1', 'facet2'],
    };

    // Mock useSelector hook return value
    useSelector.mockReturnValue({
       articlesData: [articleData] ,
    });

    const { asFragment }= render(
      <BrowserRouter>
        <ArticleDescription />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
