import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { dimensions } from '../../styles';

const Text = styled.p`
   color: ${({ color }) => color || colors.primary};
   font-size: ${({ size }) => size || dimensions.font.base};
   font-weight: ${({ weight }) => weight || 'normal'};
`;

export { Text };
