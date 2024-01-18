import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
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
    <Card className={cn('w-64', className)} {...props}>
      <CardHeader>
        <CardTitle>{uh?.UH}</CardTitle>
        <CardDescription>{uh?.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          {uh?.active
            ? 'Ativo até: ' + (uh.VIG_FIM as string).slice(0, 10)
            : 'Não'}
        </p>
        <p>Responsável: {uh?.contact?.name?.text} </p>
        <p>
          {uh?.contact?.telecom && 'Contacto: ' + uh.contact.telecom[0]?.value}
        </p>
        <p>Pertence a: {uh?.partOf?.display}</p>
      </CardContent>
    </Card>
  );
}
