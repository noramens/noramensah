import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Footer from '../../components/common/Footer';
import { socialMedia } from '../../helpers/constants';

describe('Footer Component', () => {
  it('should render the footer component', (): void => {
    render(<Footer />);
    expect(screen.getByTestId('footer-weapons')).toBeInTheDocument();
  });

  it('should display full name', () => {
    render(<Footer />);
    expect(screen.getByText(/Nora Mensah/i)).toBeInTheDocument();
  });

  it('should display the current year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(currentYear).toBeTruthy();
  });

  it('should render array of social media icons to include Linkedin, Github and Twitter', () => {
    render(<Footer />);
    expect(socialMedia).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ 'data-testid': 'LinkedIn' }),
        expect.objectContaining({ 'data-testid': 'Github' }),
        expect.objectContaining({ 'data-testid': 'Twitter' })
      ])
    );
  });
});
