/* eslint-disable */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
  });

  test('App component has class name "App"', () => {
    render(<App />);
    const appElement = screen.getByTestId('app');
    expect(appElement).toHaveClass('App');
  });

  test('snapshot', () => {
    const { asFragment } = render(<App />)
    expect(asFragment()).toMatchSnapshot();
  })
});