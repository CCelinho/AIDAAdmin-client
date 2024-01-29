import { graphql } from '@/gql';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

const useSpecRoot = () => {
  const GET_SPECROOT = graphql(`
    query GET_SPECROOT($specId: ObjectId!) {
      everythingBySpec(specId: $specId) {
        specialty {
          _id
          active
          name
        }
        unit {
          _id
          active
          name
        }
        service {
          _id
          active
          name
        }
        department {
          _id
          active
          name
        }
        uh {
          _id
          active
          name
        }
      }
    }
  `);

  const { id } = useParams();

  const { error, loading, data } = useQuery(GET_SPECROOT, {
    variables: { specId: id },
  });

  return { error, loading, data };
};

export default useSpecRoot;
