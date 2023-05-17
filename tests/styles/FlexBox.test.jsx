import { describe, expect, it } from 'vitest';
import { render, screen } from '../../test-setup.js';
import { FlexBox } from '../../src/styles';

describe('FlexBox', () => {
   it('renders correctly', () => {
      render(
         <FlexBox direction="row" wrap="wrap" justify="center">
            Test FlexBox
         </FlexBox>
      );

      const flex = screen.getByText(/test flexbox/i);

      expect(flex).toBeInTheDocument();
      expect(flex).toHaveStyle({
         display: 'flex',
         flexDirection: 'row',
         flexWrap: 'wrap',
         justifyContent: 'center'
      });
   });
});
