import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';

export default function PageLayout({ children, title }) {
  return (
    <div>
      <Helmet>
        <title>{title} &mdash; FinTech</title>
      </Helmet>
      <Header />
      <div className='mt-4'>{children}</div>
    </div>
  );
}