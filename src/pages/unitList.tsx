import { columns } from '../components/table-columns/unitColumns';
import DataTable from '@/components/ui/data-table';
import listUnits from '../hooks/listUnits';

export default function UnitList() {
  const { error, loading, unis } = listUnits();

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={unis} />
    </div>
  );
}
