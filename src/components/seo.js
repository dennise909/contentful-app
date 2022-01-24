import * as React from 'react';
import { Helmet } from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby';

export function Seo(props){
    const metadata = useStaticQuery(graphql`
    query GetSiteMetadata {
        allSite {
          nodes {
            siteMetadata {
              description
              image
              siteUrl
              title
            }
          }
        }
      }
      
   `)

   const defaults = metadata.allSite.nodes.map(data => data.siteMetadata) // returns Metadata from Gatsby API and sets it as default 

   const title = props.title || defaults.map(content => content.title) // sets two potions for the metadata from props or default from GraphQL
   const description = props.description || defaults.map(content => content.description)
   const image = new URL (props.image || defaults.map(content => content.image))
   const url = new URL(props.path ||'/', defaults.map(content => content.siteUrl))

return(
  <Helmet> {/* is like a head tag but with its own API*/}
    <title>{title}</title>
    <meta name="description" content={description}/>
    <link rel= "canonical" href = {url}/>
    {image && <meta name='image' content={image}/>}

    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:title" content={title}/>
    <meta name="twitter:description" content={description}/>
    {image && <meta name='twitter:image' content={image}/>}

  </Helmet>
);

}