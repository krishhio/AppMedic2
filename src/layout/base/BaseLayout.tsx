import React, { ReactElement, useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { Modal } from 'antd';

import { IPageData } from '../../interfaces/page';
import { IAppSettings } from '../../interfaces/settings';

import { toggleSidebar, updateSettings, resetSettings } from '../../redux/settings/actions';
import { fetchPatients } from '../../redux/patients/actions';

import className from '../../utils/class-names';

import { IPatient } from '../../interfaces/patient';

import './BaseLayout.scss';
import Footer from '../components/footer/Footer';
import SettingsForm from '../components/settings/SettingsForm';

const patientsUrl = '/data/patients.json';

type StateProps = {
  pageData: IPageData;
  patients: IPatient[];
  settings: IAppSettings;
};

type DispatchProps = {
  onSidebarToggle: () => void;
  onUpdateSettings: (settings: IAppSettings) => void;
  onResetSettings: () => void;
  onFetchPatients: (url) => void;
};

type OwnProps = {
  nav: ReactElement<any>;
  sideNav?: ReactElement<any>;
  topNav?: ReactElement<any>;
  orientation: 'vertical' | 'horizontal';
  children: ReactElement;
};

type Props = OwnProps & DispatchProps & StateProps;

const BaseLayout = ({
  nav,
  topNav,
  sideNav,
  settings,
  pageData,
  orientation,
  children,
  onUpdateSettings,
  onResetSettings,
  onFetchPatients
}: Props) => {
  const [showSettings, setShowSettings] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    onFetchPatients(patientsUrl);
  }, [onFetchPatients]);

  const handleScroll = (event) => {
    setScrolled(event.target.scrollTop > 0);
  };

  const mainContentClasses = className({
    'main-content': true,
    loaded: pageData.loaded,
    fulfilled: pageData.fulFilled
  });

  const mainContentWrapClasses = className({
    'main-content-wrap': true
  });

  const toggleSettings = () => setShowSettings(!showSettings);

  return (
    <div className={`layout ${orientation}`}>
      <div className={`app-container ${settings.boxed && 'boxed'} ${scrolled && 'scrolled'}`}>
        {nav}

        {topNav}

        {sideNav}

        <main onScroll={handleScroll} className={mainContentClasses}>
          <div className='app-loader'>
            <i className='icofont-spinner-alt-4 rotate' />
          </div>

          <div className={mainContentWrapClasses}>
            {pageData && !!pageData.title && (
              <header className='page-header'>
                <h1 className='page-title'>{pageData.title}</h1>
              </header>
            )}
            {children}
          </div>
        </main>

        <Footer
          breadcrumbs={pageData.breadcrumbs}
          layout={settings.layout}
          boxed={settings.boxed}
          loaded={pageData.loaded}
          openModal={toggleSettings}
        />

        <Modal
          visible={showSettings}
          onCancel={toggleSettings}
          footer={null}
          title={
            <h3 className='m-0' style={{ opacity: 0.8 }}>
              Settings
            </h3>
          }
        >
          <SettingsForm
            settings={settings}
            onResetSettings={onResetSettings}
            onUpdateSetting={onUpdateSettings}
          />
        </Modal>
      </div>
    </div>
  );
};

const mapStateToProps = ({ patients, pageData, settings }) => ({
  settings,
  pageData,
  patients
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
  onFetchPatients: (url: string) => dispatch(fetchPatients(url)),
  onResetSettings: () => dispatch(resetSettings()),
  onSidebarToggle: () => dispatch(toggleSidebar()),
  onUpdateSettings: (settings) => dispatch(updateSettings(settings))
});

const ConnectedLayout: (props: OwnProps) => ReactElement = connect(
  mapStateToProps,
  mapDispatchToProps
)(BaseLayout);

export default ConnectedLayout;
