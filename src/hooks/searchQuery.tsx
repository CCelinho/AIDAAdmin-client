import { graphql } from '@/gql';
import { useQuery } from '@apollo/client';

const searchQuery = (searchString: string) => {
  const SEARCH = graphql(`
    query SEARCH($searchString: String!) {
      textSearch(searchString: $searchString) {
        uhs {
          _id
          VIG_FIM
          name
          partOf {
            display
          }
        }
        departments {
          _id
          COD_DEPARTAMENTO
          VIG_FIM
          name
          partOf {
            display
          }
        }
        services {
          _id
          COD_SERVICO
          VIG_FIM
          name
          partOf {
            display
          }
        }
        units {
          _id
          COD_UNIDADE
          VIG_FIM
          name
          partOf {
            display
          }
        }
        specialties {
          _id
          COD_ESTATISTICO
          VIG_FIM
          name
          partOf {
            display
          }
        }
      }
    }
  `);

  const { error, loading, data } = useQuery(SEARCH, {
    variables: { searchString: searchString },
  });

  return { error, loading, data };
};

export default searchQuery;
