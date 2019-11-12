import React, { ReactElement } from 'react';

import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { IPageData } from '../../interfaces/page-data';
import { IAppSettings } from '../../interfaces/settings';

import {
  updatePageDada,
  setPageData,
  resetPageData
} from '../../redux/page-data/actions';

import * as settingsActions from '../../redux/settings/actions';
import * as patientActions from '../../redux/patients/actions';

import className from '../../utils/classNames';

import { IPatient } from '../../interfaces/patient';

import './BaseLayout.scss';
import Footer from '../components/Footer/Footer';

type StateProps = {
  pageData: IPageData;
  patients: IPatient[];
  settings: IAppSettings;
};

type DispatchProps = {
  onPageReset: () => void;
  onSidebarToggle: () => void;
  onPageSet: (data: IPageData) => void;
  onUpdatePage: (data: IPageData) => void;
};

type OwnProps = {
  nav: ReactElement<any>;
  sideNav?: ReactElement<any>;
  topNav?: ReactElement<any>;
  orientation: 'vertical' | 'horizontal';
  children: ReactElement;
};

type Props = DispatchProps & StateProps & OwnProps;

const BaseLayout = ({
  nav,
  topNav,
  sideNav,
  settings,
  pageData,
  orientation,
  children,
  ...dispatchProps
}: Props) => {
  const mainContentClasses = className({
    'main-content': true,
    loaded: pageData.loaded
  });

  const mainContentWrapClasses = className({
    'main-content-wrap': true,
    'ful-filled': pageData.fullFilled
  });

  const navbar = nav && React.cloneElement(nav, { boxed: settings.boxed });

  const sidebar =
    sideNav && React.cloneElement(sideNav, { opened: settings.sidebarOpened });

  const additionalNav =
    topNav &&
    React.cloneElement(topNav, {
      ...settings,
      opened: settings.sidebarOpened
    });

  const pageComponent = React.cloneElement(children, {
    ...pageData,
    ...dispatchProps,
    ...settings
  });
  return (
    <div className={`layout ${orientation}`}>
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
            {pageComponent}
          </div>
        </main>

        <Footer
          breadcrumbs={pageData.breadcrumbs}
          layout={settings.layout}
          boxed={settings.boxed}
          loaded={pageData.loaded}
          openModal={() => console.log()}
        />
      </div>
    </div>
  );
};

const mapStateToProps = ({ patients, pageData, settings }) => ({
  settings,
  pageData,
  patients
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onPageSet: (data: IPageData) => dispatch(setPageData(data)),
  onUpdatePage: (data: IPageData) => dispatch(updatePageDada(data)),
  onSidebarToggle: () => dispatch(settingsActions.toggleSidebar()),
  onPageReset: () => dispatch(resetPageData())
});

const ConnectedLayout: (props: OwnProps) => ReactElement = connect(
  mapStateToProps,
  mapDispatchToProps
)(BaseLayout);

export default ConnectedLayout;
