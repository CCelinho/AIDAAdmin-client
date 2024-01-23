import { Tree, TreeNode } from 'react-organizational-chart';
import { Get_UhtreeQuery } from '@/gql/graphql';
import ServiceCard from './cards/serviceCard';
import { Button } from './ui/button';
import UnitCard from './cards/unitCard';
import SpecialtyCard from './cards/specialtyCard';
import { Link } from 'react-router-dom';

interface UHTreeProps {
  data: Get_UhtreeQuery;
}

const UHTree: React.FC<UHTreeProps> = ({ data }) => {
  const deps = data.uhById.children;

  return (
    <Tree
      lineWidth="2px"
      lineColor="lightblue"
      lineBorderRadius="10px"
      label={
        <Button variant={'outline'} size={'lg'} asChild>
          <Link to={`/uh/${data.uhById._id}`}>{data.uhById.UH}</Link>
        </Button>
      }
    >
      {deps?.map((dep) => {
        return (
          <TreeNode
            label={
              <Button variant={'outline'} size={'lg'}>
                {dep?.DES_DEPARTAMENTO}
              </Button>
            }
          >
            {dep?.children && dep.children.length < 4 ? (
              dep.children.map((ser) => {
                return (
                  <TreeNode
                    label={<ServiceCard data={ser} className="max-w-56" />}
                  >
                    {ser?.children && ser.children.length < 4 ? (
                      ser?.children?.map((uni) => {
                        return (
                          <TreeNode
                            label={<UnitCard data={uni} className="max-w-56" />}
                          >
                            {uni?.children && uni.children.length < 4 ? (
                              uni?.children?.map((spe) => {
                                return (
                                  <TreeNode
                                    label={
                                      <SpecialtyCard
                                        data={spe}
                                        className="max-w-56"
                                      />
                                    }
                                  />
                                );
                              })
                            ) : (
                              <TreeNode
                                label={<Button>Too many to render</Button>}
                              />
                            )}
                          </TreeNode>
                        );
                      })
                    ) : (
                      <TreeNode label={<Button>Too many to render</Button>} />
                    )}
                  </TreeNode>
                );
              })
            ) : (
              <TreeNode label={<Button>Too many to render</Button>} />
            )}
          </TreeNode>
        );
      })}
    </Tree>
  );
};

export default UHTree;
