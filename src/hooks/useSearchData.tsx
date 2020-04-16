import { useEffect, useState } from 'react';
import { DataSourceItemType } from 'antd/es/auto-complete';

import axios from 'axios';

import { IMenuItem, IMenuItemSub } from '../interfaces/main-menu';

export function useSearchData() {
  const [searchData, setSearchData] = useState<DataSourceItemType[]>([]);

  useEffect(() => {
    async function fetchSearchData() {
      const result = await axios('./data/menu.json');
      const data = result.data;

      const hasRouting = (item: IMenuItem) => !!item.routing;
      const hasSub = (item: IMenuItem) => !!item.sub;

      const getOption = (item: IMenuItem | IMenuItemSub) => ({
        text: item.title,
        value: item.routing
      });

      const setSubTitle = (itemTitle: string) => (subItem: IMenuItemSub) => ({
        ...subItem,
        title: `${itemTitle} > ${subItem.title}`
      });

      const menuItems = data.filter(hasRouting);

      const menuItemsWithSub = data
        .filter(hasSub)
        .map((item: IMenuItem) => ({
          ...item,
          sub: item.sub.map(setSubTitle(item.title))
        }))
        .map((item: IMenuItem) => item.sub)
        .flat();

      const searchOptions = [...menuItems, ...menuItemsWithSub].map(getOption);

      setSearchData(searchOptions || []);
    }

    fetchSearchData().catch(err => console.log('Server Error', err));
  }, []);

  return [searchData, setSearchData];
}
