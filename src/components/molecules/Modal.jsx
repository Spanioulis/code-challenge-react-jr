import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { FlexBox, colors, dimensions } from '../../styles';

const ModalBackgroundStyled = styled(FlexBox)`
   bottom: 0;
   left: 0;
   right: 0;
   top: 0;
   display: flex;
   opacity: 1;
   overflow: hidden;
   padding: 0.2rem;
   position: fixed;
   z-index: 1000;
`;
const ModalWrapper = styled(FlexBox)`
   background-color: rgba(0, 0, 0, 0.68);
   bottom: 0;
   left: 0;
   right: 0;
   top: 0;
   cursor: default;
   display: block;
   height: 100%;
   position: absolute;
   width: 100%;
`;

const ModalContainerSyled = styled(FlexBox)`
   background-color: ${colors.white};
   border-radius: ${dimensions.borderRadius.sm};
   height: 700px;
   margin: 6rem auto ${dimensions.spacing.xl};
   max-width: 355px;
   padding: ${dimensions.spacing.md};
   position: relative;
   width: 100%;
   z-index: 1;

   span {
      cursor: pointer;
      position: absolute;
      right: ${dimensions.spacing.xs};
      top: ${dimensions.spacing.base};
   }
`;

const Modal = ({ children, isOpen, toggleModal }) => {
   const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
         toggleModal();
      }
   };
   useEffect(() => {
      document.addEventListener('keydown', handleKeyDown);

      return () => {
         document.removeEventListener('keydown', handleKeyDown);
      };
   });

   return isOpen ? (
      <ModalBackgroundStyled>
         <ModalWrapper onClick={toggleModal} data-testid="modal-wrapper" />
         <ModalContainerSyled justify="flex-start">
            <span onClick={toggleModal}>
               <AiOutlineClose />
            </span>
            <FlexBox>{children}</FlexBox>
         </ModalContainerSyled>
      </ModalBackgroundStyled>
   ) : null;
};

Modal.propTypes = {
   children: PropTypes.node,
   isOpen: PropTypes.bool,
   toggleModal: PropTypes.func.isRequired
};

export default Modal;
