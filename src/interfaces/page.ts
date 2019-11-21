import { IPageData } from './page-data';

export type PageProps = {
  setPageData?: (data: IPageData) => void;
  getData?: <T>(url: string) => Promise<T>;
};
