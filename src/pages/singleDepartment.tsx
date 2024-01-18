import DepartmentCard from '@/components/cards/unitCard';
import useDepartment from '@/hooks/useDepartment';

export default function SingleDepartment() {
  const { error, loading, data } = useDepartment();

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <DepartmentCard data={data} className="w-64" />
    </div>
  );
}
