import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Blog from '../../../components/pages/Blog';
import { blogs } from '../../../helpers/constants';

describe('Blog component', () => {
  it('should render the blog title', () => {
    render(<Blog />);
    expect(screen.getByTestId('blog-title')).toHaveTextContent(/Blog Posts/i);
  });

  it('should render array of blog items', () => {
    render(<Blog />);
    expect(blogs).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: 'Staying Afloat With Your Internship'
        }),
        expect.objectContaining({
          title: 'Understanding Big O Asymptotic Analysis'
        }),
        expect.objectContaining({
          title: 'My experience working on mPharma’s legacy codebase — Pestle'
        })
      ])
    );
  });
});
