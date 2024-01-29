import Clip from '@/components/loaders/clip';
import SpecRootTree from '@/components/trees/roots/specialtyRoot';
import useSpecRoot from '@/hooks/trees/roots/useSpecialtyRoot';

const SpecTreePage: React.FC = () => {
  const { error, loading, data } = useSpecRoot();

  if (loading) {
    return <Clip size={150} />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data) {
    return (
      <div>
        <SpecRootTree data={data} />
      </div>
    );
  } else {
    return <div>Error fetching data .</div>;
  }
};

export default SpecTreePage;
