import { useQuery } from '@apollo/client';
import { graphql } from '../../gql/gql';
import { useParams } from 'react-router';

const useUnit = () => {
  const GET_UNIT = graphql(/* GraphQL */ `
    query GET_UNIT($id: ObjectId!) {
      unitById(id: $id) {
        _id
        COD_UNIDADE
        DES_UNIDADE
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

  const { error, loading, data } = useQuery(GET_UNIT, {
    variables: { id: id },
  });

  return { error, loading, data };
};

export default useUnit;
