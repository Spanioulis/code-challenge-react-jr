import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TableBody, TableHead } from '../molecules';
import { dimensions } from '../../styles';

const TableStyled = styled.table`
   border-collapse: collapse;
   border-spacing: 0;
   margin-top: ${dimensions.spacing.xl};
`;

const Table = ({ users, openModal }) => {
   return (
      <TableStyled>
         <TableHead />

         {users.map((user) => (
            <TableBody user={user} key={user?.email} openModal={openModal} />
         ))}
      </TableStyled>
   );
};

Table.propTypes = {
   users: PropTypes.array,
   openModal: PropTypes.func
};

export default Table;
