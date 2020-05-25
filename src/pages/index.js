import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { graphql } from 'gatsby'

export default function Home({data}) {

  const edges = data.allContributorsJson.edges;
  return (
    <div>
      {edges.map(edge => (
        <Button variant="contained" color="primary">
          {edge.node.name}
        </Button>
      ))}
    </div>
    
  );
}

export const query = graphql`
  query ContributorsQuery {
    allContributorsJson {
      edges {
        node {
          name
          cause
          skills
          github
        }
      }
    }
  }
`
