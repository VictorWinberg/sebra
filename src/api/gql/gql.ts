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
    "\n      mutation AuthLogin($email: String!, $password: String!) {\n        loginUser(email: $email, password: $password) {\n          token\n          user {\n            id\n            email\n          }\n        }\n      }\n    ": types.AuthLoginDocument,
    "\n      mutation AuthLogout {\n        logoutUser\n      }\n    ": types.AuthLogoutDocument,
    "\n      query GetMe {\n        meUser {\n          user {\n            id\n            email\n          }\n        }\n      }\n    ": types.GetMeDocument,
    "\n      query GetCompanies {\n        Companies(sort: \"companyName\") {\n          docs {\n            id\n            companyName\n            address\n            industry\n            phone\n            email\n            website\n            organizationNumber\n            createdAt\n            updatedAt\n          }\n        }\n      }\n    ": types.GetCompaniesDocument,
    "\n      query GetCompany($id: String!) {\n        Company(id: $id) {\n          id\n          companyName\n          address\n          industry\n          phone\n          email\n          website\n          organizationNumber\n          createdAt\n          updatedAt\n        }\n      }\n    ": types.GetCompanyDocument,
    "\n      mutation CreateCompany($data: mutationCompanyInput!) {\n        createCompany(data: $data) {\n          id\n        }\n      }\n    ": types.CreateCompanyDocument,
    "\n      mutation UpdateCompany($id: String!, $data: mutationCompanyUpdateInput!) {\n        updateCompany(id: $id, data: $data) {\n          id\n        }\n      }\n    ": types.UpdateCompanyDocument,
    "\n      mutation DeleteCompany($id: String!) {\n        deleteCompany(id: $id) {\n          id\n        }\n      }\n    ": types.DeleteCompanyDocument,
    "\n      query GetContacts {\n        Contacts(sort: \"contactName\") {\n          docs {\n            id\n            contactName\n            email\n            phone\n            jobTitle\n            address\n            notes\n            createdAt\n            updatedAt\n\n            company {\n              id\n              companyName\n              address\n              industry\n              phone\n              email\n              website\n              organizationNumber\n              createdAt\n              updatedAt\n            }\n          }\n        }\n      }\n    ": types.GetContactsDocument,
    "\n      query GetContact($id: String!) {\n        Contact(id: $id) {\n          id\n          contactName\n          email\n          phone\n          jobTitle\n          address\n          notes\n          createdAt\n          updatedAt\n\n          company {\n            id\n            companyName\n            address\n            industry\n            phone\n            email\n            website\n            organizationNumber\n            createdAt\n            updatedAt\n          }\n        }\n      }\n    ": types.GetContactDocument,
    "\n      mutation CreateContact($data: mutationContactInput!) {\n        createContact(data: $data) {\n          id\n        }\n      }\n    ": types.CreateContactDocument,
    "\n      mutation UpdateContact($id: String!, $data: mutationContactUpdateInput!) {\n        updateContact(id: $id, data: $data) {\n          id\n        }\n      }\n    ": types.UpdateContactDocument,
    "\n      mutation DeleteContact($id: String!) {\n        deleteContact(id: $id) {\n          id\n        }\n      }\n    ": types.DeleteContactDocument,
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
export function graphql(source: "\n      mutation AuthLogin($email: String!, $password: String!) {\n        loginUser(email: $email, password: $password) {\n          token\n          user {\n            id\n            email\n          }\n        }\n      }\n    "): (typeof documents)["\n      mutation AuthLogin($email: String!, $password: String!) {\n        loginUser(email: $email, password: $password) {\n          token\n          user {\n            id\n            email\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation AuthLogout {\n        logoutUser\n      }\n    "): (typeof documents)["\n      mutation AuthLogout {\n        logoutUser\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query GetMe {\n        meUser {\n          user {\n            id\n            email\n          }\n        }\n      }\n    "): (typeof documents)["\n      query GetMe {\n        meUser {\n          user {\n            id\n            email\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query GetCompanies {\n        Companies(sort: \"companyName\") {\n          docs {\n            id\n            companyName\n            address\n            industry\n            phone\n            email\n            website\n            organizationNumber\n            createdAt\n            updatedAt\n          }\n        }\n      }\n    "): (typeof documents)["\n      query GetCompanies {\n        Companies(sort: \"companyName\") {\n          docs {\n            id\n            companyName\n            address\n            industry\n            phone\n            email\n            website\n            organizationNumber\n            createdAt\n            updatedAt\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query GetCompany($id: String!) {\n        Company(id: $id) {\n          id\n          companyName\n          address\n          industry\n          phone\n          email\n          website\n          organizationNumber\n          createdAt\n          updatedAt\n        }\n      }\n    "): (typeof documents)["\n      query GetCompany($id: String!) {\n        Company(id: $id) {\n          id\n          companyName\n          address\n          industry\n          phone\n          email\n          website\n          organizationNumber\n          createdAt\n          updatedAt\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation CreateCompany($data: mutationCompanyInput!) {\n        createCompany(data: $data) {\n          id\n        }\n      }\n    "): (typeof documents)["\n      mutation CreateCompany($data: mutationCompanyInput!) {\n        createCompany(data: $data) {\n          id\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation UpdateCompany($id: String!, $data: mutationCompanyUpdateInput!) {\n        updateCompany(id: $id, data: $data) {\n          id\n        }\n      }\n    "): (typeof documents)["\n      mutation UpdateCompany($id: String!, $data: mutationCompanyUpdateInput!) {\n        updateCompany(id: $id, data: $data) {\n          id\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation DeleteCompany($id: String!) {\n        deleteCompany(id: $id) {\n          id\n        }\n      }\n    "): (typeof documents)["\n      mutation DeleteCompany($id: String!) {\n        deleteCompany(id: $id) {\n          id\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query GetContacts {\n        Contacts(sort: \"contactName\") {\n          docs {\n            id\n            contactName\n            email\n            phone\n            jobTitle\n            address\n            notes\n            createdAt\n            updatedAt\n\n            company {\n              id\n              companyName\n              address\n              industry\n              phone\n              email\n              website\n              organizationNumber\n              createdAt\n              updatedAt\n            }\n          }\n        }\n      }\n    "): (typeof documents)["\n      query GetContacts {\n        Contacts(sort: \"contactName\") {\n          docs {\n            id\n            contactName\n            email\n            phone\n            jobTitle\n            address\n            notes\n            createdAt\n            updatedAt\n\n            company {\n              id\n              companyName\n              address\n              industry\n              phone\n              email\n              website\n              organizationNumber\n              createdAt\n              updatedAt\n            }\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query GetContact($id: String!) {\n        Contact(id: $id) {\n          id\n          contactName\n          email\n          phone\n          jobTitle\n          address\n          notes\n          createdAt\n          updatedAt\n\n          company {\n            id\n            companyName\n            address\n            industry\n            phone\n            email\n            website\n            organizationNumber\n            createdAt\n            updatedAt\n          }\n        }\n      }\n    "): (typeof documents)["\n      query GetContact($id: String!) {\n        Contact(id: $id) {\n          id\n          contactName\n          email\n          phone\n          jobTitle\n          address\n          notes\n          createdAt\n          updatedAt\n\n          company {\n            id\n            companyName\n            address\n            industry\n            phone\n            email\n            website\n            organizationNumber\n            createdAt\n            updatedAt\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation CreateContact($data: mutationContactInput!) {\n        createContact(data: $data) {\n          id\n        }\n      }\n    "): (typeof documents)["\n      mutation CreateContact($data: mutationContactInput!) {\n        createContact(data: $data) {\n          id\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation UpdateContact($id: String!, $data: mutationContactUpdateInput!) {\n        updateContact(id: $id, data: $data) {\n          id\n        }\n      }\n    "): (typeof documents)["\n      mutation UpdateContact($id: String!, $data: mutationContactUpdateInput!) {\n        updateContact(id: $id, data: $data) {\n          id\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation DeleteContact($id: String!) {\n        deleteContact(id: $id) {\n          id\n        }\n      }\n    "): (typeof documents)["\n      mutation DeleteContact($id: String!) {\n        deleteContact(id: $id) {\n          id\n        }\n      }\n    "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;