import styled from 'styled-components';
import { colors } from '../../styles';

const TableHeadStyled = styled.thead`
   color: ${colors.gray.gray3};
   font-weight: bold;

   tr th {
      border-bottom: 1px solid ${colors.gray.gray4};
      min-width: 85px;
      padding-left: 0.5rem;
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
