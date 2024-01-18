import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Get_DepartmentQuery } from '@/gql/graphql';
import { cn } from '@/lib/utils';

interface DepartmentCardProps {
  data: Get_DepartmentQuery | undefined;
  className?: string;
}

export default function DepartmentCard({
  data,
  className,
  ...props
}: React.PropsWithChildren<DepartmentCardProps>) {
  const dep = data?.departmentById;

  return (
    <Card className={cn('w-[1200px]', className)} {...props}>
      <CardHeader>
        <CardTitle>{dep?.DES_DEPARTAMENTO}</CardTitle>
        <CardDescription>{dep?.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Código: {dep?.COD_DEPARTAMENTO}</p>
        <p>
          {dep?.active
            ? 'Ativo até: ' + (dep.VIG_FIM as string).slice(0, 10)
            : 'Não'}
        </p>
        <p>Responsável: {dep?.contact?.name?.text} </p>
        <p>
          {dep?.contact?.telecom &&
            'Contacto: ' + dep.contact.telecom[0]?.value}
        </p>
        <p>Pertence a: {dep?.partOf?.display}</p>
      </CardContent>
    </Card>
  );
}
