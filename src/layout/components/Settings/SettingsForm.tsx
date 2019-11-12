import React, { useRef } from 'react';
import useForm from 'react-hook-form';
import { Form, Select, Switch, Button } from 'antd';

import ColorPicker from '../../../ui/ColorPicker/ColorPicker';

import { IAppSettings } from '../../../interfaces/settings';
import { DEFAULT_SETTINGS } from '../../../redux/settings/settings';

import './SettingsForm.scss';

type Props = {
  settings: IAppSettings;
  onResetSettings: () => void;
  onUpdateSetting: (settings: IAppSettings) => void;
  layout?: 'vertical' | 'horizontal';
};

const SettingsForm = ({
  settings,
  onResetSettings,
  onUpdateSetting,
  layout = 'vertical'
}: Props) => {
  const { handleSubmit, setValue, reset, getValues } = useForm<IAppSettings>();

  const downloadLink = useRef<HTMLAnchorElement>(null);

  const handleReset = () => {
    onResetSettings();
    reset(DEFAULT_SETTINGS);
  };

  const handleDownload = () => {
    const settingsJSON = JSON.stringify(settings);
    const dataStr =
      'data:text/json;charset=utf-8,' + encodeURIComponent(settingsJSON);

    downloadLink.current.setAttribute('href', dataStr);
    downloadLink.current.setAttribute('download', 'settings.json');
    downloadLink.current.click();
  };

  const handleSideBgChange = ({ color }) => setValue('sidebarBg', color);
  const handleNavBgChange = ({ color }) => setValue('topbarBg', color);
  const handleLayoutChange = (layout: string) => setValue('layout', layout);
  const handleBoxedChange = (boxed: boolean) => {
    console.log(getValues(), boxed);
    setValue('boxed', boxed);
    console.log(getValues());
  };

  const sidebarPickerLabel =
    layout === 'vertical' ? 'Sidebar background' : 'Second navbar background';

  return (
    <Form
      layout='vertical'
      className='settings-form'
      onChange={handleSubmit(console.log)}
    >
      <Form.Item label='Topbar background'>
        <ColorPicker
          onColorChange={handleNavBgChange}
          color={settings.sidebarBg}
        />
      </Form.Item>

      <Form.Item label={sidebarPickerLabel}>
        <ColorPicker
          onColorChange={handleSideBgChange}
          color={settings.sidebarBg}
        />
      </Form.Item>

      <Form.Item label='Layout'>
        <Select onChange={handleLayoutChange} defaultValue={settings.layout}>
          <Select.Option value={'vertical'}>Vertical</Select.Option>

          <Select.Option value={'horizontal'}>Horizontal</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label='Boxed'>
        <Switch onChange={handleBoxedChange} defaultChecked={settings.boxed} />
      </Form.Item>

      <div className='d-flex justify-content-between buttons-list settings-actions'>
        <Button type='danger' onClick={handleReset}>
          Reset to default
        </Button>

        <Button type='primary' onClick={handleDownload}>
          Download settings
        </Button>
      </div>
      <a ref={downloadLink} style={{ display: 'none' }} />
    </Form>
  );
};

export default SettingsForm;
