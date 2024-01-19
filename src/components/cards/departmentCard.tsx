import React from 'react';
import { Card, CardHeader, CardTitle } from '../ui/card';
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
    <Card className={cn('container', className)} {...props}>
      <CardHeader>
        <CardTitle>{data?.DES_DEPARTAMENTO}</CardTitle>
      </CardHeader>
    </Card>
  );
}
