import React from 'react';
import { Card, CardHeader, CardTitle } from '../ui/card';
import { Get_UhrootQuery } from '@/gql/graphql';
import { cn } from '@/lib/utils';

interface UhCardProps {
  data: Get_UhrootQuery | undefined;
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
      </CardHeader>
    </Card>
  );
}
