import { columns } from '../components/table-columns/serviceColumns';
import DataTable from '@/components/ui/data-table';
import listServices from '../hooks/listServices';

export default function ServiceList() {
  const { error, loading, sers } = listServices();

  if (loading) {
    return <div>Loading ...</div>;
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
