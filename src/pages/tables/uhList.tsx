import { columns } from '../../components/table-columns/uhColumns';
import DataTable from '@/components/ui/data-table';
import listUHs from '../../hooks/tables/listUHs';
import SpinnerLoader from '@/components/loaders/spinner';

export default function UHList() {
  const { error, loading, uhs } = listUHs();

  if (loading) {
    return <SpinnerLoader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={uhs} />
    </div>
  );
}
