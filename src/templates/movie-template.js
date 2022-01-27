import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout.js';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';


export const query = graphql`
  query ($slug: String){
    movies: allContentfulMoviePost(filter: {slug: {eq: $slug}}) {
        nodes {
        movieTitle
        movieDescription {
            raw
        }
        movieTrailer
        movieImage {
            gatsbyImageData
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

const MovieTemplate = ({data}) => {

return (
    <Layout>

         {data.movies.nodes.map(movie => (
          <div>
         `  <h3>{movie.movieTitle}</h3>
            {movie.movieDirector && <p>Director : <a href={movie.movieDirector.wikipedia}> {movie.movieDirector.directorName} </a></p>}
            <div>
              {movie.movieTrailer&&<iframe width="500" height="400" src={movie.movieTrailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
         `  </div>
            {movie.movieDescription && documentToReactComponents(JSON.parse(movie.movieDescription.raw))}
            <GatsbyImage
            image= {(getImage(movie.movieImage))}

            
            />
          </div>
        ))}

    </Layout>
)}

export default MovieTemplate