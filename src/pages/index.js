import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout.js";
import CardTemplate from "../components/card-template.js";
import { Grid } from "@contentful/f36-components";

export const query = graphql`
  {
    movies: allContentfulMoviePost {
      nodes {
        movieTitle
        slug
        movieDirector {
          directorName
        }
      }
    }
  }
`;

const IndexPage = () => (
  <Layout>
    <h1>Hello Movie Lovers</h1>
    <Link to="/about">About this site</Link>
    <h2>Check out my all time favorite movies!</h2>

    <Grid
      style={{ width: "100%" }}
      columns="1fr 1fr 1fr"
      rows="1fr"
      rowGap="spacingM"
      columnGap="spacingM"
    >
      <CardTemplate />
    </Grid>
  </Layout>
);

export default IndexPage;
//npm run develop will add a markup
