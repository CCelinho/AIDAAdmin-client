import React from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Get_UhtreeQuery } from '@/gql/graphql';
import { cn } from '@/lib/utils';

interface UhCardProps {
  data: Get_UhtreeQuery | undefined;
  className?: string;
}

export default function UhCard({
  data,
  className,
  ...props
}: React.PropsWithChildren<UhCardProps>) {
  const uh = data?.uhById;

  return (
    <Card className={cn('container', className)} {...props}>
      <CardHeader>
        <CardTitle>{uh?.UH}</CardTitle>
        <CardDescription>{uh?.description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
