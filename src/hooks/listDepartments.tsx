import { useQuery } from '@apollo/client';
import { graphql } from '../gql/gql';

const listDepartments = (offset?: number, limit?: number) => {
  const GET_DEPARTMENTS = graphql(/* GraphQL */ `
    query GET_DEPARTMENTS($offset: Int, $limit: Int) {
      departments(offset: $offset, limit: $limit) {
        _id
        COD_DEPARTAMENTO
        DES_DEPARTAMENTO
        active
        partOf {
          display
        }
        contact {
          name {
            text
          }
        }
        VIG_FIM
      }
    }
  `);

  const { error, loading, data } = useQuery(GET_DEPARTMENTS, {
    variables: { offset: offset, limit: limit },
  });

  const deps = data?.departments || [];

  return { error, loading, deps };
};

export default listDepartments;
