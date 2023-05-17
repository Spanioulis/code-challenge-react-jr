import { Text, Title } from './components/atoms';
import { FlexBox, colors } from './styles';
import { useFetch } from './hooks';

function App() {
   const url = 'https://randomuser.me/api?results=5&noinfo';

   const { data, loading } = useFetch(url);
   console.log('data:', data);

   if (loading) {
      return <p>Cargando...</p>;
   }

   return (
      <FlexBox gap="1rem" align="center">
         {/* TODO -> Añadir spinner */}
         {loading ? (
            <p>Cargando...</p>
         ) : (
            <>
               <Title as="h2" weight="100" color={colors.gray.gray3}>
                  Code Challenge React Jr.
               </Title>
               <FlexBox direction="row" justify="space-around">
                  <Text weight="bold">Inicio prueba...</Text>
                  <Text weight="100" color={colors.gray.gray2}>
                     ...continuando con proyecto
                  </Text>
               </FlexBox>
            </>
         )}
      </FlexBox>
   );
}

export default App;
