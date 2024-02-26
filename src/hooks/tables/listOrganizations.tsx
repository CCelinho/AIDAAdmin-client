import { graphql } from '@/gql';
import { useQuery } from '@apollo/client';

const useOrgsQuery = (offset?: number, limit?: number) => {
  const GETORGS = graphql(`
    query GETORGS($offset: Int, $limit: Int) {
      orgs(offset: $offset, limit: $limit) {
        ... on UH {
          _id
          name
          partOf {
            display
          }
          contact {
            name {
              text
            }
          }
        }
        ... on Department {
          _id
          name
          partOf {
            display
          }
          contact {
            name {
              text
            }
          }
        }
        ... on Service {
          _id
          name
          partOf {
            display
          }
          contact {
            name {
              text
            }
          }
        }
        ... on Unit {
          _id
          name
          partOf {
            display
          }
          contact {
            name {
              text
            }
          }
        }
        ... on Specialty {
          _id
          name
          partOf {
            display
          }
          contact {
            name {
              text
            }
          }
        }
      }
    }
  `);

  const { error, loading, data, fetchMore } = useQuery(GETORGS, {
    variables: { offset: offset, limit: limit },
  });

  const orgs = data?.orgs || [];

  return { error, loading, orgs, fetchMore };
};

export default useOrgsQuery;
