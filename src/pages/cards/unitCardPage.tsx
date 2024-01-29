import SpinnerLoader from '@/components/loaders/spinner';
import useUnit from '@/hooks/cards/useUnit';
import UnitCard from '@/components/cards/unitCard';

export default function UnitCardPage() {
  const { error, loading, data } = useUnit();

  if (loading) {
    return <SpinnerLoader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <UnitCard data={data?.unitById} />
    </div>
  );
}
