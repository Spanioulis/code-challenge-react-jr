import { describe, expect, it } from 'vitest';
import { render, screen } from '../../test-setup.js';
import Header from '../../src/components/molecules/Header.jsx';

describe('Header', () => {
   it('renders correctly', () => {
      render(<Header title="Test header" />);

      const title = screen.getByText(/test header/i);
      expect(title).toBeInTheDocument();
      expect(screen.getByTestId('header')).toBeInTheDocument();
   });

   it('renders expected child components', () => {
      render(<Header title="Test header" />);

      const link = screen.getByRole('link', { name: '@Spanioulis' });
      expect(link).toBeInTheDocument();
   });
});
