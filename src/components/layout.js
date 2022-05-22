import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Seo } from "../components/seo.js";
import { header, content } from "../styles/layout.module.css";
import "../styles/global.css";

export default function Layout({
  children,
  title = false,
  description = false,
  image = false,
  path = false,
}) {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allSite {
        nodes {
          siteMetadata {
            title
          }
        }
      }
    }
  `);

  const meta = data?.allSite?.nodes.map((metadata) => {
    return metadata.siteMetadata.title;
  });

  return (
    <>
      <Seo title={title} description={description} image={image} path={path} />
      <header className={header}>
        <Link to="/">{meta}</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main className={content}>{children}</main>
    </>
  );
}
