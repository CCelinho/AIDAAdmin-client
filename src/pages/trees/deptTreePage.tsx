import Clip from '@/components/loaders/clip';
import DeptRootTree from '@/components/trees/roots/departmentRoot';
import useDeptRoot from '@/hooks/trees/roots/useDepartmentRoot';

const DeptTreePage: React.FC = () => {
  const { error, loading, data } = useDeptRoot();

  if (loading) {
    return <Clip size={150} />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data) {
    return (
      <div>
        <DeptRootTree data={data} />
      </div>
    );
  } else {
    return <div>Error fetching data .</div>;
  }
};

export default DeptTreePage;
