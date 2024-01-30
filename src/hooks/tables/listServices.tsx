import { graphql } from '@/gql';
import { useQuery } from '@apollo/client';

const listServices = (offset?: number, limit?: number) => {
  const GET_SERVICES = graphql(`
    query GET_SERVICES($offset: Int, $limit: Int) {
      services(offset: $offset, limit: $limit) {
        _id
        COD_SERVICO
        DES_SERVICO
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

  const { error, loading, data } = useQuery(GET_SERVICES, {
    variables: { offset: offset, limit: limit },
  });

  const sers = data?.services || [];

  return { error, loading, sers };
};

export default listServices;
