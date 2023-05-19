import { describe, expect, it } from 'vitest';
import { render, screen } from '../../test-setup.js';
import ModalContent from '../../src/components/molecules/ModalContent.jsx';

describe('ModalContent', () => {
   const user = {
      picture: { large: 'user-picture.jpg' },
      name: { title: 'Mr.', first: 'John', last: 'Doe' },
      login: { username: 'johndoe' },
      location: {
         street: { name: '123 Street', number: '456' },
         state: 'State'
      },
      nat: 'US'
   };

   it('renders user information correctly', () => {
      render(<ModalContent user={user} />);

      const userPicture = screen.getByAltText(user?.name?.first);
      expect(userPicture).toBeInTheDocument();
      expect(userPicture).toHaveAttribute('src', user?.picture?.large);

      const userName = screen.getByRole('heading', { level: 3 });
      expect(userName).toHaveTextContent(`${user?.name?.title} ${user?.name?.first} ${user?.name?.last}`);

      const username = screen.getByText(user?.login?.username);
      expect(username).toBeInTheDocument();

      const street = screen.getByText(`${user?.location?.street?.name}, ${user?.location?.street?.number}`);
      expect(street).toBeInTheDocument();

      expect(screen.getByText('🌆 Ciudad:')).toBeInTheDocument();
      expect(screen.getByText('🌐 Código postal:')).toBeInTheDocument();
      expect(screen.getByText('🏠 Dirección:')).toBeInTheDocument();
      expect(screen.getByText('🌍 País:')).toBeInTheDocument();
      expect(screen.getByText('📞 Teléfono:')).toBeInTheDocument();
   });
});
