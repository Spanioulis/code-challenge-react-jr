import { Text } from './components/atoms';
import { FlexBox, colors } from './styles';
import { useFetch } from './hooks';
import Header from './components/molecules/Header';

function App() {
   const url = 'https://randomuser.me/api?results=5&noinfo';

   const { data, loading } = useFetch(url);
   console.log('data:', data);

   if (loading) {
      return <p>Cargando...</p>;
   }

   return (
      <FlexBox height="100vh">
         <Header title="Code Challenge React Jr." />

         {/* TODO -> Añadir spinner */}
         {loading ? (
            <p>Cargando...</p>
         ) : (
            <>
               <FlexBox direction="row">
                  {/* Navbar */}
                  <nav style={{ background: `${colors.gray.gray1}`, width: '230px' }}>{/* Contenido del navbar */}</nav>

                  <main>
                     {/* Contenido principal de la página */}
                     <Text weight="bold">Inicio prueba...</Text>
                     <Text weight="100">...continuando con proyecto</Text>
                  </main>
               </FlexBox>
            </>
         )}
      </FlexBox>
   );
}

export default App;
