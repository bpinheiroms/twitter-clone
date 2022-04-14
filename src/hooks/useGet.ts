import { useState, useCallback } from 'react';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const useGet = <T>(fnc: any) => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    if (loading) return;

    try {
      setLoading(true);

      await delay(1500);

      const data = fnc();
      setData(data);
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  }, [loading]);

  return { loading, data, fetchData };
};

export default useGet;
