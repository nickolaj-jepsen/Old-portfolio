import React from 'react';
import { graphql, Link } from 'gatsby';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';
import Layout from './base';
import SEO from '../molecules/seo';

const Header = styled.h1`
  margin-top: 1rem;
`;

const BlogContent = styled.div`
  max-width: 40em;
`;

const BackLink = styled(Link)`
  font-size: 0.8rem;
  margin-top: 2rem;
`;

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const { title } = data.markdownRemark.frontmatter;
  const { previous, next } = pageContext;

  return (
    <>
      <Layout>
        <br />
        <BackLink to="/blog">&lt; Go back to blog list</BackLink>
        <SEO title="Blog" keywords={['blog']} />
        <Header>{title}</Header>
        <BlogContent dangerouslySetInnerHTML={{ __html: post.html }} />
        <BackLink to="/blog">&lt; Go back to blog list</BackLink>
      </Layout>
    </>
  );
};

BlogPost.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    next: PropTypes.object,
    prev: PropTypes.object,
  }),
  data: PropTypes.shape({
    markdownRemark: PropTypes.object.isRequired,
  }).isRequired,
};

BlogPost.defaultProps = {
  pageContext: PropTypes.shape({
    next: null,
    prev: null,
  }),
};

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

export default BlogPost;
