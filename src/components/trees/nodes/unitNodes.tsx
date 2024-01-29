import { TreeNode } from 'react-organizational-chart';
import { Button } from '../../ui/button';
import { Link } from 'react-router-dom';
import Clip from '../../loaders/clip';
import useUnitNodes from '@/hooks/trees/nodes/useUnitNodes';

export interface UnitNodesProps {
  id: string;
}

const UnitNodes: React.FC<UnitNodesProps> = ({ id }) => {
  const { loading, data } = useUnitNodes(id);

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

  const spes = data?.unitById.children;
  return (
    <TreeNode
      label={
        <Button variant={'outline'} size={'lg'}>
          <Link to={`/unit/${data?.unitById?._id}`}>
            {data?.unitById?.name}
          </Link>
        </Button>
      }
    >
      {spes?.map((spe) => {
        return (
          <TreeNode
            label={
              <Button
                variant={spe?.errorflag === true ? 'destructive' : 'outline'}
                size={'lg'}
              >
                <Link to={`/specialty/${spe?._id}`}>{spe?.name}</Link>
              </Button>
            }
          />
        );
      })}
    </TreeNode>
  );
};

export default UnitNodes;
