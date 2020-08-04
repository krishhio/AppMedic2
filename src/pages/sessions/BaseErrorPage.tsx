import React, { ReactElement, ReactNode } from 'react';
import PublicLayout from '../../layout/Public/Public';

type Props = {
  msg: string;
  title: string;
  subTitle?: string;
  action: ReactNode;
  img?: ReactNode;
  bg: string;
};

const BaseErrorPage = ({ msg, title, action, bg, img }: Props) => (
  <PublicLayout>
    <h1>{title}</h1>
    <p>{msg}</p>

    {action}
  </PublicLayout>
);

export default BaseErrorPage;
