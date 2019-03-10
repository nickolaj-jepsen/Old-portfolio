import React, { lazy, Suspense, useState } from 'react';
import { graphql } from 'gatsby';
import * as PropTypes from 'prop-types';
import { PDFViewer } from '@react-pdf/renderer';
import yaml from 'js-yaml';
import styled from 'styled-components';
import Layout from './base';
import SEO from '../molecules/seo';
import Resume from '../pdf/Resume';
import Button from '../atoms/Button';

const Monaco = lazy(() => import('react-monaco-editor'));

const Container = styled.div`
  margin-top: 2em;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const PDF = styled(PDFViewer)`
  height: 80vh !important;
  width: 100%;
`;

const Btn = styled(Button)`
  margin: 2em;
  height: 5em;
`;

const ResumePage = ({ data }) => {
  if (typeof window === 'undefined') return <span>loading...</span>;

  const [pdfData, setPdfData] = useState(data.allResumeYaml.edges[0].node);
  const [temp, setTemp] = useState(yaml.safeDump(pdfData));
  if (typeof window !== `undefined`) {
    return (
      <>
        <Layout>
          <SEO title="Resume" keywords={['resume', 'cv']} />
          <h1>Resume page</h1>
          <p>
            {`Looks like you found my super secret resume generator, here you can
            modify the data associated with resumes, and generate customized
            resumes`}
          </p>
          <Container>
            <Suspense fallback={<span>loading...</span>}>
              <Monaco
                defaultValue={yaml.safeDump(pdfData)}
                width="100%"
                height="80vh"
                language="yaml"
                theme="vs-dark"
                onChange={x => setTemp(x)}
                options={{
                  selectOnLineNumbers: true,
                  roundedSelection: false,
                  readOnly: false,
                  cursorStyle: 'line',
                  automaticLayout: true,
                }}
              />
            </Suspense>
            <Btn onClick={() => setPdfData(yaml.safeLoad(temp))}>Preview</Btn>
            <PDF>
              <Resume data={pdfData} />
            </PDF>
          </Container>
        </Layout>
      </>
    );
  }
  return <span>waiting for ssr</span>;
};

ResumePage.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    allResumeYaml: PropTypes.object.isRequired,
  }).isRequired,
};

export const pageQuery = graphql`
  query ResumeBySlug($slug: String!) {
    allResumeYaml(filter: { meta: { slug: { eq: $slug } } }) {
      edges {
        node {
          meta {
            slug
          }
          personal {
            name
            role
            address
            phone
            email
            homepage
            github
            linkedin
            about
          }
          education {
            name
            education
            location
            graduated
            date {
              from
              to
            }
          }
          experience {
            name
            role
            location
            highlights
            date {
              from
              to
            }
          }
          projects {
            name
            role
            client
            link
            highlights
          }
          references {
            name
            company
            role
            email
            phone
          }
          skills {
            programming_languages
            frameworks
            tools
          }
          i18n {
            personal
            education
            experience
            skills
            frameworks
            tools
            reference
            programming_languages
            project
            about
            not_graduated
          }
        }
      }
    }
  }
`;

export default ResumePage;
