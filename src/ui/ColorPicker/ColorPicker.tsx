import React, { useState, forwardRef, useEffect } from 'react';
import { SketchPicker } from 'react-color';

import PickerField from './PickerField/PickerFileld';
import ColorUtils from '../../utils/ColorUtils';

export type PickerColor = {
  color: string;
  contrast: string;
};

const getContrast = (hexColor: string) => {
  if (!hexColor) {
    return null;
  }

  const [r, g, b] = ColorUtils.hexToRgb(hexColor);
  return ColorUtils.checkContrastColor(r, g, b);
};

const getColor = (hexColor: string): PickerColor => ({
  color: hexColor,
  contrast: getContrast(hexColor)
});

type Props = {
  color?: string;
  secondColor?: string;
  opened?: boolean;
  onColorChange?: (color: PickerColor) => void;
};

const ColorPicker = ({ opened: pickerOpened, color, onColorChange }: Props) => {
  const [opened, setOpened] = useState<boolean>(pickerOpened);

  const handlePickerOpen = () => setOpened(true);

  const handleColorChange = color => {
    const colorObj = getColor(color.hex);
    console.log({ colorObj, color });
    onColorChange(colorObj);
  };

  const handleClose = () => setOpened(false);

  return (
    <>
      <PickerField savedColor={color} onOpenPicker={handlePickerOpen} />

      {opened && (
        <>
          <div className='picker-cover' onClick={handleClose} />
          <SketchPicker
            onChangeComplete={handleColorChange}
            color={color}
            presetColors={[]}
            disableAlpha
          />
        </>
      )}
    </>
  );
};

export default ColorPicker;
