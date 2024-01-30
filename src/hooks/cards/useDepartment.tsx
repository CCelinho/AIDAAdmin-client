import { useQuery } from '@apollo/client';
import { graphql } from '../../gql/gql';
import { useParams } from 'react-router';

const useDepartment = () => {
  const GET_DEPARTMENT = graphql(/* GraphQL */ `
    query GET_DEPARTMENT($id: ObjectId!) {
      departmentById(id: $id) {
        _id
        COD_DEPARTAMENTO
        DES_DEPARTAMENTO
        partOf {
          display
        }
        active
        description
        contact {
          name {
            text
          }
          telecom {
            value
            system
          }
        }
        VIG_FIM
        errorflag
      }
    }
  `);

  const { id } = useParams();
  const { error, loading, data } = useQuery(GET_DEPARTMENT, {
    variables: { id: id },
  });

  return { error, loading, data };
};

export default useDepartment;
