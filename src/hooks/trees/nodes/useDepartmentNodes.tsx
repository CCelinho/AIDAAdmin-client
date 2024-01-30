import { graphql } from '@/gql';
import { useQuery } from '@apollo/client';

const useDeptNodes = (id: string) => {
  const GET_DEPTNODES = graphql(`
    query GET_DEPTNODES($id: ObjectId!) {
      departmentById(id: $id) {
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

  const { error, loading, data } = useQuery(GET_DEPTNODES, {
    variables: { id: id },
  });

  return { error, loading, data };
};

export default useDeptNodes;
