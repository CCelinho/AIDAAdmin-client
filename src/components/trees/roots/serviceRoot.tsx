import { Tree, TreeNode } from 'react-organizational-chart';
import { Button } from '../../ui/button';
import { Link } from 'react-router-dom';
import { Get_ServrootQuery } from '@/gql/graphql';
import UnitNodes from '../nodes/unitNodes';

interface ServRootTreeProps {
  data: Get_ServrootQuery;
}

const ServRootTree: React.FC<ServRootTreeProps> = ({ data }) => {
  const unis = data?.serviceById.children;

  return (
    <Tree
      label={
        <Button variant={'outline'} size={'lg'}>
          <Link to={`/uh/${data?.everythingByServ.uh?._id}`}>
            {data?.everythingByServ.uh?.name}
          </Link>
        </Button>
      }
    >
      <TreeNode
        label={
          <Button variant={'outline'} size={'lg'}>
            <Link to={`/department/${data?.everythingByServ.department?._id}`}>
              {data?.everythingByServ.department?.name}
            </Link>
          </Button>
        }
      >
        <TreeNode
          label={
            <Button variant={'outline'} size={'lg'}>
              <Link to={`/service/${data?.serviceById._id}`}>
                {data?.serviceById.name}
              </Link>
            </Button>
          }
        >
          {unis?.map((uni) => {
            return <UnitNodes id={uni?._id} />;
          })}
        </TreeNode>
      </TreeNode>
    </Tree>
  );
};

export default ServRootTree;
