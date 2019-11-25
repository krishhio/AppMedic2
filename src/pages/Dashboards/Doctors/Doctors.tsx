import React, { useEffect, useState } from 'react';

import {  Modal } from 'antd';

import { IUser } from '../../../interfaces/user';
import { PageProps } from '../../../interfaces/page';
import { IPageData } from '../../../interfaces/page-data';

import Contact from '../../../layout/components/Doctor/Contact';
import className from '../../../utils/classNames';
import PageAction from '../../../layout/components/PageAction/PageAction';
import DoctorForm from './DoctorForm';

const pageData: IPageData = {
  title: 'Doctors',
  loaded: true,
  fullFilled: false,
  breadcrumbs: [
    {
      title: 'Home',
      route: 'dashboard'
    },
    {
      title: 'Doctors'
    }
  ]
};

const DoctorsPage = ({ getData, setPageData }: PageProps) => {
  const [doctors, setDoctors] = useState([]);
  const [addingDoctor, setAddingDoctor] = useState(false);

  const openModal = () => setAddingDoctor(true);
  const closeModal = () => setAddingDoctor(false);

  const addDoctor = (doctor: IUser) => setDoctors([...doctors, doctor]);

  useEffect(() => {
    getData('./data/doctors.json', setDoctors);
  }, []);

  useEffect(() => setPageData(pageData), []);

  const getClass = (index: number, length: number) =>
    className({
      'mb-0': index === length - 1,
      'mb-md-0': index === length - 2 || index === length - 3
    });

  return (
    <div className='row'>
      {doctors.map((doctor, index) => (
        <div key={index} className='col-sm-12 col-md-6 col-lg-4'>
          <Contact className={getClass(index, doctors.length)} {...doctor} />
        </div>
      ))}

      <PageAction onClick={openModal} icon='icofont-contact-add' />

      <Modal
        visible={addingDoctor}
        onCancel={closeModal}
        title={<h3 className='title'>Add doctor</h3>}
        footer={null}
      >
        <DoctorForm onSubmit={addDoctor} onCancel={closeModal} />
      </Modal>
    </div>
  );
};

export default DoctorsPage;
