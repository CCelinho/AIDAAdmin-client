import { graphql } from '@/gql';
import { useQuery } from '@apollo/client';

const listSpecialties = (offset?: number, limit?: number) => {
  const GET_SPECIALTIES = graphql(`
    query GET_SPECIALTIES($offset: Int, $limit: Int) {
      specialties(offset: $offset, limit: $limit) {
        _id
        COD_ESTATISTICO
        DES_ESTATISTICO
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

  const { error, loading, data, fetchMore } = useQuery(GET_SPECIALTIES, {
    variables: { offset: offset, limit: limit },
  });

  const spes = data?.specialties || [];

  return { error, loading, spes, fetchMore };
};

export default listSpecialties;
