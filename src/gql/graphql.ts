/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  ObjectId: { input: any; output: any; }
  UUID: { input: any; output: any; }
};

export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  district?: Maybe<Scalars['String']['output']>;
  line?: Maybe<Scalars['String']['output']>;
  period?: Maybe<Period>;
  postalCode?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  use?: Maybe<Scalars['String']['output']>;
};

export type AnyOrg = Department | Service | Specialty | Uh | Unit;

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type CodeableConcept = {
  __typename?: 'CodeableConcept';
  coding?: Maybe<Coding>;
  text?: Maybe<Scalars['String']['output']>;
};

export type Coding = {
  __typename?: 'Coding';
  code?: Maybe<Scalars['String']['output']>;
  display?: Maybe<Scalars['String']['output']>;
  system?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type ContactPoint = {
  __typename?: 'ContactPoint';
  period?: Maybe<Period>;
  rank?: Maybe<Scalars['Int']['output']>;
  system?: Maybe<Scalars['String']['output']>;
  use?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type Department = Organization & {
  __typename?: 'Department';
  COD_DEPARTAMENTO?: Maybe<Scalars['Int']['output']>;
  COD_ESTATISTICO?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  CR?: Maybe<Scalars['String']['output']>;
  DES_DEPARTAMENTO?: Maybe<Scalars['String']['output']>;
  ID_CP?: Maybe<Scalars['String']['output']>;
  VIG_FIM?: Maybe<Scalars['Date']['output']>;
  VIG_INI?: Maybe<Scalars['Date']['output']>;
  _id?: Maybe<Scalars['ObjectId']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  alias?: Maybe<Scalars['String']['output']>;
  children?: Maybe<Array<Maybe<Service>>>;
  contact?: Maybe<ExtendedContactDetail>;
  description?: Maybe<Scalars['String']['output']>;
  endpoint?: Maybe<Reference>;
  errorflag?: Maybe<Scalars['Boolean']['output']>;
  identifier?: Maybe<Identifier>;
  name?: Maybe<Scalars['String']['output']>;
  parents?: Maybe<Array<Uh>>;
  partOf?: Maybe<Reference>;
  type?: Maybe<CodeableConcept>;
  uuid?: Maybe<Scalars['UUID']['output']>;
};

export type ExtendedContactDetail = {
  __typename?: 'ExtendedContactDetail';
  address?: Maybe<Array<Maybe<Address>>>;
  name?: Maybe<HumanName>;
  organization?: Maybe<Reference>;
  period?: Maybe<Period>;
  purpose?: Maybe<CodeableConcept>;
  telecom?: Maybe<Array<Maybe<ContactPoint>>>;
};

export type HumanName = {
  __typename?: 'HumanName';
  family?: Maybe<Scalars['String']['output']>;
  given?: Maybe<Scalars['String']['output']>;
  period?: Maybe<Period>;
  prefix?: Maybe<Scalars['String']['output']>;
  suffix?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  use?: Maybe<Scalars['String']['output']>;
};

export type Identifier = {
  __typename?: 'Identifier';
  assigner?: Maybe<Scalars['String']['output']>;
  period?: Maybe<Period>;
  system?: Maybe<Scalars['String']['output']>;
  type?: Maybe<CodeableConcept>;
  use?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type Organization = {
  CR?: Maybe<Scalars['String']['output']>;
  ID_CP?: Maybe<Scalars['String']['output']>;
  VIG_FIM?: Maybe<Scalars['Date']['output']>;
  VIG_INI?: Maybe<Scalars['Date']['output']>;
  _id?: Maybe<Scalars['ObjectId']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  alias?: Maybe<Scalars['String']['output']>;
  contact?: Maybe<ExtendedContactDetail>;
  description?: Maybe<Scalars['String']['output']>;
  endpoint?: Maybe<Reference>;
  errorflag?: Maybe<Scalars['Boolean']['output']>;
  identifier?: Maybe<Identifier>;
  name?: Maybe<Scalars['String']['output']>;
  partOf?: Maybe<Reference>;
  type?: Maybe<CodeableConcept>;
  uuid?: Maybe<Scalars['UUID']['output']>;
};

export type Period = {
  __typename?: 'Period';
  end?: Maybe<Scalars['Date']['output']>;
  start?: Maybe<Scalars['Date']['output']>;
};

export type Query = {
  __typename?: 'Query';
  departmentByCOD?: Maybe<Department>;
  departmentByDES?: Maybe<Department>;
  departmentById: Department;
  departmentSearch?: Maybe<Array<Department>>;
  departments?: Maybe<Array<Department>>;
  serviceById: Service;
  services?: Maybe<Array<Service>>;
  specialties?: Maybe<Array<Specialty>>;
  specialtyById: Specialty;
  textSearch?: Maybe<Array<Maybe<Array<AnyOrg>>>>;
  uhById: Uh;
  uhs?: Maybe<Array<Uh>>;
  unitById: Unit;
  units?: Maybe<Array<Unit>>;
};


export type QueryDepartmentByCodArgs = {
  cod: Scalars['Int']['input'];
};


export type QueryDepartmentByDesArgs = {
  des: Scalars['String']['input'];
};


export type QueryDepartmentByIdArgs = {
  id: Scalars['ObjectId']['input'];
};


export type QueryDepartmentSearchArgs = {
  searchString: Scalars['String']['input'];
};


export type QueryDepartmentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryServiceByIdArgs = {
  id: Scalars['ObjectId']['input'];
};


export type QueryServicesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySpecialtiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySpecialtyByIdArgs = {
  id: Scalars['ObjectId']['input'];
};


export type QueryTextSearchArgs = {
  searchString: Scalars['String']['input'];
};


export type QueryUhByIdArgs = {
  id: Scalars['ObjectId']['input'];
};


export type QueryUhsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUnitByIdArgs = {
  id: Scalars['ObjectId']['input'];
};


export type QueryUnitsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Reference = {
  __typename?: 'Reference';
  display?: Maybe<Scalars['String']['output']>;
  identifier?: Maybe<Identifier>;
  reference?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Service = Organization & {
  __typename?: 'Service';
  COD_ESTATISTICO?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  COD_SERVICO?: Maybe<Scalars['Int']['output']>;
  CR?: Maybe<Scalars['String']['output']>;
  DES_SERVICO?: Maybe<Scalars['String']['output']>;
  ID_CP?: Maybe<Scalars['String']['output']>;
  VIG_FIM?: Maybe<Scalars['Date']['output']>;
  VIG_INI?: Maybe<Scalars['Date']['output']>;
  _id?: Maybe<Scalars['ObjectId']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  alias?: Maybe<Scalars['String']['output']>;
  children?: Maybe<Array<Maybe<Unit>>>;
  contact?: Maybe<ExtendedContactDetail>;
  description?: Maybe<Scalars['String']['output']>;
  endpoint?: Maybe<Reference>;
  errorflag?: Maybe<Scalars['Boolean']['output']>;
  identifier?: Maybe<Identifier>;
  name?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Department>;
  partOf?: Maybe<Reference>;
  type?: Maybe<CodeableConcept>;
  uuid?: Maybe<Scalars['UUID']['output']>;
};

export type Specialty = Organization & {
  __typename?: 'Specialty';
  AGREGA1?: Maybe<Scalars['String']['output']>;
  AGREGA2?: Maybe<Scalars['String']['output']>;
  AGREGA3?: Maybe<Scalars['String']['output']>;
  COD_ESTATISTICO?: Maybe<Scalars['String']['output']>;
  CR?: Maybe<Scalars['String']['output']>;
  DES_ESTATISTICO?: Maybe<Scalars['String']['output']>;
  ID_CP?: Maybe<Scalars['String']['output']>;
  VIG_FIM?: Maybe<Scalars['Date']['output']>;
  VIG_INI?: Maybe<Scalars['Date']['output']>;
  _id?: Maybe<Scalars['ObjectId']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  alias?: Maybe<Scalars['String']['output']>;
  contact?: Maybe<ExtendedContactDetail>;
  description?: Maybe<Scalars['String']['output']>;
  endpoint?: Maybe<Reference>;
  errorflag?: Maybe<Scalars['Boolean']['output']>;
  identifier?: Maybe<Identifier>;
  name?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Unit>;
  partOf?: Maybe<Reference>;
  type?: Maybe<CodeableConcept>;
  uuid?: Maybe<Scalars['UUID']['output']>;
};

export type Uh = Organization & {
  __typename?: 'UH';
  COD_ESTATISTICO?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  CR?: Maybe<Scalars['String']['output']>;
  ID_CP?: Maybe<Scalars['String']['output']>;
  UH?: Maybe<Scalars['String']['output']>;
  VIG_FIM?: Maybe<Scalars['Date']['output']>;
  VIG_INI?: Maybe<Scalars['Date']['output']>;
  _id?: Maybe<Scalars['ObjectId']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  alias?: Maybe<Scalars['String']['output']>;
  children?: Maybe<Array<Maybe<Department>>>;
  contact?: Maybe<ExtendedContactDetail>;
  description?: Maybe<Scalars['String']['output']>;
  endpoint?: Maybe<Reference>;
  errorflag?: Maybe<Scalars['Boolean']['output']>;
  identifier?: Maybe<Identifier>;
  name?: Maybe<Scalars['String']['output']>;
  partOf?: Maybe<Reference>;
  type?: Maybe<CodeableConcept>;
  uuid?: Maybe<Scalars['UUID']['output']>;
};

export type Unit = Organization & {
  __typename?: 'Unit';
  COD_ESTATISTICO?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  COD_UNIDADE?: Maybe<Scalars['Int']['output']>;
  CR?: Maybe<Scalars['String']['output']>;
  DES_UNIDADE?: Maybe<Scalars['String']['output']>;
  ID_CP?: Maybe<Scalars['String']['output']>;
  VIG_FIM?: Maybe<Scalars['Date']['output']>;
  VIG_INI?: Maybe<Scalars['Date']['output']>;
  _id?: Maybe<Scalars['ObjectId']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  alias?: Maybe<Scalars['String']['output']>;
  children?: Maybe<Array<Maybe<Specialty>>>;
  contact?: Maybe<ExtendedContactDetail>;
  description?: Maybe<Scalars['String']['output']>;
  endpoint?: Maybe<Reference>;
  errorflag?: Maybe<Scalars['Boolean']['output']>;
  identifier?: Maybe<Identifier>;
  name?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Service>;
  partOf?: Maybe<Reference>;
  type?: Maybe<CodeableConcept>;
  uuid?: Maybe<Scalars['UUID']['output']>;
};

export type Get_DepartmentQueryVariables = Exact<{
  id: Scalars['ObjectId']['input'];
}>;


export type Get_DepartmentQuery = { __typename?: 'Query', departmentById: { __typename?: 'Department', _id?: any | null, COD_DEPARTAMENTO?: number | null, DES_DEPARTAMENTO?: string | null, active?: boolean | null, description?: string | null, VIG_FIM?: any | null, partOf?: { __typename?: 'Reference', display?: string | null } | null, contact?: { __typename?: 'ExtendedContactDetail', name?: { __typename?: 'HumanName', text?: string | null } | null, telecom?: Array<{ __typename?: 'ContactPoint', value?: string | null, system?: string | null } | null> | null } | null } };

export type Get_ServiceQueryVariables = Exact<{
  id: Scalars['ObjectId']['input'];
}>;


export type Get_ServiceQuery = { __typename?: 'Query', serviceById: { __typename?: 'Service', _id?: any | null, COD_SERVICO?: number | null, DES_SERVICO?: string | null, active?: boolean | null, description?: string | null, VIG_FIM?: any | null, partOf?: { __typename?: 'Reference', display?: string | null } | null, contact?: { __typename?: 'ExtendedContactDetail', name?: { __typename?: 'HumanName', text?: string | null } | null, telecom?: Array<{ __typename?: 'ContactPoint', value?: string | null, system?: string | null } | null> | null } | null } };

export type Get_SpecialtyQueryVariables = Exact<{
  id: Scalars['ObjectId']['input'];
}>;


export type Get_SpecialtyQuery = { __typename?: 'Query', specialtyById: { __typename?: 'Specialty', _id?: any | null, COD_ESTATISTICO?: string | null, DES_ESTATISTICO?: string | null, active?: boolean | null, description?: string | null, VIG_FIM?: any | null, partOf?: { __typename?: 'Reference', display?: string | null } | null, contact?: { __typename?: 'ExtendedContactDetail', name?: { __typename?: 'HumanName', text?: string | null } | null, telecom?: Array<{ __typename?: 'ContactPoint', value?: string | null, system?: string | null } | null> | null } | null } };

export type Get_UnitQueryVariables = Exact<{
  id: Scalars['ObjectId']['input'];
}>;


export type Get_UnitQuery = { __typename?: 'Query', unitById: { __typename?: 'Unit', _id?: any | null, COD_UNIDADE?: number | null, DES_UNIDADE?: string | null, active?: boolean | null, description?: string | null, VIG_FIM?: any | null, partOf?: { __typename?: 'Reference', display?: string | null } | null, contact?: { __typename?: 'ExtendedContactDetail', name?: { __typename?: 'HumanName', text?: string | null } | null, telecom?: Array<{ __typename?: 'ContactPoint', value?: string | null, system?: string | null } | null> | null } | null } };

export type Get_DepartmentsQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type Get_DepartmentsQuery = { __typename?: 'Query', departments?: Array<{ __typename?: 'Department', _id?: any | null, COD_DEPARTAMENTO?: number | null, DES_DEPARTAMENTO?: string | null, partOf?: { __typename?: 'Reference', display?: string | null } | null, contact?: { __typename?: 'ExtendedContactDetail', name?: { __typename?: 'HumanName', text?: string | null } | null } | null }> | null };

export type Get_ServicesQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type Get_ServicesQuery = { __typename?: 'Query', services?: Array<{ __typename?: 'Service', _id?: any | null, COD_SERVICO?: number | null, DES_SERVICO?: string | null, partOf?: { __typename?: 'Reference', display?: string | null } | null, contact?: { __typename?: 'ExtendedContactDetail', name?: { __typename?: 'HumanName', text?: string | null } | null } | null }> | null };

export type Get_SpecialtiesQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type Get_SpecialtiesQuery = { __typename?: 'Query', specialties?: Array<{ __typename?: 'Specialty', _id?: any | null, COD_ESTATISTICO?: string | null, DES_ESTATISTICO?: string | null, partOf?: { __typename?: 'Reference', display?: string | null } | null, contact?: { __typename?: 'ExtendedContactDetail', name?: { __typename?: 'HumanName', text?: string | null } | null } | null }> | null };

export type Get_UhsQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type Get_UhsQuery = { __typename?: 'Query', uhs?: Array<{ __typename?: 'UH', _id?: any | null, name?: string | null, partOf?: { __typename?: 'Reference', display?: string | null } | null, contact?: { __typename?: 'ExtendedContactDetail', name?: { __typename?: 'HumanName', text?: string | null } | null } | null }> | null };

export type Get_UnitsQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type Get_UnitsQuery = { __typename?: 'Query', units?: Array<{ __typename?: 'Unit', _id?: any | null, COD_UNIDADE?: number | null, DES_UNIDADE?: string | null, partOf?: { __typename?: 'Reference', display?: string | null } | null, contact?: { __typename?: 'ExtendedContactDetail', name?: { __typename?: 'HumanName', text?: string | null } | null } | null }> | null };

export type Get_DeptnodesQueryVariables = Exact<{
  id: Scalars['ObjectId']['input'];
}>;


export type Get_DeptnodesQuery = { __typename?: 'Query', departmentById: { __typename?: 'Department', children?: Array<{ __typename?: 'Service', _id?: any | null, active?: boolean | null, name?: string | null } | null> | null } };

export type Get_DeptrootQueryVariables = Exact<{
  id: Scalars['ObjectId']['input'];
}>;


export type Get_DeptrootQuery = { __typename?: 'Query', departmentById: { __typename?: 'Department', _id?: any | null, active?: boolean | null, name?: string | null, children?: Array<{ __typename?: 'Service', _id?: any | null, active?: boolean | null, name?: string | null } | null> | null } };

export type Get_ServnodesQueryVariables = Exact<{
  id: Scalars['ObjectId']['input'];
}>;


export type Get_ServnodesQuery = { __typename?: 'Query', serviceById: { __typename?: 'Service', children?: Array<{ __typename?: 'Unit', _id?: any | null, active?: boolean | null, name?: string | null } | null> | null } };

export type Get_UhrootQueryVariables = Exact<{
  id: Scalars['ObjectId']['input'];
}>;


export type Get_UhrootQuery = { __typename?: 'Query', uhById: { __typename?: 'UH', _id?: any | null, active?: boolean | null, UH?: string | null, children?: Array<{ __typename?: 'Department', _id?: any | null, active?: boolean | null, name?: string | null } | null> | null } };

export type Get_UnitnodesQueryVariables = Exact<{
  id: Scalars['ObjectId']['input'];
}>;


export type Get_UnitnodesQuery = { __typename?: 'Query', unitById: { __typename?: 'Unit', children?: Array<{ __typename?: 'Specialty', _id?: any | null, active?: boolean | null, name?: string | null } | null> | null } };


export const Get_DepartmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_DEPARTMENT"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectId"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"departmentById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"COD_DEPARTAMENTO"}},{"kind":"Field","name":{"kind":"Name","value":"DES_DEPARTAMENTO"}},{"kind":"Field","name":{"kind":"Name","value":"partOf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"display"}}]}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"contact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"Field","name":{"kind":"Name","value":"telecom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"system"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"VIG_FIM"}}]}}]}}]} as unknown as DocumentNode<Get_DepartmentQuery, Get_DepartmentQueryVariables>;
export const Get_ServiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_SERVICE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectId"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serviceById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"COD_SERVICO"}},{"kind":"Field","name":{"kind":"Name","value":"DES_SERVICO"}},{"kind":"Field","name":{"kind":"Name","value":"partOf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"display"}}]}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"contact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"Field","name":{"kind":"Name","value":"telecom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"system"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"VIG_FIM"}}]}}]}}]} as unknown as DocumentNode<Get_ServiceQuery, Get_ServiceQueryVariables>;
export const Get_SpecialtyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_SPECIALTY"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectId"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"specialtyById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"COD_ESTATISTICO"}},{"kind":"Field","name":{"kind":"Name","value":"DES_ESTATISTICO"}},{"kind":"Field","name":{"kind":"Name","value":"partOf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"display"}}]}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"contact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"Field","name":{"kind":"Name","value":"telecom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"system"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"VIG_FIM"}}]}}]}}]} as unknown as DocumentNode<Get_SpecialtyQuery, Get_SpecialtyQueryVariables>;
export const Get_UnitDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_UNIT"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectId"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unitById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"COD_UNIDADE"}},{"kind":"Field","name":{"kind":"Name","value":"DES_UNIDADE"}},{"kind":"Field","name":{"kind":"Name","value":"partOf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"display"}}]}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"contact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"Field","name":{"kind":"Name","value":"telecom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"system"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"VIG_FIM"}}]}}]}}]} as unknown as DocumentNode<Get_UnitQuery, Get_UnitQueryVariables>;
export const Get_DepartmentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_DEPARTMENTS"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"departments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"COD_DEPARTAMENTO"}},{"kind":"Field","name":{"kind":"Name","value":"DES_DEPARTAMENTO"}},{"kind":"Field","name":{"kind":"Name","value":"partOf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"display"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Get_DepartmentsQuery, Get_DepartmentsQueryVariables>;
export const Get_ServicesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_SERVICES"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"services"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"COD_SERVICO"}},{"kind":"Field","name":{"kind":"Name","value":"DES_SERVICO"}},{"kind":"Field","name":{"kind":"Name","value":"partOf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"display"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Get_ServicesQuery, Get_ServicesQueryVariables>;
export const Get_SpecialtiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_SPECIALTIES"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"specialties"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"COD_ESTATISTICO"}},{"kind":"Field","name":{"kind":"Name","value":"DES_ESTATISTICO"}},{"kind":"Field","name":{"kind":"Name","value":"partOf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"display"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Get_SpecialtiesQuery, Get_SpecialtiesQueryVariables>;
export const Get_UhsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_UHS"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uhs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partOf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"display"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Get_UhsQuery, Get_UhsQueryVariables>;
export const Get_UnitsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_UNITS"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"units"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"COD_UNIDADE"}},{"kind":"Field","name":{"kind":"Name","value":"DES_UNIDADE"}},{"kind":"Field","name":{"kind":"Name","value":"partOf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"display"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Get_UnitsQuery, Get_UnitsQueryVariables>;
export const Get_DeptnodesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_DEPTNODES"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectId"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"departmentById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<Get_DeptnodesQuery, Get_DeptnodesQueryVariables>;
export const Get_DeptrootDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_DEPTROOT"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectId"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"departmentById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<Get_DeptrootQuery, Get_DeptrootQueryVariables>;
export const Get_ServnodesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_SERVNODES"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectId"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serviceById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<Get_ServnodesQuery, Get_ServnodesQueryVariables>;
export const Get_UhrootDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_UHROOT"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectId"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uhById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"UH"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<Get_UhrootQuery, Get_UhrootQueryVariables>;
export const Get_UnitnodesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_UNITNODES"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectId"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unitById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<Get_UnitnodesQuery, Get_UnitnodesQueryVariables>;