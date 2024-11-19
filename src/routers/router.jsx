import Layout from '../components/layout/layout';
import React from 'react';

const Gallery = React.lazy(() => import('../pages/gallery/page'));
const App = React.lazy(() => import('../pages/app/page'));
const NotFound = React.lazy(() => import('../pages/404/page'));

const Router = () => {
  const pathname = window.location.pathname;
  let Component = null;

  switch (pathname) {
    case '/':
      Component = App;
      break;
    case '/gallery':
      Component = Gallery;
      break;
    default:
      Component = NotFound;
      break;
  }

  return (
    <Layout>
      <Component />
    </Layout>
  );
};

export default Router;
