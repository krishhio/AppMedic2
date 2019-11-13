import { IPageData } from './page-data';
import { IAppSettings } from './settings';

export type PageProps = {
  setPageData?: (data: IPageData) => void;
  getData?: (url: string) => void;
};
