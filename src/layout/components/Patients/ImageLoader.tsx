import React, { ChangeEvent, useRef, useState } from 'react';

import { Avatar, Button } from 'antd';

type Props = {
  src?: string;
  size?: number;
  onLoad?: (img) => void;
};

const ImageLoader = ({ src, size = 40, onLoad }: Props) => {
  const [img, setImg] = useState<string>(null);
  const input = useRef<HTMLInputElement>(null);

  const handleClick = () => input.current.click();

  const handleLoad = (e: ChangeEvent<HTMLInputElement>) => {
    let file: File = e.target.files[0];
    let reader: FileReader = new FileReader();

    reader.onloadend = () => {
      const result = reader.result as string;
      if (onLoad) {
        onLoad(result);
      }
      setImg(result);
    };

    reader.readAsDataURL(file);
  };

  const icon = <span className='icofont icofont-ui-user ml-2' />;

  return (
    <>
      <input ref={input} onChange={handleLoad} type='file' style={{ display: 'none' }} />
      <div className='d-flex align-items-center'>
        <Avatar src={img || src} size={size} className='mr-4' />

        <Button type={'primary'} className='btn-outline' onClick={handleClick}>
          Select image {icon}
        </Button>
      </div>
    </>
  );
};

export default ImageLoader;
