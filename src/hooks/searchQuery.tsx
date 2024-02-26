import { graphql } from '@/gql';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

const searchQuery = () => {
  const SEARCH = graphql(`
    query SEARCH($searchString: String!) {
      textSearch(searchString: $searchString) {
        ... on UH {
          _id
          name
          partOf {
            display
          }
        }
        ... on Department {
          _id
          name
          partOf {
            display
          }
        }
        ... on Service {
          _id
          name
          partOf {
            display
          }
        }
        ... on Unit {
          _id
          name
          partOf {
            display
          }
        }
        ... on Specialty {
          _id
          name
          partOf {
            display
          }
        }
      }
    }
  `);

  const searchString = useParams();

  const { error, loading, data } = useQuery(SEARCH, {
    variables: { searchString: searchString.str ? searchString.str : '' },
  });

  const orgs = data?.textSearch || [];

  return { error, loading, orgs };
};

export default searchQuery;
