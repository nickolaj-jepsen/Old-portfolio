import React from 'react';

import Layout from '../templates/base';
import SEO from '../molecules/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>
      The site is still a work in progress, so some pages may not be finished
    </p>
  </Layout>
);

export default NotFoundPage;
