import SpinnerLoader from '@/components/loaders/spinner';
import SpecialtyCard from '@/components/cards/specialtyCard';
import useSpecialty from '@/hooks/cards/useSpecialty';

export default function SpecialtyCardPage() {
  const { error, loading, data } = useSpecialty();

  if (loading) {
    return <SpinnerLoader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <SpecialtyCard data={data?.specialtyById} />
    </div>
  );
}
