import { columns } from '../components/table-columns/serviceColumns';
import DataTable from '@/components/ui/data-table';
import listServices from '../hooks/listServices';
import SpinnerLoader from '@/components/loaders/spinner';

export default function ServiceList() {
  const { error, loading, sers } = listServices();

  if (loading) {
    return <SpinnerLoader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={sers} />
    </div>
  );
}
