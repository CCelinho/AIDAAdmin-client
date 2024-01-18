import { Tree, TreeNode } from 'react-organizational-chart';
import { Get_UhtreeQuery } from '@/gql/graphql';
import UhCard from './cards/uhCard';
import DepartmentCard from './cards/departmentCard';

interface UHTreeProps {
  data: Get_UhtreeQuery;
}

const UHTree: React.FC<UHTreeProps> = ({ data }) => {
  const deps = data.uhById.children;

  return (
    <Tree label={<UhCard data={data} />}>
      {deps?.map((dep) => {
        return <TreeNode label={DepartmentCard({ data: dep })}>{}</TreeNode>;
      })}
    </Tree>
  );
};

export default UHTree;
