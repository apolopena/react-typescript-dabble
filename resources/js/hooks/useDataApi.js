import { useEffect, useState } from 'react';
import axios from 'axios';

const useDataApi = url => {
  const [dataState, setDataState] = useState({ data: [], isLoading: true });
  const [endpointUrl] = useState(url);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        //setDataState({ ...dataState, isLoading: true });
        const response = await axios.get(endpointUrl);
        setDataState({
          ...dataState,
          data: response.data,
          isLoading: false
        });
      } catch (e) {
        console.log(e);
        setDataState({ ...dataState, isLoading: false });
      }
    };
    fetchDataFromApi();
  }, []);

  return [dataState];
};

export default useDataApi;
