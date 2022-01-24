import { render, screen } from '@testing-library/react';
import Header from '../../components/common/Header';
import { BrowserRouter } from 'react-router-dom';
import { navItems } from '../../helpers/constants';

describe('Header component', () => {
  it('should render the Header component', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getAllByTestId('header')).toBeTruthy();
  });

  it('should render array of nav items to include Home, About, Blog', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(navItems).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: 'Home' }),
        expect.objectContaining({ name: 'About' }),
        expect.objectContaining({ name: 'Blog' })
      ])
    );
  });
});
