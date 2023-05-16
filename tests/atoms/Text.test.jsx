import { describe, expect, it } from 'vitest';
import { render, screen } from '../../test-setup.js';
import { Text } from '../../src/components/atoms';

describe('Text', () => {
   it('renders correctly', () => {
      render(
         <Text color="green" size="23px">
            Test Text
         </Text>
      );

      const text = screen.getByText(/test text/i);

      expect(text).toBeInTheDocument();
      expect(text).toHaveStyle({ color: 'green' });
      expect(text).toHaveStyle({ fontSize: '23px' });
   });
});
