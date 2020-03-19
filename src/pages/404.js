import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { WorkInProgress } from '../components/illustrations';

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        githubUrl
      }
    }
  }
`;
export default (props) => {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;
  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>
        Page not found
      </h1>
      <p
        css={css`
          padding-top: 20px;
          padding-bottom: 40px;
        `}
      >
        If you were expecting something to be here, please{' '}
        <a href={`${data.site.siteMetadata.githubUrl}/issues`}>file an issue</a> on
        GitHub.
      </p>
      <WorkInProgress
        css={css`
          width: 100%;
        `}
      />
    </Layout>
  );
};
