import { graphql } from '@/gql';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

const useDeptRoot = () => {
  const GET_DEPTROOT = graphql(`
    query GET_DEPTROOT($id: ObjectId!) {
      departmentById(id: $id) {
        _id
        active
        name
        errorflag
        children {
          _id
          active
          name
          errorflag
        }
      }
    }
  `);

  const { id } = useParams();

  const { error, loading, data } = useQuery(GET_DEPTROOT, {
    variables: { id: id },
  });

  return { error, loading, data };
};

export default useDeptRoot;
