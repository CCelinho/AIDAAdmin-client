import UhCard from '@/components/cards/uhCard';
import SpinnerLoader from '@/components/loaders/spinner';
import useUh from '@/hooks/cards/useUh';

export default function UhCardPage() {
  const { error, loading, data } = useUh();

  if (loading) {
    return <SpinnerLoader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <UhCard data={data?.uhById} />
    </div>
  );
}
