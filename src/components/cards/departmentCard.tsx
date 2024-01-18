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
  return (
    <Card className={cn('w-64', className)} {...props}>
      <CardHeader>
        <CardTitle>{data?.DES_DEPARTAMENTO}</CardTitle>
        <CardDescription>{data?.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Código: {data?.COD_DEPARTAMENTO}</p>
        <p>
          {data?.active
            ? 'Ativo até: ' + (data.VIG_FIM as string).slice(0, 10)
            : 'Não'}
        </p>
        <p>Responsável: {data?.contact?.name?.text} </p>
        <p>
          {data?.contact?.telecom &&
            'Contacto: ' + data.contact.telecom[0]?.value}
        </p>
        <p>Pertence a: {data?.partOf?.display}</p>
      </CardContent>
    </Card>
  );
}
