import { Tree } from 'react-organizational-chart';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import DepartmentNodes from './departmentNodes';
import { Get_UhrootQuery } from '@/gql/graphql';

interface UHRootTreeProps {
  data: Get_UhrootQuery;
}

const UHRootTree: React.FC<UHRootTreeProps> = ({ data }) => {
  const deps = data?.uhById.children;

  return (
    <Tree
      label={
        <Button variant={'outline'} size={'lg'}>
          <Link to={`/uh/${data?.uhById._id}`}>{data?.uhById.UH}</Link>
        </Button>
      }
    >
      {deps?.map((dep) => {
        return <DepartmentNodes id={dep?._id} />;
      })}
    </Tree>
  );
};

export default UHRootTree;