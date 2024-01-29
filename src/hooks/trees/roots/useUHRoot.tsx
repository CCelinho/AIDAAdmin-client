import { graphql } from '@/gql';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

const useUHRoot = () => {
  const GET_UHROOT = graphql(`
    query GET_UHROOT($id: ObjectId!) {
      uhById(id: $id) {
        _id
        active
        UH
        children {
          _id
          active
          name
        }
      }
    }
  `);

  const { id } = useParams();

  const { error, loading, data } = useQuery(GET_UHROOT, {
    variables: { id: id },
  });

  return { error, loading, data };
};

export default useUHRoot;
