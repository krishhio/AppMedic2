import React, { useEffect, useRef } from 'react';
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
  const downloadLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    console.log(settings);
  }, [settings]);

  const handleReset = () => {
    onResetSettings();
  };

  const handleDownload = () => {
    const settingsJSON = JSON.stringify(settings);
    const dataStr =
      'data:text/json;charset=utf-8,' + encodeURIComponent(settingsJSON);

    downloadLink.current.setAttribute('href', dataStr);
    downloadLink.current.setAttribute('download', 'settings.json');
    downloadLink.current.click();
  };

  const setValue = (name: string, value: any) => {
    console.log({ name, value });
    onUpdateSetting({ ...settings, [name]: value });
  };

  const handleSideBgChange = ({ color }) => setValue('sidebarBg', color);
  const handleNavBgChange = ({ color }) => setValue('topbarBg', color);
  const handleLayoutChange = (type: string) => setValue('layout', type);
  const handleBoxedChange = (boxed: boolean) => setValue('boxed', boxed);

  const sidebarPickerLabel =
    layout === 'vertical' ? 'Sidebar background' : 'Second navbar background';

  return (
    <Form layout='vertical' className='settings-form'>
      <Form.Item label='Topbar background'>
        <ColorPicker
          onColorChange={handleNavBgChange}
          color={settings.topbarBg}
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
