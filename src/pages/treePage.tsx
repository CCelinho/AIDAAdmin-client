import Clip from '@/components/loaders/clip';
import UHTree from '@/components/tree';
import useUHTree from '@/hooks/useUHTree';

const TreePage: React.FC = () => {
  const { error, loading, data } = useUHTree();

  if (loading) {
    return <Clip />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data) {
    return (
      <div>
        <UHTree data={data} />
      </div>
    );
  } else {
    return <div>Error fetching data .</div>;
  }
};

export default TreePage;
