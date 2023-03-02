import { useState, useEffect } from 'react';
import { EndPoints } from 'api/EndPoints';
import { api } from 'api/api';

export const usePageData = (page: keyof typeof EndPoints.pages) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(EndPoints.pages[page]);
      setData(response.data);
    }
    fetchData();
  }, [page])

  return [data];
}