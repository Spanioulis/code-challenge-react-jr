import styled from 'styled-components';
import { Text, Title } from '../atoms';
import { FlexBox, colors, dimensions } from '../../styles';

const HeaderStyled = styled(FlexBox).attrs({ as: 'header' })`
   background-color: ${colors.black.black2};
   border-bottom: 1px solid ${colors.gray.gray2};
   height: 80px;
   padding: 0rem ${dimensions.spacing.xl};
`;

const LinkStyled = styled(Text).attrs({ as: 'a' })`
   text-decoration: none;
`;

const Header = () => {
   return (
      <HeaderStyled justify="space-between" direction="row">
         <FlexBox align="flex-start" justify="center">
            <Title as="h2" weight="100" color={colors.gray.gray4}>
               Code Challenge React Jr.
            </Title>
         </FlexBox>
         <FlexBox align="flex-end" justify="center">
            <Text weight="100" color={colors.gray.gray3}>
               Sergio Paniagua Sánchez
            </Text>
            <LinkStyled
               color={colors.gray.gray4}
               href="https://github.com/Spanioulis"
               target="_blank"
               rel="noreferrer noopener"
            >
               @Spanioulis
            </LinkStyled>
         </FlexBox>
      </HeaderStyled>
   );
};

export default Header;
