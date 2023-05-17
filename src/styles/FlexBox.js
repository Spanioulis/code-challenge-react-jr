import styled from 'styled-components';

export const FlexBox = styled.div`
   display: flex;
   align-items: ${({ align }) => align || 'center'};
   flex-direction: ${({ direction }) => direction || 'column'};
   flex-wrap: ${({ wrap }) => wrap || 'no-wrap'};
   gap: ${({ gap }) => gap || '0rem'};
   justify-content: ${({ justify }) => justify || 'stretch'};
   height: 100vh;
`;
