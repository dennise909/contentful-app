// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      {
        allContentfulMoviePost {
          nodes {
            slug
          }
        }
      }
    `
  );
  // Handle errors
  if (result.errors) {
    reporter.panic(`Error loading movies.`, JSON.stringify(result.errors));
    return;
  }
  // Create pages for each markdown file.
  result.data.allContentfulMoviePost.nodes.forEach((movie) => {
    actions.createPage({
      path: `/${movie.slug}/`,
      component: require.resolve("./src/templates/movie-template.js"),
      context: {
        slug: movie.slug,
      },
    });
  });
};
