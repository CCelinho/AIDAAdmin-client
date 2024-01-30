import Clip from '@/components/loaders/clip';
import UHRootTree from '@/components/trees/roots/uhRoot';
import useUHRoot from '@/hooks/trees/roots/useUHRoot';

const UHTreePage: React.FC = () => {
  const { error, loading, data } = useUHRoot();

  if (loading) {
    return <Clip size={150} />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data) {
    return (
      <div>
        <UHRootTree data={data} />
      </div>
    );
  } else {
    return <div>Error fetching data .</div>;
  }
};

export default UHTreePage;
