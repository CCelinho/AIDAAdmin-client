import { Unit } from '@/gql/graphql';
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

export const columns: ColumnDef<Unit | unknown>[] = [
  {
    accessorKey: 'COD_UNIDADE',
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
    accessorKey: 'DES_UNIDADE',
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
      const unit = row.original as Unit;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Opções</DropdownMenuLabel>
            <Link to={`/Unit/${unit._id}/`}>
              <DropdownMenuItem>Ver unidade</DropdownMenuItem>
            </Link>
            <DropdownMenuItem>Ver especialidades</DropdownMenuItem>
            <DropdownMenuItem>Exportar</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
