import { Department } from '@/gql/graphql';
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

export const columns: ColumnDef<Department | unknown>[] = [
  {
    accessorKey: 'COD_DEPARTAMENTO',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Código
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'DES_DEPARTAMENTO',
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
      const department = row.original as Department;

      return (
        <div>
          <Button variant={'outline'} size={'smicon'} className="mr-1" asChild>
            <Link to={`/department/${department._id}`}>
              <img src={eyeIcon} alt="O"></img>
            </Link>
          </Button>
          <Button variant={'outline'} size={'smicon'} className="mx-1">
            <Link to={`/department-tree/${department._id}`}>
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
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Opções</DropdownMenuLabel>
              <Link to={`/department/${department._id}/`}>
                <DropdownMenuItem>Ver Departamento</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
