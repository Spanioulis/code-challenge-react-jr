import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TableBody, TableHead } from '../molecules';

const TableStyled = styled.table`
   border-collapse: collapse;
   border-spacing: 0;
`;

const Table = ({ users }) => {
   return (
      <TableStyled>
         <TableHead />

         {users.map((user) => (
            <TableBody user={user} key={user.id.value} />
         ))}
      </TableStyled>
   );
};

Table.propTypes = {
   users: PropTypes.array
};

export default Table;
