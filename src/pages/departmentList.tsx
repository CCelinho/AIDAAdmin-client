import { columns } from '../components/table-columns/departmentColumns';
import DataTable from '@/components/ui/data-table';
import listDepartments from '../hooks/listDepartments';

export default function DepartmentList() {
  const { error, loading, deps } = listDepartments(0, 100);

  if (loading) {
    return <div>Loading ...</div>;
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
