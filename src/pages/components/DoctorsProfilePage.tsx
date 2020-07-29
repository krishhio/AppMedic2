import React, { useState } from 'react';

import { useFormik } from 'formik';

import { Avatar, Button, Card, Form, Input, Select, Timeline } from 'antd';
import {
  DeleteOutlined,
  ExperimentOutlined,
  MonitorOutlined,
  PlusOutlined,
  UserAddOutlined,
  UserOutlined,
  MedicineBoxOutlined,
  CalendarOutlined
} from '@ant-design/icons/lib';

import { IPageData } from '../../interfaces/page';

import { usePageData } from '../../hooks/usePage';
import { useGetDoctor } from '../../hooks/useGetDoctor';

import { IUser, IUserLink } from '../../interfaces/user';

const pageData: IPageData = {
  title: 'Doctor profile page',
  fullFilled: true,
  breadcrumbs: [
    {
      title: 'Medicine',
      route: 'dashboard'
    },
    {
      title: 'Doctors',
      route: 'dashboard'
    },
    {
      title: 'Dr.Sophie'
    }
  ]
};

const FormItem = Form.Item;
const Option = Select.Option;

type SocialsProps = { links?: IUserLink[] };
type DoctorFormProps = { doctor: Partial<IUser> };
type DoctorAvatarProps = { img: string; onChange?: () => void };

const DoctorAvatar = ({ img, onChange }: DoctorAvatarProps) => (
  <div className='d-flex align-items-center'>
    <Avatar src={img as string} size={100} className='mr-5' />

    <Button onClick={onChange} icon={<UserOutlined />} type='primary'>
      Change photo
    </Button>
  </div>
);

const DoctorForm = ({ doctor }: DoctorFormProps) => {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: { ...doctor },
    onSubmit: (values) => console.log(values)
  });

  return (
    <Form layout='vertical'>
      <FormItem label='First Name'>
        <Input defaultValue={values.name} placeholder='First Name' />
      </FormItem>

      <FormItem label='Last Name'>
        <Input defaultValue={values.lastName} placeholder='Last Name' />
      </FormItem>

      <div className='row'>
        <div className='col-md-6 col-sm-12'>
          <FormItem label='Speciality'>
            <Input defaultValue={values.role} placeholder='Speciality' />
          </FormItem>
        </div>
        <div className='col-md-6 col-sm-12'>
          <FormItem label='Gender'>
            <Select defaultValue={values.gender} placeholder='Gender'>
              <Option value='male'>Male</Option>
              <Option value='female'>Female</Option>
            </Select>
          </FormItem>
        </div>
      </div>

      <FormItem label='Address'>
        <Input.TextArea rows={4} defaultValue={values.address} placeholder='Address' />
      </FormItem>
    </Form>
  );
};

const Socials = ({ links }: SocialsProps) => {
  const [networks, setNetworks] = useState(links);

  const addNetwork = (link: IUserLink) => setNetworks([...networks, link]);

  const removeNetwork = (index) => {
    const predicate = (_, _index) => _index !== index;
    const filteredNetworks = networks.filter(predicate);

    setNetworks(filteredNetworks);
  };

  const NetworkLayout = ({ iconInput, linkInput, actionBtn = null }) => (
    <div className='row'>
      <div className='col'>
        <div className='row'>
          <div className='col-md-6 col-sm-12'>{iconInput}</div>

          <div className='col-md-6 col-sm-12'>{linkInput}</div>
        </div>
      </div>

      <div className='col-auto'>{actionBtn}</div>
    </div>
  );

  const SocialLink = ({ link, icon }: IUserLink, index, { length }) => {
    const buttonStyle = { background: 'white', border: 'none' };

    return (
      <NetworkLayout
        key={index}
        linkInput={<Input readOnly value={link} />}
        iconInput={<Input prefix={<span className={`icofont ${link}`} />} readOnly value={icon} />}
        actionBtn={
          <Button
            shape='circle'
            style={buttonStyle}
            onClick={() => removeNetwork(index)}
            icon={<DeleteOutlined className='icon-error' />}
          />
        }
      />
    );
  };

  const AddLink = () => {
    const buttonStyle = { background: 'white', border: 'none' };

    return (
      <NetworkLayout
        iconInput={<Input placeholder='Icon class' />}
        linkInput={<Input placeholder='Link' />}
        actionBtn={
          <Button
            shape='circle'
            style={buttonStyle}
            icon={<PlusOutlined className='icon-blue' />}
          />
        }
      />
    );
  };

  return (
    <>
      {networks.length ? (
        <div className='stack'>
          <h5>Social networks</h5>
          {networks.map(SocialLink)}
        </div>
      ) : null}

      <h5>Add social network</h5>
      <AddLink />
    </>
  );
};

const DocTimeline = () => (
  <Timeline mode='right'>
    <Timeline.Item
      dot={
        <div className='p-2 bg-color-indigo rounded-full'>
          <UserOutlined className='text-contrast-500' />
        </div>
      }
    >
      <div className='d-flex flex-column'>
        <h4 className='m-0'>New prescription</h4>
        <span className='text-base text-color-100'>Now</span>
        <span className='text-base'>
          Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula
          ut id elit.
        </span>
      </div>
    </Timeline.Item>

    <Timeline.Item
      dot={
        <div className='p-2 bg-color-pink rounded-full'>
          <CalendarOutlined className='text-contrast-500' />
        </div>
      }
    >
      <div className='d-flex flex-column'>
        <h4 className='m-0'>Appointment</h4>
        <span className='text-base text-color-100'>2m ago</span>
        <span className='text-base'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nam nisi veniam.
        </span>
      </div>
    </Timeline.Item>

    <Timeline.Item
      dot={
        <div className='p-2 bg-color-red rounded-full'>
          <MedicineBoxOutlined className='text-contrast-500' />
        </div>
      }
    >
      <div className='d-flex flex-column'>
        <h4 className='m-0'>Medication</h4>
        <span className='text-base text-color-100'>2h ago</span>
        <span className='text-base'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nam nisi veniam.
        </span>
      </div>
    </Timeline.Item>

    <Timeline.Item
      dot={
        <div className='p-2 bg-color-success rounded-full'>
          <ExperimentOutlined className='text-contrast-500' />
        </div>
      }
    >
      <div className='d-flex flex-column'>
        <h4 className='m-0'>Operation</h4>
        <span className='text-base text-color-100'>15h ago</span>
        <span className='text-base'>
          Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula
          ut id elit.
        </span>
      </div>
    </Timeline.Item>

    <Timeline.Item
      dot={
        <div className='p-2 bg-color-yellow rounded-full'>
          <UserAddOutlined className='text-contrast-500' />
        </div>
      }
    >
      <div className='d-flex flex-column'>
        <h4 className='m-0'>New patient</h4>
        <span className='text-base text-color-100'>Jul 10</span>
        <span className='text-base'>Lorem ipsum dolor sit.</span>
      </div>
    </Timeline.Item>

    <Timeline.Item
      dot={
        <div className='p-2 bg-color-orange rounded-full'>
          <MonitorOutlined className='text-contrast-500' />
        </div>
      }
    >
      <div className='d-flex flex-column'>
        <h4 className='m-0'>Examination</h4>
        <span className='text-base text-color-100'>Jul 1</span>
        <span className='text-base'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nam nisi veniam.
        </span>
      </div>
    </Timeline.Item>
  </Timeline>
);

const DoctorProfilePage = () => {
  const { doctor } = useGetDoctor('Dr. Sophie');
  usePageData(pageData);

  return (
    doctor && (
      <>
        <div className='row'>
          <div className='col-md-6 col-sm-12'>
            <div className='header'>
              <Card title={<h5>Photo</h5>}>
                <DoctorAvatar img={doctor.img} />
              </Card>
            </div>

            <div className='info'>{doctor && <DoctorForm doctor={doctor} />}</div>

            <div className='social-networks stack'>
              <Socials links={doctor.social} />

              <Button type='primary' style={{ width: '100%' }}>
                Save changes
              </Button>
            </div>
          </div>

          <div className='col-md-6 col-sm-12'>
            <Card>
              <DocTimeline />
            </Card>
          </div>
        </div>

        <div className='patients-graph'></div>
      </>
    )
  );
};

export default DoctorProfilePage;
