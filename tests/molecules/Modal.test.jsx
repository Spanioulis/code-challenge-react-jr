import { describe, expect, it } from 'vitest';
import { render, screen } from '../../test-setup.js';
import { fireEvent } from '@testing-library/dom';
import { vi } from 'vitest';
import Modal from '../../src/components/molecules/Modal.jsx';
import { Text } from '../../src/components/atoms';

describe('Modal', () => {
   const mockToggleModal = vi.fn();

   it('renders correctly', () => {
      render(
         <Modal isOpen toggleModal={mockToggleModal}>
            <Text>Test Modal</Text>
         </Modal>
      );

      const text = screen.getByText(/test modal/i);
      expect(text).toBeInTheDocument();
   });

   it('calls toggleModal function when close icon, background or "Escape" is clicked', () => {
      render(
         <Modal isOpen toggleModal={mockToggleModal}>
            <Text>Test Modal</Text>
         </Modal>
      );

      fireEvent.click(screen.getByTestId('modal-wrapper'));
      fireEvent.click(screen.getByTestId('outline-close'));
      fireEvent.keyDown(document, { key: 'Escape' });
      expect(mockToggleModal).toHaveBeenCalledTimes(3);
   });
});
