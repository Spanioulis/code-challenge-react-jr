import { Text, Title } from './components/atoms';
import { FlexBox, colors } from './styles';

function App() {
   return (
      <FlexBox gap="1.5rem">
         <Title as="h2" weight="100" color={colors.gray.gray3}>
            Code Challenge React Jr.
         </Title>
         <Text weight="bold">Inicio prueba...</Text>
         <Text weight="100" color={colors.gray.gray2}>
            ...continuando con proyecto
         </Text>
      </FlexBox>
   );
}

export default App;
