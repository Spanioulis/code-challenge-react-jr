import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../styles';

const TableBodyStyled = styled.thead`
   color: ${colors.gray.gray1};

   td {
      padding: 0.5rem;
      text-align: left;

      img {
         cursor: pointer;
         border-radius: 100%;
         box-shadow: 3px 3px 10px ${colors.gray.gray3};

         &:hover {
            scale: calc(105%);
            transition: all 0.2s ease;
         }
      }
   }
`;

const TableBody = ({ user }) => {
   return (
      <TableBodyStyled data-testid="table body">
         <tr>
            <td>
               <img src={user?.picture?.thumbnail} alt={user?.name?.first} />
            </td>
            <td>{`${user?.name?.title} ${user?.name?.first} ${user?.name?.last}`}</td>
            <td>{user?.gender}</td>
            <td>{user?.dob?.date}</td>
            <td>{user?.dob?.age}</td>
            <td>{user?.email}</td>
         </tr>
      </TableBodyStyled>
   );
};

TableBody.propTypes = {
   user: PropTypes.object
};

export default TableBody;
