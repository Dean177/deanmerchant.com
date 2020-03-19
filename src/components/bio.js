import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GitHub, Twitter } from './social';
import { rhythm } from '../utils/typography';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {  
      site {
        siteMetadata {
          author
          social {
            github
            twitter
          }
        }
      }
    }
  `);
  const { author, social } = data.site.siteMetadata;
  return (
    <div
      style={{
        display: `flex`,
        flexDirection: 'row',
        marginBottom: rhythm(2.5),
      }}
    >     
      <div
        style={{
          display: `flex`,
          flexDirection: 'column',
        }}
      >
        <div>
          Written by <strong>{author}</strong>.{` `}
        </div>
        <div>
          <a href={`https://twitter.com/${social.twitter}`}>
            <Twitter fill="blue" height={25} />
          </a>
          <a href={`https://github.com/${social.twitter}`}>
            <GitHub height={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Bio;
