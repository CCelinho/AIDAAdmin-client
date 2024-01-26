import { useQuery } from '@apollo/client';
import { graphql } from '../../gql/gql';

const listUHs = (offset?: number, limit?: number) => {
  const GET_UHS = graphql(/* GraphQL */ `
    query GET_UHS($offset: Int, $limit: Int) {
      uhs(offset: $offset, limit: $limit) {
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
  `);

  const { error, loading, data } = useQuery(GET_UHS, {
    variables: { offset: offset, limit: limit },
  });

  const uhs = data?.uhs || [];

  return { error, loading, uhs };
};

export default listUHs;
