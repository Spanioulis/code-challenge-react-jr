import { useEffect, useState } from 'react';
import axios from 'axios';

function useFetch(url) {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

   useEffect(() => {
      const getData = async () => {
         setLoading(true);
         setError(null);

         try {
            const { data } = await axios.get(url);
            setData(data.results);
            setLoading(false);
         } catch (error) {
            setError(error.message);
            throw new Error(error.message);
         } finally {
            setLoading(false);
         }
      };

      getData();
   }, [url]);

   return {
      data,
      loading,
      error
   };
}

export default useFetch;
