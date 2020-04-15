import React from 'react';

import { connect } from 'react-redux';

import SettingsForm from '../../layout/components/Settings/SettingsForm';

import { resetSettings, updateSettings } from '../../redux/settings/actions';
import { usePageData } from '../../Hooks/usePage';

import { IAppState } from '../../interfaces/app-state';
import { IPageData } from '../../interfaces/page';
import { IAppSettings } from '../../interfaces/settings';

const pageData: IPageData = {
  title: 'Settings',
  fullFilled: true,
  breadcrumbs: [
    {
      title: 'Home',
      route: 'dashboard',
    },
    {
      title: 'Settings',
    },
  ],
};

type DispatchProps = {
  onUpdateSettings: (settings: IAppSettings) => void;
  onResetSettings: () => void;
};

type StateProps = {
  settings: IAppSettings;
};

type Props = DispatchProps & StateProps;

const SettingsPage = ({ settings, onResetSettings, onUpdateSettings }: Props) => {
  usePageData(pageData);

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
  settings: state.settings,
});

const mapDispatchToProps = (dispatch) => ({
  onResetSettings: () => dispatch(resetSettings()),
  onUpdateSettings: (settings) => dispatch(updateSettings(settings)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
