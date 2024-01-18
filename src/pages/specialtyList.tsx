import { columns } from '../components/table-columns/specialtyColumns';
import DataTable from '@/components/ui/data-table';
import listSpecialties from '../hooks/listSpecialties';

export default function SpecialtyList() {
  const { error, loading, spes } = listSpecialties();

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={spes} />
    </div>
  );
}
