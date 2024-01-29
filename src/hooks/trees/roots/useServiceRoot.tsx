import { graphql } from '@/gql';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

const useServRoot = () => {
  const GET_SERVROOT = graphql(`
    query GET_SERVROOT($id: ObjectId!) {
      serviceById(id: $id) {
        _id
        active
        name
        children {
          _id
          active
          name
        }
      }

      everythingByServ(servId: $id) {
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

  const { error, loading, data } = useQuery(GET_SERVROOT, {
    variables: { id: id },
  });

  return { error, loading, data };
};

export default useServRoot;
