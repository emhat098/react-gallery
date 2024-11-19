import App from '../pages/app/page';
import Layout from '../components/layout/layout';
import Gallery from '../pages/gallery/page';
import NotFound from '../pages/404/page';

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
