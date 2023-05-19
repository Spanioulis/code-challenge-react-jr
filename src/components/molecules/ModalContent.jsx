import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text, Title } from '../atoms';
import { FlexBox, colors, dimensions } from '../../styles';

const ModalContentStyled = styled(FlexBox)`
   img {
      border-radius: 15px;
      width: 150px;
      box-shadow: 3px 3px 10px ${colors.gray.gray3};
      margin-bottom: ${dimensions.spacing.base};
   }

   ${Title} {
      margin-bottom: ${dimensions.spacing.xxs};
   }

   div {
      margin-top: ${dimensions.spacing.xxs};
      border-bottom: 1px solid ${colors.gray.gray5};
      width: 100%;
   }

   ul {
      margin-top: ${dimensions.spacing.base};
   }
`;

const LiStyled = styled(Text)`
   line-height: ${dimensions.spacing.xl};
`;

const ModalContent = ({ user }) => {
   return (
      <ModalContentStyled align="center">
         {/* Cabecera */}
         <img src={user?.picture?.large} alt={user?.name?.first} />
         <Title as="h3">{`${user?.name?.title} ${user?.name?.first} ${user?.name?.last}`}</Title>
         <Text size={dimensions.font.xs}>{user?.login.username}</Text>
         <div></div>

         {/* Lista contenido */}
         <ul>
            <LiStyled>
               <strong>🏠 Dirección: </strong>
               {user?.location?.street?.name}, {user?.location?.street?.number}
            </LiStyled>
            <LiStyled>
               <strong>🌆 Ciudad: </strong> {user?.location?.city} ({user?.location?.state})
            </LiStyled>
            <LiStyled>
               <strong>🌐 Código postal: </strong> {user?.location?.postcode}
            </LiStyled>
            <LiStyled>
               <strong>🌍 País: </strong> {user?.location?.country} (<i>{user?.nat}</i>)
            </LiStyled>
            <LiStyled>
               <strong>📞 Teléfono: </strong> {user?.cell} / {user?.phone}
            </LiStyled>
         </ul>
      </ModalContentStyled>
   );
};

ModalContent.propTypes = {
   user: PropTypes.object
};

export default ModalContent;
