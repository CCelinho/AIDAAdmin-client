import SpinnerLoader from '@/components/loaders/spinner';
import { columns } from '../components/table-columns/unitColumns';
import DataTable from '@/components/ui/data-table';
import listUnits from '@/hooks/tables/listUnits';

export default function UnitList() {
  const { error, loading, unis } = listUnits();

  if (loading) {
    return <SpinnerLoader />;
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
