import React, { useEffect, useState } from 'react';

import { IUser } from '../../../interfaces/user';
import { PageProps, IPageData } from '../../../interfaces/page';

import className from '../../../utils/classNames';
import Contact from '../../../layout/components/Doctor/Contact';

const pageData: IPageData = {
  fullFilled: false,
  title: 'Contacts',
  breadcrumbs: [
    {
      title: 'UI Kit',
      route: 'dashboard'
    },
    {
      title: 'Components',
      route: 'dashboard'
    },
    {
      title: 'Contacts'
    }
  ]
};

const ContactsPage = ({ setPageData, getData }: PageProps) => {
  useEffect(() => setPageData(pageData), [setPageData]);

  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    getData('data/contacts.json', setUsers);
  }, []);

  const getClass = (index: number, length: number) =>
    className({
      'mb-0': index === length - 1,
      'mb-md-0': index === length - 2 || index === length - 3
    });

  return (
    <div className='row'>
      {users.map((user, index) => (
        <div key={index} className='col-sm-12 col-md-6 col-lg-4'>
          <Contact className={getClass(index, users.length)} {...user} />
        </div>
      ))}
    </div>
  );
};

export default ContactsPage;
