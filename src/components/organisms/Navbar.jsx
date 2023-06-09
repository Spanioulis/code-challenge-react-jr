import styled from 'styled-components';
import { FlexBox, colors, dimensions } from '../../styles';
import IconGroup from '../molecules/IconGroup';

const NavbarStyled = styled(FlexBox).attrs({ as: 'nav' })`
   background-color: ${colors.gray.gray1};
   width: 250px;

   ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 2rem 1rem 1rem 1rem;

      li {
         background-color: ${colors.gray.gray1};
         border-radius: ${dimensions.borderRadius.base};
         color: ${colors.gray.gray5};
         cursor: pointer;
         display: inline-block;
         margin-top: ${dimensions.spacing.xxs};
         padding: ${dimensions.spacing.base};
         transition: background-color 0.3s ease;

         a {
            color: ${colors.gray.gray5};
            cursor: pointer;
            text-decoration: none;
         }

         &:hover {
            background-color: ${colors.gray.gray2};
         }
      }
   }
`;

const Navbar = () => {
   return (
      <NavbarStyled justify="space-between">
         <FlexBox justify="center">
            <ul>
               <li>
                  <a href="/">Usuarios</a>
               </li>
               <li>Ficha usuario</li>
               <li>Code challenges</li>
               <li>Ninja&apos;s</li>
            </ul>
         </FlexBox>

         <IconGroup />
      </NavbarStyled>
   );
};

export default Navbar;
