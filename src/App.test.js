import { render, screen } from '@testing-library/react';
import Dog from './components/Dog.js';

test('renders button for render image', () => {
  render(<Dog />);
  const linkElement = screen.getByText("Mostrar um Doguinho!");
  expect(linkElement).toBeInTheDocument();
});
