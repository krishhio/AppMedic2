import React from 'react';
import { Avatar, Button, Card } from 'antd';
import { FileDoneOutlined, PlusOutlined } from '@ant-design/icons/lib';

type Props = { dep: any };

const Department = ({ dep }: Props) => (
  <>
    <Card className='department'>
      <h3 className='h4 mt-0'>{dep.title}</h3>

      <div className='team d-flex align-items-center mb-4'>
        <strong className='mr-3'>Team:</strong>

        {dep.team.map((src) => (
          <Avatar src={src} />
        ))}
        <Button shape='circle' icon={<PlusOutlined />} />
      </div>

      <p>{dep.desc}</p>

      <div className='button-box pb-2'>
        <Button>
          More <FileDoneOutlined className='ml-2' />
        </Button>
      </div>
    </Card>
  </>
);

export default Department;
