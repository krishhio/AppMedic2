import React from 'react';
import { IPageData } from '../../interfaces/page';

import { usePageData } from '../../hooks/usePage';
import { useGetDepartments } from '../../hooks/useGetDepartments';

import Department from '../../layout/components/Department/Department';

const pageData: IPageData = {
  title: 'Departments',
  fullFilled: true,
  breadcrumbs: [
    {
      title: 'Medicine',
      route: 'dashboard'
    },
    {
      title: 'Departments'
    }
  ]
};

const Departments = () => {
  const [departments] = useGetDepartments();
  usePageData(pageData);

  const depClass = (i, length) => {
    if (i === length - 1) {
      return 'mb-0';
    }

    if (i > length - 4) {
      return 'mb-md-0';
    }

    return '';
  };

  return (
    <div className='row'>
      {departments.map((dep, i) => (
        <div className='col-md-4 col-sm-12'>
          <Department
            className={`white-bg ${depClass(i, departments.length)}`}
            department={dep}
            key={i}
          />
        </div>
      ))}
    </div>
  );
};

export default Departments;
