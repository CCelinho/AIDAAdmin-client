import SpinnerLoader from '@/components/loaders/spinner';
import useDepartment from '@/hooks/cards/useDepartment';
import DepartmentCard from '@/components/cards/departmentCard';

export default function DepartmentCardPage() {
  const { error, loading, data } = useDepartment();

  if (loading) {
    return <SpinnerLoader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <DepartmentCard data={data?.departmentById} />
    </div>
  );
}
