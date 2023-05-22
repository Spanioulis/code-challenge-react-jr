import PropTypes from 'prop-types';
import { useState } from 'react';
import { Table } from '../components/organisms';
import { Modal, ModalContent } from '../components/molecules';
import { Spinner, Title } from '../components/atoms';
import { FlexBox, colors } from '../styles';

const Users = ({ users, loading }) => {
   const [isOpen, setIsOpen] = useState(false);
   const [selectedUser, setUserModal] = useState(null);

   const openModal = (user) => {
      setUserModal(user);
      setIsOpen(true);
   };
   return (
      <main style={{ padding: '2.5rem', width: '100vw' }}>
         <Modal isOpen={isOpen} toggleModal={() => setIsOpen(false)}>
            <ModalContent user={selectedUser} />
         </Modal>

         <Title color={colors.gray.gray1}>Usuarios</Title>
         <FlexBox justify="flex-end">{loading ? <Spinner /> : <Table users={users} openModal={openModal} />}</FlexBox>
      </main>
   );
};

Users.propTypes = {
   users: PropTypes.array,
   loading: PropTypes.boolean
};

export default Users;
