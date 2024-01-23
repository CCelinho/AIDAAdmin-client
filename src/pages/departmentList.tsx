import { columns } from '../components/table-columns/departmentColumns';
import DataTable from '@/components/ui/data-table';
import listDepartments from '../hooks/listDepartments';
import SpinnerLoader from '@/components/loaders/spinner';

export default function DepartmentList() {
  const { error, loading, deps } = listDepartments(0, 100);

  if (loading) {
    return <SpinnerLoader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={deps} />
    </div>
  );
}
