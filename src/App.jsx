import { useFetch } from './hooks';
import { Users } from './pages';
import { Navbar } from './components/organisms';
import { Header } from './components/molecules';
import { FlexBox } from './styles';

function App() {
   const url = 'https://randomuser.me/api?results=5&noinfo';

   const { data, loading } = useFetch(url);

   if (loading) {
      return <p>Cargando...</p>;
   }

   return (
      <FlexBox>
         <Header title="Code Challenge React Jr." />
         {/* TODO -> Añadir spinner */}
         {loading ? (
            <p>Cargando...</p>
         ) : (
            <FlexBox direction="row" style={{ height: '87vh' }}>
               <Navbar />
               <Users users={data} />
            </FlexBox>
         )}
      </FlexBox>
   );
}

export default App;
