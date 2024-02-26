import { columns } from '../../components/table-columns/organizationColumns';
import DataTable from '@/components/ui/data-table';
import SpinnerLoader from '@/components/loaders/spinner';
import useOrgsQuery from '@/hooks/tables/listOrganizations';
import { useEffect } from 'react';

interface organizationListArgs {
  initFilter?: string;
}

export default function OrganizationList({ initFilter }: organizationListArgs) {
  const entriesPerFetch = 200;
  const { error, loading, orgs, fetchMore } = useOrgsQuery(0, 200);

  useEffect(() => {
    const fetchMoreEntries = async () => {
      if (orgs.length >= entriesPerFetch) {
        const newOffset = orgs.length;

        await fetchMore({
          variables: {
            offset: newOffset,
            limit: entriesPerFetch,
          },
        });
      }
    };
    fetchMoreEntries();
  }, [orgs, fetchMore]);

  if (loading) {
    return <SpinnerLoader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={orgs} initFilter={initFilter} />
    </div>
  );
}
