import SpinnerLoader from '@/components/loaders/spinner';
import ServiceCard from '@/components/cards/serviceCard';
import useService from '@/hooks/cards/useService';

export default function ServiceCardPage() {
  const { error, loading, data } = useService();

  if (loading) {
    return <SpinnerLoader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <ServiceCard data={data?.serviceById} />
    </div>
  );
}
