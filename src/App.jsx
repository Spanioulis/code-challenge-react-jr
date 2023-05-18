import { FlexBox } from './styles';
import { useFetch } from './hooks';
import { Header, Navbar } from './components/molecules';
import { Users } from './pages';

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
                  <Navbar />
                  <Users users={data} />
               </FlexBox>
            </>
         )}
      </FlexBox>
   );
}

export default App;
