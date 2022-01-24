import * as React from 'react';
import { Link,graphql } from 'gatsby';
import Layout from '../components/layout.js'

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

export default ({data}) => (
<Layout>
  <h1>Hello Movie Lovers</h1>
        <Link to="/about">About this site</Link>

        <h2>Check out my all time favorite movies!</h2>
            {data.movies.nodes.map(movie => (
          <div key={`movie-${movie.slug}`}>
          <h3><Link to={`/${movie.slug}`}>{movie.movieTitle}</Link></h3>
        </div>
        ))}
</Layout>)

//npm run develop will add a markup