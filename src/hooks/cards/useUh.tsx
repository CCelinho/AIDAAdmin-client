import { useQuery } from '@apollo/client';
import { graphql } from '../../gql/gql';
import { useParams } from 'react-router';

const useUh = () => {
  const GET_UH = graphql(/* GraphQL */ `
    query GET_UH($id: ObjectId!) {
      uhById(id: $id) {
        _id
        name
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
  const { error, loading, data } = useQuery(GET_UH, {
    variables: { id: id },
  });

  return { error, loading, data };
};

export default useUh;
