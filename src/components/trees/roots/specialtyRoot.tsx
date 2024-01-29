import { Tree, TreeNode } from 'react-organizational-chart';
import { Button } from '../../ui/button';
import { Link } from 'react-router-dom';
import { Get_SpecrootQuery } from '@/gql/graphql';

interface SpecRootTreeProps {
  data: Get_SpecrootQuery;
}

const SpecRootTree: React.FC<SpecRootTreeProps> = ({ data }) => {
  return (
    <Tree
      label={
        <Button variant={'outline'} size={'lg'}>
          <Link to={`/uh/${data?.everythingBySpec?.uh?._id}`}>
            {data?.everythingBySpec?.uh?.name}
          </Link>
        </Button>
      }
    >
      <TreeNode
        label={
          <Button variant={'outline'} size={'lg'}>
            <Link to={`/department/${data?.everythingBySpec?.department?._id}`}>
              {data?.everythingBySpec?.department?.name}
            </Link>
          </Button>
        }
      >
        <TreeNode
          label={
            <Button variant={'outline'} size={'lg'}>
              <Link to={`/service/${data?.everythingBySpec?.service?._id}`}>
                {data?.everythingBySpec?.service?.name}
              </Link>
            </Button>
          }
        >
          <TreeNode
            label={
              <Button variant={'outline'} size={'lg'}>
                <Link to={`/unit/${data?.everythingBySpec?.unit?._id}`}>
                  {data?.everythingBySpec?.unit?.name}
                </Link>
              </Button>
            }
          >
            <TreeNode
              label={
                <Button variant={'outline'} size={'lg'}>
                  <Link
                    to={`/specialty/${data?.everythingBySpec?.specialty?._id}`}
                  >
                    {data?.everythingBySpec?.specialty?.name}
                  </Link>
                </Button>
              }
            ></TreeNode>
          </TreeNode>
        </TreeNode>
      </TreeNode>
    </Tree>
  );
};

export default SpecRootTree;
