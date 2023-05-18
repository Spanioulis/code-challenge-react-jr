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
   }
`;

const TableBody = ({ user }) => {
   console.log('user:', user);
   return (
      <TableBodyStyled>
         <td>
            <img src={user.picture.thumbnail} alt={`${user.name.first} photo`} style={{ borderRadius: '100%' }} />
         </td>
         <td>{`${user.name.title} ${user.name.first} ${user.name.last}`}</td>
         <td>{user.gender}</td>
         <td>{user.dob.date}</td>
         <td>{user.dob.age}</td>
         <td>{user.email}</td>
      </TableBodyStyled>
   );
};

TableBody.propTypes = {
   user: PropTypes.array
};

export default TableBody;
