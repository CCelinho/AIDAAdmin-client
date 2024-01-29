import { graphql } from '@/gql';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

const useUnitRoot = () => {
  const GET_UNITROOT = graphql(`
    query GET_UNITROOT($id: ObjectId!) {
      unitById(id: $id) {
        _id
        active
        name
        children {
          _id
          active
          name
        }
      }

      everythingByUnit(unitId: $id) {
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

  const { error, loading, data } = useQuery(GET_UNITROOT, {
    variables: { id: id },
  });

  return { error, loading, data };
};

export default useUnitRoot;
