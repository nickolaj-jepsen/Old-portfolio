/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

const createBlog = ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/BlogPost.jsx`);
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                slug
                date(formatString: "YYYY/MM/DD")
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((post, index) => {
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;
      const blogPath = `blog/${post.node.frontmatter.side}/${
        post.node.frontmatter.slug
      }`;

      createPage({
        path: blogPath,
        component: blogPost,
        context: {
          slug: post.node.frontmatter.slug,
          previous,
          next,
        },
      });
    });
  });
};

const createResume = ({ graphql, actions }) => {
  const { createPage } = actions;

  const resumeTemplate = path.resolve(`./src/templates/Resume.jsx`);
  return graphql(
    `
      {
        allResumeYaml {
          edges {
            node {
              meta {
                slug
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }
    const resumes = result.data.allResumeYaml.edges;

    resumes.forEach(resume => {
      createPage({
        path: `resume/${resume.node.meta.slug}/`,
        component: resumeTemplate,
        context: {
          slug: resume.node.meta.slug,
        },
      });
    });
  });
};

exports.createPages = data => {
  return Promise.all([createBlog(data), createResume(data)]);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new MonacoWebpackPlugin({
        // available options are documented at https://github.com/Microsoft/monaco-editor-webpack-plugin#options
        languages: ['yaml'],
      }),
    ],
  });
};
