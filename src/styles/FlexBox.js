import styled from 'styled-components';

export const FlexBox = styled.div`
   display: flex;
   align-items: ${({ align }) => align || 'stretch'};
   flex-direction: ${({ direction }) => direction || 'column'};
   flex-grow: ${({ grow }) => grow || 0};
   flex-wrap: ${({ wrap }) => wrap || 'no-wrap'};
   gap: ${({ gap }) => gap || '0rem'};
   justify-content: ${({ justify }) => justify || 'flex-start'};
   width: ${({ w }) => w || '100%'};
`;
