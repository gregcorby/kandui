import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';
import Modal from 'containers/modal';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h4" size="small">
        <span className="light"> 
            Deployment successfully initiated for kandui.netlify.com...<br /><br />
            Fetching cached dependencies...<br /><br />
            Starting to download cache of 191.7MB...<br /><br />
            Finished downloading cache in 967.642598ms...<br /><br />
            Starting to extract cache...<br /><br />
            Finished extracting cache in 11.153868727s...<br /><br />
            Finished fetching cache in 12.236139555s...<br /><br />
            Starting to prepare the repo for build...<br /><br />
            Preparing Git Reference refs/heads/master...<br /><br />
            Starting build script...<br /><br />
        </span>
        <strong>Installing dependencies...</strong>
      </Title>
      
    </Box>
    {/* <Gallery items={data.homeJson.gallery} /> */}
    {/* <div style={{ height: '50vh' }} /> */}
    {/* <IOExample /> */}
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
