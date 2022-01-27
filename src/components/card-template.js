import * as React from 'react';
import { graphql,useStaticQuery,Link } from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import { AssetCard } from '@contentful/f36-components';

export default function CardTemplate({
  children,
  title = false,
  description = false,
  image = false,
  path = false,
}) {
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
const movieSrc = data.movies.nodes
console.log(movieSrc)



return(
  <>
  {data.movies.nodes.map((movie) =>{  
    //console.log(movie.movieImage?.file.url)
    if (movie.movieImage === null){
      return null
    }
    return (
      <Link to={`/${movie.slug}`}> 
      <AssetCard
      type="image"
      title={movie.movieTitle}
      src={movie.movieImage.file.url} /*Here I would like to inject the image fro the GraphQL*/
    />
    </Link>
)}
)}
  </>
)
}