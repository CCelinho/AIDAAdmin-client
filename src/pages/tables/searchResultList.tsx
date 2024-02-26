import { columns } from '../../components/table-columns/organizationColumns';
import DataTable from '@/components/ui/data-table';
import SpinnerLoader from '@/components/loaders/spinner';
import searchQuery from '@/hooks/searchQuery';
import { useParams } from 'react-router-dom';

export default function searchResultList() {
  const { error, loading, orgs } = searchQuery();
  const filter = useParams();

  if (loading) {
    return <SpinnerLoader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={orgs} initFilter={filter.str} />
    </div>
  );
}
