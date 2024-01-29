import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Department } from '@/gql/graphql';
import { cn } from '@/lib/utils';

interface DepartmentCardProps {
  data: Department | undefined | null;
  className?: string;
}

export default function DepartmentCard({
  data,
  className,
  ...props
}: React.PropsWithChildren<DepartmentCardProps>) {
  console.log(data);
  return (
    <Card
      className={
        data?.errorflag
          ? cn('container bg-red-400', className)
          : cn('container', className)
      }
      {...props}
    >
      <CardHeader>
        <CardTitle>
          {data?.COD_DEPARTAMENTO} - {data?.DES_DEPARTAMENTO}
        </CardTitle>
        <CardDescription>{data?.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <p>
            Pertence a: {data?.partOf?.display} <br />
            {data?.active
              ? 'Ativo até: ' + (data.VIG_FIM as Date).toString()
              : 'Inativo'}
            <br />
            Responsável: {data?.contact?.name?.text} <br />
            Contacto: {} <br />
            ErrorFlag: {data?.errorflag}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
