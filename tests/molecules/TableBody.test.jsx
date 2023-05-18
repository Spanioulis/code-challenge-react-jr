import { describe, expect, it } from 'vitest';
import { render, screen } from '../../test-setup.js';
import TableBody from '../../src/components/molecules/TableBody.jsx';

describe('TableBody', () => {
   it('renders correctly', () => {
      render(
         <table>
            <TableBody />
         </table>
      );

      expect(screen.getByTestId(/table body/i)).toBeInTheDocument();
   });

   it('renders correct content in cells', () => {
      const user = {
         name: {
            title: 'Mr',
            first: 'Edmundo',
            last: 'Dantés'
         },
         gender: 'male',
         dob: {
            date: '1990-01-01',
            age: 38
         },
         email: 'edmundo@dantes.com',
         picture: {
            thumbnail: 'https://example.com/edmundo-thumbnail.jpg'
         }
      };

      render(
         <table>
            <TableBody user={user} />
         </table>
      );

      expect(screen.getByText(`${user.name.title} ${user.name.first} ${user.name.last}`)).toBeInTheDocument();
      expect(screen.getByText(user.gender)).toBeInTheDocument();
      expect(screen.getByText(user.dob.date)).toBeInTheDocument();
      expect(screen.getByText(user.dob.age.toString())).toBeInTheDocument();
      expect(screen.getByText(user.email)).toBeInTheDocument();
   });
});
