import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../../../components/pages/Home';

describe('Home component', () => {
  it('should render full name', () => {
    render(<Home />);
    expect(screen.getAllByText(/Nora Mensah/i)).toBeTruthy();
  });
  it('should render job title', () => {
    render(<Home />);
    expect(screen.getAllByText(/Software Engineer/i)).toBeTruthy();
  });

  it('should render the tag line', () => {
    render(<Home />);
    expect(screen.getAllByTestId('tag-line')).toBeTruthy();
  });
});
