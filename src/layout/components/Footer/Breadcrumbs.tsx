import React from 'react';

import { NavLink } from 'react-router-dom';

import { IBreadcrumb } from '../../../interfaces/page-data';

type Props = {
  breadcrumbs: IBreadcrumb[];
  layout: string;
};

const Breadcrumbs = ({ breadcrumbs, layout }: Props) => {
  const breadcrumbList = breadcrumbs.map((item: IBreadcrumb, index) => (
    <li className='item' key={index}>
      {item.route ? (
        <NavLink to={`${layout}/${item.route}`}>{item.title}</NavLink>
      ) : (
        <span>{item.title}</span>
      )}

      {index < breadcrumbs.length - 2 && (
        <i className='separator icofont-thin-right' />
      )}
    </li>
  ));

  return <ul className='page-breadcrumbs'>{breadcrumbList}</ul>;
};

export default Breadcrumbs;
