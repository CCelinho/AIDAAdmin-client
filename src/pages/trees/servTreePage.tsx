import Clip from '@/components/loaders/clip';
import ServRootTree from '@/components/trees/roots/serviceRoot';
import useServRoot from '@/hooks/trees/roots/useServiceRoot';

const ServTreePage: React.FC = () => {
  const { error, loading, data } = useServRoot();

  if (loading) {
    return <Clip size={150} />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data) {
    return (
      <div>
        <ServRootTree data={data} />
      </div>
    );
  } else {
    return <div>Error fetching data .</div>;
  }
};

export default ServTreePage;
