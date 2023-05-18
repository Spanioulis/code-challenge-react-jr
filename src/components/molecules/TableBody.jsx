import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../styles';

const TableBodyStyled = styled.thead`
   color: ${colors.gray.gray1};

   td {
      border-bottom: 1px solid ${colors.gray.gray4};
      min-width: 75px;
      padding: 0.5rem;
      text-align: left;

      img {
         border-radius: 100%;
         box-shadow: 3px 3px 10px ${colors.gray.gray3};
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
