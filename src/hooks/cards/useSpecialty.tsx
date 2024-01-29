import { useQuery } from '@apollo/client';
import { graphql } from '../../gql/gql';
import { useParams } from 'react-router';

const useSpecialty = () => {
  const GET_SPECIALTY = graphql(/* GraphQL */ `
    query GET_SPECIALTY($id: ObjectId!) {
      specialtyById(id: $id) {
        _id
        COD_ESTATISTICO
        DES_ESTATISTICO
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
  const { error, loading, data } = useQuery(GET_SPECIALTY, {
    variables: { id: id },
  });

  return { error, loading, data };
};

export default useSpecialty;
