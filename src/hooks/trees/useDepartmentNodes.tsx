import { graphql } from '@/gql';
import { useQuery } from '@apollo/client';

const useDeptNodes = (id: string) => {
  const GET_DEPTNODES = graphql(`
    query GET_DEPTNODES($id: ObjectId!) {
      departmentById(id: $id) {
        children {
          _id
          active
          name
        }
      }
    }
  `);

  const { error, loading, data } = useQuery(GET_DEPTNODES, {
    variables: { id: id },
  });

  return { error, loading, data };
};

export default useDeptNodes;
