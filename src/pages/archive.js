import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '@components';

export const Head = () => <title>Archive Disabled</title>;

const ArchivePage = () => (
  <Layout>
    <main>
      <h1 className="big-heading">Archive is currently disabled</h1>
      <p className="subtitle">Check back later for updates!</p>
    </main>
  </Layout>
);

export default ArchivePage;

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/projects/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            date
            title
            tech
            github
            external
            ios
            android
            company
          }
          html
        }
      }
    }
  }
`;
