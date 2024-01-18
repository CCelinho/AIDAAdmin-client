import UHTree from '@/components/tree';
import useUHTree from '@/hooks/useUHTree';

const treePage: React.FC = () => {
  const { error, loading, data } = useUHTree();

  if (loading) {
    return <div>Loading...</div>;
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

export default treePage;
