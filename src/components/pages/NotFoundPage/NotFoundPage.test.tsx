import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFoundPage from '.';

describe('NotFoundPage', () => {
  test('renders 404 text', () => {
    render(<NotFoundPage />);
    const errorText = screen.getByText('404');
    expect(errorText).toBeInTheDocument();
  });

  test('renders page not found message', () => {
    render(<NotFoundPage />);
    const message = screen.getByText('Page not found');
    expect(message).toBeInTheDocument();
  });

  test('renders sorry message', () => {
    render(<NotFoundPage />);
    const sorryMessage = screen.getByText(
      'Sorry, we couldn’t find the page you’re looking for.'
    );
    expect(sorryMessage).toBeInTheDocument();
  });

  test('renders Go back home link', () => {
    render(<NotFoundPage />);
    const homeLink = screen.getByText('Go back home');
    expect(homeLink).toBeInTheDocument();
  });

  test('renders Contact support link', () => {
    render(<NotFoundPage />);
    const supportLink = screen.getByText('Contact support');
    expect(supportLink).toBeInTheDocument();
  });
});
