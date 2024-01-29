import { Tree } from 'react-organizational-chart';
import { Button } from '../../ui/button';
import { Link } from 'react-router-dom';
import { Get_DeptrootQuery } from '@/gql/graphql';
import ServiceNodes from '../nodes/serviceNodes';

interface DeptRootTreeProps {
  data: Get_DeptrootQuery;
}

const DeptRootTree: React.FC<DeptRootTreeProps> = ({ data }) => {
  const sers = data?.departmentById.children;

  return (
    <Tree
      label={
        <Button variant={'outline'} size={'lg'}>
          <Link to={`/department/${data?.departmentById._id}`}>
            {data?.departmentById.name}
          </Link>
        </Button>
      }
    >
      {sers?.map((ser) => {
        return <ServiceNodes id={ser?._id} />;
      })}
    </Tree>
  );
};

export default DeptRootTree;
