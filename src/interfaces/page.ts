export interface IPageData {
  title?: string;
  loaded?: boolean;
  breadcrumbs?: IBreadcrumb[];
  fullFilled?: boolean;
}

export interface IBreadcrumb {
  title: string;
  route?: string;
}

export type PageProps = {
  setPageData?: (data: IPageData) => void;
  getData?: <T>(url: string, setter: (data: any) => void) => Promise<T>;
};
