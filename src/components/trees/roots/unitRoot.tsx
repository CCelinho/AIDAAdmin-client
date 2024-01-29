import { Tree, TreeNode } from 'react-organizational-chart';
import { Button } from '../../ui/button';
import { Link } from 'react-router-dom';
import { Get_UnitrootQuery } from '@/gql/graphql';

interface UnitRootTreeProps {
  data: Get_UnitrootQuery;
}

const UnitRootTree: React.FC<UnitRootTreeProps> = ({ data }) => {
  const spes = data?.unitById.children;

  return (
    <Tree
      label={
        <Button
          variant={
            data.everythingByUnit.uh?.errorflag ? 'destructive' : 'outline'
          }
          size={'lg'}
        >
          <Link to={`/uh/${data?.everythingByUnit?.uh?._id}`}>
            {data?.everythingByUnit?.uh?.name}
          </Link>
        </Button>
      }
    >
      <TreeNode
        label={
          <Button
            variant={
              data.everythingByUnit.department?.errorflag
                ? 'destructive'
                : 'outline'
            }
            size={'lg'}
          >
            <Link to={`/department/${data?.everythingByUnit?.department?._id}`}>
              {data?.everythingByUnit?.department?.name}
            </Link>
          </Button>
        }
      >
        <TreeNode
          label={
            <Button
              variant={
                data.everythingByUnit.service?.errorflag
                  ? 'destructive'
                  : 'outline'
              }
              size={'lg'}
            >
              <Link to={`/service/${data?.everythingByUnit?.service?._id}`}>
                {data?.everythingByUnit?.service?.name}
              </Link>
            </Button>
          }
        >
          <TreeNode
            label={
              <Button
                variant={data.unitById.errorflag ? 'destructive' : 'outline'}
                size={'lg'}
              >
                <Link to={`/unit/${data?.unitById._id}`}>
                  {data?.unitById.name}
                </Link>
              </Button>
            }
          >
            {spes?.map((spe) => {
              return (
                <TreeNode
                  label={
                    <Button
                      variant={spe?.errorflag ? 'destructive' : 'outline'}
                      size={'lg'}
                    >
                      <Link to={`/specialty/${spe?._id}`}>{spe?.name}</Link>
                    </Button>
                  }
                  key={spe?._id}
                />
              );
            })}
          </TreeNode>
        </TreeNode>
      </TreeNode>
    </Tree>
  );
};

export default UnitRootTree;
