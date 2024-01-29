import Clip from '@/components/loaders/clip';
import UnitRootTree from '@/components/trees/roots/unitRoot';
import useUnitRoot from '@/hooks/trees/roots/useUnitRoot';

const UnitTreePage: React.FC = () => {
  const { error, loading, data } = useUnitRoot();

  if (loading) {
    return <Clip size={150} />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data) {
    return (
      <div>
        <UnitRootTree data={data} />
      </div>
    );
  } else {
    return <div>Error fetching data .</div>;
  }
};

export default UnitTreePage;
