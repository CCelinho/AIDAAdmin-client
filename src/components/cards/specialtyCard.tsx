import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
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
          {data?.COD_ESTATISTICO} - {data?.DES_ESTATISTICO}
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
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
