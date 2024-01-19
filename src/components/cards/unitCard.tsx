import React from 'react';
import { Card, CardHeader, CardTitle } from '../ui/card';
import { Unit } from '@/gql/graphql';
import { cn } from '@/lib/utils';

interface UnitCardProps {
  data: Unit | undefined | null;
  className?: string;
}

export default function UnitCard({
  data,
  className,
  ...props
}: React.PropsWithChildren<UnitCardProps>) {
  return (
    <Card className={cn('container', className)} {...props}>
      <CardHeader>
        <CardTitle>{data?.DES_UNIDADE}</CardTitle>
      </CardHeader>
    </Card>
  );
}
