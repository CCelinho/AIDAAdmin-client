import React from 'react';
import { Card, CardHeader, CardTitle } from '../ui/card';
import { Service } from '@/gql/graphql';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  data: Service | undefined | null;
  className?: string;
}

export default function ServiceCard({
  data,
  className,
  ...props
}: React.PropsWithChildren<ServiceCardProps>) {
  return (
    <Card className={cn('container', className)} {...props}>
      <CardHeader>
        <CardTitle>{data?.DES_SERVICO}</CardTitle>
      </CardHeader>
    </Card>
  );
}
