import { graphql } from '@/gql';
import { useQuery } from '@apollo/client';

const useServNodes = (id: string) => {
  const GET_SERVNODES = graphql(`
    query GET_SERVNODES($id: ObjectId!) {
      serviceById(id: $id) {
        _id
        active
        name
        errorflag
        children {
          _id
        }
      }
    }
  `);

  const { error, loading, data } = useQuery(GET_SERVNODES, {
    variables: { id: id },
  });

  return { error, loading, data };
};

export default useServNodes;
