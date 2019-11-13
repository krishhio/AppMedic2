import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { IAppSettings } from '../../interfaces/settings';
import { IPageData } from '../../interfaces/page-data';
import { IAppState } from '../../interfaces/app-state';

import { setPageData, updatePageDada } from '../../redux/page-data/actions';

type DispatchProps = {
  onSetPage?: (data: IPageData) => void;
  onPageUpdate?: (data: IPageData) => void;
};

type OwnProps = {
  children: any;
};

type Props = DispatchProps & OwnProps;

const Page = ({ children, onPageUpdate, onSetPage }: Props) => {
  const getData = async url => {
    const result = await axios.get(url);
    onPageUpdate({ loaded: true, fullFilled: true });
    return result.data;
  };

  const setPageData = (data: IPageData) => {
    const pageData = { ...data, loaded: true };
    onSetPage(pageData);

    return () => {
      const resetPageData = {
        fullFilled: false,
        breadcrumbs: data.breadcrumbs
      };

      onSetPage(resetPageData);
    };
  };

  return <>{React.cloneElement(children, { setPageData, getData })}</>;
};

const mapDispatchToProps = dispatch => ({
  onPageUpdate: (data: IPageData) => dispatch(updatePageDada(data)),
  onSetPage: (data: IPageData) => dispatch(setPageData(data))
});

export default connect(
  null,
  mapDispatchToProps
)(Page);
