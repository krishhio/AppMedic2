import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import axios from 'axios';

import { setPageData, updatePageDada } from '../redux/page-data/actions';

import { IPageData } from '../interfaces/page';

export const usePageData = (data: IPageData) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageData(data));
  }, [data]);
};

export const useFetchPageData = (url: string) => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  async function getData() {
    const result = await axios.get(url);

    dispatch(updatePageDada({ fullFilled: true }));
    setData(result.data);
  }

  useEffect(() => {
    try {
      getData();
    } catch (e) {
      console.log(e);
    }
  }, [url]);

  return data;
};
