import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text, Title } from '../atoms';
import { FlexBox, colors, dimensions } from '../../styles';
import ninja from '../../assets/ninja.png';

const HeaderStyled = styled(FlexBox).attrs({ as: 'header' })`
   background-color: ${colors.black.black2};
   border-bottom: 1px solid ${colors.gray.gray2};
   min-height: 80px;
   padding: 0rem ${dimensions.spacing.xl};
`;

const LinkStyled = styled(Text).attrs({ as: 'a' })`
   text-decoration: none;

   &:hover {
      color: ${colors.primary};
      transition: color 0.7s ease;
   }
`;

const Header = ({ title }) => {
   return (
      <HeaderStyled justify="space-between" direction="row" data-testid="header">
         <FlexBox align="center" justify="flex-start" direction="row" gap="1rem">
            <img src={ninja} alt="Ninja icon" width="50px" />
            <Title as="h2" color={colors.primary}>
               {title}
            </Title>
         </FlexBox>

         <FlexBox align="center" justify="flex-end" direction="row" gap="1rem">
            <Text weight="300" color={colors.gray.gray5}>
               Sergio Paniagua Sánchez
            </Text>
            <LinkStyled
               color={colors.gray.gray4}
               href="https://spanioulis.dev"
               target="_blank"
               rel="noreferrer noopener"
            >
               @Spanioulis
            </LinkStyled>
         </FlexBox>
      </HeaderStyled>
   );
};

Header.propTypes = {
   title: PropTypes.string.isRequired
};

export default Header;
