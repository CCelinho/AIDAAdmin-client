import { AnyOrg } from '@/gql/graphql';
import { ColumnDef } from '@tanstack/react-table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import treeIcon from '../../assets/tree.svg';
import exportIcon from '../../assets/export.svg';
import eyeIcon from '../../assets/eye.svg';

export const columns: ColumnDef<AnyOrg | unknown>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Designação
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'partOf.display',
    header: 'Parte de',
  },
  {
    accessorKey: 'contact.name.text',
    header: 'Responsável',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const org = row.original as AnyOrg;
      let orgString: String;

      switch (org.__typename) {
        case 'UH':
          orgString = 'uh';
          break;
        case 'Department':
          orgString = 'department';
          break;
        case 'Service':
          orgString = 'service';
          break;
        case 'Unit':
          orgString = 'unit';
          break;
        case 'Specialty':
          orgString = 'specialty';
          break;
        default:
          throw new Error(
            'switch statement error\n__typename: ' + org.__typename,
          );
      }

      return (
        <div>
          <Button variant={'outline'} size={'smicon'} className="mr-1" asChild>
            <Link to={`/${orgString}/${org._id}`}>
              <img src={eyeIcon} alt="O"></img>
            </Link>
          </Button>
          <Button variant={'outline'} size={'smicon'} className="mx-1">
            <Link to={`/${orgString}-tree/${org._id}`}>
              <img src={treeIcon} alt="O"></img>
            </Link>
          </Button>
          <Button variant={'outline'} size={'smicon'} className="mx-1">
            <img src={exportIcon} alt="O"></img>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size={'smicon'}
                className="ml-1 justify-center"
              >
                <span className="sr-only">Abrir Menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Opções</DropdownMenuLabel>
              <Link to={`/${orgString}/${org._id}/`}>
                <DropdownMenuItem>Ver Organização</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
