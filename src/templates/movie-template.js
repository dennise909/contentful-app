import * as React from 'react';
import Layout from '../components/layout.js'
import { graphql } from 'gatsby';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';

export const query = graphql`
  query ($slug: String){
    movies: allContentfulMoviePost(filter: {slug: {eq: $slug}}) {
        nodes {
        movieTitle
        movieDescription {
            raw
        }
        movieTrailer
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

const MovieTemplate = ({data}) => (
    <Layout>

         {data.movies.nodes.map(movie => (
          <div>
         `  <h3>{movie.movieTitle}</h3>
            {movie.movieDirector && <p>Director : <a href={movie.movieDirector.wikipedia}> {movie.movieDirector.directorName} </a></p>}
            <div>
              {movie.movieTrailer&&<iframe width="500" height="400" src={movie.movieTrailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
         `  </div>
            {movie.movieDescription && documentToReactComponents(JSON.parse(movie.movieDescription.raw))}
          </div>
        ))}

    </Layout>
)

export default MovieTemplate