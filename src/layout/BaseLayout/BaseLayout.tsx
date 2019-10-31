import React, { useEffect, useRef } from 'react';

import { IPageData } from '../../interfaces/page-data';
import { IAppSettings } from '../../interfaces/settings';

import { history } from '../../redux/store';

import className from "../../utils/classNames";

interface BaseLayoutProps {
  pageData: IPageData;
  settings: IAppSettings;
  onPageReset: () => void;
  onSidebarToggle: () => void;
}

const BaseLayout: React.FunctionComponent<BaseLayoutProps> = props => {
  const { pageData, onPageReset, onSidebarToggle } = props;

  const currentLocation = useRef('');

  const mainContentClasses = className({
    'main-content': true,
    loaded: pageData.loaded
  });

  const mainContentWrapClasses = className({
    'main-content-wrap': true,
    'ful-filled': pageData.fullFilled
  });

  useEffect(
    () =>
      history.listen(location => {
        const currentUrl = location.pathname.split('/').reverse()[0];

        if (currentLocation.current !== currentUrl) {
          onPageReset();

          if (window.innerWidth < 992) {
            onSidebarToggle();
          }

          currentLocation.current = currentUrl;
        }
      }),
    [onPageReset, onSidebarToggle]
  );

  return (
    <main className={mainContentClasses}>
      {!pageData.loaded && (
        <div className='page-loader'>
          <i className='icofont-spinner-alt-4 rotate' />
        </div>
      )}

      <div className={mainContentWrapClasses}>
        {pageData && !!pageData.title && (
          <header className='page-header'>

          </header>
        )}

        {props.children}
      </div>
    </main>
  );
};

export default BaseLayout;
