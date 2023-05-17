import { describe, expect, it } from 'vitest';
import { render, screen } from '../../test-setup.js';
import { Title } from '../../src/components/atoms';

describe('Title', () => {
   it('renders correctly', () => {
      render(
         <Title as="h3" weight="100">
            Test Title
         </Title>
      );

      const title = screen.getByText(/test title/i);

      expect(title).toBeInTheDocument();
      expect(title).toHaveStyle({ fontWeight: '100' });
      expect(title).toHaveStyle({ fontSize: '1.5rem' });
      expect(title.tagName).toBe('H3');
   });
});
