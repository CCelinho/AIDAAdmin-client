/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    query GET_DEPARTMENT($id: ObjectId!) {\n      departmentById(id: $id) {\n        _id\n        COD_DEPARTAMENTO\n        DES_DEPARTAMENTO\n        partOf {\n          display\n        }\n        active\n        description\n        contact {\n          name {\n            text\n          }\n          telecom {\n            value\n            system\n          }\n        }\n        VIG_FIM\n      }\n    }\n  ": types.Get_DepartmentDocument,
    "\n    query GET_SERVICE($id: ObjectId!) {\n      serviceById(id: $id) {\n        _id\n        COD_SERVICO\n        DES_SERVICO\n        partOf {\n          display\n        }\n        active\n        description\n        contact {\n          name {\n            text\n          }\n          telecom {\n            value\n            system\n          }\n        }\n        VIG_FIM\n      }\n    }\n  ": types.Get_ServiceDocument,
    "\n    query GET_SPECIALTY($id: ObjectId!) {\n      specialtyById(id: $id) {\n        _id\n        COD_ESTATISTICO\n        DES_ESTATISTICO\n        partOf {\n          display\n        }\n        active\n        description\n        contact {\n          name {\n            text\n          }\n          telecom {\n            value\n            system\n          }\n        }\n        VIG_FIM\n      }\n    }\n  ": types.Get_SpecialtyDocument,
    "\n    query GET_UNIT($id: ObjectId!) {\n      unitById(id: $id) {\n        _id\n        COD_UNIDADE\n        DES_UNIDADE\n        partOf {\n          display\n        }\n        active\n        description\n        contact {\n          name {\n            text\n          }\n          telecom {\n            value\n            system\n          }\n        }\n        VIG_FIM\n      }\n    }\n  ": types.Get_UnitDocument,
    "\n    query GET_DEPARTMENTS($offset: Int, $limit: Int) {\n      departments(offset: $offset, limit: $limit) {\n        _id\n        COD_DEPARTAMENTO\n        DES_DEPARTAMENTO\n        partOf {\n          display\n        }\n        contact {\n          name {\n            text\n          }\n        }\n      }\n    }\n  ": types.Get_DepartmentsDocument,
    "\n    query GET_SERVICES($offset: Int, $limit: Int) {\n      services(offset: $offset, limit: $limit) {\n        _id\n        COD_SERVICO\n        DES_SERVICO\n        partOf {\n          display\n        }\n        contact {\n          name {\n            text\n          }\n        }\n      }\n    }\n  ": types.Get_ServicesDocument,
    "\n    query GET_SPECIALTIES($offset: Int, $limit: Int) {\n      specialties(offset: $offset, limit: $limit) {\n        _id\n        COD_ESTATISTICO\n        DES_ESTATISTICO\n        partOf {\n          display\n        }\n        contact {\n          name {\n            text\n          }\n        }\n      }\n    }\n  ": types.Get_SpecialtiesDocument,
    "\n    query GET_UHS($offset: Int, $limit: Int) {\n      uhs(offset: $offset, limit: $limit) {\n        _id\n        name\n        partOf {\n          display\n        }\n        contact {\n          name {\n            text\n          }\n        }\n      }\n    }\n  ": types.Get_UhsDocument,
    "\n    query GET_UNITS($offset: Int, $limit: Int) {\n      units(offset: $offset, limit: $limit) {\n        _id\n        COD_UNIDADE\n        DES_UNIDADE\n        partOf {\n          display\n        }\n        contact {\n          name {\n            text\n          }\n        }\n      }\n    }\n  ": types.Get_UnitsDocument,
    "\n    query GET_DEPTNODES($id: ObjectId!) {\n      departmentById(id: $id) {\n        children {\n          _id\n          active\n          name\n        }\n      }\n    }\n  ": types.Get_DeptnodesDocument,
    "\n    query GET_DEPTROOT($id: ObjectId!) {\n      departmentById(id: $id) {\n        _id\n        active\n        name\n        children {\n          _id\n          active\n          name\n        }\n      }\n    }\n  ": types.Get_DeptrootDocument,
    "\n    query GET_SERVNODES($id: ObjectId!) {\n      serviceById(id: $id) {\n        children {\n          _id\n          active\n          name\n        }\n      }\n    }\n  ": types.Get_ServnodesDocument,
    "\n    query GET_UHROOT($id: ObjectId!) {\n      uhById(id: $id) {\n        _id\n        active\n        UH\n        children {\n          _id\n          active\n          name\n        }\n      }\n    }\n  ": types.Get_UhrootDocument,
    "\n    query GET_UNITNODES($id: ObjectId!) {\n      unitById(id: $id) {\n        children {\n          _id\n          active\n          name\n        }\n      }\n    }\n  ": types.Get_UnitnodesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GET_DEPARTMENT($id: ObjectId!) {\n      departmentById(id: $id) {\n        _id\n        COD_DEPARTAMENTO\n        DES_DEPARTAMENTO\n        partOf {\n          display\n        }\n        active\n        description\n        contact {\n          name {\n            text\n          }\n          telecom {\n            value\n            system\n          }\n        }\n        VIG_FIM\n      }\n    }\n  "): (typeof documents)["\n    query GET_DEPARTMENT($id: ObjectId!) {\n      departmentById(id: $id) {\n        _id\n        COD_DEPARTAMENTO\n        DES_DEPARTAMENTO\n        partOf {\n          display\n        }\n        active\n        description\n        contact {\n          name {\n            text\n          }\n          telecom {\n            value\n            system\n          }\n        }\n        VIG_FIM\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GET_SERVICE($id: ObjectId!) {\n      serviceById(id: $id) {\n        _id\n        COD_SERVICO\n        DES_SERVICO\n        partOf {\n          display\n        }\n        active\n        description\n        contact {\n          name {\n            text\n          }\n          telecom {\n            value\n            system\n          }\n        }\n        VIG_FIM\n      }\n    }\n  "): (typeof documents)["\n    query GET_SERVICE($id: ObjectId!) {\n      serviceById(id: $id) {\n        _id\n        COD_SERVICO\n        DES_SERVICO\n        partOf {\n          display\n        }\n        active\n        description\n        contact {\n          name {\n            text\n          }\n          telecom {\n            value\n            system\n          }\n        }\n        VIG_FIM\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GET_SPECIALTY($id: ObjectId!) {\n      specialtyById(id: $id) {\n        _id\n        COD_ESTATISTICO\n        DES_ESTATISTICO\n        partOf {\n          display\n        }\n        active\n        description\n        contact {\n          name {\n            text\n          }\n          telecom {\n            value\n            system\n          }\n        }\n        VIG_FIM\n      }\n    }\n  "): (typeof documents)["\n    query GET_SPECIALTY($id: ObjectId!) {\n      specialtyById(id: $id) {\n        _id\n        COD_ESTATISTICO\n        DES_ESTATISTICO\n        partOf {\n          display\n        }\n        active\n        description\n        contact {\n          name {\n            text\n          }\n          telecom {\n            value\n            system\n          }\n        }\n        VIG_FIM\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GET_UNIT($id: ObjectId!) {\n      unitById(id: $id) {\n        _id\n        COD_UNIDADE\n        DES_UNIDADE\n        partOf {\n          display\n        }\n        active\n        description\n        contact {\n          name {\n            text\n          }\n          telecom {\n            value\n            system\n          }\n        }\n        VIG_FIM\n      }\n    }\n  "): (typeof documents)["\n    query GET_UNIT($id: ObjectId!) {\n      unitById(id: $id) {\n        _id\n        COD_UNIDADE\n        DES_UNIDADE\n        partOf {\n          display\n        }\n        active\n        description\n        contact {\n          name {\n            text\n          }\n          telecom {\n            value\n            system\n          }\n        }\n        VIG_FIM\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GET_DEPARTMENTS($offset: Int, $limit: Int) {\n      departments(offset: $offset, limit: $limit) {\n        _id\n        COD_DEPARTAMENTO\n        DES_DEPARTAMENTO\n        partOf {\n          display\n        }\n        contact {\n          name {\n            text\n          }\n        }\n      }\n    }\n  "): (typeof documents)["\n    query GET_DEPARTMENTS($offset: Int, $limit: Int) {\n      departments(offset: $offset, limit: $limit) {\n        _id\n        COD_DEPARTAMENTO\n        DES_DEPARTAMENTO\n        partOf {\n          display\n        }\n        contact {\n          name {\n            text\n          }\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GET_SERVICES($offset: Int, $limit: Int) {\n      services(offset: $offset, limit: $limit) {\n        _id\n        COD_SERVICO\n        DES_SERVICO\n        partOf {\n          display\n        }\n        contact {\n          name {\n            text\n          }\n        }\n      }\n    }\n  "): (typeof documents)["\n    query GET_SERVICES($offset: Int, $limit: Int) {\n      services(offset: $offset, limit: $limit) {\n        _id\n        COD_SERVICO\n        DES_SERVICO\n        partOf {\n          display\n        }\n        contact {\n          name {\n            text\n          }\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GET_SPECIALTIES($offset: Int, $limit: Int) {\n      specialties(offset: $offset, limit: $limit) {\n        _id\n        COD_ESTATISTICO\n        DES_ESTATISTICO\n        partOf {\n          display\n        }\n        contact {\n          name {\n            text\n          }\n        }\n      }\n    }\n  "): (typeof documents)["\n    query GET_SPECIALTIES($offset: Int, $limit: Int) {\n      specialties(offset: $offset, limit: $limit) {\n        _id\n        COD_ESTATISTICO\n        DES_ESTATISTICO\n        partOf {\n          display\n        }\n        contact {\n          name {\n            text\n          }\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GET_UHS($offset: Int, $limit: Int) {\n      uhs(offset: $offset, limit: $limit) {\n        _id\n        name\n        partOf {\n          display\n        }\n        contact {\n          name {\n            text\n          }\n        }\n      }\n    }\n  "): (typeof documents)["\n    query GET_UHS($offset: Int, $limit: Int) {\n      uhs(offset: $offset, limit: $limit) {\n        _id\n        name\n        partOf {\n          display\n        }\n        contact {\n          name {\n            text\n          }\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GET_UNITS($offset: Int, $limit: Int) {\n      units(offset: $offset, limit: $limit) {\n        _id\n        COD_UNIDADE\n        DES_UNIDADE\n        partOf {\n          display\n        }\n        contact {\n          name {\n            text\n          }\n        }\n      }\n    }\n  "): (typeof documents)["\n    query GET_UNITS($offset: Int, $limit: Int) {\n      units(offset: $offset, limit: $limit) {\n        _id\n        COD_UNIDADE\n        DES_UNIDADE\n        partOf {\n          display\n        }\n        contact {\n          name {\n            text\n          }\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GET_DEPTNODES($id: ObjectId!) {\n      departmentById(id: $id) {\n        children {\n          _id\n          active\n          name\n        }\n      }\n    }\n  "): (typeof documents)["\n    query GET_DEPTNODES($id: ObjectId!) {\n      departmentById(id: $id) {\n        children {\n          _id\n          active\n          name\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GET_DEPTROOT($id: ObjectId!) {\n      departmentById(id: $id) {\n        _id\n        active\n        name\n        children {\n          _id\n          active\n          name\n        }\n      }\n    }\n  "): (typeof documents)["\n    query GET_DEPTROOT($id: ObjectId!) {\n      departmentById(id: $id) {\n        _id\n        active\n        name\n        children {\n          _id\n          active\n          name\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GET_SERVNODES($id: ObjectId!) {\n      serviceById(id: $id) {\n        children {\n          _id\n          active\n          name\n        }\n      }\n    }\n  "): (typeof documents)["\n    query GET_SERVNODES($id: ObjectId!) {\n      serviceById(id: $id) {\n        children {\n          _id\n          active\n          name\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GET_UHROOT($id: ObjectId!) {\n      uhById(id: $id) {\n        _id\n        active\n        UH\n        children {\n          _id\n          active\n          name\n        }\n      }\n    }\n  "): (typeof documents)["\n    query GET_UHROOT($id: ObjectId!) {\n      uhById(id: $id) {\n        _id\n        active\n        UH\n        children {\n          _id\n          active\n          name\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GET_UNITNODES($id: ObjectId!) {\n      unitById(id: $id) {\n        children {\n          _id\n          active\n          name\n        }\n      }\n    }\n  "): (typeof documents)["\n    query GET_UNITNODES($id: ObjectId!) {\n      unitById(id: $id) {\n        children {\n          _id\n          active\n          name\n        }\n      }\n    }\n  "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;