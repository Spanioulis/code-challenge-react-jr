import styled from 'styled-components';
import { Text } from './Text';
import { colors, dimensions } from '../../styles';

export const Title = styled(Text).attrs(({ as }) => ({
   as: as || 'h1'
}))`
   color: ${({ color }) => color || colors.black.black2};
   ${({ as }) => as === 'h1' && `font-size: ${dimensions.font.h1}`};
   ${({ as }) => as === 'h2' && `font-size: ${dimensions.font.h2}`};
   ${({ as }) => as === 'h3' && `font-size: ${dimensions.font.h3}`};
`;
