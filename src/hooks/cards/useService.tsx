import { useQuery } from '@apollo/client';
import { graphql } from '../../gql/gql';
import { useParams } from 'react-router';

const useService = () => {
  const GET_SERVICE = graphql(/* GraphQL */ `
    query GET_SERVICE($id: ObjectId!) {
      serviceById(id: $id) {
        _id
        COD_SERVICO
        DES_SERVICO
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
  const { error, loading, data } = useQuery(GET_SERVICE, {
    variables: { id: id },
  });

  return { error, loading, data };
};

export default useService;
