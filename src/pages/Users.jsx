import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Title } from '../components/atoms';
import { colors, dimensions } from '../styles';
import Table from '../components/organisms/Table';

const TableContainer = styled.div`
   margin-top: ${dimensions.spacing.xl};
`;

const Users = ({ users }) => {
   return (
      <main style={{ padding: '3.5rem' }}>
         <Title color={colors.gray.gray1}>Usuarios</Title>

         <TableContainer>
            <Table users={users} />
         </TableContainer>
      </main>
   );
};

Users.propTypes = {
   users: PropTypes.array
};

export default Users;
