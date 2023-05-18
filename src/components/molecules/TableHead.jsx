import styled from 'styled-components';
import { colors } from '../../styles';

const TableHeadStyled = styled.thead`
   color: ${colors.gray.gray3};
   font-weight: bold;

   th:not(:first-child) {
      border-bottom: 1px solid ${colors.gray.gray5};
   }

   tr th {
      min-width: 85px;
      padding: 0.5rem;
      text-align: left;
   }
`;

const TableHead = () => {
   return (
      <TableHeadStyled data-testid="table head">
         <tr>
            <th></th>
            <th>Name</th>
            <th>Gender</th>
            <th>Birthdate</th>
            <th>Age</th>
            <th>Email</th>
         </tr>
      </TableHeadStyled>
   );
};

export default TableHead;
