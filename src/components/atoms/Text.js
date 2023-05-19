import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { dimensions } from '../../styles';

export const Text = styled.p`
   color: ${({ color }) => color || colors.gray.gray1};
   font-size: ${({ size }) => size || dimensions.font.base};
   font-weight: ${({ weight }) => weight || 'normal'};
`;
