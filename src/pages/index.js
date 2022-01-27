import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout.js";
import CardTemplate from "../components/card-template.js";
import { Container,Row,Col } from 'react-bootstrap';

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

export default () =>  (
    <Layout>
      <h1>Hello Movie Lovers</h1>
      <Link to="/about">About this site</Link>
      <h2>Check out my all time favorite movies!</h2>
      <Container fluid>
        <Row>
        <Col lg={4}><CardTemplate/></Col>
        </Row>
      </Container>
    </Layout>
  );

//npm run develop will add a markup
