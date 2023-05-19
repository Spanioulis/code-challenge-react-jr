import styled from 'styled-components';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FlexBox, colors } from '../../styles';

const IconGroupStyled = styled(FlexBox)`
   margin-bottom: 1rem;
`;

const IconStyled = styled.a`
   display: inline-flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   border-radius: 50%;
   padding: 0.75rem;
   box-shadow: 3px 3px 10px ${colors.black.black2};

   svg {
      color: ${colors.gray.gray4};
   }

   &:hover svg {
      transition: transform 0.7s ease;
      transform: scale(1.15);
      color: ${colors.primary};
   }
`;

const IconGroup = () => {
   return (
      <IconGroupStyled direction="row" justify="space-around">
         <IconStyled href="https://github.com/Spanioulis/" rel="noopener noreferrer" target="_blank">
            <FaGithub fontSize="1.5em" />
         </IconStyled>
         <IconStyled
            href="https://www.linkedin.com/in/sergio-paniagua-sanchez/"
            rel="noopener noreferrer"
            target="_blank"
         >
            <FaLinkedinIn fontSize="1.5em" />
         </IconStyled>
         <IconStyled href="mailto:pani77sps@gmail.com" rel="noopener noreferrer" target="_blank">
            <MdEmail fontSize="1.5em" />
         </IconStyled>
      </IconGroupStyled>
   );
};

export default IconGroup;
