import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import axios from 'axios';

import { setPageData, updatePageDada } from '../redux/page-data/actions';

import { IPageData } from '../interfaces/page';

export function usePageData(pageData: IPageData) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageData({ ...pageData, loaded: true }));
  }, [pageData]);
}

export function useFetchPageData<T>(url: string, initialState: T = null): [T, (data: T) => void] {
  const [data, setData] = useState<T>(initialState);
  const dispatch = useDispatch();

  async function getData() {
    const result = await axios.get(url);
    dispatch(updatePageDada({ fullFilled: true, loaded: true }));
    setData(result.data);
  }

  useEffect(() => {
    dispatch(updatePageDada({ fullFilled: false }));
    getData().catch(console.error);
  }, [url]);

  return [data, setData];
}
