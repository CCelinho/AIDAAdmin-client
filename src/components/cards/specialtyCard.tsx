import React from 'react';
import { Card, CardHeader, CardTitle } from '../ui/card';
import { Specialty } from '@/gql/graphql';
import { cn } from '@/lib/utils';

interface SpecialtyCardProps {
  data: Specialty | undefined | null;
  className?: string;
}

export default function SpecialtyCard({
  data,
  className,
  ...props
}: React.PropsWithChildren<SpecialtyCardProps>) {
  return (
    <Card className={cn('w-[1200px]', className)} {...props}>
      <CardHeader>
        <CardTitle>{data?.DES_ESTATISTICO}</CardTitle>
      </CardHeader>
    </Card>
  );
}
