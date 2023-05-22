import { useFetch } from './hooks';
import { Users } from './pages';
import { Navbar } from './components/organisms';
import { Header } from './components/molecules';
import { FlexBox } from './styles';

function App() {
   const url = 'https://randomuser.me/api?results=5&noinfo';

   const { data, loading } = useFetch(url);

   return (
      <FlexBox>
         <Header title="Code Challenge React Jr." />
         <FlexBox direction="row" style={{ height: '87vh' }}>
            <Navbar />
            <Users users={data} loading={loading} />
         </FlexBox>
      </FlexBox>
   );
}

export default App;
