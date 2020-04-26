import React from 'react';
import { Link, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { Email, GitHub, Insta, Twitter } from './social';
import { rhythm, scale } from '../utils/typography';

const Layout = (props) => {
  const { location, title, children } = props;
  const rootPath = `${__PATH_PREFIX__}/`;
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      avatar: file(absolutePath: { regex: "/me.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            github
            twitter
            instagram
          }
        }
      }
    }
  `);
  const { author, social } = data.site.siteMetadata;

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>
        <Link
          css={css`
            align-items: center;
            box-shadow: none;
            color: inherit;
            display: flex;
            flex-direction: row;
            margin: 0;
            text-decoration: none;
            h1,
            h3 {
              margin: 0;
            }
          `}
          to={`/`}
        >
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={author}
            style={{
              marginRight: rhythm(1 / 2),
              minWidth: 50,
              borderRadius: `100%`,
            }}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />
          {location.pathname === rootPath ? (
            <h1>{title}</h1>
          ) : (
            <h3
              style={{
                fontFamily: `Montserrat, sans-serif`,
                marginTop: 0,
              }}
            >
              {title}
            </h3>
          )}
        </Link>
        <div
          css={css`
            margin-top: ${rhythm(0.5)};
            margin-bottom: ${rhythm(1.5)};
            a {
              box-shadow: none;
              margin-right: ${rhythm(0.5)};
              text-decoration: none;
              &:last-child {
                margin-right: 0;
              }
            }
          `}
        >
          <a href={`https://twitter.com/${social.twitter}`}>
            <Twitter height={25} />
          </a>
          <a href={`https://github.com/${social.github}`}>
            <GitHub height={25} />
          </a>
          <a href={`https://instagram.com/${social.instagram}`}>
            <Insta height={25} />
          </a>
          <a href={`mailto:contact@deanmerchant.com`}>
            <Email height={25} />
          </a>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
