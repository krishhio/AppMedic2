import React, { ReactElement } from 'react';

import { connect } from 'react-redux';

import { IPageData } from '../../interfaces/page-data';
import { IAppSettings } from '../../interfaces/settings';

import * as pageActions from '../../redux/page-data/actions';
import * as settingsActions from '../../redux/settings/actions';
import * as patientActions from '../../redux/patients/actions';

import className from '../../utils/classNames';

import { IAppState } from '../../interfaces/app-state';

type Props = {
  pageData?: IPageData;
  settings?: IAppSettings;
  onPageReset?: () => void;
  onSidebarToggle?: () => void;
  nav: ReactElement<any>;
  sideNav?: ReactElement<any>;
  topNav?: ReactElement<any>;
  children?: any;
};

const BaseLayout = ({
  nav,
  topNav,
  settings,
  onPageReset,
  onSidebarToggle,
  pageData,
  sideNav,
  children
}: Props) => {
  const mainContentClasses = className({
    'main-content': true,
    loaded: pageData.loaded
  });

  const mainContentWrapClasses = className({
    'main-content-wrap': true,
    'ful-filled': pageData.fullFilled
  });

  const navbar = nav
    ? React.cloneElement(nav, { boxed: settings.boxed })
    : null;

  const sidebar = sideNav
    ? React.cloneElement(sideNav, { opened: settings.sidebarOpened })
    : null;

  const additionalNav = topNav
    ? React.cloneElement(topNav, {
        ...settings,
        opened: settings.sidebarOpened
      })
    : null;

  return (
    <div className='layout vertical'>
      <div className={`app-container ${settings.boxed && 'boxed'}`}>
        {navbar}

        {additionalNav}

        {sidebar}

        <main className={mainContentClasses}>
          {!pageData.loaded && (
            <div className='page-loader'>
              <i className='icofont-spinner-alt-4 rotate' />
            </div>
          )}

          <div className={mainContentWrapClasses}>
            {pageData && !!pageData.title && (
              <header className='page-header'>
                <div className='left'>
                  <h1 className='page-title'>{pageData.title}</h1>
                </div>
              </header>
            )}
            {children}
          </div>
        </main>

        {/* Footer*/}
      </div>
    </div>
  );
};

const mapStateToProps = (state: IAppState, ownProps): Props => ({
  settings: state.appSettings,
  pageData: state.pageData,
  patients: state.patients,
  ...ownProps
});

const mapDispatchToProps = dispatch => ({
   
});

export default connect(
  mapStateToProps,
  null,
  BaseLayout
);
