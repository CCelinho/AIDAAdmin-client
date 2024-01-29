import { TreeNode } from 'react-organizational-chart';
import { Button } from '../../ui/button';
import { Link } from 'react-router-dom';
import Clip from '../../loaders/clip';
import useServNodes from '@/hooks/trees/nodes/useServiceNodes';
import UnitNodes from './unitNodes';

export interface ServiceNodesProps {
  id: string;
}

const ServiceNodes: React.FC<ServiceNodesProps> = ({ id }) => {
  const { loading, data } = useServNodes(id);

  if (loading) {
    return (
      <TreeNode
        label={
          <Button variant={'ghost'} size={'lg'}>
            <Clip size={50} />
          </Button>
        }
      />
    );
  }

  const unis = data?.serviceById.children;
  return (
    <TreeNode
      label={
        <Button variant={'outline'} size={'lg'}>
          <Link to={`/service/${data?.serviceById?._id}`}>
            {data?.serviceById?.name}
          </Link>
        </Button>
      }
    >
      {unis?.map((uni) => {
        return <UnitNodes id={uni?._id} />;
      })}
    </TreeNode>
  );
};

export default ServiceNodes;
