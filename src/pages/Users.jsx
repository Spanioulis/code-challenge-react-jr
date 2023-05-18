import PropTypes from 'prop-types';
import { Table } from '../components/organisms';
import { Title } from '../components/atoms';
import { colors } from '../styles';

const Users = ({ users }) => {
   return (
      <main style={{ padding: '3.5rem' }}>
         <Title color={colors.gray.gray1}>Usuarios</Title>

         <Table users={users} />
      </main>
   );
};

Users.propTypes = {
   users: PropTypes.array
};

export default Users;
