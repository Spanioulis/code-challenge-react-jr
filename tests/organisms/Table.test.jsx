import { describe, expect, it } from 'vitest';
import { render, screen } from '../../test-setup.js';
import Table from '../../src/components/organisms/Table.jsx';

describe('Table', () => {
   it('renders correctly with user data', () => {
      const users = [
         {
            name: { title: 'Mr', first: 'John', last: 'Doe' },
            email: 'john@example.com'
         },
         { name: { title: 'Ms', first: 'Jane', last: 'Doe' }, email: 'jane@example.com' }
      ];

      render(<Table users={users} />);

      expect(screen.getByTestId(/table head/i)).toBeInTheDocument();

      users.forEach((user) => {
         expect(screen.getByText(`${user.name.title} ${user.name.first} ${user.name.last}`)).toBeInTheDocument();
         expect(screen.getByText(user.email)).toBeInTheDocument();
      });
   });
});
