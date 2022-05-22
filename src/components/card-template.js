import * as React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { AssetCard } from "@contentful/f36-components";
import { Col } from "react-bootstrap";

export default function CardTemplate() {
  const data = useStaticQuery(graphql`
    {
      movies: allContentfulMoviePost {
        nodes {
          slug
          movieImage {
            description
            file {
              url
            }
          }
          movieTitle
          id
        }
      }
    }
  `);

  //const movieImage = getImage(movieData)
  const movieSrc = data.movies.nodes;

  return (
    <>
      {data.movies.nodes.map((movie) => {
        //return null when the data is empty
        if (movie.movieImage === null) {
          return null;
        }
        return (
          <Link to={`/${movie.slug}`}>
            <AssetCard //creates a card by using a Forma36 component
              type="image"
              title={movie.movieTitle}
              src={
                movie.movieImage.file.url
              } /*Here I would like to inject the image from the GraphQL*/
              size="default"
            />
          </Link>
        );
      })}
    </>
  );
}
