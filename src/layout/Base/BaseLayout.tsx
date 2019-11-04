import React, { useEffect, useRef } from 'react';

import { IPageData } from '../../interfaces/page-data';
import { IAppSettings } from '../../interfaces/settings';

import { history } from '../../redux/store';

import className from '../../utils/classNames';

export interface BaseLayoutProps {
  pageData: IPageData;
  settings: IAppSettings;
  onPageReset: () => void;
  onSidebarToggle: () => void;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({
  settings,
  pageData,
  children,
  onPageReset,
  onSidebarToggle
}) => {
  return (
    <>
      {/* Navbar*/}

      {/* Additional nav*/}

      {/* Sidebar*/}

      {/* Main*/}

      {/* Footer*/}
    </>
  );
};

export default BaseLayout;
