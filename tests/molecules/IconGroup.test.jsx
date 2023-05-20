import { describe, expect, it } from 'vitest';
import { render, screen } from '../../test-setup.js';
import { fireEvent } from '@testing-library/dom';
import IconGroup from '../../src/components/molecules/IconGroup.jsx';

describe('IconGroup', () => {
   it('renders three icons', () => {
      render(<IconGroup />);
      const icons = screen.getAllByRole('link');

      expect(icons).toHaveLength(3);
   });

   it('contains valid href links', () => {
      render(<IconGroup />);
      const links = screen.getAllByRole('link').map((icon) => icon.href);

      expect(links).toEqual([
         'https://github.com/Spanioulis/',
         'https://www.linkedin.com/in/sergio-paniagua-sanchez/',
         'mailto:pani77sps@gmail.com'
      ]);
   });

   it('applies hover styles on mouseover', () => {
      render(<IconGroup />);
      const firstIcon = screen.getAllByRole('link')[0];
      fireEvent.mouseEnter(firstIcon);

      expect(firstIcon).toHaveStyle('color: primary');
   });
});
