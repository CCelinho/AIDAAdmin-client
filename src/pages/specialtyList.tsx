import { columns } from '../components/table-columns/specialtyColumns';
import DataTable from '@/components/ui/data-table';
import listSpecialties from '../hooks/listSpecialties';
import { useEffect } from 'react';
import SpinnerLoader from '@/components/loaders/spinner';

export default function SpecialtyList() {
  const entriesPerPage = 100;
  const { error, loading, spes, fetchMore } = listSpecialties(0, 200);

  useEffect(() => {
    const fetchMoreEntries = async () => {
      if (spes.length >= entriesPerPage) {
        const newOffset = spes.length;

        await fetchMore({
          variables: {
            offset: newOffset,
            limit: entriesPerPage,
          },
        });
      }
    };
    fetchMoreEntries();
  }, [spes, fetchMore]);

  if (loading) {
    return <SpinnerLoader />;
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
