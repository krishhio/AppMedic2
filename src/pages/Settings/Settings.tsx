import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { IAppState } from '../../interfaces/app-state';
import { IAppSettings } from '../../interfaces/settings';
import { IPageData, PageProps } from '../../interfaces/page';

import SettingsForm from '../../layout/components/Settings/SettingsForm';

import { resetSettings, updateSettings } from '../../redux/settings/actions';

const pageData: IPageData = {
  title: 'Settings',
  fullFilled: true,
  breadcrumbs: [
    {
      title: 'Home',
      route: 'dashboard'
    },
    {
      title: 'Settings'
    }
  ]
};

type DispatchProps = {
  onUpdateSettings: (settings: IAppSettings) => void;
  onResetSettings: () => void;
};

type StateProps = {
  settings: IAppSettings;
};

type Props = DispatchProps & StateProps & PageProps;

const SettingsPage = ({ setPageData, settings, onResetSettings, onUpdateSettings }: Props) => {
  useEffect(() => setPageData(pageData), []);

  return (
    <div className='row'>
      <div className='col-md-6'>
        <SettingsForm
          onResetSettings={onResetSettings}
          onUpdateSetting={onUpdateSettings}
          settings={settings}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state: IAppState) => ({
  settings: state.settings
});

const mapDispatchToProps = dispatch => ({
  onResetSettings: () => dispatch(resetSettings()),
  onUpdateSettings: settings => dispatch(updateSettings(settings))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsPage);
