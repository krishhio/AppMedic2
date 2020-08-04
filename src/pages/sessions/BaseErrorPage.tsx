import React, { ReactElement, ReactNode } from 'react';
import PublicLayout from '../../layout/Public/Public';

type Props = {
  msg: string;
  title: string;
  action: ReactNode;
  img: ReactElement;
  bg: ReactElement;
};

const BaseErrorPage = ({ msg, title, action, bg, img }: Props) => (
  <PublicLayout>
    <h1>{title}</h1>
    <p>{msg}</p>

    {action}
  </PublicLayout>
);

export default BaseErrorPage;
