import { graphql } from '@/gql';
import { useQuery } from '@apollo/client';

const useUnitNodes = (id: string) => {
  const GET_UNITNODES = graphql(`
    query GET_UNITNODES($id: ObjectId!) {
      unitById(id: $id) {
        children {
          _id
          active
          name
        }
      }
    }
  `);

  const { error, loading, data } = useQuery(GET_UNITNODES, {
    variables: { id: id },
  });

  return { error, loading, data };
};

export default useUnitNodes;
