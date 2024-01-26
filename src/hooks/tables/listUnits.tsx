import { graphql } from '@/gql';
import { useQuery } from '@apollo/client';

const listUnits = (offset?: number, limit?: number) => {
  const GET_UNITS = graphql(`
    query GET_UNITS($offset: Int, $limit: Int) {
      units(offset: $offset, limit: $limit) {
        _id
        COD_UNIDADE
        DES_UNIDADE
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

  const { error, loading, data, fetchMore } = useQuery(GET_UNITS, {
    variables: { offset: offset, limit: limit },
  });

  const unis = data?.units || [];

  return { error, loading, unis, fetchMore };
};

export default listUnits;
