import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout.js";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { container } from "../styles/movie-template.module.css";

export const query = graphql`
  query ($slug: String) {
    movies: allContentfulMoviePost(filter: { slug: { eq: $slug } }) {
      nodes {
        movieTitle
        movieDescription {
          raw
        }
        movieTrailer
        movieImage {
          gatsbyImageData(height: 400, width: 300)
        }
        seo {
          description {
            description
          }
          childrenContentfulSeoDescriptionTextNode {
            description
          }
        }
        movieDirector {
          directorName
          wikipedia
        }
      }
    }
  }
`;

const MovieTemplate = ({ data }) => {
  return (
    <Layout>
      {data.movies.nodes.map((movie) => (
        <div className={container}>
          <div>
            {movie.movieTrailer && (
              <iframe
                width="500"
                height="400"
                src={movie.movieTrailer}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="true"
              ></iframe>
            )}{" "}
            <GatsbyImage image={getImage(movie.movieImage)} />
          </div>
          <h3>{movie.movieTitle}</h3>
          {movie.movieDirector && (
            <p>
              Director :{" "}
              <a href={movie.movieDirector.wikipedia}>
                {" "}
                {movie.movieDirector.directorName}{" "}
              </a>
            </p>
          )}
          {movie.movieDescription &&
            documentToReactComponents(JSON.parse(movie.movieDescription.raw))}
        </div>
      ))}
    </Layout>
  );
};

export default MovieTemplate;
