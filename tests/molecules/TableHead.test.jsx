import { describe, expect, it } from 'vitest';
import { render, screen } from '../../test-setup.js';
import TableHead from '../../src/components/molecules/TableHead.jsx';
import { colors } from '../../src/styles/colors.js';

describe('TableHead', () => {
   it('renders correctly', () => {
      render(
         <table>
            <TableHead />
         </table>
      );

      expect(screen.getByTestId(/table head/i)).toBeInTheDocument();
   });

   it('applies correct styles to table header cells', () => {
      render(
         <table>
            <TableHead />
         </table>
      );
      const tableHeaders = screen.getAllByRole('columnheader');

      tableHeaders.forEach((header) => {
         expect(header).toHaveStyle(`
            border-bottom: 1px solid ${colors.gray.gray4};
            min-width: 85px;
            padding-left: 0.5rem;
            text-align: left;
         `);
         expect(header).toHaveStyle({ fontWeight: 'bold' });
      });
   });
});
