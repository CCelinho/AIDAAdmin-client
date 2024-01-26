import { TreeNode } from 'react-organizational-chart';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import useDeptNodes from '@/hooks/trees/useDepartmentNodes';
import Clip from '../loaders/clip';
import ServiceNodes from './serviceNodes';

export interface DepartmentNodesProps {
  id: string;
}

const DepartmentNodes: React.FC<DepartmentNodesProps> = ({ id }) => {
  const { loading, data } = useDeptNodes(id);

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

  const sers = data?.departmentById.children;
  return sers?.map((ser) => {
    return (
      <TreeNode
        label={
          <Button variant={'outline'} size={'lg'}>
            <Link to={`/service/${ser?._id}`}>{ser?.name}</Link>
          </Button>
        }
      >
        <ServiceNodes id={ser?._id} />
      </TreeNode>
    );
  });
};

export default DepartmentNodes;
