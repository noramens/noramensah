import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '../../../components/pages/About';

describe('About component', () => {
  it('should render the title of the about page', () => {
    render(<About />);
    expect(screen.getByTestId('about-title')).toHaveTextContent(
      /All about me.../i
    );
  });

  it('should render the link to mPharma site', () => {
    render(<About />);
    expect(screen.getAllByTestId('mPharma-link')).toBeTruthy();
  });

  it('should render mpharma group picture', () => {
    render(<About />);
    expect(screen.getAllByTestId('mpharma-group-picture')).toBeTruthy();
    expect(
      screen.getByAltText('nora and her mpharma collegues')
    ).toBeInTheDocument();
  });

  it('should render uel link', () => {
    render(<About />);
    expect(screen.getAllByTestId('uel-link')).toBeTruthy();
  });

  it('should render tech story header', () => {
    render(<About />);
    expect(screen.getByTestId('tech-story-header')).toHaveTextContent(
      /My getting to tech story/i
    );
  });

  it('should render the profile image', () => {
    render(<About />);
    expect(screen.getByAltText("nora's profile")).toBeTruthy();
  });

  it('should render year plan header', () => {
    render(<About />);
    expect(screen.getByTestId('year-plan')).toHaveTextContent(
      /What I plan to do this year/i
    );
  });

  it('should render the what I do for fun header', () => {
    render(<About />);
    expect(screen.getByTestId('fun-header')).toHaveTextContent(
      /What I do for fun/i
    );
  });

  it('should render link to medium page', () => {
    render(<About />);
    expect(screen.getByTestId('medium-link')).toHaveAttribute(
      'href',
      expect.stringContaining('https://medium.com/@noramens_/about')
    );
  });

  it('should render link to Developers In Vogue', () => {
    render(<About />);
    expect(screen.getByTestId('div-link')).toHaveAttribute(
      'href',
      expect.stringContaining('https://www.linkedin.com/company/devinvogue/')
    );
  });
});
