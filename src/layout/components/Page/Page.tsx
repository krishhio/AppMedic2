import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { IPageData } from '../../../interfaces/page-data';

import { setPageData, updatePageDada } from '../../../redux/page-data/actions';

type DispatchProps = {
  onSetPage?: (data: IPageData) => void;
  onPageUpdate?: (data: IPageData) => void;
};

type OwnProps = {
  children: any;
};

type Props = DispatchProps & OwnProps;

const Page = ({ children, onPageUpdate, onSetPage }: Props) => {
  const getData = async function<T>(url) {
    const result = await axios.get<T>(url);

    onPageUpdate({ fullFilled: true });

    return result.data;
  };

  const setPageData = (data: IPageData) => {
    const pageData = { ...data, fullFilled: true };
    onPageUpdate(pageData);

    return () => {
      const resetPageData = {
        fullFilled: false
      };

      onPageUpdate(resetPageData);
    };
  };

  return React.cloneElement(children, { setPageData, getData });
};

const mapDispatchToProps = dispatch => ({
  onPageUpdate: (data: IPageData) => dispatch(updatePageDada(data)),
  onSetPage: (data: IPageData) => dispatch(setPageData(data))
});

export default connect(
  null,
  mapDispatchToProps
)(Page);
