import React, { ChangeEvent, useRef, useState } from 'react';

import { Avatar, Button } from 'antd';

type Props = {
  src?: string;
};

const ImageLoader = ({ src }: Props) => {
  const [img, setImg] = useState<string>(null);
  const input = useRef<HTMLInputElement>(null);

  const icon = <span className='icofont icofont-ui-user' />;

  const handleClick = () => input.current.click();

  const handleLoad = (e: ChangeEvent<HTMLInputElement>) => {
    let file: File = e.target.files[0];
    let reader: FileReader = new FileReader();

    reader.onloadend = () => {
      setImg(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  return (
    <>
      <input ref={input} onChange={handleLoad} type='file' style={{ display: 'none' }} />
      <div className='d-flex'>
        <Avatar src={img || src} size={40} className='mr-3' />

        <Button type={'primary'} className='btn-outline' onClick={handleClick}>
          Select image {icon}
        </Button>
      </div>
    </>
  );
};

export default ImageLoader;
