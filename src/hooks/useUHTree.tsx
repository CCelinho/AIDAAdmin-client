import { graphql } from '@/gql';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

const useUHTree = () => {
  const GET_UHTREE = graphql(`
    query GET_UHTREE($id: ObjectId!) {
      uhById(id: $id) {
        _id
        UH
        partOf {
          display
        }
        active
        description
        contact {
          name {
            text
          }
          telecom {
            value
            system
          }
        }
        VIG_FIM
        children {
          _id
          COD_DEPARTAMENTO
          DES_DEPARTAMENTO
          partOf {
            display
          }
          active
          description
          contact {
            name {
              text
            }
            telecom {
              value
              system
            }
          }
          VIG_FIM
          children {
            _id
            COD_SERVICO
            DES_SERVICO
            partOf {
              display
            }
            active
            description
            contact {
              name {
                text
              }
              telecom {
                value
                system
              }
            }
            VIG_FIM
            children {
              _id
              COD_UNIDADE
              DES_UNIDADE
              partOf {
                display
              }
              active
              description
              contact {
                name {
                  text
                }
                telecom {
                  value
                  system
                }
              }
              VIG_FIM
              children {
                _id
                COD_ESTATISTICO
                DES_ESTATISTICO
                partOf {
                  display
                }
                active
                description
                contact {
                  name {
                    text
                  }
                  telecom {
                    value
                    system
                  }
                }
                VIG_FIM
              }
            }
          }
        }
      }
    }
  `);

  const { id } = useParams();

  const { error, loading, data } = useQuery(GET_UHTREE, {
    variables: { id: id },
  });

  return { error, loading, data };
};

export default useUHTree;
