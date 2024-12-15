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
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any; }
};

export type Access = {
  __typename?: 'Access';
  assignments?: Maybe<AssignmentsAccess>;
  canAccessAdmin: Scalars['Boolean']['output'];
  companies?: Maybe<CompaniesAccess>;
  contacts?: Maybe<ContactsAccess>;
  document_references?: Maybe<Document_ReferencesAccess>;
  interactions?: Maybe<InteractionsAccess>;
  leads?: Maybe<LeadsAccess>;
  media?: Maybe<MediaAccess>;
  payload_locked_documents?: Maybe<Payload_Locked_DocumentsAccess>;
  payload_preferences?: Maybe<Payload_PreferencesAccess>;
  users?: Maybe<UsersAccess>;
  workspaces?: Maybe<WorkspacesAccess>;
};

export type Assignment = {
  __typename?: 'Assignment';
  assignmentName: Scalars['String']['output'];
  company?: Maybe<Company>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  externalContact?: Maybe<Contact>;
  fee?: Maybe<Scalars['Float']['output']>;
  id: Scalars['String']['output'];
  responsibleContacts?: Maybe<Array<Contact>>;
  status?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  workspace?: Maybe<Workspace>;
};

export type Assignment_AssignmentName_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Assignment_Company_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Assignment_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Assignment_ExternalContact_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Assignment_Fee_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Assignment_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Assignment_ResponsibleContacts_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Assignment_Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Assignment_Type_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Assignment_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Assignment_Where = {
  AND?: InputMaybe<Array<InputMaybe<Assignment_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Assignment_Where_Or>>>;
  assignmentName?: InputMaybe<Assignment_AssignmentName_Operator>;
  company?: InputMaybe<Assignment_Company_Operator>;
  createdAt?: InputMaybe<Assignment_CreatedAt_Operator>;
  externalContact?: InputMaybe<Assignment_ExternalContact_Operator>;
  fee?: InputMaybe<Assignment_Fee_Operator>;
  id?: InputMaybe<Assignment_Id_Operator>;
  responsibleContacts?: InputMaybe<Assignment_ResponsibleContacts_Operator>;
  status?: InputMaybe<Assignment_Status_Operator>;
  type?: InputMaybe<Assignment_Type_Operator>;
  updatedAt?: InputMaybe<Assignment_UpdatedAt_Operator>;
  workspace?: InputMaybe<Assignment_Workspace_Operator>;
};

export type Assignment_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Assignment_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Assignment_Where_Or>>>;
  assignmentName?: InputMaybe<Assignment_AssignmentName_Operator>;
  company?: InputMaybe<Assignment_Company_Operator>;
  createdAt?: InputMaybe<Assignment_CreatedAt_Operator>;
  externalContact?: InputMaybe<Assignment_ExternalContact_Operator>;
  fee?: InputMaybe<Assignment_Fee_Operator>;
  id?: InputMaybe<Assignment_Id_Operator>;
  responsibleContacts?: InputMaybe<Assignment_ResponsibleContacts_Operator>;
  status?: InputMaybe<Assignment_Status_Operator>;
  type?: InputMaybe<Assignment_Type_Operator>;
  updatedAt?: InputMaybe<Assignment_UpdatedAt_Operator>;
  workspace?: InputMaybe<Assignment_Workspace_Operator>;
};

export type Assignment_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Assignment_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Assignment_Where_Or>>>;
  assignmentName?: InputMaybe<Assignment_AssignmentName_Operator>;
  company?: InputMaybe<Assignment_Company_Operator>;
  createdAt?: InputMaybe<Assignment_CreatedAt_Operator>;
  externalContact?: InputMaybe<Assignment_ExternalContact_Operator>;
  fee?: InputMaybe<Assignment_Fee_Operator>;
  id?: InputMaybe<Assignment_Id_Operator>;
  responsibleContacts?: InputMaybe<Assignment_ResponsibleContacts_Operator>;
  status?: InputMaybe<Assignment_Status_Operator>;
  type?: InputMaybe<Assignment_Type_Operator>;
  updatedAt?: InputMaybe<Assignment_UpdatedAt_Operator>;
  workspace?: InputMaybe<Assignment_Workspace_Operator>;
};

export type Assignment_Workspace_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Assignments = {
  __typename?: 'Assignments';
  docs?: Maybe<Array<Maybe<Assignment>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type AssignmentsCreateAccess = {
  __typename?: 'AssignmentsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AssignmentsCreateDocAccess = {
  __typename?: 'AssignmentsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AssignmentsDeleteAccess = {
  __typename?: 'AssignmentsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AssignmentsDeleteDocAccess = {
  __typename?: 'AssignmentsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AssignmentsDocAccessFields = {
  __typename?: 'AssignmentsDocAccessFields';
  assignmentName?: Maybe<AssignmentsDocAccessFields_AssignmentName>;
  company?: Maybe<AssignmentsDocAccessFields_Company>;
  createdAt?: Maybe<AssignmentsDocAccessFields_CreatedAt>;
  externalContact?: Maybe<AssignmentsDocAccessFields_ExternalContact>;
  fee?: Maybe<AssignmentsDocAccessFields_Fee>;
  responsibleContacts?: Maybe<AssignmentsDocAccessFields_ResponsibleContacts>;
  status?: Maybe<AssignmentsDocAccessFields_Status>;
  type?: Maybe<AssignmentsDocAccessFields_Type>;
  updatedAt?: Maybe<AssignmentsDocAccessFields_UpdatedAt>;
  workspace?: Maybe<AssignmentsDocAccessFields_Workspace>;
};

export type AssignmentsDocAccessFields_AssignmentName = {
  __typename?: 'AssignmentsDocAccessFields_assignmentName';
  create?: Maybe<AssignmentsDocAccessFields_AssignmentName_Create>;
  delete?: Maybe<AssignmentsDocAccessFields_AssignmentName_Delete>;
  read?: Maybe<AssignmentsDocAccessFields_AssignmentName_Read>;
  update?: Maybe<AssignmentsDocAccessFields_AssignmentName_Update>;
};

export type AssignmentsDocAccessFields_AssignmentName_Create = {
  __typename?: 'AssignmentsDocAccessFields_assignmentName_Create';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsDocAccessFields_AssignmentName_Delete = {
  __typename?: 'AssignmentsDocAccessFields_assignmentName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsDocAccessFields_AssignmentName_Read = {
  __typename?: 'AssignmentsDocAccessFields_assignmentName_Read';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsDocAccessFields_AssignmentName_Update = {
  __typename?: 'AssignmentsDocAccessFields_assignmentName_Update';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsDocAccessFields_Company = {
  __typename?: 'AssignmentsDocAccessFields_company';
  create?: Maybe<AssignmentsDocAccessFields_Company_Create>;
  delete?: Maybe<AssignmentsDocAccessFields_Company_Delete>;
  read?: Maybe<AssignmentsDocAccessFields_Company_Read>;
  update?: Maybe<AssignmentsDocAccessFields_Company_Update>;
};

export type AssignmentsDocAccessFields_Company_Create = {
  __typename?: 'AssignmentsDocAccessFields_company_Create';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsDocAccessFields_Company_Delete = {
  __typename?: 'AssignmentsDocAccessFields_company_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsDocAccessFields_Company_Read = {
  __typename?: 'AssignmentsDocAccessFields_company_Read';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsDocAccessFields_Company_Update = {
  __typename?: 'AssignmentsDocAccessFields_company_Update';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsDocAccessFields_CreatedAt = {
  __typename?: 'AssignmentsDocAccessFields_createdAt';
  create?: Maybe<AssignmentsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<AssignmentsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<AssignmentsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<AssignmentsDocAccessFields_CreatedAt_Update>;
};

export type AssignmentsDocAccessFields_CreatedAt_Create = {
  __typename?: 'AssignmentsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'AssignmentsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsDocAccessFields_CreatedAt_Read = {
  __typename?: 'AssignmentsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsDocAccessFields_CreatedAt_Update = {
  __typename?: 'AssignmentsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsDocAccessFields_ExternalContact = {
  __typename?: 'AssignmentsDocAccessFields_externalContact';
  create?: Maybe<AssignmentsDocAccessFields_ExternalContact_Create>;
  delete?: Maybe<AssignmentsDocAccessFields_ExternalContact_Delete>;
  read?: Maybe<AssignmentsDocAccessFields_ExternalContact_Read>;
  update?: Maybe<AssignmentsDocAccessFields_ExternalContact_Update>;
};

export type AssignmentsDocAccessFields_ExternalContact_Create = {
  __typename?: 'AssignmentsDocAccessFields_externalContact_Create';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsDocAccessFields_ExternalContact_Delete = {
  __typename?: 'AssignmentsDocAccessFields_externalContact_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsDocAccessFields_ExternalContact_Read = {
  __typename?: 'AssignmentsDocAccessFields_externalContact_Read';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsDocAccessFields_ExternalContact_Update = {
  __typename?: 'AssignmentsDocAccessFields_externalContact_Update';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsDocAccessFields_Fee = {
  __typename?: 'AssignmentsDocAccessFields_fee';
  create?: Maybe<AssignmentsDocAccessFields_Fee_Create>;
  delete?: Maybe<AssignmentsDocAccessFields_Fee_Delete>;
  read?: Maybe<AssignmentsDocAccessFields_Fee_Read>;
  update?: Maybe<AssignmentsDocAccessFields_Fee_Update>;
};

export type AssignmentsDocAccessFields_Fee_Create = {
  __typename?: 'AssignmentsDocAccessFields_fee_Create';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsDocAccessFields_Fee_Delete = {
  __typename?: 'AssignmentsDocAccessFields_fee_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsDocAccessFields_Fee_Read = {
  __typename?: 'AssignmentsDocAccessFields_fee_Read';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsDocAccessFields_Fee_Update = {
  __typename?: 'AssignmentsDocAccessFields_fee_Update';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsDocAccessFields_ResponsibleContacts = {
  __typename?: 'AssignmentsDocAccessFields_responsibleContacts';
  create?: Maybe<AssignmentsDocAccessFields_ResponsibleContacts_Create>;
  delete?: Maybe<AssignmentsDocAccessFields_ResponsibleContacts_Delete>;
  read?: Maybe<AssignmentsDocAccessFields_ResponsibleContacts_Read>;
  update?: Maybe<AssignmentsDocAccessFields_ResponsibleContacts_Update>;
};

export type AssignmentsDocAccessFields_ResponsibleContacts_Create = {
  __typename?: 'AssignmentsDocAccessFields_responsibleContacts_Create';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsDocAccessFields_ResponsibleContacts_Delete = {
  __typename?: 'AssignmentsDocAccessFields_responsibleContacts_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsDocAccessFields_ResponsibleContacts_Read = {
  __typename?: 'AssignmentsDocAccessFields_responsibleContacts_Read';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsDocAccessFields_ResponsibleContacts_Update = {
  __typename?: 'AssignmentsDocAccessFields_responsibleContacts_Update';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsDocAccessFields_Status = {
  __typename?: 'AssignmentsDocAccessFields_status';
  create?: Maybe<AssignmentsDocAccessFields_Status_Create>;
  delete?: Maybe<AssignmentsDocAccessFields_Status_Delete>;
  read?: Maybe<AssignmentsDocAccessFields_Status_Read>;
  update?: Maybe<AssignmentsDocAccessFields_Status_Update>;
};

export type AssignmentsDocAccessFields_Status_Create = {
  __typename?: 'AssignmentsDocAccessFields_status_Create';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsDocAccessFields_Status_Delete = {
  __typename?: 'AssignmentsDocAccessFields_status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsDocAccessFields_Status_Read = {
  __typename?: 'AssignmentsDocAccessFields_status_Read';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsDocAccessFields_Status_Update = {
  __typename?: 'AssignmentsDocAccessFields_status_Update';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsDocAccessFields_Type = {
  __typename?: 'AssignmentsDocAccessFields_type';
  create?: Maybe<AssignmentsDocAccessFields_Type_Create>;
  delete?: Maybe<AssignmentsDocAccessFields_Type_Delete>;
  read?: Maybe<AssignmentsDocAccessFields_Type_Read>;
  update?: Maybe<AssignmentsDocAccessFields_Type_Update>;
};

export type AssignmentsDocAccessFields_Type_Create = {
  __typename?: 'AssignmentsDocAccessFields_type_Create';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsDocAccessFields_Type_Delete = {
  __typename?: 'AssignmentsDocAccessFields_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsDocAccessFields_Type_Read = {
  __typename?: 'AssignmentsDocAccessFields_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsDocAccessFields_Type_Update = {
  __typename?: 'AssignmentsDocAccessFields_type_Update';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsDocAccessFields_UpdatedAt = {
  __typename?: 'AssignmentsDocAccessFields_updatedAt';
  create?: Maybe<AssignmentsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<AssignmentsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<AssignmentsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<AssignmentsDocAccessFields_UpdatedAt_Update>;
};

export type AssignmentsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'AssignmentsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'AssignmentsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'AssignmentsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'AssignmentsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsDocAccessFields_Workspace = {
  __typename?: 'AssignmentsDocAccessFields_workspace';
  create?: Maybe<AssignmentsDocAccessFields_Workspace_Create>;
  delete?: Maybe<AssignmentsDocAccessFields_Workspace_Delete>;
  read?: Maybe<AssignmentsDocAccessFields_Workspace_Read>;
  update?: Maybe<AssignmentsDocAccessFields_Workspace_Update>;
};

export type AssignmentsDocAccessFields_Workspace_Create = {
  __typename?: 'AssignmentsDocAccessFields_workspace_Create';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsDocAccessFields_Workspace_Delete = {
  __typename?: 'AssignmentsDocAccessFields_workspace_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsDocAccessFields_Workspace_Read = {
  __typename?: 'AssignmentsDocAccessFields_workspace_Read';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsDocAccessFields_Workspace_Update = {
  __typename?: 'AssignmentsDocAccessFields_workspace_Update';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsFields = {
  __typename?: 'AssignmentsFields';
  assignmentName?: Maybe<AssignmentsFields_AssignmentName>;
  company?: Maybe<AssignmentsFields_Company>;
  createdAt?: Maybe<AssignmentsFields_CreatedAt>;
  externalContact?: Maybe<AssignmentsFields_ExternalContact>;
  fee?: Maybe<AssignmentsFields_Fee>;
  responsibleContacts?: Maybe<AssignmentsFields_ResponsibleContacts>;
  status?: Maybe<AssignmentsFields_Status>;
  type?: Maybe<AssignmentsFields_Type>;
  updatedAt?: Maybe<AssignmentsFields_UpdatedAt>;
  workspace?: Maybe<AssignmentsFields_Workspace>;
};

export type AssignmentsFields_AssignmentName = {
  __typename?: 'AssignmentsFields_assignmentName';
  create?: Maybe<AssignmentsFields_AssignmentName_Create>;
  delete?: Maybe<AssignmentsFields_AssignmentName_Delete>;
  read?: Maybe<AssignmentsFields_AssignmentName_Read>;
  update?: Maybe<AssignmentsFields_AssignmentName_Update>;
};

export type AssignmentsFields_AssignmentName_Create = {
  __typename?: 'AssignmentsFields_assignmentName_Create';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsFields_AssignmentName_Delete = {
  __typename?: 'AssignmentsFields_assignmentName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsFields_AssignmentName_Read = {
  __typename?: 'AssignmentsFields_assignmentName_Read';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsFields_AssignmentName_Update = {
  __typename?: 'AssignmentsFields_assignmentName_Update';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsFields_Company = {
  __typename?: 'AssignmentsFields_company';
  create?: Maybe<AssignmentsFields_Company_Create>;
  delete?: Maybe<AssignmentsFields_Company_Delete>;
  read?: Maybe<AssignmentsFields_Company_Read>;
  update?: Maybe<AssignmentsFields_Company_Update>;
};

export type AssignmentsFields_Company_Create = {
  __typename?: 'AssignmentsFields_company_Create';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsFields_Company_Delete = {
  __typename?: 'AssignmentsFields_company_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsFields_Company_Read = {
  __typename?: 'AssignmentsFields_company_Read';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsFields_Company_Update = {
  __typename?: 'AssignmentsFields_company_Update';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsFields_CreatedAt = {
  __typename?: 'AssignmentsFields_createdAt';
  create?: Maybe<AssignmentsFields_CreatedAt_Create>;
  delete?: Maybe<AssignmentsFields_CreatedAt_Delete>;
  read?: Maybe<AssignmentsFields_CreatedAt_Read>;
  update?: Maybe<AssignmentsFields_CreatedAt_Update>;
};

export type AssignmentsFields_CreatedAt_Create = {
  __typename?: 'AssignmentsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsFields_CreatedAt_Delete = {
  __typename?: 'AssignmentsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsFields_CreatedAt_Read = {
  __typename?: 'AssignmentsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsFields_CreatedAt_Update = {
  __typename?: 'AssignmentsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsFields_ExternalContact = {
  __typename?: 'AssignmentsFields_externalContact';
  create?: Maybe<AssignmentsFields_ExternalContact_Create>;
  delete?: Maybe<AssignmentsFields_ExternalContact_Delete>;
  read?: Maybe<AssignmentsFields_ExternalContact_Read>;
  update?: Maybe<AssignmentsFields_ExternalContact_Update>;
};

export type AssignmentsFields_ExternalContact_Create = {
  __typename?: 'AssignmentsFields_externalContact_Create';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsFields_ExternalContact_Delete = {
  __typename?: 'AssignmentsFields_externalContact_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsFields_ExternalContact_Read = {
  __typename?: 'AssignmentsFields_externalContact_Read';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsFields_ExternalContact_Update = {
  __typename?: 'AssignmentsFields_externalContact_Update';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsFields_Fee = {
  __typename?: 'AssignmentsFields_fee';
  create?: Maybe<AssignmentsFields_Fee_Create>;
  delete?: Maybe<AssignmentsFields_Fee_Delete>;
  read?: Maybe<AssignmentsFields_Fee_Read>;
  update?: Maybe<AssignmentsFields_Fee_Update>;
};

export type AssignmentsFields_Fee_Create = {
  __typename?: 'AssignmentsFields_fee_Create';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsFields_Fee_Delete = {
  __typename?: 'AssignmentsFields_fee_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsFields_Fee_Read = {
  __typename?: 'AssignmentsFields_fee_Read';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsFields_Fee_Update = {
  __typename?: 'AssignmentsFields_fee_Update';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsFields_ResponsibleContacts = {
  __typename?: 'AssignmentsFields_responsibleContacts';
  create?: Maybe<AssignmentsFields_ResponsibleContacts_Create>;
  delete?: Maybe<AssignmentsFields_ResponsibleContacts_Delete>;
  read?: Maybe<AssignmentsFields_ResponsibleContacts_Read>;
  update?: Maybe<AssignmentsFields_ResponsibleContacts_Update>;
};

export type AssignmentsFields_ResponsibleContacts_Create = {
  __typename?: 'AssignmentsFields_responsibleContacts_Create';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsFields_ResponsibleContacts_Delete = {
  __typename?: 'AssignmentsFields_responsibleContacts_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsFields_ResponsibleContacts_Read = {
  __typename?: 'AssignmentsFields_responsibleContacts_Read';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsFields_ResponsibleContacts_Update = {
  __typename?: 'AssignmentsFields_responsibleContacts_Update';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsFields_Status = {
  __typename?: 'AssignmentsFields_status';
  create?: Maybe<AssignmentsFields_Status_Create>;
  delete?: Maybe<AssignmentsFields_Status_Delete>;
  read?: Maybe<AssignmentsFields_Status_Read>;
  update?: Maybe<AssignmentsFields_Status_Update>;
};

export type AssignmentsFields_Status_Create = {
  __typename?: 'AssignmentsFields_status_Create';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsFields_Status_Delete = {
  __typename?: 'AssignmentsFields_status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsFields_Status_Read = {
  __typename?: 'AssignmentsFields_status_Read';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsFields_Status_Update = {
  __typename?: 'AssignmentsFields_status_Update';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsFields_Type = {
  __typename?: 'AssignmentsFields_type';
  create?: Maybe<AssignmentsFields_Type_Create>;
  delete?: Maybe<AssignmentsFields_Type_Delete>;
  read?: Maybe<AssignmentsFields_Type_Read>;
  update?: Maybe<AssignmentsFields_Type_Update>;
};

export type AssignmentsFields_Type_Create = {
  __typename?: 'AssignmentsFields_type_Create';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsFields_Type_Delete = {
  __typename?: 'AssignmentsFields_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsFields_Type_Read = {
  __typename?: 'AssignmentsFields_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsFields_Type_Update = {
  __typename?: 'AssignmentsFields_type_Update';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsFields_UpdatedAt = {
  __typename?: 'AssignmentsFields_updatedAt';
  create?: Maybe<AssignmentsFields_UpdatedAt_Create>;
  delete?: Maybe<AssignmentsFields_UpdatedAt_Delete>;
  read?: Maybe<AssignmentsFields_UpdatedAt_Read>;
  update?: Maybe<AssignmentsFields_UpdatedAt_Update>;
};

export type AssignmentsFields_UpdatedAt_Create = {
  __typename?: 'AssignmentsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsFields_UpdatedAt_Delete = {
  __typename?: 'AssignmentsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsFields_UpdatedAt_Read = {
  __typename?: 'AssignmentsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsFields_UpdatedAt_Update = {
  __typename?: 'AssignmentsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsFields_Workspace = {
  __typename?: 'AssignmentsFields_workspace';
  create?: Maybe<AssignmentsFields_Workspace_Create>;
  delete?: Maybe<AssignmentsFields_Workspace_Delete>;
  read?: Maybe<AssignmentsFields_Workspace_Read>;
  update?: Maybe<AssignmentsFields_Workspace_Update>;
};

export type AssignmentsFields_Workspace_Create = {
  __typename?: 'AssignmentsFields_workspace_Create';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsFields_Workspace_Delete = {
  __typename?: 'AssignmentsFields_workspace_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsFields_Workspace_Read = {
  __typename?: 'AssignmentsFields_workspace_Read';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsFields_Workspace_Update = {
  __typename?: 'AssignmentsFields_workspace_Update';
  permission: Scalars['Boolean']['output'];
};

export type AssignmentsReadAccess = {
  __typename?: 'AssignmentsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AssignmentsReadDocAccess = {
  __typename?: 'AssignmentsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AssignmentsUpdateAccess = {
  __typename?: 'AssignmentsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AssignmentsUpdateDocAccess = {
  __typename?: 'AssignmentsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Companies = {
  __typename?: 'Companies';
  docs?: Maybe<Array<Maybe<Company>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type CompaniesCreateAccess = {
  __typename?: 'CompaniesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CompaniesCreateDocAccess = {
  __typename?: 'CompaniesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CompaniesDeleteAccess = {
  __typename?: 'CompaniesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CompaniesDeleteDocAccess = {
  __typename?: 'CompaniesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CompaniesDocAccessFields = {
  __typename?: 'CompaniesDocAccessFields';
  address?: Maybe<CompaniesDocAccessFields_Address>;
  companyName?: Maybe<CompaniesDocAccessFields_CompanyName>;
  createdAt?: Maybe<CompaniesDocAccessFields_CreatedAt>;
  email?: Maybe<CompaniesDocAccessFields_Email>;
  industry?: Maybe<CompaniesDocAccessFields_Industry>;
  organizationNumber?: Maybe<CompaniesDocAccessFields_OrganizationNumber>;
  phone?: Maybe<CompaniesDocAccessFields_Phone>;
  updatedAt?: Maybe<CompaniesDocAccessFields_UpdatedAt>;
  website?: Maybe<CompaniesDocAccessFields_Website>;
  workspace?: Maybe<CompaniesDocAccessFields_Workspace>;
};

export type CompaniesDocAccessFields_Address = {
  __typename?: 'CompaniesDocAccessFields_address';
  create?: Maybe<CompaniesDocAccessFields_Address_Create>;
  delete?: Maybe<CompaniesDocAccessFields_Address_Delete>;
  read?: Maybe<CompaniesDocAccessFields_Address_Read>;
  update?: Maybe<CompaniesDocAccessFields_Address_Update>;
};

export type CompaniesDocAccessFields_Address_Create = {
  __typename?: 'CompaniesDocAccessFields_address_Create';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesDocAccessFields_Address_Delete = {
  __typename?: 'CompaniesDocAccessFields_address_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesDocAccessFields_Address_Read = {
  __typename?: 'CompaniesDocAccessFields_address_Read';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesDocAccessFields_Address_Update = {
  __typename?: 'CompaniesDocAccessFields_address_Update';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesDocAccessFields_CompanyName = {
  __typename?: 'CompaniesDocAccessFields_companyName';
  create?: Maybe<CompaniesDocAccessFields_CompanyName_Create>;
  delete?: Maybe<CompaniesDocAccessFields_CompanyName_Delete>;
  read?: Maybe<CompaniesDocAccessFields_CompanyName_Read>;
  update?: Maybe<CompaniesDocAccessFields_CompanyName_Update>;
};

export type CompaniesDocAccessFields_CompanyName_Create = {
  __typename?: 'CompaniesDocAccessFields_companyName_Create';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesDocAccessFields_CompanyName_Delete = {
  __typename?: 'CompaniesDocAccessFields_companyName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesDocAccessFields_CompanyName_Read = {
  __typename?: 'CompaniesDocAccessFields_companyName_Read';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesDocAccessFields_CompanyName_Update = {
  __typename?: 'CompaniesDocAccessFields_companyName_Update';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesDocAccessFields_CreatedAt = {
  __typename?: 'CompaniesDocAccessFields_createdAt';
  create?: Maybe<CompaniesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<CompaniesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<CompaniesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<CompaniesDocAccessFields_CreatedAt_Update>;
};

export type CompaniesDocAccessFields_CreatedAt_Create = {
  __typename?: 'CompaniesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'CompaniesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesDocAccessFields_CreatedAt_Read = {
  __typename?: 'CompaniesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesDocAccessFields_CreatedAt_Update = {
  __typename?: 'CompaniesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesDocAccessFields_Email = {
  __typename?: 'CompaniesDocAccessFields_email';
  create?: Maybe<CompaniesDocAccessFields_Email_Create>;
  delete?: Maybe<CompaniesDocAccessFields_Email_Delete>;
  read?: Maybe<CompaniesDocAccessFields_Email_Read>;
  update?: Maybe<CompaniesDocAccessFields_Email_Update>;
};

export type CompaniesDocAccessFields_Email_Create = {
  __typename?: 'CompaniesDocAccessFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesDocAccessFields_Email_Delete = {
  __typename?: 'CompaniesDocAccessFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesDocAccessFields_Email_Read = {
  __typename?: 'CompaniesDocAccessFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesDocAccessFields_Email_Update = {
  __typename?: 'CompaniesDocAccessFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesDocAccessFields_Industry = {
  __typename?: 'CompaniesDocAccessFields_industry';
  create?: Maybe<CompaniesDocAccessFields_Industry_Create>;
  delete?: Maybe<CompaniesDocAccessFields_Industry_Delete>;
  read?: Maybe<CompaniesDocAccessFields_Industry_Read>;
  update?: Maybe<CompaniesDocAccessFields_Industry_Update>;
};

export type CompaniesDocAccessFields_Industry_Create = {
  __typename?: 'CompaniesDocAccessFields_industry_Create';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesDocAccessFields_Industry_Delete = {
  __typename?: 'CompaniesDocAccessFields_industry_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesDocAccessFields_Industry_Read = {
  __typename?: 'CompaniesDocAccessFields_industry_Read';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesDocAccessFields_Industry_Update = {
  __typename?: 'CompaniesDocAccessFields_industry_Update';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesDocAccessFields_OrganizationNumber = {
  __typename?: 'CompaniesDocAccessFields_organizationNumber';
  create?: Maybe<CompaniesDocAccessFields_OrganizationNumber_Create>;
  delete?: Maybe<CompaniesDocAccessFields_OrganizationNumber_Delete>;
  read?: Maybe<CompaniesDocAccessFields_OrganizationNumber_Read>;
  update?: Maybe<CompaniesDocAccessFields_OrganizationNumber_Update>;
};

export type CompaniesDocAccessFields_OrganizationNumber_Create = {
  __typename?: 'CompaniesDocAccessFields_organizationNumber_Create';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesDocAccessFields_OrganizationNumber_Delete = {
  __typename?: 'CompaniesDocAccessFields_organizationNumber_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesDocAccessFields_OrganizationNumber_Read = {
  __typename?: 'CompaniesDocAccessFields_organizationNumber_Read';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesDocAccessFields_OrganizationNumber_Update = {
  __typename?: 'CompaniesDocAccessFields_organizationNumber_Update';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesDocAccessFields_Phone = {
  __typename?: 'CompaniesDocAccessFields_phone';
  create?: Maybe<CompaniesDocAccessFields_Phone_Create>;
  delete?: Maybe<CompaniesDocAccessFields_Phone_Delete>;
  read?: Maybe<CompaniesDocAccessFields_Phone_Read>;
  update?: Maybe<CompaniesDocAccessFields_Phone_Update>;
};

export type CompaniesDocAccessFields_Phone_Create = {
  __typename?: 'CompaniesDocAccessFields_phone_Create';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesDocAccessFields_Phone_Delete = {
  __typename?: 'CompaniesDocAccessFields_phone_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesDocAccessFields_Phone_Read = {
  __typename?: 'CompaniesDocAccessFields_phone_Read';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesDocAccessFields_Phone_Update = {
  __typename?: 'CompaniesDocAccessFields_phone_Update';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesDocAccessFields_UpdatedAt = {
  __typename?: 'CompaniesDocAccessFields_updatedAt';
  create?: Maybe<CompaniesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<CompaniesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<CompaniesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<CompaniesDocAccessFields_UpdatedAt_Update>;
};

export type CompaniesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'CompaniesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'CompaniesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'CompaniesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'CompaniesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesDocAccessFields_Website = {
  __typename?: 'CompaniesDocAccessFields_website';
  create?: Maybe<CompaniesDocAccessFields_Website_Create>;
  delete?: Maybe<CompaniesDocAccessFields_Website_Delete>;
  read?: Maybe<CompaniesDocAccessFields_Website_Read>;
  update?: Maybe<CompaniesDocAccessFields_Website_Update>;
};

export type CompaniesDocAccessFields_Website_Create = {
  __typename?: 'CompaniesDocAccessFields_website_Create';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesDocAccessFields_Website_Delete = {
  __typename?: 'CompaniesDocAccessFields_website_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesDocAccessFields_Website_Read = {
  __typename?: 'CompaniesDocAccessFields_website_Read';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesDocAccessFields_Website_Update = {
  __typename?: 'CompaniesDocAccessFields_website_Update';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesDocAccessFields_Workspace = {
  __typename?: 'CompaniesDocAccessFields_workspace';
  create?: Maybe<CompaniesDocAccessFields_Workspace_Create>;
  delete?: Maybe<CompaniesDocAccessFields_Workspace_Delete>;
  read?: Maybe<CompaniesDocAccessFields_Workspace_Read>;
  update?: Maybe<CompaniesDocAccessFields_Workspace_Update>;
};

export type CompaniesDocAccessFields_Workspace_Create = {
  __typename?: 'CompaniesDocAccessFields_workspace_Create';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesDocAccessFields_Workspace_Delete = {
  __typename?: 'CompaniesDocAccessFields_workspace_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesDocAccessFields_Workspace_Read = {
  __typename?: 'CompaniesDocAccessFields_workspace_Read';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesDocAccessFields_Workspace_Update = {
  __typename?: 'CompaniesDocAccessFields_workspace_Update';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesFields = {
  __typename?: 'CompaniesFields';
  address?: Maybe<CompaniesFields_Address>;
  companyName?: Maybe<CompaniesFields_CompanyName>;
  createdAt?: Maybe<CompaniesFields_CreatedAt>;
  email?: Maybe<CompaniesFields_Email>;
  industry?: Maybe<CompaniesFields_Industry>;
  organizationNumber?: Maybe<CompaniesFields_OrganizationNumber>;
  phone?: Maybe<CompaniesFields_Phone>;
  updatedAt?: Maybe<CompaniesFields_UpdatedAt>;
  website?: Maybe<CompaniesFields_Website>;
  workspace?: Maybe<CompaniesFields_Workspace>;
};

export type CompaniesFields_Address = {
  __typename?: 'CompaniesFields_address';
  create?: Maybe<CompaniesFields_Address_Create>;
  delete?: Maybe<CompaniesFields_Address_Delete>;
  read?: Maybe<CompaniesFields_Address_Read>;
  update?: Maybe<CompaniesFields_Address_Update>;
};

export type CompaniesFields_Address_Create = {
  __typename?: 'CompaniesFields_address_Create';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesFields_Address_Delete = {
  __typename?: 'CompaniesFields_address_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesFields_Address_Read = {
  __typename?: 'CompaniesFields_address_Read';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesFields_Address_Update = {
  __typename?: 'CompaniesFields_address_Update';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesFields_CompanyName = {
  __typename?: 'CompaniesFields_companyName';
  create?: Maybe<CompaniesFields_CompanyName_Create>;
  delete?: Maybe<CompaniesFields_CompanyName_Delete>;
  read?: Maybe<CompaniesFields_CompanyName_Read>;
  update?: Maybe<CompaniesFields_CompanyName_Update>;
};

export type CompaniesFields_CompanyName_Create = {
  __typename?: 'CompaniesFields_companyName_Create';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesFields_CompanyName_Delete = {
  __typename?: 'CompaniesFields_companyName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesFields_CompanyName_Read = {
  __typename?: 'CompaniesFields_companyName_Read';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesFields_CompanyName_Update = {
  __typename?: 'CompaniesFields_companyName_Update';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesFields_CreatedAt = {
  __typename?: 'CompaniesFields_createdAt';
  create?: Maybe<CompaniesFields_CreatedAt_Create>;
  delete?: Maybe<CompaniesFields_CreatedAt_Delete>;
  read?: Maybe<CompaniesFields_CreatedAt_Read>;
  update?: Maybe<CompaniesFields_CreatedAt_Update>;
};

export type CompaniesFields_CreatedAt_Create = {
  __typename?: 'CompaniesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesFields_CreatedAt_Delete = {
  __typename?: 'CompaniesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesFields_CreatedAt_Read = {
  __typename?: 'CompaniesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesFields_CreatedAt_Update = {
  __typename?: 'CompaniesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesFields_Email = {
  __typename?: 'CompaniesFields_email';
  create?: Maybe<CompaniesFields_Email_Create>;
  delete?: Maybe<CompaniesFields_Email_Delete>;
  read?: Maybe<CompaniesFields_Email_Read>;
  update?: Maybe<CompaniesFields_Email_Update>;
};

export type CompaniesFields_Email_Create = {
  __typename?: 'CompaniesFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesFields_Email_Delete = {
  __typename?: 'CompaniesFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesFields_Email_Read = {
  __typename?: 'CompaniesFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesFields_Email_Update = {
  __typename?: 'CompaniesFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesFields_Industry = {
  __typename?: 'CompaniesFields_industry';
  create?: Maybe<CompaniesFields_Industry_Create>;
  delete?: Maybe<CompaniesFields_Industry_Delete>;
  read?: Maybe<CompaniesFields_Industry_Read>;
  update?: Maybe<CompaniesFields_Industry_Update>;
};

export type CompaniesFields_Industry_Create = {
  __typename?: 'CompaniesFields_industry_Create';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesFields_Industry_Delete = {
  __typename?: 'CompaniesFields_industry_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesFields_Industry_Read = {
  __typename?: 'CompaniesFields_industry_Read';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesFields_Industry_Update = {
  __typename?: 'CompaniesFields_industry_Update';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesFields_OrganizationNumber = {
  __typename?: 'CompaniesFields_organizationNumber';
  create?: Maybe<CompaniesFields_OrganizationNumber_Create>;
  delete?: Maybe<CompaniesFields_OrganizationNumber_Delete>;
  read?: Maybe<CompaniesFields_OrganizationNumber_Read>;
  update?: Maybe<CompaniesFields_OrganizationNumber_Update>;
};

export type CompaniesFields_OrganizationNumber_Create = {
  __typename?: 'CompaniesFields_organizationNumber_Create';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesFields_OrganizationNumber_Delete = {
  __typename?: 'CompaniesFields_organizationNumber_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesFields_OrganizationNumber_Read = {
  __typename?: 'CompaniesFields_organizationNumber_Read';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesFields_OrganizationNumber_Update = {
  __typename?: 'CompaniesFields_organizationNumber_Update';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesFields_Phone = {
  __typename?: 'CompaniesFields_phone';
  create?: Maybe<CompaniesFields_Phone_Create>;
  delete?: Maybe<CompaniesFields_Phone_Delete>;
  read?: Maybe<CompaniesFields_Phone_Read>;
  update?: Maybe<CompaniesFields_Phone_Update>;
};

export type CompaniesFields_Phone_Create = {
  __typename?: 'CompaniesFields_phone_Create';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesFields_Phone_Delete = {
  __typename?: 'CompaniesFields_phone_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesFields_Phone_Read = {
  __typename?: 'CompaniesFields_phone_Read';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesFields_Phone_Update = {
  __typename?: 'CompaniesFields_phone_Update';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesFields_UpdatedAt = {
  __typename?: 'CompaniesFields_updatedAt';
  create?: Maybe<CompaniesFields_UpdatedAt_Create>;
  delete?: Maybe<CompaniesFields_UpdatedAt_Delete>;
  read?: Maybe<CompaniesFields_UpdatedAt_Read>;
  update?: Maybe<CompaniesFields_UpdatedAt_Update>;
};

export type CompaniesFields_UpdatedAt_Create = {
  __typename?: 'CompaniesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesFields_UpdatedAt_Delete = {
  __typename?: 'CompaniesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesFields_UpdatedAt_Read = {
  __typename?: 'CompaniesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesFields_UpdatedAt_Update = {
  __typename?: 'CompaniesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesFields_Website = {
  __typename?: 'CompaniesFields_website';
  create?: Maybe<CompaniesFields_Website_Create>;
  delete?: Maybe<CompaniesFields_Website_Delete>;
  read?: Maybe<CompaniesFields_Website_Read>;
  update?: Maybe<CompaniesFields_Website_Update>;
};

export type CompaniesFields_Website_Create = {
  __typename?: 'CompaniesFields_website_Create';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesFields_Website_Delete = {
  __typename?: 'CompaniesFields_website_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesFields_Website_Read = {
  __typename?: 'CompaniesFields_website_Read';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesFields_Website_Update = {
  __typename?: 'CompaniesFields_website_Update';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesFields_Workspace = {
  __typename?: 'CompaniesFields_workspace';
  create?: Maybe<CompaniesFields_Workspace_Create>;
  delete?: Maybe<CompaniesFields_Workspace_Delete>;
  read?: Maybe<CompaniesFields_Workspace_Read>;
  update?: Maybe<CompaniesFields_Workspace_Update>;
};

export type CompaniesFields_Workspace_Create = {
  __typename?: 'CompaniesFields_workspace_Create';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesFields_Workspace_Delete = {
  __typename?: 'CompaniesFields_workspace_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesFields_Workspace_Read = {
  __typename?: 'CompaniesFields_workspace_Read';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesFields_Workspace_Update = {
  __typename?: 'CompaniesFields_workspace_Update';
  permission: Scalars['Boolean']['output'];
};

export type CompaniesReadAccess = {
  __typename?: 'CompaniesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CompaniesReadDocAccess = {
  __typename?: 'CompaniesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CompaniesUpdateAccess = {
  __typename?: 'CompaniesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CompaniesUpdateDocAccess = {
  __typename?: 'CompaniesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Company = {
  __typename?: 'Company';
  address?: Maybe<Scalars['String']['output']>;
  companyName: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  industry?: Maybe<Scalars['String']['output']>;
  organizationNumber?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  website?: Maybe<Scalars['String']['output']>;
  workspace?: Maybe<Workspace>;
};

export type Company_Address_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Company_CompanyName_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Company_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Company_Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Company_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Company_Industry_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Company_OrganizationNumber_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Company_Phone_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Company_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Company_Website_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Company_Where = {
  AND?: InputMaybe<Array<InputMaybe<Company_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Company_Where_Or>>>;
  address?: InputMaybe<Company_Address_Operator>;
  companyName?: InputMaybe<Company_CompanyName_Operator>;
  createdAt?: InputMaybe<Company_CreatedAt_Operator>;
  email?: InputMaybe<Company_Email_Operator>;
  id?: InputMaybe<Company_Id_Operator>;
  industry?: InputMaybe<Company_Industry_Operator>;
  organizationNumber?: InputMaybe<Company_OrganizationNumber_Operator>;
  phone?: InputMaybe<Company_Phone_Operator>;
  updatedAt?: InputMaybe<Company_UpdatedAt_Operator>;
  website?: InputMaybe<Company_Website_Operator>;
  workspace?: InputMaybe<Company_Workspace_Operator>;
};

export type Company_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Company_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Company_Where_Or>>>;
  address?: InputMaybe<Company_Address_Operator>;
  companyName?: InputMaybe<Company_CompanyName_Operator>;
  createdAt?: InputMaybe<Company_CreatedAt_Operator>;
  email?: InputMaybe<Company_Email_Operator>;
  id?: InputMaybe<Company_Id_Operator>;
  industry?: InputMaybe<Company_Industry_Operator>;
  organizationNumber?: InputMaybe<Company_OrganizationNumber_Operator>;
  phone?: InputMaybe<Company_Phone_Operator>;
  updatedAt?: InputMaybe<Company_UpdatedAt_Operator>;
  website?: InputMaybe<Company_Website_Operator>;
  workspace?: InputMaybe<Company_Workspace_Operator>;
};

export type Company_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Company_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Company_Where_Or>>>;
  address?: InputMaybe<Company_Address_Operator>;
  companyName?: InputMaybe<Company_CompanyName_Operator>;
  createdAt?: InputMaybe<Company_CreatedAt_Operator>;
  email?: InputMaybe<Company_Email_Operator>;
  id?: InputMaybe<Company_Id_Operator>;
  industry?: InputMaybe<Company_Industry_Operator>;
  organizationNumber?: InputMaybe<Company_OrganizationNumber_Operator>;
  phone?: InputMaybe<Company_Phone_Operator>;
  updatedAt?: InputMaybe<Company_UpdatedAt_Operator>;
  website?: InputMaybe<Company_Website_Operator>;
  workspace?: InputMaybe<Company_Workspace_Operator>;
};

export type Company_Workspace_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Contact = {
  __typename?: 'Contact';
  address?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Company>;
  contactName: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['EmailAddress']['output'];
  id: Scalars['String']['output'];
  jobTitle?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  workspace?: Maybe<Workspace>;
};

export type Contact_Address_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Contact_Company_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Contact_ContactName_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Contact_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Contact_Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  contains?: InputMaybe<Scalars['EmailAddress']['input']>;
  equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  like?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
};

export type Contact_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Contact_JobTitle_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Contact_Notes_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Contact_Phone_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Contact_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Contact_Where = {
  AND?: InputMaybe<Array<InputMaybe<Contact_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Contact_Where_Or>>>;
  address?: InputMaybe<Contact_Address_Operator>;
  company?: InputMaybe<Contact_Company_Operator>;
  contactName?: InputMaybe<Contact_ContactName_Operator>;
  createdAt?: InputMaybe<Contact_CreatedAt_Operator>;
  email?: InputMaybe<Contact_Email_Operator>;
  id?: InputMaybe<Contact_Id_Operator>;
  jobTitle?: InputMaybe<Contact_JobTitle_Operator>;
  notes?: InputMaybe<Contact_Notes_Operator>;
  phone?: InputMaybe<Contact_Phone_Operator>;
  updatedAt?: InputMaybe<Contact_UpdatedAt_Operator>;
  workspace?: InputMaybe<Contact_Workspace_Operator>;
};

export type Contact_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Contact_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Contact_Where_Or>>>;
  address?: InputMaybe<Contact_Address_Operator>;
  company?: InputMaybe<Contact_Company_Operator>;
  contactName?: InputMaybe<Contact_ContactName_Operator>;
  createdAt?: InputMaybe<Contact_CreatedAt_Operator>;
  email?: InputMaybe<Contact_Email_Operator>;
  id?: InputMaybe<Contact_Id_Operator>;
  jobTitle?: InputMaybe<Contact_JobTitle_Operator>;
  notes?: InputMaybe<Contact_Notes_Operator>;
  phone?: InputMaybe<Contact_Phone_Operator>;
  updatedAt?: InputMaybe<Contact_UpdatedAt_Operator>;
  workspace?: InputMaybe<Contact_Workspace_Operator>;
};

export type Contact_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Contact_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Contact_Where_Or>>>;
  address?: InputMaybe<Contact_Address_Operator>;
  company?: InputMaybe<Contact_Company_Operator>;
  contactName?: InputMaybe<Contact_ContactName_Operator>;
  createdAt?: InputMaybe<Contact_CreatedAt_Operator>;
  email?: InputMaybe<Contact_Email_Operator>;
  id?: InputMaybe<Contact_Id_Operator>;
  jobTitle?: InputMaybe<Contact_JobTitle_Operator>;
  notes?: InputMaybe<Contact_Notes_Operator>;
  phone?: InputMaybe<Contact_Phone_Operator>;
  updatedAt?: InputMaybe<Contact_UpdatedAt_Operator>;
  workspace?: InputMaybe<Contact_Workspace_Operator>;
};

export type Contact_Workspace_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Contacts = {
  __typename?: 'Contacts';
  docs?: Maybe<Array<Maybe<Contact>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type ContactsCreateAccess = {
  __typename?: 'ContactsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ContactsCreateDocAccess = {
  __typename?: 'ContactsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ContactsDeleteAccess = {
  __typename?: 'ContactsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ContactsDeleteDocAccess = {
  __typename?: 'ContactsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ContactsDocAccessFields = {
  __typename?: 'ContactsDocAccessFields';
  address?: Maybe<ContactsDocAccessFields_Address>;
  company?: Maybe<ContactsDocAccessFields_Company>;
  contactName?: Maybe<ContactsDocAccessFields_ContactName>;
  createdAt?: Maybe<ContactsDocAccessFields_CreatedAt>;
  email?: Maybe<ContactsDocAccessFields_Email>;
  jobTitle?: Maybe<ContactsDocAccessFields_JobTitle>;
  notes?: Maybe<ContactsDocAccessFields_Notes>;
  phone?: Maybe<ContactsDocAccessFields_Phone>;
  updatedAt?: Maybe<ContactsDocAccessFields_UpdatedAt>;
  workspace?: Maybe<ContactsDocAccessFields_Workspace>;
};

export type ContactsDocAccessFields_Address = {
  __typename?: 'ContactsDocAccessFields_address';
  create?: Maybe<ContactsDocAccessFields_Address_Create>;
  delete?: Maybe<ContactsDocAccessFields_Address_Delete>;
  read?: Maybe<ContactsDocAccessFields_Address_Read>;
  update?: Maybe<ContactsDocAccessFields_Address_Update>;
};

export type ContactsDocAccessFields_Address_Create = {
  __typename?: 'ContactsDocAccessFields_address_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Address_Delete = {
  __typename?: 'ContactsDocAccessFields_address_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Address_Read = {
  __typename?: 'ContactsDocAccessFields_address_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Address_Update = {
  __typename?: 'ContactsDocAccessFields_address_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Company = {
  __typename?: 'ContactsDocAccessFields_company';
  create?: Maybe<ContactsDocAccessFields_Company_Create>;
  delete?: Maybe<ContactsDocAccessFields_Company_Delete>;
  read?: Maybe<ContactsDocAccessFields_Company_Read>;
  update?: Maybe<ContactsDocAccessFields_Company_Update>;
};

export type ContactsDocAccessFields_Company_Create = {
  __typename?: 'ContactsDocAccessFields_company_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Company_Delete = {
  __typename?: 'ContactsDocAccessFields_company_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Company_Read = {
  __typename?: 'ContactsDocAccessFields_company_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Company_Update = {
  __typename?: 'ContactsDocAccessFields_company_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_ContactName = {
  __typename?: 'ContactsDocAccessFields_contactName';
  create?: Maybe<ContactsDocAccessFields_ContactName_Create>;
  delete?: Maybe<ContactsDocAccessFields_ContactName_Delete>;
  read?: Maybe<ContactsDocAccessFields_ContactName_Read>;
  update?: Maybe<ContactsDocAccessFields_ContactName_Update>;
};

export type ContactsDocAccessFields_ContactName_Create = {
  __typename?: 'ContactsDocAccessFields_contactName_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_ContactName_Delete = {
  __typename?: 'ContactsDocAccessFields_contactName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_ContactName_Read = {
  __typename?: 'ContactsDocAccessFields_contactName_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_ContactName_Update = {
  __typename?: 'ContactsDocAccessFields_contactName_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_CreatedAt = {
  __typename?: 'ContactsDocAccessFields_createdAt';
  create?: Maybe<ContactsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<ContactsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<ContactsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<ContactsDocAccessFields_CreatedAt_Update>;
};

export type ContactsDocAccessFields_CreatedAt_Create = {
  __typename?: 'ContactsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'ContactsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_CreatedAt_Read = {
  __typename?: 'ContactsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_CreatedAt_Update = {
  __typename?: 'ContactsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Email = {
  __typename?: 'ContactsDocAccessFields_email';
  create?: Maybe<ContactsDocAccessFields_Email_Create>;
  delete?: Maybe<ContactsDocAccessFields_Email_Delete>;
  read?: Maybe<ContactsDocAccessFields_Email_Read>;
  update?: Maybe<ContactsDocAccessFields_Email_Update>;
};

export type ContactsDocAccessFields_Email_Create = {
  __typename?: 'ContactsDocAccessFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Email_Delete = {
  __typename?: 'ContactsDocAccessFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Email_Read = {
  __typename?: 'ContactsDocAccessFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Email_Update = {
  __typename?: 'ContactsDocAccessFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_JobTitle = {
  __typename?: 'ContactsDocAccessFields_jobTitle';
  create?: Maybe<ContactsDocAccessFields_JobTitle_Create>;
  delete?: Maybe<ContactsDocAccessFields_JobTitle_Delete>;
  read?: Maybe<ContactsDocAccessFields_JobTitle_Read>;
  update?: Maybe<ContactsDocAccessFields_JobTitle_Update>;
};

export type ContactsDocAccessFields_JobTitle_Create = {
  __typename?: 'ContactsDocAccessFields_jobTitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_JobTitle_Delete = {
  __typename?: 'ContactsDocAccessFields_jobTitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_JobTitle_Read = {
  __typename?: 'ContactsDocAccessFields_jobTitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_JobTitle_Update = {
  __typename?: 'ContactsDocAccessFields_jobTitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Notes = {
  __typename?: 'ContactsDocAccessFields_notes';
  create?: Maybe<ContactsDocAccessFields_Notes_Create>;
  delete?: Maybe<ContactsDocAccessFields_Notes_Delete>;
  read?: Maybe<ContactsDocAccessFields_Notes_Read>;
  update?: Maybe<ContactsDocAccessFields_Notes_Update>;
};

export type ContactsDocAccessFields_Notes_Create = {
  __typename?: 'ContactsDocAccessFields_notes_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Notes_Delete = {
  __typename?: 'ContactsDocAccessFields_notes_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Notes_Read = {
  __typename?: 'ContactsDocAccessFields_notes_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Notes_Update = {
  __typename?: 'ContactsDocAccessFields_notes_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Phone = {
  __typename?: 'ContactsDocAccessFields_phone';
  create?: Maybe<ContactsDocAccessFields_Phone_Create>;
  delete?: Maybe<ContactsDocAccessFields_Phone_Delete>;
  read?: Maybe<ContactsDocAccessFields_Phone_Read>;
  update?: Maybe<ContactsDocAccessFields_Phone_Update>;
};

export type ContactsDocAccessFields_Phone_Create = {
  __typename?: 'ContactsDocAccessFields_phone_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Phone_Delete = {
  __typename?: 'ContactsDocAccessFields_phone_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Phone_Read = {
  __typename?: 'ContactsDocAccessFields_phone_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Phone_Update = {
  __typename?: 'ContactsDocAccessFields_phone_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_UpdatedAt = {
  __typename?: 'ContactsDocAccessFields_updatedAt';
  create?: Maybe<ContactsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<ContactsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<ContactsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<ContactsDocAccessFields_UpdatedAt_Update>;
};

export type ContactsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'ContactsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'ContactsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'ContactsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'ContactsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Workspace = {
  __typename?: 'ContactsDocAccessFields_workspace';
  create?: Maybe<ContactsDocAccessFields_Workspace_Create>;
  delete?: Maybe<ContactsDocAccessFields_Workspace_Delete>;
  read?: Maybe<ContactsDocAccessFields_Workspace_Read>;
  update?: Maybe<ContactsDocAccessFields_Workspace_Update>;
};

export type ContactsDocAccessFields_Workspace_Create = {
  __typename?: 'ContactsDocAccessFields_workspace_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Workspace_Delete = {
  __typename?: 'ContactsDocAccessFields_workspace_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Workspace_Read = {
  __typename?: 'ContactsDocAccessFields_workspace_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Workspace_Update = {
  __typename?: 'ContactsDocAccessFields_workspace_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields = {
  __typename?: 'ContactsFields';
  address?: Maybe<ContactsFields_Address>;
  company?: Maybe<ContactsFields_Company>;
  contactName?: Maybe<ContactsFields_ContactName>;
  createdAt?: Maybe<ContactsFields_CreatedAt>;
  email?: Maybe<ContactsFields_Email>;
  jobTitle?: Maybe<ContactsFields_JobTitle>;
  notes?: Maybe<ContactsFields_Notes>;
  phone?: Maybe<ContactsFields_Phone>;
  updatedAt?: Maybe<ContactsFields_UpdatedAt>;
  workspace?: Maybe<ContactsFields_Workspace>;
};

export type ContactsFields_Address = {
  __typename?: 'ContactsFields_address';
  create?: Maybe<ContactsFields_Address_Create>;
  delete?: Maybe<ContactsFields_Address_Delete>;
  read?: Maybe<ContactsFields_Address_Read>;
  update?: Maybe<ContactsFields_Address_Update>;
};

export type ContactsFields_Address_Create = {
  __typename?: 'ContactsFields_address_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Address_Delete = {
  __typename?: 'ContactsFields_address_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Address_Read = {
  __typename?: 'ContactsFields_address_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Address_Update = {
  __typename?: 'ContactsFields_address_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Company = {
  __typename?: 'ContactsFields_company';
  create?: Maybe<ContactsFields_Company_Create>;
  delete?: Maybe<ContactsFields_Company_Delete>;
  read?: Maybe<ContactsFields_Company_Read>;
  update?: Maybe<ContactsFields_Company_Update>;
};

export type ContactsFields_Company_Create = {
  __typename?: 'ContactsFields_company_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Company_Delete = {
  __typename?: 'ContactsFields_company_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Company_Read = {
  __typename?: 'ContactsFields_company_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Company_Update = {
  __typename?: 'ContactsFields_company_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_ContactName = {
  __typename?: 'ContactsFields_contactName';
  create?: Maybe<ContactsFields_ContactName_Create>;
  delete?: Maybe<ContactsFields_ContactName_Delete>;
  read?: Maybe<ContactsFields_ContactName_Read>;
  update?: Maybe<ContactsFields_ContactName_Update>;
};

export type ContactsFields_ContactName_Create = {
  __typename?: 'ContactsFields_contactName_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_ContactName_Delete = {
  __typename?: 'ContactsFields_contactName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_ContactName_Read = {
  __typename?: 'ContactsFields_contactName_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_ContactName_Update = {
  __typename?: 'ContactsFields_contactName_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_CreatedAt = {
  __typename?: 'ContactsFields_createdAt';
  create?: Maybe<ContactsFields_CreatedAt_Create>;
  delete?: Maybe<ContactsFields_CreatedAt_Delete>;
  read?: Maybe<ContactsFields_CreatedAt_Read>;
  update?: Maybe<ContactsFields_CreatedAt_Update>;
};

export type ContactsFields_CreatedAt_Create = {
  __typename?: 'ContactsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_CreatedAt_Delete = {
  __typename?: 'ContactsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_CreatedAt_Read = {
  __typename?: 'ContactsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_CreatedAt_Update = {
  __typename?: 'ContactsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Email = {
  __typename?: 'ContactsFields_email';
  create?: Maybe<ContactsFields_Email_Create>;
  delete?: Maybe<ContactsFields_Email_Delete>;
  read?: Maybe<ContactsFields_Email_Read>;
  update?: Maybe<ContactsFields_Email_Update>;
};

export type ContactsFields_Email_Create = {
  __typename?: 'ContactsFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Email_Delete = {
  __typename?: 'ContactsFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Email_Read = {
  __typename?: 'ContactsFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Email_Update = {
  __typename?: 'ContactsFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_JobTitle = {
  __typename?: 'ContactsFields_jobTitle';
  create?: Maybe<ContactsFields_JobTitle_Create>;
  delete?: Maybe<ContactsFields_JobTitle_Delete>;
  read?: Maybe<ContactsFields_JobTitle_Read>;
  update?: Maybe<ContactsFields_JobTitle_Update>;
};

export type ContactsFields_JobTitle_Create = {
  __typename?: 'ContactsFields_jobTitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_JobTitle_Delete = {
  __typename?: 'ContactsFields_jobTitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_JobTitle_Read = {
  __typename?: 'ContactsFields_jobTitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_JobTitle_Update = {
  __typename?: 'ContactsFields_jobTitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Notes = {
  __typename?: 'ContactsFields_notes';
  create?: Maybe<ContactsFields_Notes_Create>;
  delete?: Maybe<ContactsFields_Notes_Delete>;
  read?: Maybe<ContactsFields_Notes_Read>;
  update?: Maybe<ContactsFields_Notes_Update>;
};

export type ContactsFields_Notes_Create = {
  __typename?: 'ContactsFields_notes_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Notes_Delete = {
  __typename?: 'ContactsFields_notes_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Notes_Read = {
  __typename?: 'ContactsFields_notes_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Notes_Update = {
  __typename?: 'ContactsFields_notes_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Phone = {
  __typename?: 'ContactsFields_phone';
  create?: Maybe<ContactsFields_Phone_Create>;
  delete?: Maybe<ContactsFields_Phone_Delete>;
  read?: Maybe<ContactsFields_Phone_Read>;
  update?: Maybe<ContactsFields_Phone_Update>;
};

export type ContactsFields_Phone_Create = {
  __typename?: 'ContactsFields_phone_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Phone_Delete = {
  __typename?: 'ContactsFields_phone_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Phone_Read = {
  __typename?: 'ContactsFields_phone_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Phone_Update = {
  __typename?: 'ContactsFields_phone_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_UpdatedAt = {
  __typename?: 'ContactsFields_updatedAt';
  create?: Maybe<ContactsFields_UpdatedAt_Create>;
  delete?: Maybe<ContactsFields_UpdatedAt_Delete>;
  read?: Maybe<ContactsFields_UpdatedAt_Read>;
  update?: Maybe<ContactsFields_UpdatedAt_Update>;
};

export type ContactsFields_UpdatedAt_Create = {
  __typename?: 'ContactsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_UpdatedAt_Delete = {
  __typename?: 'ContactsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_UpdatedAt_Read = {
  __typename?: 'ContactsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_UpdatedAt_Update = {
  __typename?: 'ContactsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Workspace = {
  __typename?: 'ContactsFields_workspace';
  create?: Maybe<ContactsFields_Workspace_Create>;
  delete?: Maybe<ContactsFields_Workspace_Delete>;
  read?: Maybe<ContactsFields_Workspace_Read>;
  update?: Maybe<ContactsFields_Workspace_Update>;
};

export type ContactsFields_Workspace_Create = {
  __typename?: 'ContactsFields_workspace_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Workspace_Delete = {
  __typename?: 'ContactsFields_workspace_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Workspace_Read = {
  __typename?: 'ContactsFields_workspace_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Workspace_Update = {
  __typename?: 'ContactsFields_workspace_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsReadAccess = {
  __typename?: 'ContactsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ContactsReadDocAccess = {
  __typename?: 'ContactsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ContactsUpdateAccess = {
  __typename?: 'ContactsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ContactsUpdateDocAccess = {
  __typename?: 'ContactsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type DocumentReference = {
  __typename?: 'DocumentReference';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  document: Media;
  entityId: Scalars['String']['output'];
  entityType: Scalars['String']['output'];
  id: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  workspace?: Maybe<Workspace>;
};

export type DocumentReference_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DocumentReference_Document_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type DocumentReference_EntityId_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DocumentReference_EntityType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DocumentReference_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DocumentReference_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DocumentReference_Where = {
  AND?: InputMaybe<Array<InputMaybe<DocumentReference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<DocumentReference_Where_Or>>>;
  createdAt?: InputMaybe<DocumentReference_CreatedAt_Operator>;
  document?: InputMaybe<DocumentReference_Document_Operator>;
  entityId?: InputMaybe<DocumentReference_EntityId_Operator>;
  entityType?: InputMaybe<DocumentReference_EntityType_Operator>;
  id?: InputMaybe<DocumentReference_Id_Operator>;
  updatedAt?: InputMaybe<DocumentReference_UpdatedAt_Operator>;
  workspace?: InputMaybe<DocumentReference_Workspace_Operator>;
};

export type DocumentReference_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<DocumentReference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<DocumentReference_Where_Or>>>;
  createdAt?: InputMaybe<DocumentReference_CreatedAt_Operator>;
  document?: InputMaybe<DocumentReference_Document_Operator>;
  entityId?: InputMaybe<DocumentReference_EntityId_Operator>;
  entityType?: InputMaybe<DocumentReference_EntityType_Operator>;
  id?: InputMaybe<DocumentReference_Id_Operator>;
  updatedAt?: InputMaybe<DocumentReference_UpdatedAt_Operator>;
  workspace?: InputMaybe<DocumentReference_Workspace_Operator>;
};

export type DocumentReference_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<DocumentReference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<DocumentReference_Where_Or>>>;
  createdAt?: InputMaybe<DocumentReference_CreatedAt_Operator>;
  document?: InputMaybe<DocumentReference_Document_Operator>;
  entityId?: InputMaybe<DocumentReference_EntityId_Operator>;
  entityType?: InputMaybe<DocumentReference_EntityType_Operator>;
  id?: InputMaybe<DocumentReference_Id_Operator>;
  updatedAt?: InputMaybe<DocumentReference_UpdatedAt_Operator>;
  workspace?: InputMaybe<DocumentReference_Workspace_Operator>;
};

export type DocumentReference_Workspace_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type DocumentReferences = {
  __typename?: 'DocumentReferences';
  docs?: Maybe<Array<Maybe<DocumentReference>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type DocumentReferencesCreateAccess = {
  __typename?: 'DocumentReferencesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type DocumentReferencesCreateDocAccess = {
  __typename?: 'DocumentReferencesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type DocumentReferencesDeleteAccess = {
  __typename?: 'DocumentReferencesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type DocumentReferencesDeleteDocAccess = {
  __typename?: 'DocumentReferencesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type DocumentReferencesDocAccessFields = {
  __typename?: 'DocumentReferencesDocAccessFields';
  createdAt?: Maybe<DocumentReferencesDocAccessFields_CreatedAt>;
  document?: Maybe<DocumentReferencesDocAccessFields_Document>;
  entityId?: Maybe<DocumentReferencesDocAccessFields_EntityId>;
  entityType?: Maybe<DocumentReferencesDocAccessFields_EntityType>;
  updatedAt?: Maybe<DocumentReferencesDocAccessFields_UpdatedAt>;
  workspace?: Maybe<DocumentReferencesDocAccessFields_Workspace>;
};

export type DocumentReferencesDocAccessFields_CreatedAt = {
  __typename?: 'DocumentReferencesDocAccessFields_createdAt';
  create?: Maybe<DocumentReferencesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<DocumentReferencesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<DocumentReferencesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<DocumentReferencesDocAccessFields_CreatedAt_Update>;
};

export type DocumentReferencesDocAccessFields_CreatedAt_Create = {
  __typename?: 'DocumentReferencesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'DocumentReferencesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesDocAccessFields_CreatedAt_Read = {
  __typename?: 'DocumentReferencesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesDocAccessFields_CreatedAt_Update = {
  __typename?: 'DocumentReferencesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesDocAccessFields_Document = {
  __typename?: 'DocumentReferencesDocAccessFields_document';
  create?: Maybe<DocumentReferencesDocAccessFields_Document_Create>;
  delete?: Maybe<DocumentReferencesDocAccessFields_Document_Delete>;
  read?: Maybe<DocumentReferencesDocAccessFields_Document_Read>;
  update?: Maybe<DocumentReferencesDocAccessFields_Document_Update>;
};

export type DocumentReferencesDocAccessFields_Document_Create = {
  __typename?: 'DocumentReferencesDocAccessFields_document_Create';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesDocAccessFields_Document_Delete = {
  __typename?: 'DocumentReferencesDocAccessFields_document_Delete';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesDocAccessFields_Document_Read = {
  __typename?: 'DocumentReferencesDocAccessFields_document_Read';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesDocAccessFields_Document_Update = {
  __typename?: 'DocumentReferencesDocAccessFields_document_Update';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesDocAccessFields_EntityId = {
  __typename?: 'DocumentReferencesDocAccessFields_entityId';
  create?: Maybe<DocumentReferencesDocAccessFields_EntityId_Create>;
  delete?: Maybe<DocumentReferencesDocAccessFields_EntityId_Delete>;
  read?: Maybe<DocumentReferencesDocAccessFields_EntityId_Read>;
  update?: Maybe<DocumentReferencesDocAccessFields_EntityId_Update>;
};

export type DocumentReferencesDocAccessFields_EntityId_Create = {
  __typename?: 'DocumentReferencesDocAccessFields_entityId_Create';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesDocAccessFields_EntityId_Delete = {
  __typename?: 'DocumentReferencesDocAccessFields_entityId_Delete';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesDocAccessFields_EntityId_Read = {
  __typename?: 'DocumentReferencesDocAccessFields_entityId_Read';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesDocAccessFields_EntityId_Update = {
  __typename?: 'DocumentReferencesDocAccessFields_entityId_Update';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesDocAccessFields_EntityType = {
  __typename?: 'DocumentReferencesDocAccessFields_entityType';
  create?: Maybe<DocumentReferencesDocAccessFields_EntityType_Create>;
  delete?: Maybe<DocumentReferencesDocAccessFields_EntityType_Delete>;
  read?: Maybe<DocumentReferencesDocAccessFields_EntityType_Read>;
  update?: Maybe<DocumentReferencesDocAccessFields_EntityType_Update>;
};

export type DocumentReferencesDocAccessFields_EntityType_Create = {
  __typename?: 'DocumentReferencesDocAccessFields_entityType_Create';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesDocAccessFields_EntityType_Delete = {
  __typename?: 'DocumentReferencesDocAccessFields_entityType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesDocAccessFields_EntityType_Read = {
  __typename?: 'DocumentReferencesDocAccessFields_entityType_Read';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesDocAccessFields_EntityType_Update = {
  __typename?: 'DocumentReferencesDocAccessFields_entityType_Update';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesDocAccessFields_UpdatedAt = {
  __typename?: 'DocumentReferencesDocAccessFields_updatedAt';
  create?: Maybe<DocumentReferencesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<DocumentReferencesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<DocumentReferencesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<DocumentReferencesDocAccessFields_UpdatedAt_Update>;
};

export type DocumentReferencesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'DocumentReferencesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'DocumentReferencesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'DocumentReferencesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'DocumentReferencesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesDocAccessFields_Workspace = {
  __typename?: 'DocumentReferencesDocAccessFields_workspace';
  create?: Maybe<DocumentReferencesDocAccessFields_Workspace_Create>;
  delete?: Maybe<DocumentReferencesDocAccessFields_Workspace_Delete>;
  read?: Maybe<DocumentReferencesDocAccessFields_Workspace_Read>;
  update?: Maybe<DocumentReferencesDocAccessFields_Workspace_Update>;
};

export type DocumentReferencesDocAccessFields_Workspace_Create = {
  __typename?: 'DocumentReferencesDocAccessFields_workspace_Create';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesDocAccessFields_Workspace_Delete = {
  __typename?: 'DocumentReferencesDocAccessFields_workspace_Delete';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesDocAccessFields_Workspace_Read = {
  __typename?: 'DocumentReferencesDocAccessFields_workspace_Read';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesDocAccessFields_Workspace_Update = {
  __typename?: 'DocumentReferencesDocAccessFields_workspace_Update';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesFields = {
  __typename?: 'DocumentReferencesFields';
  createdAt?: Maybe<DocumentReferencesFields_CreatedAt>;
  document?: Maybe<DocumentReferencesFields_Document>;
  entityId?: Maybe<DocumentReferencesFields_EntityId>;
  entityType?: Maybe<DocumentReferencesFields_EntityType>;
  updatedAt?: Maybe<DocumentReferencesFields_UpdatedAt>;
  workspace?: Maybe<DocumentReferencesFields_Workspace>;
};

export type DocumentReferencesFields_CreatedAt = {
  __typename?: 'DocumentReferencesFields_createdAt';
  create?: Maybe<DocumentReferencesFields_CreatedAt_Create>;
  delete?: Maybe<DocumentReferencesFields_CreatedAt_Delete>;
  read?: Maybe<DocumentReferencesFields_CreatedAt_Read>;
  update?: Maybe<DocumentReferencesFields_CreatedAt_Update>;
};

export type DocumentReferencesFields_CreatedAt_Create = {
  __typename?: 'DocumentReferencesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesFields_CreatedAt_Delete = {
  __typename?: 'DocumentReferencesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesFields_CreatedAt_Read = {
  __typename?: 'DocumentReferencesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesFields_CreatedAt_Update = {
  __typename?: 'DocumentReferencesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesFields_Document = {
  __typename?: 'DocumentReferencesFields_document';
  create?: Maybe<DocumentReferencesFields_Document_Create>;
  delete?: Maybe<DocumentReferencesFields_Document_Delete>;
  read?: Maybe<DocumentReferencesFields_Document_Read>;
  update?: Maybe<DocumentReferencesFields_Document_Update>;
};

export type DocumentReferencesFields_Document_Create = {
  __typename?: 'DocumentReferencesFields_document_Create';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesFields_Document_Delete = {
  __typename?: 'DocumentReferencesFields_document_Delete';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesFields_Document_Read = {
  __typename?: 'DocumentReferencesFields_document_Read';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesFields_Document_Update = {
  __typename?: 'DocumentReferencesFields_document_Update';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesFields_EntityId = {
  __typename?: 'DocumentReferencesFields_entityId';
  create?: Maybe<DocumentReferencesFields_EntityId_Create>;
  delete?: Maybe<DocumentReferencesFields_EntityId_Delete>;
  read?: Maybe<DocumentReferencesFields_EntityId_Read>;
  update?: Maybe<DocumentReferencesFields_EntityId_Update>;
};

export type DocumentReferencesFields_EntityId_Create = {
  __typename?: 'DocumentReferencesFields_entityId_Create';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesFields_EntityId_Delete = {
  __typename?: 'DocumentReferencesFields_entityId_Delete';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesFields_EntityId_Read = {
  __typename?: 'DocumentReferencesFields_entityId_Read';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesFields_EntityId_Update = {
  __typename?: 'DocumentReferencesFields_entityId_Update';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesFields_EntityType = {
  __typename?: 'DocumentReferencesFields_entityType';
  create?: Maybe<DocumentReferencesFields_EntityType_Create>;
  delete?: Maybe<DocumentReferencesFields_EntityType_Delete>;
  read?: Maybe<DocumentReferencesFields_EntityType_Read>;
  update?: Maybe<DocumentReferencesFields_EntityType_Update>;
};

export type DocumentReferencesFields_EntityType_Create = {
  __typename?: 'DocumentReferencesFields_entityType_Create';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesFields_EntityType_Delete = {
  __typename?: 'DocumentReferencesFields_entityType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesFields_EntityType_Read = {
  __typename?: 'DocumentReferencesFields_entityType_Read';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesFields_EntityType_Update = {
  __typename?: 'DocumentReferencesFields_entityType_Update';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesFields_UpdatedAt = {
  __typename?: 'DocumentReferencesFields_updatedAt';
  create?: Maybe<DocumentReferencesFields_UpdatedAt_Create>;
  delete?: Maybe<DocumentReferencesFields_UpdatedAt_Delete>;
  read?: Maybe<DocumentReferencesFields_UpdatedAt_Read>;
  update?: Maybe<DocumentReferencesFields_UpdatedAt_Update>;
};

export type DocumentReferencesFields_UpdatedAt_Create = {
  __typename?: 'DocumentReferencesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesFields_UpdatedAt_Delete = {
  __typename?: 'DocumentReferencesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesFields_UpdatedAt_Read = {
  __typename?: 'DocumentReferencesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesFields_UpdatedAt_Update = {
  __typename?: 'DocumentReferencesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesFields_Workspace = {
  __typename?: 'DocumentReferencesFields_workspace';
  create?: Maybe<DocumentReferencesFields_Workspace_Create>;
  delete?: Maybe<DocumentReferencesFields_Workspace_Delete>;
  read?: Maybe<DocumentReferencesFields_Workspace_Read>;
  update?: Maybe<DocumentReferencesFields_Workspace_Update>;
};

export type DocumentReferencesFields_Workspace_Create = {
  __typename?: 'DocumentReferencesFields_workspace_Create';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesFields_Workspace_Delete = {
  __typename?: 'DocumentReferencesFields_workspace_Delete';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesFields_Workspace_Read = {
  __typename?: 'DocumentReferencesFields_workspace_Read';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesFields_Workspace_Update = {
  __typename?: 'DocumentReferencesFields_workspace_Update';
  permission: Scalars['Boolean']['output'];
};

export type DocumentReferencesReadAccess = {
  __typename?: 'DocumentReferencesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type DocumentReferencesReadDocAccess = {
  __typename?: 'DocumentReferencesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type DocumentReferencesUpdateAccess = {
  __typename?: 'DocumentReferencesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type DocumentReferencesUpdateDocAccess = {
  __typename?: 'DocumentReferencesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Interaction = {
  __typename?: 'Interaction';
  contacts?: Maybe<Array<Contact>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  interactionDate: Scalars['DateTime']['output'];
  interactionType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  workspace?: Maybe<Workspace>;
};

export type Interaction_Contacts_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Interaction_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Interaction_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Interaction_InteractionDate_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Interaction_InteractionType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Interaction_Notes_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Interaction_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Interaction_Where = {
  AND?: InputMaybe<Array<InputMaybe<Interaction_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Interaction_Where_Or>>>;
  contacts?: InputMaybe<Interaction_Contacts_Operator>;
  createdAt?: InputMaybe<Interaction_CreatedAt_Operator>;
  id?: InputMaybe<Interaction_Id_Operator>;
  interactionDate?: InputMaybe<Interaction_InteractionDate_Operator>;
  interactionType?: InputMaybe<Interaction_InteractionType_Operator>;
  notes?: InputMaybe<Interaction_Notes_Operator>;
  updatedAt?: InputMaybe<Interaction_UpdatedAt_Operator>;
  workspace?: InputMaybe<Interaction_Workspace_Operator>;
};

export type Interaction_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Interaction_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Interaction_Where_Or>>>;
  contacts?: InputMaybe<Interaction_Contacts_Operator>;
  createdAt?: InputMaybe<Interaction_CreatedAt_Operator>;
  id?: InputMaybe<Interaction_Id_Operator>;
  interactionDate?: InputMaybe<Interaction_InteractionDate_Operator>;
  interactionType?: InputMaybe<Interaction_InteractionType_Operator>;
  notes?: InputMaybe<Interaction_Notes_Operator>;
  updatedAt?: InputMaybe<Interaction_UpdatedAt_Operator>;
  workspace?: InputMaybe<Interaction_Workspace_Operator>;
};

export type Interaction_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Interaction_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Interaction_Where_Or>>>;
  contacts?: InputMaybe<Interaction_Contacts_Operator>;
  createdAt?: InputMaybe<Interaction_CreatedAt_Operator>;
  id?: InputMaybe<Interaction_Id_Operator>;
  interactionDate?: InputMaybe<Interaction_InteractionDate_Operator>;
  interactionType?: InputMaybe<Interaction_InteractionType_Operator>;
  notes?: InputMaybe<Interaction_Notes_Operator>;
  updatedAt?: InputMaybe<Interaction_UpdatedAt_Operator>;
  workspace?: InputMaybe<Interaction_Workspace_Operator>;
};

export type Interaction_Workspace_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Interactions = {
  __typename?: 'Interactions';
  docs?: Maybe<Array<Maybe<Interaction>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type InteractionsCreateAccess = {
  __typename?: 'InteractionsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type InteractionsCreateDocAccess = {
  __typename?: 'InteractionsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type InteractionsDeleteAccess = {
  __typename?: 'InteractionsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type InteractionsDeleteDocAccess = {
  __typename?: 'InteractionsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type InteractionsDocAccessFields = {
  __typename?: 'InteractionsDocAccessFields';
  contacts?: Maybe<InteractionsDocAccessFields_Contacts>;
  createdAt?: Maybe<InteractionsDocAccessFields_CreatedAt>;
  interactionDate?: Maybe<InteractionsDocAccessFields_InteractionDate>;
  interactionType?: Maybe<InteractionsDocAccessFields_InteractionType>;
  notes?: Maybe<InteractionsDocAccessFields_Notes>;
  updatedAt?: Maybe<InteractionsDocAccessFields_UpdatedAt>;
  workspace?: Maybe<InteractionsDocAccessFields_Workspace>;
};

export type InteractionsDocAccessFields_Contacts = {
  __typename?: 'InteractionsDocAccessFields_contacts';
  create?: Maybe<InteractionsDocAccessFields_Contacts_Create>;
  delete?: Maybe<InteractionsDocAccessFields_Contacts_Delete>;
  read?: Maybe<InteractionsDocAccessFields_Contacts_Read>;
  update?: Maybe<InteractionsDocAccessFields_Contacts_Update>;
};

export type InteractionsDocAccessFields_Contacts_Create = {
  __typename?: 'InteractionsDocAccessFields_contacts_Create';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsDocAccessFields_Contacts_Delete = {
  __typename?: 'InteractionsDocAccessFields_contacts_Delete';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsDocAccessFields_Contacts_Read = {
  __typename?: 'InteractionsDocAccessFields_contacts_Read';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsDocAccessFields_Contacts_Update = {
  __typename?: 'InteractionsDocAccessFields_contacts_Update';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsDocAccessFields_CreatedAt = {
  __typename?: 'InteractionsDocAccessFields_createdAt';
  create?: Maybe<InteractionsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<InteractionsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<InteractionsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<InteractionsDocAccessFields_CreatedAt_Update>;
};

export type InteractionsDocAccessFields_CreatedAt_Create = {
  __typename?: 'InteractionsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'InteractionsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsDocAccessFields_CreatedAt_Read = {
  __typename?: 'InteractionsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsDocAccessFields_CreatedAt_Update = {
  __typename?: 'InteractionsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsDocAccessFields_InteractionDate = {
  __typename?: 'InteractionsDocAccessFields_interactionDate';
  create?: Maybe<InteractionsDocAccessFields_InteractionDate_Create>;
  delete?: Maybe<InteractionsDocAccessFields_InteractionDate_Delete>;
  read?: Maybe<InteractionsDocAccessFields_InteractionDate_Read>;
  update?: Maybe<InteractionsDocAccessFields_InteractionDate_Update>;
};

export type InteractionsDocAccessFields_InteractionDate_Create = {
  __typename?: 'InteractionsDocAccessFields_interactionDate_Create';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsDocAccessFields_InteractionDate_Delete = {
  __typename?: 'InteractionsDocAccessFields_interactionDate_Delete';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsDocAccessFields_InteractionDate_Read = {
  __typename?: 'InteractionsDocAccessFields_interactionDate_Read';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsDocAccessFields_InteractionDate_Update = {
  __typename?: 'InteractionsDocAccessFields_interactionDate_Update';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsDocAccessFields_InteractionType = {
  __typename?: 'InteractionsDocAccessFields_interactionType';
  create?: Maybe<InteractionsDocAccessFields_InteractionType_Create>;
  delete?: Maybe<InteractionsDocAccessFields_InteractionType_Delete>;
  read?: Maybe<InteractionsDocAccessFields_InteractionType_Read>;
  update?: Maybe<InteractionsDocAccessFields_InteractionType_Update>;
};

export type InteractionsDocAccessFields_InteractionType_Create = {
  __typename?: 'InteractionsDocAccessFields_interactionType_Create';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsDocAccessFields_InteractionType_Delete = {
  __typename?: 'InteractionsDocAccessFields_interactionType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsDocAccessFields_InteractionType_Read = {
  __typename?: 'InteractionsDocAccessFields_interactionType_Read';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsDocAccessFields_InteractionType_Update = {
  __typename?: 'InteractionsDocAccessFields_interactionType_Update';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsDocAccessFields_Notes = {
  __typename?: 'InteractionsDocAccessFields_notes';
  create?: Maybe<InteractionsDocAccessFields_Notes_Create>;
  delete?: Maybe<InteractionsDocAccessFields_Notes_Delete>;
  read?: Maybe<InteractionsDocAccessFields_Notes_Read>;
  update?: Maybe<InteractionsDocAccessFields_Notes_Update>;
};

export type InteractionsDocAccessFields_Notes_Create = {
  __typename?: 'InteractionsDocAccessFields_notes_Create';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsDocAccessFields_Notes_Delete = {
  __typename?: 'InteractionsDocAccessFields_notes_Delete';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsDocAccessFields_Notes_Read = {
  __typename?: 'InteractionsDocAccessFields_notes_Read';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsDocAccessFields_Notes_Update = {
  __typename?: 'InteractionsDocAccessFields_notes_Update';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsDocAccessFields_UpdatedAt = {
  __typename?: 'InteractionsDocAccessFields_updatedAt';
  create?: Maybe<InteractionsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<InteractionsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<InteractionsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<InteractionsDocAccessFields_UpdatedAt_Update>;
};

export type InteractionsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'InteractionsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'InteractionsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'InteractionsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'InteractionsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsDocAccessFields_Workspace = {
  __typename?: 'InteractionsDocAccessFields_workspace';
  create?: Maybe<InteractionsDocAccessFields_Workspace_Create>;
  delete?: Maybe<InteractionsDocAccessFields_Workspace_Delete>;
  read?: Maybe<InteractionsDocAccessFields_Workspace_Read>;
  update?: Maybe<InteractionsDocAccessFields_Workspace_Update>;
};

export type InteractionsDocAccessFields_Workspace_Create = {
  __typename?: 'InteractionsDocAccessFields_workspace_Create';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsDocAccessFields_Workspace_Delete = {
  __typename?: 'InteractionsDocAccessFields_workspace_Delete';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsDocAccessFields_Workspace_Read = {
  __typename?: 'InteractionsDocAccessFields_workspace_Read';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsDocAccessFields_Workspace_Update = {
  __typename?: 'InteractionsDocAccessFields_workspace_Update';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsFields = {
  __typename?: 'InteractionsFields';
  contacts?: Maybe<InteractionsFields_Contacts>;
  createdAt?: Maybe<InteractionsFields_CreatedAt>;
  interactionDate?: Maybe<InteractionsFields_InteractionDate>;
  interactionType?: Maybe<InteractionsFields_InteractionType>;
  notes?: Maybe<InteractionsFields_Notes>;
  updatedAt?: Maybe<InteractionsFields_UpdatedAt>;
  workspace?: Maybe<InteractionsFields_Workspace>;
};

export type InteractionsFields_Contacts = {
  __typename?: 'InteractionsFields_contacts';
  create?: Maybe<InteractionsFields_Contacts_Create>;
  delete?: Maybe<InteractionsFields_Contacts_Delete>;
  read?: Maybe<InteractionsFields_Contacts_Read>;
  update?: Maybe<InteractionsFields_Contacts_Update>;
};

export type InteractionsFields_Contacts_Create = {
  __typename?: 'InteractionsFields_contacts_Create';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsFields_Contacts_Delete = {
  __typename?: 'InteractionsFields_contacts_Delete';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsFields_Contacts_Read = {
  __typename?: 'InteractionsFields_contacts_Read';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsFields_Contacts_Update = {
  __typename?: 'InteractionsFields_contacts_Update';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsFields_CreatedAt = {
  __typename?: 'InteractionsFields_createdAt';
  create?: Maybe<InteractionsFields_CreatedAt_Create>;
  delete?: Maybe<InteractionsFields_CreatedAt_Delete>;
  read?: Maybe<InteractionsFields_CreatedAt_Read>;
  update?: Maybe<InteractionsFields_CreatedAt_Update>;
};

export type InteractionsFields_CreatedAt_Create = {
  __typename?: 'InteractionsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsFields_CreatedAt_Delete = {
  __typename?: 'InteractionsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsFields_CreatedAt_Read = {
  __typename?: 'InteractionsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsFields_CreatedAt_Update = {
  __typename?: 'InteractionsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsFields_InteractionDate = {
  __typename?: 'InteractionsFields_interactionDate';
  create?: Maybe<InteractionsFields_InteractionDate_Create>;
  delete?: Maybe<InteractionsFields_InteractionDate_Delete>;
  read?: Maybe<InteractionsFields_InteractionDate_Read>;
  update?: Maybe<InteractionsFields_InteractionDate_Update>;
};

export type InteractionsFields_InteractionDate_Create = {
  __typename?: 'InteractionsFields_interactionDate_Create';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsFields_InteractionDate_Delete = {
  __typename?: 'InteractionsFields_interactionDate_Delete';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsFields_InteractionDate_Read = {
  __typename?: 'InteractionsFields_interactionDate_Read';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsFields_InteractionDate_Update = {
  __typename?: 'InteractionsFields_interactionDate_Update';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsFields_InteractionType = {
  __typename?: 'InteractionsFields_interactionType';
  create?: Maybe<InteractionsFields_InteractionType_Create>;
  delete?: Maybe<InteractionsFields_InteractionType_Delete>;
  read?: Maybe<InteractionsFields_InteractionType_Read>;
  update?: Maybe<InteractionsFields_InteractionType_Update>;
};

export type InteractionsFields_InteractionType_Create = {
  __typename?: 'InteractionsFields_interactionType_Create';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsFields_InteractionType_Delete = {
  __typename?: 'InteractionsFields_interactionType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsFields_InteractionType_Read = {
  __typename?: 'InteractionsFields_interactionType_Read';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsFields_InteractionType_Update = {
  __typename?: 'InteractionsFields_interactionType_Update';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsFields_Notes = {
  __typename?: 'InteractionsFields_notes';
  create?: Maybe<InteractionsFields_Notes_Create>;
  delete?: Maybe<InteractionsFields_Notes_Delete>;
  read?: Maybe<InteractionsFields_Notes_Read>;
  update?: Maybe<InteractionsFields_Notes_Update>;
};

export type InteractionsFields_Notes_Create = {
  __typename?: 'InteractionsFields_notes_Create';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsFields_Notes_Delete = {
  __typename?: 'InteractionsFields_notes_Delete';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsFields_Notes_Read = {
  __typename?: 'InteractionsFields_notes_Read';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsFields_Notes_Update = {
  __typename?: 'InteractionsFields_notes_Update';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsFields_UpdatedAt = {
  __typename?: 'InteractionsFields_updatedAt';
  create?: Maybe<InteractionsFields_UpdatedAt_Create>;
  delete?: Maybe<InteractionsFields_UpdatedAt_Delete>;
  read?: Maybe<InteractionsFields_UpdatedAt_Read>;
  update?: Maybe<InteractionsFields_UpdatedAt_Update>;
};

export type InteractionsFields_UpdatedAt_Create = {
  __typename?: 'InteractionsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsFields_UpdatedAt_Delete = {
  __typename?: 'InteractionsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsFields_UpdatedAt_Read = {
  __typename?: 'InteractionsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsFields_UpdatedAt_Update = {
  __typename?: 'InteractionsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsFields_Workspace = {
  __typename?: 'InteractionsFields_workspace';
  create?: Maybe<InteractionsFields_Workspace_Create>;
  delete?: Maybe<InteractionsFields_Workspace_Delete>;
  read?: Maybe<InteractionsFields_Workspace_Read>;
  update?: Maybe<InteractionsFields_Workspace_Update>;
};

export type InteractionsFields_Workspace_Create = {
  __typename?: 'InteractionsFields_workspace_Create';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsFields_Workspace_Delete = {
  __typename?: 'InteractionsFields_workspace_Delete';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsFields_Workspace_Read = {
  __typename?: 'InteractionsFields_workspace_Read';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsFields_Workspace_Update = {
  __typename?: 'InteractionsFields_workspace_Update';
  permission: Scalars['Boolean']['output'];
};

export type InteractionsReadAccess = {
  __typename?: 'InteractionsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type InteractionsReadDocAccess = {
  __typename?: 'InteractionsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type InteractionsUpdateAccess = {
  __typename?: 'InteractionsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type InteractionsUpdateDocAccess = {
  __typename?: 'InteractionsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Lead = {
  __typename?: 'Lead';
  assignment?: Maybe<Assignment>;
  company?: Maybe<Company>;
  contact?: Maybe<Contact>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  leadTitle: Scalars['String']['output'];
  rank?: Maybe<Scalars['Float']['output']>;
  stage?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  workspace?: Maybe<Workspace>;
};

export type Lead_Assignment_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Lead_Company_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Lead_Contact_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Lead_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Lead_Description_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Lead_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Lead_LeadTitle_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Lead_Rank_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Lead_Stage_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Lead_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Lead_Where = {
  AND?: InputMaybe<Array<InputMaybe<Lead_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Lead_Where_Or>>>;
  assignment?: InputMaybe<Lead_Assignment_Operator>;
  company?: InputMaybe<Lead_Company_Operator>;
  contact?: InputMaybe<Lead_Contact_Operator>;
  createdAt?: InputMaybe<Lead_CreatedAt_Operator>;
  description?: InputMaybe<Lead_Description_Operator>;
  id?: InputMaybe<Lead_Id_Operator>;
  leadTitle?: InputMaybe<Lead_LeadTitle_Operator>;
  rank?: InputMaybe<Lead_Rank_Operator>;
  stage?: InputMaybe<Lead_Stage_Operator>;
  updatedAt?: InputMaybe<Lead_UpdatedAt_Operator>;
  workspace?: InputMaybe<Lead_Workspace_Operator>;
};

export type Lead_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Lead_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Lead_Where_Or>>>;
  assignment?: InputMaybe<Lead_Assignment_Operator>;
  company?: InputMaybe<Lead_Company_Operator>;
  contact?: InputMaybe<Lead_Contact_Operator>;
  createdAt?: InputMaybe<Lead_CreatedAt_Operator>;
  description?: InputMaybe<Lead_Description_Operator>;
  id?: InputMaybe<Lead_Id_Operator>;
  leadTitle?: InputMaybe<Lead_LeadTitle_Operator>;
  rank?: InputMaybe<Lead_Rank_Operator>;
  stage?: InputMaybe<Lead_Stage_Operator>;
  updatedAt?: InputMaybe<Lead_UpdatedAt_Operator>;
  workspace?: InputMaybe<Lead_Workspace_Operator>;
};

export type Lead_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Lead_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Lead_Where_Or>>>;
  assignment?: InputMaybe<Lead_Assignment_Operator>;
  company?: InputMaybe<Lead_Company_Operator>;
  contact?: InputMaybe<Lead_Contact_Operator>;
  createdAt?: InputMaybe<Lead_CreatedAt_Operator>;
  description?: InputMaybe<Lead_Description_Operator>;
  id?: InputMaybe<Lead_Id_Operator>;
  leadTitle?: InputMaybe<Lead_LeadTitle_Operator>;
  rank?: InputMaybe<Lead_Rank_Operator>;
  stage?: InputMaybe<Lead_Stage_Operator>;
  updatedAt?: InputMaybe<Lead_UpdatedAt_Operator>;
  workspace?: InputMaybe<Lead_Workspace_Operator>;
};

export type Lead_Workspace_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Leads = {
  __typename?: 'Leads';
  docs?: Maybe<Array<Maybe<Lead>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type LeadsCreateAccess = {
  __typename?: 'LeadsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LeadsCreateDocAccess = {
  __typename?: 'LeadsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LeadsDeleteAccess = {
  __typename?: 'LeadsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LeadsDeleteDocAccess = {
  __typename?: 'LeadsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LeadsDocAccessFields = {
  __typename?: 'LeadsDocAccessFields';
  assignment?: Maybe<LeadsDocAccessFields_Assignment>;
  company?: Maybe<LeadsDocAccessFields_Company>;
  contact?: Maybe<LeadsDocAccessFields_Contact>;
  createdAt?: Maybe<LeadsDocAccessFields_CreatedAt>;
  description?: Maybe<LeadsDocAccessFields_Description>;
  leadTitle?: Maybe<LeadsDocAccessFields_LeadTitle>;
  rank?: Maybe<LeadsDocAccessFields_Rank>;
  stage?: Maybe<LeadsDocAccessFields_Stage>;
  updatedAt?: Maybe<LeadsDocAccessFields_UpdatedAt>;
  workspace?: Maybe<LeadsDocAccessFields_Workspace>;
};

export type LeadsDocAccessFields_Assignment = {
  __typename?: 'LeadsDocAccessFields_assignment';
  create?: Maybe<LeadsDocAccessFields_Assignment_Create>;
  delete?: Maybe<LeadsDocAccessFields_Assignment_Delete>;
  read?: Maybe<LeadsDocAccessFields_Assignment_Read>;
  update?: Maybe<LeadsDocAccessFields_Assignment_Update>;
};

export type LeadsDocAccessFields_Assignment_Create = {
  __typename?: 'LeadsDocAccessFields_assignment_Create';
  permission: Scalars['Boolean']['output'];
};

export type LeadsDocAccessFields_Assignment_Delete = {
  __typename?: 'LeadsDocAccessFields_assignment_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LeadsDocAccessFields_Assignment_Read = {
  __typename?: 'LeadsDocAccessFields_assignment_Read';
  permission: Scalars['Boolean']['output'];
};

export type LeadsDocAccessFields_Assignment_Update = {
  __typename?: 'LeadsDocAccessFields_assignment_Update';
  permission: Scalars['Boolean']['output'];
};

export type LeadsDocAccessFields_Company = {
  __typename?: 'LeadsDocAccessFields_company';
  create?: Maybe<LeadsDocAccessFields_Company_Create>;
  delete?: Maybe<LeadsDocAccessFields_Company_Delete>;
  read?: Maybe<LeadsDocAccessFields_Company_Read>;
  update?: Maybe<LeadsDocAccessFields_Company_Update>;
};

export type LeadsDocAccessFields_Company_Create = {
  __typename?: 'LeadsDocAccessFields_company_Create';
  permission: Scalars['Boolean']['output'];
};

export type LeadsDocAccessFields_Company_Delete = {
  __typename?: 'LeadsDocAccessFields_company_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LeadsDocAccessFields_Company_Read = {
  __typename?: 'LeadsDocAccessFields_company_Read';
  permission: Scalars['Boolean']['output'];
};

export type LeadsDocAccessFields_Company_Update = {
  __typename?: 'LeadsDocAccessFields_company_Update';
  permission: Scalars['Boolean']['output'];
};

export type LeadsDocAccessFields_Contact = {
  __typename?: 'LeadsDocAccessFields_contact';
  create?: Maybe<LeadsDocAccessFields_Contact_Create>;
  delete?: Maybe<LeadsDocAccessFields_Contact_Delete>;
  read?: Maybe<LeadsDocAccessFields_Contact_Read>;
  update?: Maybe<LeadsDocAccessFields_Contact_Update>;
};

export type LeadsDocAccessFields_Contact_Create = {
  __typename?: 'LeadsDocAccessFields_contact_Create';
  permission: Scalars['Boolean']['output'];
};

export type LeadsDocAccessFields_Contact_Delete = {
  __typename?: 'LeadsDocAccessFields_contact_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LeadsDocAccessFields_Contact_Read = {
  __typename?: 'LeadsDocAccessFields_contact_Read';
  permission: Scalars['Boolean']['output'];
};

export type LeadsDocAccessFields_Contact_Update = {
  __typename?: 'LeadsDocAccessFields_contact_Update';
  permission: Scalars['Boolean']['output'];
};

export type LeadsDocAccessFields_CreatedAt = {
  __typename?: 'LeadsDocAccessFields_createdAt';
  create?: Maybe<LeadsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<LeadsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<LeadsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<LeadsDocAccessFields_CreatedAt_Update>;
};

export type LeadsDocAccessFields_CreatedAt_Create = {
  __typename?: 'LeadsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type LeadsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'LeadsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LeadsDocAccessFields_CreatedAt_Read = {
  __typename?: 'LeadsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type LeadsDocAccessFields_CreatedAt_Update = {
  __typename?: 'LeadsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type LeadsDocAccessFields_Description = {
  __typename?: 'LeadsDocAccessFields_description';
  create?: Maybe<LeadsDocAccessFields_Description_Create>;
  delete?: Maybe<LeadsDocAccessFields_Description_Delete>;
  read?: Maybe<LeadsDocAccessFields_Description_Read>;
  update?: Maybe<LeadsDocAccessFields_Description_Update>;
};

export type LeadsDocAccessFields_Description_Create = {
  __typename?: 'LeadsDocAccessFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type LeadsDocAccessFields_Description_Delete = {
  __typename?: 'LeadsDocAccessFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LeadsDocAccessFields_Description_Read = {
  __typename?: 'LeadsDocAccessFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type LeadsDocAccessFields_Description_Update = {
  __typename?: 'LeadsDocAccessFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type LeadsDocAccessFields_LeadTitle = {
  __typename?: 'LeadsDocAccessFields_leadTitle';
  create?: Maybe<LeadsDocAccessFields_LeadTitle_Create>;
  delete?: Maybe<LeadsDocAccessFields_LeadTitle_Delete>;
  read?: Maybe<LeadsDocAccessFields_LeadTitle_Read>;
  update?: Maybe<LeadsDocAccessFields_LeadTitle_Update>;
};

export type LeadsDocAccessFields_LeadTitle_Create = {
  __typename?: 'LeadsDocAccessFields_leadTitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type LeadsDocAccessFields_LeadTitle_Delete = {
  __typename?: 'LeadsDocAccessFields_leadTitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LeadsDocAccessFields_LeadTitle_Read = {
  __typename?: 'LeadsDocAccessFields_leadTitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type LeadsDocAccessFields_LeadTitle_Update = {
  __typename?: 'LeadsDocAccessFields_leadTitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type LeadsDocAccessFields_Rank = {
  __typename?: 'LeadsDocAccessFields_rank';
  create?: Maybe<LeadsDocAccessFields_Rank_Create>;
  delete?: Maybe<LeadsDocAccessFields_Rank_Delete>;
  read?: Maybe<LeadsDocAccessFields_Rank_Read>;
  update?: Maybe<LeadsDocAccessFields_Rank_Update>;
};

export type LeadsDocAccessFields_Rank_Create = {
  __typename?: 'LeadsDocAccessFields_rank_Create';
  permission: Scalars['Boolean']['output'];
};

export type LeadsDocAccessFields_Rank_Delete = {
  __typename?: 'LeadsDocAccessFields_rank_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LeadsDocAccessFields_Rank_Read = {
  __typename?: 'LeadsDocAccessFields_rank_Read';
  permission: Scalars['Boolean']['output'];
};

export type LeadsDocAccessFields_Rank_Update = {
  __typename?: 'LeadsDocAccessFields_rank_Update';
  permission: Scalars['Boolean']['output'];
};

export type LeadsDocAccessFields_Stage = {
  __typename?: 'LeadsDocAccessFields_stage';
  create?: Maybe<LeadsDocAccessFields_Stage_Create>;
  delete?: Maybe<LeadsDocAccessFields_Stage_Delete>;
  read?: Maybe<LeadsDocAccessFields_Stage_Read>;
  update?: Maybe<LeadsDocAccessFields_Stage_Update>;
};

export type LeadsDocAccessFields_Stage_Create = {
  __typename?: 'LeadsDocAccessFields_stage_Create';
  permission: Scalars['Boolean']['output'];
};

export type LeadsDocAccessFields_Stage_Delete = {
  __typename?: 'LeadsDocAccessFields_stage_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LeadsDocAccessFields_Stage_Read = {
  __typename?: 'LeadsDocAccessFields_stage_Read';
  permission: Scalars['Boolean']['output'];
};

export type LeadsDocAccessFields_Stage_Update = {
  __typename?: 'LeadsDocAccessFields_stage_Update';
  permission: Scalars['Boolean']['output'];
};

export type LeadsDocAccessFields_UpdatedAt = {
  __typename?: 'LeadsDocAccessFields_updatedAt';
  create?: Maybe<LeadsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<LeadsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<LeadsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<LeadsDocAccessFields_UpdatedAt_Update>;
};

export type LeadsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'LeadsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type LeadsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'LeadsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LeadsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'LeadsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type LeadsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'LeadsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type LeadsDocAccessFields_Workspace = {
  __typename?: 'LeadsDocAccessFields_workspace';
  create?: Maybe<LeadsDocAccessFields_Workspace_Create>;
  delete?: Maybe<LeadsDocAccessFields_Workspace_Delete>;
  read?: Maybe<LeadsDocAccessFields_Workspace_Read>;
  update?: Maybe<LeadsDocAccessFields_Workspace_Update>;
};

export type LeadsDocAccessFields_Workspace_Create = {
  __typename?: 'LeadsDocAccessFields_workspace_Create';
  permission: Scalars['Boolean']['output'];
};

export type LeadsDocAccessFields_Workspace_Delete = {
  __typename?: 'LeadsDocAccessFields_workspace_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LeadsDocAccessFields_Workspace_Read = {
  __typename?: 'LeadsDocAccessFields_workspace_Read';
  permission: Scalars['Boolean']['output'];
};

export type LeadsDocAccessFields_Workspace_Update = {
  __typename?: 'LeadsDocAccessFields_workspace_Update';
  permission: Scalars['Boolean']['output'];
};

export type LeadsFields = {
  __typename?: 'LeadsFields';
  assignment?: Maybe<LeadsFields_Assignment>;
  company?: Maybe<LeadsFields_Company>;
  contact?: Maybe<LeadsFields_Contact>;
  createdAt?: Maybe<LeadsFields_CreatedAt>;
  description?: Maybe<LeadsFields_Description>;
  leadTitle?: Maybe<LeadsFields_LeadTitle>;
  rank?: Maybe<LeadsFields_Rank>;
  stage?: Maybe<LeadsFields_Stage>;
  updatedAt?: Maybe<LeadsFields_UpdatedAt>;
  workspace?: Maybe<LeadsFields_Workspace>;
};

export type LeadsFields_Assignment = {
  __typename?: 'LeadsFields_assignment';
  create?: Maybe<LeadsFields_Assignment_Create>;
  delete?: Maybe<LeadsFields_Assignment_Delete>;
  read?: Maybe<LeadsFields_Assignment_Read>;
  update?: Maybe<LeadsFields_Assignment_Update>;
};

export type LeadsFields_Assignment_Create = {
  __typename?: 'LeadsFields_assignment_Create';
  permission: Scalars['Boolean']['output'];
};

export type LeadsFields_Assignment_Delete = {
  __typename?: 'LeadsFields_assignment_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LeadsFields_Assignment_Read = {
  __typename?: 'LeadsFields_assignment_Read';
  permission: Scalars['Boolean']['output'];
};

export type LeadsFields_Assignment_Update = {
  __typename?: 'LeadsFields_assignment_Update';
  permission: Scalars['Boolean']['output'];
};

export type LeadsFields_Company = {
  __typename?: 'LeadsFields_company';
  create?: Maybe<LeadsFields_Company_Create>;
  delete?: Maybe<LeadsFields_Company_Delete>;
  read?: Maybe<LeadsFields_Company_Read>;
  update?: Maybe<LeadsFields_Company_Update>;
};

export type LeadsFields_Company_Create = {
  __typename?: 'LeadsFields_company_Create';
  permission: Scalars['Boolean']['output'];
};

export type LeadsFields_Company_Delete = {
  __typename?: 'LeadsFields_company_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LeadsFields_Company_Read = {
  __typename?: 'LeadsFields_company_Read';
  permission: Scalars['Boolean']['output'];
};

export type LeadsFields_Company_Update = {
  __typename?: 'LeadsFields_company_Update';
  permission: Scalars['Boolean']['output'];
};

export type LeadsFields_Contact = {
  __typename?: 'LeadsFields_contact';
  create?: Maybe<LeadsFields_Contact_Create>;
  delete?: Maybe<LeadsFields_Contact_Delete>;
  read?: Maybe<LeadsFields_Contact_Read>;
  update?: Maybe<LeadsFields_Contact_Update>;
};

export type LeadsFields_Contact_Create = {
  __typename?: 'LeadsFields_contact_Create';
  permission: Scalars['Boolean']['output'];
};

export type LeadsFields_Contact_Delete = {
  __typename?: 'LeadsFields_contact_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LeadsFields_Contact_Read = {
  __typename?: 'LeadsFields_contact_Read';
  permission: Scalars['Boolean']['output'];
};

export type LeadsFields_Contact_Update = {
  __typename?: 'LeadsFields_contact_Update';
  permission: Scalars['Boolean']['output'];
};

export type LeadsFields_CreatedAt = {
  __typename?: 'LeadsFields_createdAt';
  create?: Maybe<LeadsFields_CreatedAt_Create>;
  delete?: Maybe<LeadsFields_CreatedAt_Delete>;
  read?: Maybe<LeadsFields_CreatedAt_Read>;
  update?: Maybe<LeadsFields_CreatedAt_Update>;
};

export type LeadsFields_CreatedAt_Create = {
  __typename?: 'LeadsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type LeadsFields_CreatedAt_Delete = {
  __typename?: 'LeadsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LeadsFields_CreatedAt_Read = {
  __typename?: 'LeadsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type LeadsFields_CreatedAt_Update = {
  __typename?: 'LeadsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type LeadsFields_Description = {
  __typename?: 'LeadsFields_description';
  create?: Maybe<LeadsFields_Description_Create>;
  delete?: Maybe<LeadsFields_Description_Delete>;
  read?: Maybe<LeadsFields_Description_Read>;
  update?: Maybe<LeadsFields_Description_Update>;
};

export type LeadsFields_Description_Create = {
  __typename?: 'LeadsFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type LeadsFields_Description_Delete = {
  __typename?: 'LeadsFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LeadsFields_Description_Read = {
  __typename?: 'LeadsFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type LeadsFields_Description_Update = {
  __typename?: 'LeadsFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type LeadsFields_LeadTitle = {
  __typename?: 'LeadsFields_leadTitle';
  create?: Maybe<LeadsFields_LeadTitle_Create>;
  delete?: Maybe<LeadsFields_LeadTitle_Delete>;
  read?: Maybe<LeadsFields_LeadTitle_Read>;
  update?: Maybe<LeadsFields_LeadTitle_Update>;
};

export type LeadsFields_LeadTitle_Create = {
  __typename?: 'LeadsFields_leadTitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type LeadsFields_LeadTitle_Delete = {
  __typename?: 'LeadsFields_leadTitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LeadsFields_LeadTitle_Read = {
  __typename?: 'LeadsFields_leadTitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type LeadsFields_LeadTitle_Update = {
  __typename?: 'LeadsFields_leadTitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type LeadsFields_Rank = {
  __typename?: 'LeadsFields_rank';
  create?: Maybe<LeadsFields_Rank_Create>;
  delete?: Maybe<LeadsFields_Rank_Delete>;
  read?: Maybe<LeadsFields_Rank_Read>;
  update?: Maybe<LeadsFields_Rank_Update>;
};

export type LeadsFields_Rank_Create = {
  __typename?: 'LeadsFields_rank_Create';
  permission: Scalars['Boolean']['output'];
};

export type LeadsFields_Rank_Delete = {
  __typename?: 'LeadsFields_rank_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LeadsFields_Rank_Read = {
  __typename?: 'LeadsFields_rank_Read';
  permission: Scalars['Boolean']['output'];
};

export type LeadsFields_Rank_Update = {
  __typename?: 'LeadsFields_rank_Update';
  permission: Scalars['Boolean']['output'];
};

export type LeadsFields_Stage = {
  __typename?: 'LeadsFields_stage';
  create?: Maybe<LeadsFields_Stage_Create>;
  delete?: Maybe<LeadsFields_Stage_Delete>;
  read?: Maybe<LeadsFields_Stage_Read>;
  update?: Maybe<LeadsFields_Stage_Update>;
};

export type LeadsFields_Stage_Create = {
  __typename?: 'LeadsFields_stage_Create';
  permission: Scalars['Boolean']['output'];
};

export type LeadsFields_Stage_Delete = {
  __typename?: 'LeadsFields_stage_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LeadsFields_Stage_Read = {
  __typename?: 'LeadsFields_stage_Read';
  permission: Scalars['Boolean']['output'];
};

export type LeadsFields_Stage_Update = {
  __typename?: 'LeadsFields_stage_Update';
  permission: Scalars['Boolean']['output'];
};

export type LeadsFields_UpdatedAt = {
  __typename?: 'LeadsFields_updatedAt';
  create?: Maybe<LeadsFields_UpdatedAt_Create>;
  delete?: Maybe<LeadsFields_UpdatedAt_Delete>;
  read?: Maybe<LeadsFields_UpdatedAt_Read>;
  update?: Maybe<LeadsFields_UpdatedAt_Update>;
};

export type LeadsFields_UpdatedAt_Create = {
  __typename?: 'LeadsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type LeadsFields_UpdatedAt_Delete = {
  __typename?: 'LeadsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LeadsFields_UpdatedAt_Read = {
  __typename?: 'LeadsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type LeadsFields_UpdatedAt_Update = {
  __typename?: 'LeadsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type LeadsFields_Workspace = {
  __typename?: 'LeadsFields_workspace';
  create?: Maybe<LeadsFields_Workspace_Create>;
  delete?: Maybe<LeadsFields_Workspace_Delete>;
  read?: Maybe<LeadsFields_Workspace_Read>;
  update?: Maybe<LeadsFields_Workspace_Update>;
};

export type LeadsFields_Workspace_Create = {
  __typename?: 'LeadsFields_workspace_Create';
  permission: Scalars['Boolean']['output'];
};

export type LeadsFields_Workspace_Delete = {
  __typename?: 'LeadsFields_workspace_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LeadsFields_Workspace_Read = {
  __typename?: 'LeadsFields_workspace_Read';
  permission: Scalars['Boolean']['output'];
};

export type LeadsFields_Workspace_Update = {
  __typename?: 'LeadsFields_workspace_Update';
  permission: Scalars['Boolean']['output'];
};

export type LeadsReadAccess = {
  __typename?: 'LeadsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LeadsReadDocAccess = {
  __typename?: 'LeadsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LeadsUpdateAccess = {
  __typename?: 'LeadsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LeadsUpdateDocAccess = {
  __typename?: 'LeadsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Media = {
  __typename?: 'Media';
  alt?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  focalX?: Maybe<Scalars['Float']['output']>;
  focalY?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  id: Scalars['String']['output'];
  mimeType?: Maybe<Scalars['String']['output']>;
  sizes?: Maybe<Media_Sizes>;
  thumbnailURL?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
  workspace?: Maybe<Workspace>;
};

export type MediaCreateAccess = {
  __typename?: 'MediaCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaCreateDocAccess = {
  __typename?: 'MediaCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteAccess = {
  __typename?: 'MediaDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteDocAccess = {
  __typename?: 'MediaDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDocAccessFields = {
  __typename?: 'MediaDocAccessFields';
  alt?: Maybe<MediaDocAccessFields_Alt>;
  createdAt?: Maybe<MediaDocAccessFields_CreatedAt>;
  filename?: Maybe<MediaDocAccessFields_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Filesize>;
  focalX?: Maybe<MediaDocAccessFields_FocalX>;
  focalY?: Maybe<MediaDocAccessFields_FocalY>;
  height?: Maybe<MediaDocAccessFields_Height>;
  mimeType?: Maybe<MediaDocAccessFields_MimeType>;
  sizes?: Maybe<MediaDocAccessFields_Sizes>;
  thumbnailURL?: Maybe<MediaDocAccessFields_ThumbnailUrl>;
  updatedAt?: Maybe<MediaDocAccessFields_UpdatedAt>;
  url?: Maybe<MediaDocAccessFields_Url>;
  width?: Maybe<MediaDocAccessFields_Width>;
  workspace?: Maybe<MediaDocAccessFields_Workspace>;
};

export type MediaDocAccessFields_Alt = {
  __typename?: 'MediaDocAccessFields_alt';
  create?: Maybe<MediaDocAccessFields_Alt_Create>;
  delete?: Maybe<MediaDocAccessFields_Alt_Delete>;
  read?: Maybe<MediaDocAccessFields_Alt_Read>;
  update?: Maybe<MediaDocAccessFields_Alt_Update>;
};

export type MediaDocAccessFields_Alt_Create = {
  __typename?: 'MediaDocAccessFields_alt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Delete = {
  __typename?: 'MediaDocAccessFields_alt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Read = {
  __typename?: 'MediaDocAccessFields_alt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Update = {
  __typename?: 'MediaDocAccessFields_alt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt = {
  __typename?: 'MediaDocAccessFields_createdAt';
  create?: Maybe<MediaDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_CreatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_CreatedAt_Update>;
};

export type MediaDocAccessFields_CreatedAt_Create = {
  __typename?: 'MediaDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Read = {
  __typename?: 'MediaDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Update = {
  __typename?: 'MediaDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename = {
  __typename?: 'MediaDocAccessFields_filename';
  create?: Maybe<MediaDocAccessFields_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Filename_Update>;
};

export type MediaDocAccessFields_Filename_Create = {
  __typename?: 'MediaDocAccessFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Read = {
  __typename?: 'MediaDocAccessFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Update = {
  __typename?: 'MediaDocAccessFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize = {
  __typename?: 'MediaDocAccessFields_filesize';
  create?: Maybe<MediaDocAccessFields_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Filesize_Update>;
};

export type MediaDocAccessFields_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX = {
  __typename?: 'MediaDocAccessFields_focalX';
  create?: Maybe<MediaDocAccessFields_FocalX_Create>;
  delete?: Maybe<MediaDocAccessFields_FocalX_Delete>;
  read?: Maybe<MediaDocAccessFields_FocalX_Read>;
  update?: Maybe<MediaDocAccessFields_FocalX_Update>;
};

export type MediaDocAccessFields_FocalX_Create = {
  __typename?: 'MediaDocAccessFields_focalX_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Delete = {
  __typename?: 'MediaDocAccessFields_focalX_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Read = {
  __typename?: 'MediaDocAccessFields_focalX_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Update = {
  __typename?: 'MediaDocAccessFields_focalX_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY = {
  __typename?: 'MediaDocAccessFields_focalY';
  create?: Maybe<MediaDocAccessFields_FocalY_Create>;
  delete?: Maybe<MediaDocAccessFields_FocalY_Delete>;
  read?: Maybe<MediaDocAccessFields_FocalY_Read>;
  update?: Maybe<MediaDocAccessFields_FocalY_Update>;
};

export type MediaDocAccessFields_FocalY_Create = {
  __typename?: 'MediaDocAccessFields_focalY_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Delete = {
  __typename?: 'MediaDocAccessFields_focalY_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Read = {
  __typename?: 'MediaDocAccessFields_focalY_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Update = {
  __typename?: 'MediaDocAccessFields_focalY_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height = {
  __typename?: 'MediaDocAccessFields_height';
  create?: Maybe<MediaDocAccessFields_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Height_Update>;
};

export type MediaDocAccessFields_Height_Create = {
  __typename?: 'MediaDocAccessFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Delete = {
  __typename?: 'MediaDocAccessFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Read = {
  __typename?: 'MediaDocAccessFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Update = {
  __typename?: 'MediaDocAccessFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType = {
  __typename?: 'MediaDocAccessFields_mimeType';
  create?: Maybe<MediaDocAccessFields_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_MimeType_Update>;
};

export type MediaDocAccessFields_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes = {
  __typename?: 'MediaDocAccessFields_sizes';
  create?: Maybe<MediaDocAccessFields_Sizes_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Update>;
};

export type MediaDocAccessFields_Sizes_Create = {
  __typename?: 'MediaDocAccessFields_sizes_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_Fields';
  large?: Maybe<MediaDocAccessFields_Sizes_Large>;
  small?: Maybe<MediaDocAccessFields_Sizes_Small>;
  tablet?: Maybe<MediaDocAccessFields_Sizes_Tablet>;
  thumbnail?: Maybe<MediaDocAccessFields_Sizes_Thumbnail>;
};

export type MediaDocAccessFields_Sizes_Read = {
  __typename?: 'MediaDocAccessFields_sizes_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Update = {
  __typename?: 'MediaDocAccessFields_sizes_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large = {
  __typename?: 'MediaDocAccessFields_sizes_large';
  create?: Maybe<MediaDocAccessFields_Sizes_Large_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Large_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Large_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Large_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Large_Update>;
};

export type MediaDocAccessFields_Sizes_Large_Create = {
  __typename?: 'MediaDocAccessFields_sizes_large_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_large_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_large_Fields';
  filename?: Maybe<MediaDocAccessFields_Sizes_Large_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Large_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Large_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Large_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Large_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Large_Width>;
};

export type MediaDocAccessFields_Sizes_Large_Read = {
  __typename?: 'MediaDocAccessFields_sizes_large_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Update = {
  __typename?: 'MediaDocAccessFields_sizes_large_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Filename = {
  __typename?: 'MediaDocAccessFields_sizes_large_filename';
  create?: Maybe<MediaDocAccessFields_Sizes_Large_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Large_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Large_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Large_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Large_Filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_large_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_large_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_large_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_large_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Filesize = {
  __typename?: 'MediaDocAccessFields_sizes_large_filesize';
  create?: Maybe<MediaDocAccessFields_Sizes_Large_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Large_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Large_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Large_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Large_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_large_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_large_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_large_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_large_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Height = {
  __typename?: 'MediaDocAccessFields_sizes_large_height';
  create?: Maybe<MediaDocAccessFields_Sizes_Large_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Large_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Large_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Large_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Large_Height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_large_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_large_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_large_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_large_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_MimeType = {
  __typename?: 'MediaDocAccessFields_sizes_large_mimeType';
  create?: Maybe<MediaDocAccessFields_Sizes_Large_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Large_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Large_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Large_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Large_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_large_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_large_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_large_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_large_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Url = {
  __typename?: 'MediaDocAccessFields_sizes_large_url';
  create?: Maybe<MediaDocAccessFields_Sizes_Large_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Large_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Large_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Large_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Large_Url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_large_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_large_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_large_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_large_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Width = {
  __typename?: 'MediaDocAccessFields_sizes_large_width';
  create?: Maybe<MediaDocAccessFields_Sizes_Large_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Large_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Large_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Large_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Large_Width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_large_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_large_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_large_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_large_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small = {
  __typename?: 'MediaDocAccessFields_sizes_small';
  create?: Maybe<MediaDocAccessFields_Sizes_Small_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Small_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Small_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Small_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Small_Update>;
};

export type MediaDocAccessFields_Sizes_Small_Create = {
  __typename?: 'MediaDocAccessFields_sizes_small_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_small_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_small_Fields';
  filename?: Maybe<MediaDocAccessFields_Sizes_Small_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Small_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Small_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Small_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Small_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Small_Width>;
};

export type MediaDocAccessFields_Sizes_Small_Read = {
  __typename?: 'MediaDocAccessFields_sizes_small_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Update = {
  __typename?: 'MediaDocAccessFields_sizes_small_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Filename = {
  __typename?: 'MediaDocAccessFields_sizes_small_filename';
  create?: Maybe<MediaDocAccessFields_Sizes_Small_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Small_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Small_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Small_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Small_Filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_small_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_small_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_small_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_small_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Filesize = {
  __typename?: 'MediaDocAccessFields_sizes_small_filesize';
  create?: Maybe<MediaDocAccessFields_Sizes_Small_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Small_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Small_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Small_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Small_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_small_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_small_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_small_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_small_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Height = {
  __typename?: 'MediaDocAccessFields_sizes_small_height';
  create?: Maybe<MediaDocAccessFields_Sizes_Small_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Small_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Small_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Small_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Small_Height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_small_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_small_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_small_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_small_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_MimeType = {
  __typename?: 'MediaDocAccessFields_sizes_small_mimeType';
  create?: Maybe<MediaDocAccessFields_Sizes_Small_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Small_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Small_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Small_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Small_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_small_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_small_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_small_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_small_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Url = {
  __typename?: 'MediaDocAccessFields_sizes_small_url';
  create?: Maybe<MediaDocAccessFields_Sizes_Small_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Small_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Small_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Small_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Small_Url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_small_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_small_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_small_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_small_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Width = {
  __typename?: 'MediaDocAccessFields_sizes_small_width';
  create?: Maybe<MediaDocAccessFields_Sizes_Small_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Small_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Small_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Small_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Small_Width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_small_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_small_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_small_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_small_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet = {
  __typename?: 'MediaDocAccessFields_sizes_tablet';
  create?: Maybe<MediaDocAccessFields_Sizes_Tablet_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Tablet_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Tablet_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Tablet_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Tablet_Update>;
};

export type MediaDocAccessFields_Sizes_Tablet_Create = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_Fields';
  filename?: Maybe<MediaDocAccessFields_Sizes_Tablet_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Tablet_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Tablet_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Tablet_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Tablet_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Tablet_Width>;
};

export type MediaDocAccessFields_Sizes_Tablet_Read = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Update = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Filename = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_filename';
  create?: Maybe<MediaDocAccessFields_Sizes_Tablet_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Tablet_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Tablet_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Tablet_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Tablet_Filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Filesize = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_filesize';
  create?: Maybe<MediaDocAccessFields_Sizes_Tablet_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Tablet_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Tablet_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Tablet_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Tablet_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Height = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_height';
  create?: Maybe<MediaDocAccessFields_Sizes_Tablet_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Tablet_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Tablet_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Tablet_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Tablet_Height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_MimeType = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_mimeType';
  create?: Maybe<MediaDocAccessFields_Sizes_Tablet_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Tablet_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Tablet_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Tablet_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Tablet_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Url = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_url';
  create?: Maybe<MediaDocAccessFields_Sizes_Tablet_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Tablet_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Tablet_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Tablet_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Tablet_Url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Width = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_width';
  create?: Maybe<MediaDocAccessFields_Sizes_Tablet_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Tablet_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Tablet_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Tablet_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Tablet_Width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_tablet_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Fields';
  filename?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl = {
  __typename?: 'MediaDocAccessFields_thumbnailURL';
  create?: Maybe<MediaDocAccessFields_ThumbnailUrl_Create>;
  delete?: Maybe<MediaDocAccessFields_ThumbnailUrl_Delete>;
  read?: Maybe<MediaDocAccessFields_ThumbnailUrl_Read>;
  update?: Maybe<MediaDocAccessFields_ThumbnailUrl_Update>;
};

export type MediaDocAccessFields_ThumbnailUrl_Create = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl_Delete = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl_Read = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl_Update = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt = {
  __typename?: 'MediaDocAccessFields_updatedAt';
  create?: Maybe<MediaDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_UpdatedAt_Update>;
};

export type MediaDocAccessFields_UpdatedAt_Create = {
  __typename?: 'MediaDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Read = {
  __typename?: 'MediaDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Update = {
  __typename?: 'MediaDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url = {
  __typename?: 'MediaDocAccessFields_url';
  create?: Maybe<MediaDocAccessFields_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Url_Update>;
};

export type MediaDocAccessFields_Url_Create = {
  __typename?: 'MediaDocAccessFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Delete = {
  __typename?: 'MediaDocAccessFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Read = {
  __typename?: 'MediaDocAccessFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Update = {
  __typename?: 'MediaDocAccessFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width = {
  __typename?: 'MediaDocAccessFields_width';
  create?: Maybe<MediaDocAccessFields_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Width_Update>;
};

export type MediaDocAccessFields_Width_Create = {
  __typename?: 'MediaDocAccessFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Delete = {
  __typename?: 'MediaDocAccessFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Read = {
  __typename?: 'MediaDocAccessFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Update = {
  __typename?: 'MediaDocAccessFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Workspace = {
  __typename?: 'MediaDocAccessFields_workspace';
  create?: Maybe<MediaDocAccessFields_Workspace_Create>;
  delete?: Maybe<MediaDocAccessFields_Workspace_Delete>;
  read?: Maybe<MediaDocAccessFields_Workspace_Read>;
  update?: Maybe<MediaDocAccessFields_Workspace_Update>;
};

export type MediaDocAccessFields_Workspace_Create = {
  __typename?: 'MediaDocAccessFields_workspace_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Workspace_Delete = {
  __typename?: 'MediaDocAccessFields_workspace_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Workspace_Read = {
  __typename?: 'MediaDocAccessFields_workspace_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Workspace_Update = {
  __typename?: 'MediaDocAccessFields_workspace_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields = {
  __typename?: 'MediaFields';
  alt?: Maybe<MediaFields_Alt>;
  createdAt?: Maybe<MediaFields_CreatedAt>;
  filename?: Maybe<MediaFields_Filename>;
  filesize?: Maybe<MediaFields_Filesize>;
  focalX?: Maybe<MediaFields_FocalX>;
  focalY?: Maybe<MediaFields_FocalY>;
  height?: Maybe<MediaFields_Height>;
  mimeType?: Maybe<MediaFields_MimeType>;
  sizes?: Maybe<MediaFields_Sizes>;
  thumbnailURL?: Maybe<MediaFields_ThumbnailUrl>;
  updatedAt?: Maybe<MediaFields_UpdatedAt>;
  url?: Maybe<MediaFields_Url>;
  width?: Maybe<MediaFields_Width>;
  workspace?: Maybe<MediaFields_Workspace>;
};

export type MediaFields_Alt = {
  __typename?: 'MediaFields_alt';
  create?: Maybe<MediaFields_Alt_Create>;
  delete?: Maybe<MediaFields_Alt_Delete>;
  read?: Maybe<MediaFields_Alt_Read>;
  update?: Maybe<MediaFields_Alt_Update>;
};

export type MediaFields_Alt_Create = {
  __typename?: 'MediaFields_alt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Delete = {
  __typename?: 'MediaFields_alt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Read = {
  __typename?: 'MediaFields_alt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Update = {
  __typename?: 'MediaFields_alt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt = {
  __typename?: 'MediaFields_createdAt';
  create?: Maybe<MediaFields_CreatedAt_Create>;
  delete?: Maybe<MediaFields_CreatedAt_Delete>;
  read?: Maybe<MediaFields_CreatedAt_Read>;
  update?: Maybe<MediaFields_CreatedAt_Update>;
};

export type MediaFields_CreatedAt_Create = {
  __typename?: 'MediaFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Delete = {
  __typename?: 'MediaFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Read = {
  __typename?: 'MediaFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Update = {
  __typename?: 'MediaFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename = {
  __typename?: 'MediaFields_filename';
  create?: Maybe<MediaFields_Filename_Create>;
  delete?: Maybe<MediaFields_Filename_Delete>;
  read?: Maybe<MediaFields_Filename_Read>;
  update?: Maybe<MediaFields_Filename_Update>;
};

export type MediaFields_Filename_Create = {
  __typename?: 'MediaFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Delete = {
  __typename?: 'MediaFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Read = {
  __typename?: 'MediaFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Update = {
  __typename?: 'MediaFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize = {
  __typename?: 'MediaFields_filesize';
  create?: Maybe<MediaFields_Filesize_Create>;
  delete?: Maybe<MediaFields_Filesize_Delete>;
  read?: Maybe<MediaFields_Filesize_Read>;
  update?: Maybe<MediaFields_Filesize_Update>;
};

export type MediaFields_Filesize_Create = {
  __typename?: 'MediaFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Delete = {
  __typename?: 'MediaFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Read = {
  __typename?: 'MediaFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Update = {
  __typename?: 'MediaFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX = {
  __typename?: 'MediaFields_focalX';
  create?: Maybe<MediaFields_FocalX_Create>;
  delete?: Maybe<MediaFields_FocalX_Delete>;
  read?: Maybe<MediaFields_FocalX_Read>;
  update?: Maybe<MediaFields_FocalX_Update>;
};

export type MediaFields_FocalX_Create = {
  __typename?: 'MediaFields_focalX_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Delete = {
  __typename?: 'MediaFields_focalX_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Read = {
  __typename?: 'MediaFields_focalX_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Update = {
  __typename?: 'MediaFields_focalX_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY = {
  __typename?: 'MediaFields_focalY';
  create?: Maybe<MediaFields_FocalY_Create>;
  delete?: Maybe<MediaFields_FocalY_Delete>;
  read?: Maybe<MediaFields_FocalY_Read>;
  update?: Maybe<MediaFields_FocalY_Update>;
};

export type MediaFields_FocalY_Create = {
  __typename?: 'MediaFields_focalY_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Delete = {
  __typename?: 'MediaFields_focalY_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Read = {
  __typename?: 'MediaFields_focalY_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Update = {
  __typename?: 'MediaFields_focalY_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height = {
  __typename?: 'MediaFields_height';
  create?: Maybe<MediaFields_Height_Create>;
  delete?: Maybe<MediaFields_Height_Delete>;
  read?: Maybe<MediaFields_Height_Read>;
  update?: Maybe<MediaFields_Height_Update>;
};

export type MediaFields_Height_Create = {
  __typename?: 'MediaFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Delete = {
  __typename?: 'MediaFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Read = {
  __typename?: 'MediaFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Update = {
  __typename?: 'MediaFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType = {
  __typename?: 'MediaFields_mimeType';
  create?: Maybe<MediaFields_MimeType_Create>;
  delete?: Maybe<MediaFields_MimeType_Delete>;
  read?: Maybe<MediaFields_MimeType_Read>;
  update?: Maybe<MediaFields_MimeType_Update>;
};

export type MediaFields_MimeType_Create = {
  __typename?: 'MediaFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Delete = {
  __typename?: 'MediaFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Read = {
  __typename?: 'MediaFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Update = {
  __typename?: 'MediaFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes = {
  __typename?: 'MediaFields_sizes';
  create?: Maybe<MediaFields_Sizes_Create>;
  delete?: Maybe<MediaFields_Sizes_Delete>;
  fields?: Maybe<MediaFields_Sizes_Fields>;
  read?: Maybe<MediaFields_Sizes_Read>;
  update?: Maybe<MediaFields_Sizes_Update>;
};

export type MediaFields_Sizes_Create = {
  __typename?: 'MediaFields_sizes_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Delete = {
  __typename?: 'MediaFields_sizes_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Fields = {
  __typename?: 'MediaFields_sizes_Fields';
  large?: Maybe<MediaFields_Sizes_Large>;
  small?: Maybe<MediaFields_Sizes_Small>;
  tablet?: Maybe<MediaFields_Sizes_Tablet>;
  thumbnail?: Maybe<MediaFields_Sizes_Thumbnail>;
};

export type MediaFields_Sizes_Read = {
  __typename?: 'MediaFields_sizes_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Update = {
  __typename?: 'MediaFields_sizes_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large = {
  __typename?: 'MediaFields_sizes_large';
  create?: Maybe<MediaFields_Sizes_Large_Create>;
  delete?: Maybe<MediaFields_Sizes_Large_Delete>;
  fields?: Maybe<MediaFields_Sizes_Large_Fields>;
  read?: Maybe<MediaFields_Sizes_Large_Read>;
  update?: Maybe<MediaFields_Sizes_Large_Update>;
};

export type MediaFields_Sizes_Large_Create = {
  __typename?: 'MediaFields_sizes_large_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Delete = {
  __typename?: 'MediaFields_sizes_large_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Fields = {
  __typename?: 'MediaFields_sizes_large_Fields';
  filename?: Maybe<MediaFields_Sizes_Large_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Large_Filesize>;
  height?: Maybe<MediaFields_Sizes_Large_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Large_MimeType>;
  url?: Maybe<MediaFields_Sizes_Large_Url>;
  width?: Maybe<MediaFields_Sizes_Large_Width>;
};

export type MediaFields_Sizes_Large_Read = {
  __typename?: 'MediaFields_sizes_large_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Update = {
  __typename?: 'MediaFields_sizes_large_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Filename = {
  __typename?: 'MediaFields_sizes_large_filename';
  create?: Maybe<MediaFields_Sizes_Large_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Large_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Large_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Large_Filename_Update>;
};

export type MediaFields_Sizes_Large_Filename_Create = {
  __typename?: 'MediaFields_sizes_large_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Filename_Delete = {
  __typename?: 'MediaFields_sizes_large_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Filename_Read = {
  __typename?: 'MediaFields_sizes_large_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Filename_Update = {
  __typename?: 'MediaFields_sizes_large_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Filesize = {
  __typename?: 'MediaFields_sizes_large_filesize';
  create?: Maybe<MediaFields_Sizes_Large_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Large_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Large_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Large_Filesize_Update>;
};

export type MediaFields_Sizes_Large_Filesize_Create = {
  __typename?: 'MediaFields_sizes_large_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_large_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Filesize_Read = {
  __typename?: 'MediaFields_sizes_large_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Filesize_Update = {
  __typename?: 'MediaFields_sizes_large_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Height = {
  __typename?: 'MediaFields_sizes_large_height';
  create?: Maybe<MediaFields_Sizes_Large_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Large_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Large_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Large_Height_Update>;
};

export type MediaFields_Sizes_Large_Height_Create = {
  __typename?: 'MediaFields_sizes_large_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Height_Delete = {
  __typename?: 'MediaFields_sizes_large_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Height_Read = {
  __typename?: 'MediaFields_sizes_large_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Height_Update = {
  __typename?: 'MediaFields_sizes_large_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_MimeType = {
  __typename?: 'MediaFields_sizes_large_mimeType';
  create?: Maybe<MediaFields_Sizes_Large_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Large_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Large_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Large_MimeType_Update>;
};

export type MediaFields_Sizes_Large_MimeType_Create = {
  __typename?: 'MediaFields_sizes_large_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_large_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_MimeType_Read = {
  __typename?: 'MediaFields_sizes_large_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_MimeType_Update = {
  __typename?: 'MediaFields_sizes_large_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Url = {
  __typename?: 'MediaFields_sizes_large_url';
  create?: Maybe<MediaFields_Sizes_Large_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Large_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Large_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Large_Url_Update>;
};

export type MediaFields_Sizes_Large_Url_Create = {
  __typename?: 'MediaFields_sizes_large_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Url_Delete = {
  __typename?: 'MediaFields_sizes_large_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Url_Read = {
  __typename?: 'MediaFields_sizes_large_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Url_Update = {
  __typename?: 'MediaFields_sizes_large_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Width = {
  __typename?: 'MediaFields_sizes_large_width';
  create?: Maybe<MediaFields_Sizes_Large_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Large_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Large_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Large_Width_Update>;
};

export type MediaFields_Sizes_Large_Width_Create = {
  __typename?: 'MediaFields_sizes_large_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Width_Delete = {
  __typename?: 'MediaFields_sizes_large_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Width_Read = {
  __typename?: 'MediaFields_sizes_large_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Width_Update = {
  __typename?: 'MediaFields_sizes_large_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small = {
  __typename?: 'MediaFields_sizes_small';
  create?: Maybe<MediaFields_Sizes_Small_Create>;
  delete?: Maybe<MediaFields_Sizes_Small_Delete>;
  fields?: Maybe<MediaFields_Sizes_Small_Fields>;
  read?: Maybe<MediaFields_Sizes_Small_Read>;
  update?: Maybe<MediaFields_Sizes_Small_Update>;
};

export type MediaFields_Sizes_Small_Create = {
  __typename?: 'MediaFields_sizes_small_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Delete = {
  __typename?: 'MediaFields_sizes_small_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Fields = {
  __typename?: 'MediaFields_sizes_small_Fields';
  filename?: Maybe<MediaFields_Sizes_Small_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Small_Filesize>;
  height?: Maybe<MediaFields_Sizes_Small_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Small_MimeType>;
  url?: Maybe<MediaFields_Sizes_Small_Url>;
  width?: Maybe<MediaFields_Sizes_Small_Width>;
};

export type MediaFields_Sizes_Small_Read = {
  __typename?: 'MediaFields_sizes_small_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Update = {
  __typename?: 'MediaFields_sizes_small_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Filename = {
  __typename?: 'MediaFields_sizes_small_filename';
  create?: Maybe<MediaFields_Sizes_Small_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Small_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Small_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Small_Filename_Update>;
};

export type MediaFields_Sizes_Small_Filename_Create = {
  __typename?: 'MediaFields_sizes_small_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Filename_Delete = {
  __typename?: 'MediaFields_sizes_small_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Filename_Read = {
  __typename?: 'MediaFields_sizes_small_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Filename_Update = {
  __typename?: 'MediaFields_sizes_small_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Filesize = {
  __typename?: 'MediaFields_sizes_small_filesize';
  create?: Maybe<MediaFields_Sizes_Small_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Small_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Small_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Small_Filesize_Update>;
};

export type MediaFields_Sizes_Small_Filesize_Create = {
  __typename?: 'MediaFields_sizes_small_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_small_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Filesize_Read = {
  __typename?: 'MediaFields_sizes_small_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Filesize_Update = {
  __typename?: 'MediaFields_sizes_small_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Height = {
  __typename?: 'MediaFields_sizes_small_height';
  create?: Maybe<MediaFields_Sizes_Small_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Small_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Small_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Small_Height_Update>;
};

export type MediaFields_Sizes_Small_Height_Create = {
  __typename?: 'MediaFields_sizes_small_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Height_Delete = {
  __typename?: 'MediaFields_sizes_small_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Height_Read = {
  __typename?: 'MediaFields_sizes_small_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Height_Update = {
  __typename?: 'MediaFields_sizes_small_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_MimeType = {
  __typename?: 'MediaFields_sizes_small_mimeType';
  create?: Maybe<MediaFields_Sizes_Small_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Small_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Small_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Small_MimeType_Update>;
};

export type MediaFields_Sizes_Small_MimeType_Create = {
  __typename?: 'MediaFields_sizes_small_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_small_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_MimeType_Read = {
  __typename?: 'MediaFields_sizes_small_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_MimeType_Update = {
  __typename?: 'MediaFields_sizes_small_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Url = {
  __typename?: 'MediaFields_sizes_small_url';
  create?: Maybe<MediaFields_Sizes_Small_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Small_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Small_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Small_Url_Update>;
};

export type MediaFields_Sizes_Small_Url_Create = {
  __typename?: 'MediaFields_sizes_small_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Url_Delete = {
  __typename?: 'MediaFields_sizes_small_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Url_Read = {
  __typename?: 'MediaFields_sizes_small_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Url_Update = {
  __typename?: 'MediaFields_sizes_small_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Width = {
  __typename?: 'MediaFields_sizes_small_width';
  create?: Maybe<MediaFields_Sizes_Small_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Small_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Small_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Small_Width_Update>;
};

export type MediaFields_Sizes_Small_Width_Create = {
  __typename?: 'MediaFields_sizes_small_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Width_Delete = {
  __typename?: 'MediaFields_sizes_small_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Width_Read = {
  __typename?: 'MediaFields_sizes_small_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Width_Update = {
  __typename?: 'MediaFields_sizes_small_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet = {
  __typename?: 'MediaFields_sizes_tablet';
  create?: Maybe<MediaFields_Sizes_Tablet_Create>;
  delete?: Maybe<MediaFields_Sizes_Tablet_Delete>;
  fields?: Maybe<MediaFields_Sizes_Tablet_Fields>;
  read?: Maybe<MediaFields_Sizes_Tablet_Read>;
  update?: Maybe<MediaFields_Sizes_Tablet_Update>;
};

export type MediaFields_Sizes_Tablet_Create = {
  __typename?: 'MediaFields_sizes_tablet_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Delete = {
  __typename?: 'MediaFields_sizes_tablet_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Fields = {
  __typename?: 'MediaFields_sizes_tablet_Fields';
  filename?: Maybe<MediaFields_Sizes_Tablet_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Tablet_Filesize>;
  height?: Maybe<MediaFields_Sizes_Tablet_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Tablet_MimeType>;
  url?: Maybe<MediaFields_Sizes_Tablet_Url>;
  width?: Maybe<MediaFields_Sizes_Tablet_Width>;
};

export type MediaFields_Sizes_Tablet_Read = {
  __typename?: 'MediaFields_sizes_tablet_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Update = {
  __typename?: 'MediaFields_sizes_tablet_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Filename = {
  __typename?: 'MediaFields_sizes_tablet_filename';
  create?: Maybe<MediaFields_Sizes_Tablet_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Tablet_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Tablet_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Tablet_Filename_Update>;
};

export type MediaFields_Sizes_Tablet_Filename_Create = {
  __typename?: 'MediaFields_sizes_tablet_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Filename_Delete = {
  __typename?: 'MediaFields_sizes_tablet_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Filename_Read = {
  __typename?: 'MediaFields_sizes_tablet_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Filename_Update = {
  __typename?: 'MediaFields_sizes_tablet_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Filesize = {
  __typename?: 'MediaFields_sizes_tablet_filesize';
  create?: Maybe<MediaFields_Sizes_Tablet_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Tablet_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Tablet_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Tablet_Filesize_Update>;
};

export type MediaFields_Sizes_Tablet_Filesize_Create = {
  __typename?: 'MediaFields_sizes_tablet_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_tablet_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Filesize_Read = {
  __typename?: 'MediaFields_sizes_tablet_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Filesize_Update = {
  __typename?: 'MediaFields_sizes_tablet_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Height = {
  __typename?: 'MediaFields_sizes_tablet_height';
  create?: Maybe<MediaFields_Sizes_Tablet_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Tablet_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Tablet_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Tablet_Height_Update>;
};

export type MediaFields_Sizes_Tablet_Height_Create = {
  __typename?: 'MediaFields_sizes_tablet_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Height_Delete = {
  __typename?: 'MediaFields_sizes_tablet_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Height_Read = {
  __typename?: 'MediaFields_sizes_tablet_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Height_Update = {
  __typename?: 'MediaFields_sizes_tablet_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_MimeType = {
  __typename?: 'MediaFields_sizes_tablet_mimeType';
  create?: Maybe<MediaFields_Sizes_Tablet_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Tablet_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Tablet_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Tablet_MimeType_Update>;
};

export type MediaFields_Sizes_Tablet_MimeType_Create = {
  __typename?: 'MediaFields_sizes_tablet_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_tablet_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_MimeType_Read = {
  __typename?: 'MediaFields_sizes_tablet_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_MimeType_Update = {
  __typename?: 'MediaFields_sizes_tablet_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Url = {
  __typename?: 'MediaFields_sizes_tablet_url';
  create?: Maybe<MediaFields_Sizes_Tablet_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Tablet_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Tablet_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Tablet_Url_Update>;
};

export type MediaFields_Sizes_Tablet_Url_Create = {
  __typename?: 'MediaFields_sizes_tablet_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Url_Delete = {
  __typename?: 'MediaFields_sizes_tablet_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Url_Read = {
  __typename?: 'MediaFields_sizes_tablet_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Url_Update = {
  __typename?: 'MediaFields_sizes_tablet_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Width = {
  __typename?: 'MediaFields_sizes_tablet_width';
  create?: Maybe<MediaFields_Sizes_Tablet_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Tablet_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Tablet_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Tablet_Width_Update>;
};

export type MediaFields_Sizes_Tablet_Width_Create = {
  __typename?: 'MediaFields_sizes_tablet_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Width_Delete = {
  __typename?: 'MediaFields_sizes_tablet_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Width_Read = {
  __typename?: 'MediaFields_sizes_tablet_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Width_Update = {
  __typename?: 'MediaFields_sizes_tablet_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail = {
  __typename?: 'MediaFields_sizes_thumbnail';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Delete>;
  fields?: Maybe<MediaFields_Sizes_Thumbnail_Fields>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Update>;
};

export type MediaFields_Sizes_Thumbnail_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Fields = {
  __typename?: 'MediaFields_sizes_thumbnail_Fields';
  filename?: Maybe<MediaFields_Sizes_Thumbnail_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Thumbnail_Filesize>;
  height?: Maybe<MediaFields_Sizes_Thumbnail_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Thumbnail_MimeType>;
  url?: Maybe<MediaFields_Sizes_Thumbnail_Url>;
  width?: Maybe<MediaFields_Sizes_Thumbnail_Width>;
};

export type MediaFields_Sizes_Thumbnail_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename = {
  __typename?: 'MediaFields_sizes_thumbnail_filename';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Update>;
};

export type MediaFields_Sizes_Thumbnail_Filename_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Update>;
};

export type MediaFields_Sizes_Thumbnail_Filesize_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height = {
  __typename?: 'MediaFields_sizes_thumbnail_height';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Height_Update>;
};

export type MediaFields_Sizes_Thumbnail_Height_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType';
  create?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Update>;
};

export type MediaFields_Sizes_Thumbnail_MimeType_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url = {
  __typename?: 'MediaFields_sizes_thumbnail_url';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Url_Update>;
};

export type MediaFields_Sizes_Thumbnail_Url_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width = {
  __typename?: 'MediaFields_sizes_thumbnail_width';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Width_Update>;
};

export type MediaFields_Sizes_Thumbnail_Width_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl = {
  __typename?: 'MediaFields_thumbnailURL';
  create?: Maybe<MediaFields_ThumbnailUrl_Create>;
  delete?: Maybe<MediaFields_ThumbnailUrl_Delete>;
  read?: Maybe<MediaFields_ThumbnailUrl_Read>;
  update?: Maybe<MediaFields_ThumbnailUrl_Update>;
};

export type MediaFields_ThumbnailUrl_Create = {
  __typename?: 'MediaFields_thumbnailURL_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl_Delete = {
  __typename?: 'MediaFields_thumbnailURL_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl_Read = {
  __typename?: 'MediaFields_thumbnailURL_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl_Update = {
  __typename?: 'MediaFields_thumbnailURL_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt = {
  __typename?: 'MediaFields_updatedAt';
  create?: Maybe<MediaFields_UpdatedAt_Create>;
  delete?: Maybe<MediaFields_UpdatedAt_Delete>;
  read?: Maybe<MediaFields_UpdatedAt_Read>;
  update?: Maybe<MediaFields_UpdatedAt_Update>;
};

export type MediaFields_UpdatedAt_Create = {
  __typename?: 'MediaFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Delete = {
  __typename?: 'MediaFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Read = {
  __typename?: 'MediaFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Update = {
  __typename?: 'MediaFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url = {
  __typename?: 'MediaFields_url';
  create?: Maybe<MediaFields_Url_Create>;
  delete?: Maybe<MediaFields_Url_Delete>;
  read?: Maybe<MediaFields_Url_Read>;
  update?: Maybe<MediaFields_Url_Update>;
};

export type MediaFields_Url_Create = {
  __typename?: 'MediaFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Delete = {
  __typename?: 'MediaFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Read = {
  __typename?: 'MediaFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Update = {
  __typename?: 'MediaFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width = {
  __typename?: 'MediaFields_width';
  create?: Maybe<MediaFields_Width_Create>;
  delete?: Maybe<MediaFields_Width_Delete>;
  read?: Maybe<MediaFields_Width_Read>;
  update?: Maybe<MediaFields_Width_Update>;
};

export type MediaFields_Width_Create = {
  __typename?: 'MediaFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Delete = {
  __typename?: 'MediaFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Read = {
  __typename?: 'MediaFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Update = {
  __typename?: 'MediaFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Workspace = {
  __typename?: 'MediaFields_workspace';
  create?: Maybe<MediaFields_Workspace_Create>;
  delete?: Maybe<MediaFields_Workspace_Delete>;
  read?: Maybe<MediaFields_Workspace_Read>;
  update?: Maybe<MediaFields_Workspace_Update>;
};

export type MediaFields_Workspace_Create = {
  __typename?: 'MediaFields_workspace_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Workspace_Delete = {
  __typename?: 'MediaFields_workspace_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Workspace_Read = {
  __typename?: 'MediaFields_workspace_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Workspace_Update = {
  __typename?: 'MediaFields_workspace_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaReadAccess = {
  __typename?: 'MediaReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaReadDocAccess = {
  __typename?: 'MediaReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateAccess = {
  __typename?: 'MediaUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateDocAccess = {
  __typename?: 'MediaUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Media_Sizes = {
  __typename?: 'Media_Sizes';
  large?: Maybe<Media_Sizes_Large>;
  small?: Maybe<Media_Sizes_Small>;
  tablet?: Maybe<Media_Sizes_Tablet>;
  thumbnail?: Maybe<Media_Sizes_Thumbnail>;
};

export type Media_Sizes_Large = {
  __typename?: 'Media_Sizes_Large';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Media_Sizes_Small = {
  __typename?: 'Media_Sizes_Small';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Media_Sizes_Tablet = {
  __typename?: 'Media_Sizes_Tablet';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Media_Sizes_Thumbnail = {
  __typename?: 'Media_Sizes_Thumbnail';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Media_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Media_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_FocalX_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_FocalY_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Large__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Large__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Large__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Large__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Large__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Large__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Small__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Small__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Small__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Small__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Small__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Small__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Tablet__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Tablet__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Tablet__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Tablet__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Tablet__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Tablet__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Thumbnail__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Thumbnail__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Thumbnail__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Thumbnail__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Thumbnail__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Thumbnail__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_ThumbnailUrl_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Media_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Where = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  sizes__large__filename?: InputMaybe<Media_Sizes__Large__Filename_Operator>;
  sizes__large__filesize?: InputMaybe<Media_Sizes__Large__Filesize_Operator>;
  sizes__large__height?: InputMaybe<Media_Sizes__Large__Height_Operator>;
  sizes__large__mimeType?: InputMaybe<Media_Sizes__Large__MimeType_Operator>;
  sizes__large__url?: InputMaybe<Media_Sizes__Large__Url_Operator>;
  sizes__large__width?: InputMaybe<Media_Sizes__Large__Width_Operator>;
  sizes__small__filename?: InputMaybe<Media_Sizes__Small__Filename_Operator>;
  sizes__small__filesize?: InputMaybe<Media_Sizes__Small__Filesize_Operator>;
  sizes__small__height?: InputMaybe<Media_Sizes__Small__Height_Operator>;
  sizes__small__mimeType?: InputMaybe<Media_Sizes__Small__MimeType_Operator>;
  sizes__small__url?: InputMaybe<Media_Sizes__Small__Url_Operator>;
  sizes__small__width?: InputMaybe<Media_Sizes__Small__Width_Operator>;
  sizes__tablet__filename?: InputMaybe<Media_Sizes__Tablet__Filename_Operator>;
  sizes__tablet__filesize?: InputMaybe<Media_Sizes__Tablet__Filesize_Operator>;
  sizes__tablet__height?: InputMaybe<Media_Sizes__Tablet__Height_Operator>;
  sizes__tablet__mimeType?: InputMaybe<Media_Sizes__Tablet__MimeType_Operator>;
  sizes__tablet__url?: InputMaybe<Media_Sizes__Tablet__Url_Operator>;
  sizes__tablet__width?: InputMaybe<Media_Sizes__Tablet__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
  workspace?: InputMaybe<Media_Workspace_Operator>;
};

export type Media_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  sizes__large__filename?: InputMaybe<Media_Sizes__Large__Filename_Operator>;
  sizes__large__filesize?: InputMaybe<Media_Sizes__Large__Filesize_Operator>;
  sizes__large__height?: InputMaybe<Media_Sizes__Large__Height_Operator>;
  sizes__large__mimeType?: InputMaybe<Media_Sizes__Large__MimeType_Operator>;
  sizes__large__url?: InputMaybe<Media_Sizes__Large__Url_Operator>;
  sizes__large__width?: InputMaybe<Media_Sizes__Large__Width_Operator>;
  sizes__small__filename?: InputMaybe<Media_Sizes__Small__Filename_Operator>;
  sizes__small__filesize?: InputMaybe<Media_Sizes__Small__Filesize_Operator>;
  sizes__small__height?: InputMaybe<Media_Sizes__Small__Height_Operator>;
  sizes__small__mimeType?: InputMaybe<Media_Sizes__Small__MimeType_Operator>;
  sizes__small__url?: InputMaybe<Media_Sizes__Small__Url_Operator>;
  sizes__small__width?: InputMaybe<Media_Sizes__Small__Width_Operator>;
  sizes__tablet__filename?: InputMaybe<Media_Sizes__Tablet__Filename_Operator>;
  sizes__tablet__filesize?: InputMaybe<Media_Sizes__Tablet__Filesize_Operator>;
  sizes__tablet__height?: InputMaybe<Media_Sizes__Tablet__Height_Operator>;
  sizes__tablet__mimeType?: InputMaybe<Media_Sizes__Tablet__MimeType_Operator>;
  sizes__tablet__url?: InputMaybe<Media_Sizes__Tablet__Url_Operator>;
  sizes__tablet__width?: InputMaybe<Media_Sizes__Tablet__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
  workspace?: InputMaybe<Media_Workspace_Operator>;
};

export type Media_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  sizes__large__filename?: InputMaybe<Media_Sizes__Large__Filename_Operator>;
  sizes__large__filesize?: InputMaybe<Media_Sizes__Large__Filesize_Operator>;
  sizes__large__height?: InputMaybe<Media_Sizes__Large__Height_Operator>;
  sizes__large__mimeType?: InputMaybe<Media_Sizes__Large__MimeType_Operator>;
  sizes__large__url?: InputMaybe<Media_Sizes__Large__Url_Operator>;
  sizes__large__width?: InputMaybe<Media_Sizes__Large__Width_Operator>;
  sizes__small__filename?: InputMaybe<Media_Sizes__Small__Filename_Operator>;
  sizes__small__filesize?: InputMaybe<Media_Sizes__Small__Filesize_Operator>;
  sizes__small__height?: InputMaybe<Media_Sizes__Small__Height_Operator>;
  sizes__small__mimeType?: InputMaybe<Media_Sizes__Small__MimeType_Operator>;
  sizes__small__url?: InputMaybe<Media_Sizes__Small__Url_Operator>;
  sizes__small__width?: InputMaybe<Media_Sizes__Small__Width_Operator>;
  sizes__tablet__filename?: InputMaybe<Media_Sizes__Tablet__Filename_Operator>;
  sizes__tablet__filesize?: InputMaybe<Media_Sizes__Tablet__Filesize_Operator>;
  sizes__tablet__height?: InputMaybe<Media_Sizes__Tablet__Height_Operator>;
  sizes__tablet__mimeType?: InputMaybe<Media_Sizes__Tablet__MimeType_Operator>;
  sizes__tablet__url?: InputMaybe<Media_Sizes__Tablet__Url_Operator>;
  sizes__tablet__width?: InputMaybe<Media_Sizes__Tablet__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
  workspace?: InputMaybe<Media_Workspace_Operator>;
};

export type Media_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Workspace_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAssignment?: Maybe<Assignment>;
  createCompany?: Maybe<Company>;
  createContact?: Maybe<Contact>;
  createDocumentReference?: Maybe<DocumentReference>;
  createInteraction?: Maybe<Interaction>;
  createLead?: Maybe<Lead>;
  createMedia?: Maybe<Media>;
  createPayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  createPayloadPreference?: Maybe<PayloadPreference>;
  createUser?: Maybe<User>;
  createWorkspace?: Maybe<Workspace>;
  deleteAssignment?: Maybe<Assignment>;
  deleteCompany?: Maybe<Company>;
  deleteContact?: Maybe<Contact>;
  deleteDocumentReference?: Maybe<DocumentReference>;
  deleteInteraction?: Maybe<Interaction>;
  deleteLead?: Maybe<Lead>;
  deleteMedia?: Maybe<Media>;
  deletePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  deletePayloadPreference?: Maybe<PayloadPreference>;
  deleteUser?: Maybe<User>;
  deleteWorkspace?: Maybe<Workspace>;
  duplicateAssignment?: Maybe<Assignment>;
  duplicateCompany?: Maybe<Company>;
  duplicateContact?: Maybe<Contact>;
  duplicateDocumentReference?: Maybe<DocumentReference>;
  duplicateInteraction?: Maybe<Interaction>;
  duplicateLead?: Maybe<Lead>;
  duplicateMedia?: Maybe<Media>;
  duplicatePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  duplicatePayloadPreference?: Maybe<PayloadPreference>;
  duplicateWorkspace?: Maybe<Workspace>;
  forgotPasswordUser: Scalars['Boolean']['output'];
  loginUser?: Maybe<UsersLoginResult>;
  logoutUser?: Maybe<Scalars['String']['output']>;
  refreshTokenUser?: Maybe<UsersRefreshedUser>;
  resetPasswordUser?: Maybe<UsersResetPassword>;
  unlockUser: Scalars['Boolean']['output'];
  updateAssignment?: Maybe<Assignment>;
  updateCompany?: Maybe<Company>;
  updateContact?: Maybe<Contact>;
  updateDocumentReference?: Maybe<DocumentReference>;
  updateInteraction?: Maybe<Interaction>;
  updateLead?: Maybe<Lead>;
  updateMedia?: Maybe<Media>;
  updatePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  updatePayloadPreference?: Maybe<PayloadPreference>;
  updateUser?: Maybe<User>;
  updateWorkspace?: Maybe<Workspace>;
  verifyEmailUser?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationCreateAssignmentArgs = {
  data: MutationAssignmentInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateCompanyArgs = {
  data: MutationCompanyInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateContactArgs = {
  data: MutationContactInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateDocumentReferenceArgs = {
  data: MutationDocumentReferenceInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateInteractionArgs = {
  data: MutationInteractionInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateLeadArgs = {
  data: MutationLeadInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateMediaArgs = {
  data: MutationMediaInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreatePayloadLockedDocumentArgs = {
  data: MutationPayloadLockedDocumentInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreatePayloadPreferenceArgs = {
  data: MutationPayloadPreferenceInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateUserArgs = {
  data: MutationUserInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateWorkspaceArgs = {
  data: MutationWorkspaceInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteAssignmentArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteCompanyArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteContactArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteDocumentReferenceArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteInteractionArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteLeadArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteMediaArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeletePayloadLockedDocumentArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeletePayloadPreferenceArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteWorkspaceArgs = {
  id: Scalars['String']['input'];
};


export type MutationDuplicateAssignmentArgs = {
  id: Scalars['String']['input'];
};


export type MutationDuplicateCompanyArgs = {
  id: Scalars['String']['input'];
};


export type MutationDuplicateContactArgs = {
  id: Scalars['String']['input'];
};


export type MutationDuplicateDocumentReferenceArgs = {
  id: Scalars['String']['input'];
};


export type MutationDuplicateInteractionArgs = {
  id: Scalars['String']['input'];
};


export type MutationDuplicateLeadArgs = {
  id: Scalars['String']['input'];
};


export type MutationDuplicateMediaArgs = {
  id: Scalars['String']['input'];
};


export type MutationDuplicatePayloadLockedDocumentArgs = {
  id: Scalars['String']['input'];
};


export type MutationDuplicatePayloadPreferenceArgs = {
  id: Scalars['String']['input'];
};


export type MutationDuplicateWorkspaceArgs = {
  id: Scalars['String']['input'];
};


export type MutationForgotPasswordUserArgs = {
  disableEmail?: InputMaybe<Scalars['Boolean']['input']>;
  email: Scalars['String']['input'];
  expiration?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationLoginUserArgs = {
  email: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};


export type MutationResetPasswordUserArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUnlockUserArgs = {
  email: Scalars['String']['input'];
};


export type MutationUpdateAssignmentArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationAssignmentUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationUpdateCompanyArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationCompanyUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationUpdateContactArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationContactUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationUpdateDocumentReferenceArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationDocumentReferenceUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationUpdateInteractionArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationInteractionUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationUpdateLeadArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationLeadUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationUpdateMediaArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationMediaUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationUpdatePayloadLockedDocumentArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPayloadLockedDocumentUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationUpdatePayloadPreferenceArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPayloadPreferenceUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationUpdateUserArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationUserUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationUpdateWorkspaceArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationWorkspaceUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationVerifyEmailUserArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};

export type PayloadLockedDocument = {
  __typename?: 'PayloadLockedDocument';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  document?: Maybe<PayloadLockedDocument_Document_Relationship>;
  globalSlug?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: PayloadLockedDocument_User_Relationship;
};

export type PayloadLockedDocumentUpdate_DocumentRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocumentUpdate_DocumentRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocumentUpdate_DocumentRelationshipInputRelationTo {
  Assignments = 'assignments',
  Companies = 'companies',
  Contacts = 'contacts',
  DocumentReferences = 'document_references',
  Interactions = 'interactions',
  Leads = 'leads',
  Media = 'media',
  Users = 'users',
  Workspaces = 'workspaces'
}

export type PayloadLockedDocumentUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocumentUpdate_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocumentUpdate_UserRelationshipInputRelationTo {
  Users = 'users'
}

export type PayloadLockedDocument_Document = Assignment | Company | Contact | DocumentReference | Interaction | Lead | Media | User | Workspace;

export type PayloadLockedDocument_DocumentRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocument_DocumentRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_DocumentRelationshipInputRelationTo {
  Assignments = 'assignments',
  Companies = 'companies',
  Contacts = 'contacts',
  DocumentReferences = 'document_references',
  Interactions = 'interactions',
  Leads = 'leads',
  Media = 'media',
  Users = 'users',
  Workspaces = 'workspaces'
}

export enum PayloadLockedDocument_Document_RelationTo {
  Assignments = 'assignments',
  Companies = 'companies',
  Contacts = 'contacts',
  DocumentReferences = 'document_references',
  Interactions = 'interactions',
  Leads = 'leads',
  Media = 'media',
  Users = 'users',
  Workspaces = 'workspaces'
}

export type PayloadLockedDocument_Document_Relationship = {
  __typename?: 'PayloadLockedDocument_Document_Relationship';
  relationTo?: Maybe<PayloadLockedDocument_Document_RelationTo>;
  value?: Maybe<PayloadLockedDocument_Document>;
};

export type PayloadLockedDocument_User = User;

export type PayloadLockedDocument_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocument_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_UserRelationshipInputRelationTo {
  Users = 'users'
}

export enum PayloadLockedDocument_User_RelationTo {
  Users = 'users'
}

export type PayloadLockedDocument_User_Relationship = {
  __typename?: 'PayloadLockedDocument_User_Relationship';
  relationTo?: Maybe<PayloadLockedDocument_User_RelationTo>;
  value?: Maybe<PayloadLockedDocument_User>;
};

export type PayloadLockedDocument_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadLockedDocument_Document_Relation = {
  relationTo?: InputMaybe<PayloadLockedDocument_Document_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_Document_Relation_RelationTo {
  Assignments = 'assignments',
  Companies = 'companies',
  Contacts = 'contacts',
  DocumentReferences = 'document_references',
  Interactions = 'interactions',
  Leads = 'leads',
  Media = 'media',
  Users = 'users',
  Workspaces = 'workspaces'
}

export type PayloadLockedDocument_GlobalSlug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadLockedDocument_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadLockedDocument_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadLockedDocument_User_Relation = {
  relationTo?: InputMaybe<PayloadLockedDocument_User_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_User_Relation_RelationTo {
  Users = 'users'
}

export type PayloadLockedDocument_Where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_Or>>>;
  createdAt?: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>;
  document?: InputMaybe<PayloadLockedDocument_Document_Relation>;
  globalSlug?: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>;
  id?: InputMaybe<PayloadLockedDocument_Id_Operator>;
  updatedAt?: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadLockedDocument_User_Relation>;
};

export type PayloadLockedDocument_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_Or>>>;
  createdAt?: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>;
  document?: InputMaybe<PayloadLockedDocument_Document_Relation>;
  globalSlug?: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>;
  id?: InputMaybe<PayloadLockedDocument_Id_Operator>;
  updatedAt?: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadLockedDocument_User_Relation>;
};

export type PayloadLockedDocument_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_Or>>>;
  createdAt?: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>;
  document?: InputMaybe<PayloadLockedDocument_Document_Relation>;
  globalSlug?: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>;
  id?: InputMaybe<PayloadLockedDocument_Id_Operator>;
  updatedAt?: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadLockedDocument_User_Relation>;
};

export type PayloadLockedDocuments = {
  __typename?: 'PayloadLockedDocuments';
  docs?: Maybe<Array<Maybe<PayloadLockedDocument>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PayloadLockedDocumentsCreateAccess = {
  __typename?: 'PayloadLockedDocumentsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsCreateDocAccess = {
  __typename?: 'PayloadLockedDocumentsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsDeleteAccess = {
  __typename?: 'PayloadLockedDocumentsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsDeleteDocAccess = {
  __typename?: 'PayloadLockedDocumentsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsDocAccessFields = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields';
  createdAt?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt>;
  document?: Maybe<PayloadLockedDocumentsDocAccessFields_Document>;
  globalSlug?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug>;
  updatedAt?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt>;
  user?: Maybe<PayloadLockedDocumentsDocAccessFields_User>;
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_Document_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_User_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields = {
  __typename?: 'PayloadLockedDocumentsFields';
  createdAt?: Maybe<PayloadLockedDocumentsFields_CreatedAt>;
  document?: Maybe<PayloadLockedDocumentsFields_Document>;
  globalSlug?: Maybe<PayloadLockedDocumentsFields_GlobalSlug>;
  updatedAt?: Maybe<PayloadLockedDocumentsFields_UpdatedAt>;
  user?: Maybe<PayloadLockedDocumentsFields_User>;
};

export type PayloadLockedDocumentsFields_CreatedAt = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt';
  create?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Update>;
};

export type PayloadLockedDocumentsFields_CreatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document = {
  __typename?: 'PayloadLockedDocumentsFields_document';
  create?: Maybe<PayloadLockedDocumentsFields_Document_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_Document_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_Document_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_Document_Update>;
};

export type PayloadLockedDocumentsFields_Document_Create = {
  __typename?: 'PayloadLockedDocumentsFields_document_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_document_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document_Read = {
  __typename?: 'PayloadLockedDocumentsFields_document_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document_Update = {
  __typename?: 'PayloadLockedDocumentsFields_document_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug';
  create?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Update>;
};

export type PayloadLockedDocumentsFields_GlobalSlug_Create = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Read = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Update = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt';
  create?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Update>;
};

export type PayloadLockedDocumentsFields_UpdatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User = {
  __typename?: 'PayloadLockedDocumentsFields_user';
  create?: Maybe<PayloadLockedDocumentsFields_User_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_User_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_User_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_User_Update>;
};

export type PayloadLockedDocumentsFields_User_Create = {
  __typename?: 'PayloadLockedDocumentsFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User_Read = {
  __typename?: 'PayloadLockedDocumentsFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User_Update = {
  __typename?: 'PayloadLockedDocumentsFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsReadAccess = {
  __typename?: 'PayloadLockedDocumentsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsReadDocAccess = {
  __typename?: 'PayloadLockedDocumentsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsUpdateAccess = {
  __typename?: 'PayloadLockedDocumentsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsUpdateDocAccess = {
  __typename?: 'PayloadLockedDocumentsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreference = {
  __typename?: 'PayloadPreference';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: PayloadPreference_User_Relationship;
  value?: Maybe<Scalars['JSON']['output']>;
};

export type PayloadPreferenceUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreferenceUpdate_UserRelationshipInputRelationTo {
  Users = 'users'
}

export type PayloadPreference_User = User;

export type PayloadPreference_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreference_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreference_UserRelationshipInputRelationTo {
  Users = 'users'
}

export enum PayloadPreference_User_RelationTo {
  Users = 'users'
}

export type PayloadPreference_User_Relationship = {
  __typename?: 'PayloadPreference_User_Relationship';
  relationTo?: Maybe<PayloadPreference_User_RelationTo>;
  value?: Maybe<PayloadPreference_User>;
};

export type PayloadPreference_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadPreference_Key_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadPreference_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_User_Relation = {
  relationTo?: InputMaybe<PayloadPreference_User_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreference_User_Relation_RelationTo {
  Users = 'users'
}

export type PayloadPreference_Value_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  intersects?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  within?: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadPreference_Where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreferences = {
  __typename?: 'PayloadPreferences';
  docs?: Maybe<Array<Maybe<PayloadPreference>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PayloadPreferencesCreateAccess = {
  __typename?: 'PayloadPreferencesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesCreateDocAccess = {
  __typename?: 'PayloadPreferencesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteAccess = {
  __typename?: 'PayloadPreferencesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteDocAccess = {
  __typename?: 'PayloadPreferencesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDocAccessFields = {
  __typename?: 'PayloadPreferencesDocAccessFields';
  createdAt?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt>;
  key?: Maybe<PayloadPreferencesDocAccessFields_Key>;
  updatedAt?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt>;
  user?: Maybe<PayloadPreferencesDocAccessFields_User>;
  value?: Maybe<PayloadPreferencesDocAccessFields_Value>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key = {
  __typename?: 'PayloadPreferencesDocAccessFields_key';
  create?: Maybe<PayloadPreferencesDocAccessFields_Key_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Key_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Key_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Key_Update>;
};

export type PayloadPreferencesDocAccessFields_Key_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User = {
  __typename?: 'PayloadPreferencesDocAccessFields_user';
  create?: Maybe<PayloadPreferencesDocAccessFields_User_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_User_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_User_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_User_Update>;
};

export type PayloadPreferencesDocAccessFields_User_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value = {
  __typename?: 'PayloadPreferencesDocAccessFields_value';
  create?: Maybe<PayloadPreferencesDocAccessFields_Value_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Value_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Value_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Value_Update>;
};

export type PayloadPreferencesDocAccessFields_Value_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields = {
  __typename?: 'PayloadPreferencesFields';
  createdAt?: Maybe<PayloadPreferencesFields_CreatedAt>;
  key?: Maybe<PayloadPreferencesFields_Key>;
  updatedAt?: Maybe<PayloadPreferencesFields_UpdatedAt>;
  user?: Maybe<PayloadPreferencesFields_User>;
  value?: Maybe<PayloadPreferencesFields_Value>;
};

export type PayloadPreferencesFields_CreatedAt = {
  __typename?: 'PayloadPreferencesFields_createdAt';
  create?: Maybe<PayloadPreferencesFields_CreatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_CreatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_CreatedAt_Update>;
};

export type PayloadPreferencesFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key = {
  __typename?: 'PayloadPreferencesFields_key';
  create?: Maybe<PayloadPreferencesFields_Key_Create>;
  delete?: Maybe<PayloadPreferencesFields_Key_Delete>;
  read?: Maybe<PayloadPreferencesFields_Key_Read>;
  update?: Maybe<PayloadPreferencesFields_Key_Update>;
};

export type PayloadPreferencesFields_Key_Create = {
  __typename?: 'PayloadPreferencesFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Delete = {
  __typename?: 'PayloadPreferencesFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Read = {
  __typename?: 'PayloadPreferencesFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Update = {
  __typename?: 'PayloadPreferencesFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesFields_updatedAt';
  create?: Maybe<PayloadPreferencesFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_UpdatedAt_Update>;
};

export type PayloadPreferencesFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User = {
  __typename?: 'PayloadPreferencesFields_user';
  create?: Maybe<PayloadPreferencesFields_User_Create>;
  delete?: Maybe<PayloadPreferencesFields_User_Delete>;
  read?: Maybe<PayloadPreferencesFields_User_Read>;
  update?: Maybe<PayloadPreferencesFields_User_Update>;
};

export type PayloadPreferencesFields_User_Create = {
  __typename?: 'PayloadPreferencesFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Delete = {
  __typename?: 'PayloadPreferencesFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Read = {
  __typename?: 'PayloadPreferencesFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Update = {
  __typename?: 'PayloadPreferencesFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value = {
  __typename?: 'PayloadPreferencesFields_value';
  create?: Maybe<PayloadPreferencesFields_Value_Create>;
  delete?: Maybe<PayloadPreferencesFields_Value_Delete>;
  read?: Maybe<PayloadPreferencesFields_Value_Read>;
  update?: Maybe<PayloadPreferencesFields_Value_Update>;
};

export type PayloadPreferencesFields_Value_Create = {
  __typename?: 'PayloadPreferencesFields_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Delete = {
  __typename?: 'PayloadPreferencesFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Read = {
  __typename?: 'PayloadPreferencesFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Update = {
  __typename?: 'PayloadPreferencesFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesReadAccess = {
  __typename?: 'PayloadPreferencesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesReadDocAccess = {
  __typename?: 'PayloadPreferencesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateAccess = {
  __typename?: 'PayloadPreferencesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateDocAccess = {
  __typename?: 'PayloadPreferencesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Query = {
  __typename?: 'Query';
  Access?: Maybe<Access>;
  Assignment?: Maybe<Assignment>;
  Assignments?: Maybe<Assignments>;
  Companies?: Maybe<Companies>;
  Company?: Maybe<Company>;
  Contact?: Maybe<Contact>;
  Contacts?: Maybe<Contacts>;
  DocumentReference?: Maybe<DocumentReference>;
  DocumentReferences?: Maybe<DocumentReferences>;
  Interaction?: Maybe<Interaction>;
  Interactions?: Maybe<Interactions>;
  Lead?: Maybe<Lead>;
  Leads?: Maybe<Leads>;
  Media?: Maybe<Media>;
  PayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  PayloadLockedDocuments?: Maybe<PayloadLockedDocuments>;
  PayloadPreference?: Maybe<PayloadPreference>;
  PayloadPreferences?: Maybe<PayloadPreferences>;
  User?: Maybe<User>;
  Users?: Maybe<Users>;
  Workspace?: Maybe<Workspace>;
  Workspaces?: Maybe<Workspaces>;
  allMedia?: Maybe<AllMedia>;
  countAssignments?: Maybe<CountAssignments>;
  countCompanies?: Maybe<CountCompanies>;
  countContacts?: Maybe<CountContacts>;
  countDocumentReferences?: Maybe<CountDocumentReferences>;
  countInteractions?: Maybe<CountInteractions>;
  countLeads?: Maybe<CountLeads>;
  countPayloadLockedDocuments?: Maybe<CountPayloadLockedDocuments>;
  countPayloadPreferences?: Maybe<CountPayloadPreferences>;
  countUsers?: Maybe<CountUsers>;
  countWorkspaces?: Maybe<CountWorkspaces>;
  countallMedia?: Maybe<CountallMedia>;
  docAccessAssignment?: Maybe<AssignmentsDocAccess>;
  docAccessCompany?: Maybe<CompaniesDocAccess>;
  docAccessContact?: Maybe<ContactsDocAccess>;
  docAccessDocumentReference?: Maybe<Document_ReferencesDocAccess>;
  docAccessInteraction?: Maybe<InteractionsDocAccess>;
  docAccessLead?: Maybe<LeadsDocAccess>;
  docAccessMedia?: Maybe<MediaDocAccess>;
  docAccessPayloadLockedDocument?: Maybe<Payload_Locked_DocumentsDocAccess>;
  docAccessPayloadPreference?: Maybe<Payload_PreferencesDocAccess>;
  docAccessUser?: Maybe<UsersDocAccess>;
  docAccessWorkspace?: Maybe<WorkspacesDocAccess>;
  initializedUser?: Maybe<Scalars['Boolean']['output']>;
  meUser?: Maybe<UsersMe>;
};


export type QueryAssignmentArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type QueryAssignmentsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Assignment_Where>;
};


export type QueryCompaniesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Company_Where>;
};


export type QueryCompanyArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type QueryContactArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type QueryContactsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Contact_Where>;
};


export type QueryDocumentReferenceArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type QueryDocumentReferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<DocumentReference_Where>;
};


export type QueryInteractionArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type QueryInteractionsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Interaction_Where>;
};


export type QueryLeadArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type QueryLeadsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Lead_Where>;
};


export type QueryMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type QueryPayloadLockedDocumentArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type QueryPayloadLockedDocumentsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<PayloadLockedDocument_Where>;
};


export type QueryPayloadPreferenceArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type QueryPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<PayloadPreference_Where>;
};


export type QueryUserArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type QueryUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<User_Where>;
};


export type QueryWorkspaceArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type QueryWorkspacesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Workspace_Where>;
};


export type QueryAllMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Media_Where>;
};


export type QueryCountAssignmentsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Assignment_Where>;
};


export type QueryCountCompaniesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Company_Where>;
};


export type QueryCountContactsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Contact_Where>;
};


export type QueryCountDocumentReferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<DocumentReference_Where>;
};


export type QueryCountInteractionsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Interaction_Where>;
};


export type QueryCountLeadsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Lead_Where>;
};


export type QueryCountPayloadLockedDocumentsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadLockedDocument_Where>;
};


export type QueryCountPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadPreference_Where>;
};


export type QueryCountUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<User_Where>;
};


export type QueryCountWorkspacesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Workspace_Where>;
};


export type QueryCountallMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Media_Where>;
};


export type QueryDocAccessAssignmentArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessCompanyArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessContactArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessDocumentReferenceArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessInteractionArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessLeadArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessMediaArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessPayloadLockedDocumentArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessPayloadPreferenceArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessWorkspaceArgs = {
  id: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['EmailAddress']['output'];
  hash?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  lockUntil?: Maybe<Scalars['DateTime']['output']>;
  loginAttempts?: Maybe<Scalars['Float']['output']>;
  resetPasswordExpiration?: Maybe<Scalars['DateTime']['output']>;
  resetPasswordToken?: Maybe<Scalars['String']['output']>;
  roles: Array<User_Roles>;
  salt?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  workspaces: Array<Workspace>;
};

export enum UserUpdate_Roles_MutationInput {
  Admin = 'admin',
  User = 'user'
}

export type User_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  contains?: InputMaybe<Scalars['EmailAddress']['input']>;
  equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  like?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
};

export type User_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum User_Roles {
  Admin = 'admin',
  User = 'user'
}

export enum User_Roles_Input {
  Admin = 'admin',
  User = 'user'
}

export enum User_Roles_MutationInput {
  Admin = 'admin',
  User = 'user'
}

export type User_Roles_Operator = {
  all?: InputMaybe<Array<InputMaybe<User_Roles_Input>>>;
  equals?: InputMaybe<User_Roles_Input>;
  in?: InputMaybe<Array<InputMaybe<User_Roles_Input>>>;
  not_equals?: InputMaybe<User_Roles_Input>;
  not_in?: InputMaybe<Array<InputMaybe<User_Roles_Input>>>;
};

export type User_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Where = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  roles?: InputMaybe<User_Roles_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
  workspaces?: InputMaybe<User_Workspaces_Operator>;
};

export type User_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  roles?: InputMaybe<User_Roles_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
  workspaces?: InputMaybe<User_Workspaces_Operator>;
};

export type User_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  roles?: InputMaybe<User_Roles_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
  workspaces?: InputMaybe<User_Workspaces_Operator>;
};

export type User_Workspaces_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Users = {
  __typename?: 'Users';
  docs?: Maybe<Array<Maybe<User>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UsersCreateAccess = {
  __typename?: 'UsersCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersCreateDocAccess = {
  __typename?: 'UsersCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteAccess = {
  __typename?: 'UsersDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteDocAccess = {
  __typename?: 'UsersDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDocAccessFields = {
  __typename?: 'UsersDocAccessFields';
  createdAt?: Maybe<UsersDocAccessFields_CreatedAt>;
  email?: Maybe<UsersDocAccessFields_Email>;
  roles?: Maybe<UsersDocAccessFields_Roles>;
  updatedAt?: Maybe<UsersDocAccessFields_UpdatedAt>;
  workspaces?: Maybe<UsersDocAccessFields_Workspaces>;
};

export type UsersDocAccessFields_CreatedAt = {
  __typename?: 'UsersDocAccessFields_createdAt';
  create?: Maybe<UsersDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_CreatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_CreatedAt_Update>;
};

export type UsersDocAccessFields_CreatedAt_Create = {
  __typename?: 'UsersDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Read = {
  __typename?: 'UsersDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Update = {
  __typename?: 'UsersDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email = {
  __typename?: 'UsersDocAccessFields_email';
  create?: Maybe<UsersDocAccessFields_Email_Create>;
  delete?: Maybe<UsersDocAccessFields_Email_Delete>;
  read?: Maybe<UsersDocAccessFields_Email_Read>;
  update?: Maybe<UsersDocAccessFields_Email_Update>;
};

export type UsersDocAccessFields_Email_Create = {
  __typename?: 'UsersDocAccessFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Delete = {
  __typename?: 'UsersDocAccessFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Read = {
  __typename?: 'UsersDocAccessFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Update = {
  __typename?: 'UsersDocAccessFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Roles = {
  __typename?: 'UsersDocAccessFields_roles';
  create?: Maybe<UsersDocAccessFields_Roles_Create>;
  delete?: Maybe<UsersDocAccessFields_Roles_Delete>;
  read?: Maybe<UsersDocAccessFields_Roles_Read>;
  update?: Maybe<UsersDocAccessFields_Roles_Update>;
};

export type UsersDocAccessFields_Roles_Create = {
  __typename?: 'UsersDocAccessFields_roles_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Roles_Delete = {
  __typename?: 'UsersDocAccessFields_roles_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Roles_Read = {
  __typename?: 'UsersDocAccessFields_roles_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Roles_Update = {
  __typename?: 'UsersDocAccessFields_roles_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt = {
  __typename?: 'UsersDocAccessFields_updatedAt';
  create?: Maybe<UsersDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_UpdatedAt_Update>;
};

export type UsersDocAccessFields_UpdatedAt_Create = {
  __typename?: 'UsersDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Read = {
  __typename?: 'UsersDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Update = {
  __typename?: 'UsersDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Workspaces = {
  __typename?: 'UsersDocAccessFields_workspaces';
  create?: Maybe<UsersDocAccessFields_Workspaces_Create>;
  delete?: Maybe<UsersDocAccessFields_Workspaces_Delete>;
  read?: Maybe<UsersDocAccessFields_Workspaces_Read>;
  update?: Maybe<UsersDocAccessFields_Workspaces_Update>;
};

export type UsersDocAccessFields_Workspaces_Create = {
  __typename?: 'UsersDocAccessFields_workspaces_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Workspaces_Delete = {
  __typename?: 'UsersDocAccessFields_workspaces_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Workspaces_Read = {
  __typename?: 'UsersDocAccessFields_workspaces_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Workspaces_Update = {
  __typename?: 'UsersDocAccessFields_workspaces_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields = {
  __typename?: 'UsersFields';
  createdAt?: Maybe<UsersFields_CreatedAt>;
  email?: Maybe<UsersFields_Email>;
  roles?: Maybe<UsersFields_Roles>;
  updatedAt?: Maybe<UsersFields_UpdatedAt>;
  workspaces?: Maybe<UsersFields_Workspaces>;
};

export type UsersFields_CreatedAt = {
  __typename?: 'UsersFields_createdAt';
  create?: Maybe<UsersFields_CreatedAt_Create>;
  delete?: Maybe<UsersFields_CreatedAt_Delete>;
  read?: Maybe<UsersFields_CreatedAt_Read>;
  update?: Maybe<UsersFields_CreatedAt_Update>;
};

export type UsersFields_CreatedAt_Create = {
  __typename?: 'UsersFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Delete = {
  __typename?: 'UsersFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Read = {
  __typename?: 'UsersFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Update = {
  __typename?: 'UsersFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email = {
  __typename?: 'UsersFields_email';
  create?: Maybe<UsersFields_Email_Create>;
  delete?: Maybe<UsersFields_Email_Delete>;
  read?: Maybe<UsersFields_Email_Read>;
  update?: Maybe<UsersFields_Email_Update>;
};

export type UsersFields_Email_Create = {
  __typename?: 'UsersFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Delete = {
  __typename?: 'UsersFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Read = {
  __typename?: 'UsersFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Update = {
  __typename?: 'UsersFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Roles = {
  __typename?: 'UsersFields_roles';
  create?: Maybe<UsersFields_Roles_Create>;
  delete?: Maybe<UsersFields_Roles_Delete>;
  read?: Maybe<UsersFields_Roles_Read>;
  update?: Maybe<UsersFields_Roles_Update>;
};

export type UsersFields_Roles_Create = {
  __typename?: 'UsersFields_roles_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Roles_Delete = {
  __typename?: 'UsersFields_roles_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Roles_Read = {
  __typename?: 'UsersFields_roles_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Roles_Update = {
  __typename?: 'UsersFields_roles_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt = {
  __typename?: 'UsersFields_updatedAt';
  create?: Maybe<UsersFields_UpdatedAt_Create>;
  delete?: Maybe<UsersFields_UpdatedAt_Delete>;
  read?: Maybe<UsersFields_UpdatedAt_Read>;
  update?: Maybe<UsersFields_UpdatedAt_Update>;
};

export type UsersFields_UpdatedAt_Create = {
  __typename?: 'UsersFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Delete = {
  __typename?: 'UsersFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Read = {
  __typename?: 'UsersFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Update = {
  __typename?: 'UsersFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Workspaces = {
  __typename?: 'UsersFields_workspaces';
  create?: Maybe<UsersFields_Workspaces_Create>;
  delete?: Maybe<UsersFields_Workspaces_Delete>;
  read?: Maybe<UsersFields_Workspaces_Read>;
  update?: Maybe<UsersFields_Workspaces_Update>;
};

export type UsersFields_Workspaces_Create = {
  __typename?: 'UsersFields_workspaces_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Workspaces_Delete = {
  __typename?: 'UsersFields_workspaces_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Workspaces_Read = {
  __typename?: 'UsersFields_workspaces_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Workspaces_Update = {
  __typename?: 'UsersFields_workspaces_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersReadAccess = {
  __typename?: 'UsersReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersReadDocAccess = {
  __typename?: 'UsersReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockAccess = {
  __typename?: 'UsersUnlockAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockDocAccess = {
  __typename?: 'UsersUnlockDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateAccess = {
  __typename?: 'UsersUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateDocAccess = {
  __typename?: 'UsersUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Workspace = {
  __typename?: 'Workspace';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Workspace_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Workspace_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Workspace_Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Workspace_Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Workspace_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Workspace_Where = {
  AND?: InputMaybe<Array<InputMaybe<Workspace_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Workspace_Where_Or>>>;
  createdAt?: InputMaybe<Workspace_CreatedAt_Operator>;
  id?: InputMaybe<Workspace_Id_Operator>;
  name?: InputMaybe<Workspace_Name_Operator>;
  slug?: InputMaybe<Workspace_Slug_Operator>;
  updatedAt?: InputMaybe<Workspace_UpdatedAt_Operator>;
};

export type Workspace_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Workspace_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Workspace_Where_Or>>>;
  createdAt?: InputMaybe<Workspace_CreatedAt_Operator>;
  id?: InputMaybe<Workspace_Id_Operator>;
  name?: InputMaybe<Workspace_Name_Operator>;
  slug?: InputMaybe<Workspace_Slug_Operator>;
  updatedAt?: InputMaybe<Workspace_UpdatedAt_Operator>;
};

export type Workspace_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Workspace_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Workspace_Where_Or>>>;
  createdAt?: InputMaybe<Workspace_CreatedAt_Operator>;
  id?: InputMaybe<Workspace_Id_Operator>;
  name?: InputMaybe<Workspace_Name_Operator>;
  slug?: InputMaybe<Workspace_Slug_Operator>;
  updatedAt?: InputMaybe<Workspace_UpdatedAt_Operator>;
};

export type Workspaces = {
  __typename?: 'Workspaces';
  docs?: Maybe<Array<Maybe<Workspace>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type WorkspacesCreateAccess = {
  __typename?: 'WorkspacesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type WorkspacesCreateDocAccess = {
  __typename?: 'WorkspacesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type WorkspacesDeleteAccess = {
  __typename?: 'WorkspacesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type WorkspacesDeleteDocAccess = {
  __typename?: 'WorkspacesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type WorkspacesDocAccessFields = {
  __typename?: 'WorkspacesDocAccessFields';
  createdAt?: Maybe<WorkspacesDocAccessFields_CreatedAt>;
  name?: Maybe<WorkspacesDocAccessFields_Name>;
  slug?: Maybe<WorkspacesDocAccessFields_Slug>;
  updatedAt?: Maybe<WorkspacesDocAccessFields_UpdatedAt>;
};

export type WorkspacesDocAccessFields_CreatedAt = {
  __typename?: 'WorkspacesDocAccessFields_createdAt';
  create?: Maybe<WorkspacesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<WorkspacesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<WorkspacesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<WorkspacesDocAccessFields_CreatedAt_Update>;
};

export type WorkspacesDocAccessFields_CreatedAt_Create = {
  __typename?: 'WorkspacesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type WorkspacesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'WorkspacesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type WorkspacesDocAccessFields_CreatedAt_Read = {
  __typename?: 'WorkspacesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type WorkspacesDocAccessFields_CreatedAt_Update = {
  __typename?: 'WorkspacesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type WorkspacesDocAccessFields_Name = {
  __typename?: 'WorkspacesDocAccessFields_name';
  create?: Maybe<WorkspacesDocAccessFields_Name_Create>;
  delete?: Maybe<WorkspacesDocAccessFields_Name_Delete>;
  read?: Maybe<WorkspacesDocAccessFields_Name_Read>;
  update?: Maybe<WorkspacesDocAccessFields_Name_Update>;
};

export type WorkspacesDocAccessFields_Name_Create = {
  __typename?: 'WorkspacesDocAccessFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type WorkspacesDocAccessFields_Name_Delete = {
  __typename?: 'WorkspacesDocAccessFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type WorkspacesDocAccessFields_Name_Read = {
  __typename?: 'WorkspacesDocAccessFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type WorkspacesDocAccessFields_Name_Update = {
  __typename?: 'WorkspacesDocAccessFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type WorkspacesDocAccessFields_Slug = {
  __typename?: 'WorkspacesDocAccessFields_slug';
  create?: Maybe<WorkspacesDocAccessFields_Slug_Create>;
  delete?: Maybe<WorkspacesDocAccessFields_Slug_Delete>;
  read?: Maybe<WorkspacesDocAccessFields_Slug_Read>;
  update?: Maybe<WorkspacesDocAccessFields_Slug_Update>;
};

export type WorkspacesDocAccessFields_Slug_Create = {
  __typename?: 'WorkspacesDocAccessFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type WorkspacesDocAccessFields_Slug_Delete = {
  __typename?: 'WorkspacesDocAccessFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type WorkspacesDocAccessFields_Slug_Read = {
  __typename?: 'WorkspacesDocAccessFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type WorkspacesDocAccessFields_Slug_Update = {
  __typename?: 'WorkspacesDocAccessFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type WorkspacesDocAccessFields_UpdatedAt = {
  __typename?: 'WorkspacesDocAccessFields_updatedAt';
  create?: Maybe<WorkspacesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<WorkspacesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<WorkspacesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<WorkspacesDocAccessFields_UpdatedAt_Update>;
};

export type WorkspacesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'WorkspacesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type WorkspacesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'WorkspacesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type WorkspacesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'WorkspacesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type WorkspacesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'WorkspacesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type WorkspacesFields = {
  __typename?: 'WorkspacesFields';
  createdAt?: Maybe<WorkspacesFields_CreatedAt>;
  name?: Maybe<WorkspacesFields_Name>;
  slug?: Maybe<WorkspacesFields_Slug>;
  updatedAt?: Maybe<WorkspacesFields_UpdatedAt>;
};

export type WorkspacesFields_CreatedAt = {
  __typename?: 'WorkspacesFields_createdAt';
  create?: Maybe<WorkspacesFields_CreatedAt_Create>;
  delete?: Maybe<WorkspacesFields_CreatedAt_Delete>;
  read?: Maybe<WorkspacesFields_CreatedAt_Read>;
  update?: Maybe<WorkspacesFields_CreatedAt_Update>;
};

export type WorkspacesFields_CreatedAt_Create = {
  __typename?: 'WorkspacesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type WorkspacesFields_CreatedAt_Delete = {
  __typename?: 'WorkspacesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type WorkspacesFields_CreatedAt_Read = {
  __typename?: 'WorkspacesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type WorkspacesFields_CreatedAt_Update = {
  __typename?: 'WorkspacesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type WorkspacesFields_Name = {
  __typename?: 'WorkspacesFields_name';
  create?: Maybe<WorkspacesFields_Name_Create>;
  delete?: Maybe<WorkspacesFields_Name_Delete>;
  read?: Maybe<WorkspacesFields_Name_Read>;
  update?: Maybe<WorkspacesFields_Name_Update>;
};

export type WorkspacesFields_Name_Create = {
  __typename?: 'WorkspacesFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type WorkspacesFields_Name_Delete = {
  __typename?: 'WorkspacesFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type WorkspacesFields_Name_Read = {
  __typename?: 'WorkspacesFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type WorkspacesFields_Name_Update = {
  __typename?: 'WorkspacesFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type WorkspacesFields_Slug = {
  __typename?: 'WorkspacesFields_slug';
  create?: Maybe<WorkspacesFields_Slug_Create>;
  delete?: Maybe<WorkspacesFields_Slug_Delete>;
  read?: Maybe<WorkspacesFields_Slug_Read>;
  update?: Maybe<WorkspacesFields_Slug_Update>;
};

export type WorkspacesFields_Slug_Create = {
  __typename?: 'WorkspacesFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type WorkspacesFields_Slug_Delete = {
  __typename?: 'WorkspacesFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type WorkspacesFields_Slug_Read = {
  __typename?: 'WorkspacesFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type WorkspacesFields_Slug_Update = {
  __typename?: 'WorkspacesFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type WorkspacesFields_UpdatedAt = {
  __typename?: 'WorkspacesFields_updatedAt';
  create?: Maybe<WorkspacesFields_UpdatedAt_Create>;
  delete?: Maybe<WorkspacesFields_UpdatedAt_Delete>;
  read?: Maybe<WorkspacesFields_UpdatedAt_Read>;
  update?: Maybe<WorkspacesFields_UpdatedAt_Update>;
};

export type WorkspacesFields_UpdatedAt_Create = {
  __typename?: 'WorkspacesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type WorkspacesFields_UpdatedAt_Delete = {
  __typename?: 'WorkspacesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type WorkspacesFields_UpdatedAt_Read = {
  __typename?: 'WorkspacesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type WorkspacesFields_UpdatedAt_Update = {
  __typename?: 'WorkspacesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type WorkspacesReadAccess = {
  __typename?: 'WorkspacesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type WorkspacesReadDocAccess = {
  __typename?: 'WorkspacesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type WorkspacesUpdateAccess = {
  __typename?: 'WorkspacesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type WorkspacesUpdateDocAccess = {
  __typename?: 'WorkspacesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AllMedia = {
  __typename?: 'allMedia';
  docs?: Maybe<Array<Maybe<Media>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type AssignmentsAccess = {
  __typename?: 'assignmentsAccess';
  create?: Maybe<AssignmentsCreateAccess>;
  delete?: Maybe<AssignmentsDeleteAccess>;
  fields?: Maybe<AssignmentsFields>;
  read?: Maybe<AssignmentsReadAccess>;
  update?: Maybe<AssignmentsUpdateAccess>;
};

export type AssignmentsDocAccess = {
  __typename?: 'assignmentsDocAccess';
  create?: Maybe<AssignmentsCreateDocAccess>;
  delete?: Maybe<AssignmentsDeleteDocAccess>;
  fields?: Maybe<AssignmentsDocAccessFields>;
  read?: Maybe<AssignmentsReadDocAccess>;
  update?: Maybe<AssignmentsUpdateDocAccess>;
};

export type CompaniesAccess = {
  __typename?: 'companiesAccess';
  create?: Maybe<CompaniesCreateAccess>;
  delete?: Maybe<CompaniesDeleteAccess>;
  fields?: Maybe<CompaniesFields>;
  read?: Maybe<CompaniesReadAccess>;
  update?: Maybe<CompaniesUpdateAccess>;
};

export type CompaniesDocAccess = {
  __typename?: 'companiesDocAccess';
  create?: Maybe<CompaniesCreateDocAccess>;
  delete?: Maybe<CompaniesDeleteDocAccess>;
  fields?: Maybe<CompaniesDocAccessFields>;
  read?: Maybe<CompaniesReadDocAccess>;
  update?: Maybe<CompaniesUpdateDocAccess>;
};

export type ContactsAccess = {
  __typename?: 'contactsAccess';
  create?: Maybe<ContactsCreateAccess>;
  delete?: Maybe<ContactsDeleteAccess>;
  fields?: Maybe<ContactsFields>;
  read?: Maybe<ContactsReadAccess>;
  update?: Maybe<ContactsUpdateAccess>;
};

export type ContactsDocAccess = {
  __typename?: 'contactsDocAccess';
  create?: Maybe<ContactsCreateDocAccess>;
  delete?: Maybe<ContactsDeleteDocAccess>;
  fields?: Maybe<ContactsDocAccessFields>;
  read?: Maybe<ContactsReadDocAccess>;
  update?: Maybe<ContactsUpdateDocAccess>;
};

export type CountAssignments = {
  __typename?: 'countAssignments';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountCompanies = {
  __typename?: 'countCompanies';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountContacts = {
  __typename?: 'countContacts';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountDocumentReferences = {
  __typename?: 'countDocumentReferences';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountInteractions = {
  __typename?: 'countInteractions';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountLeads = {
  __typename?: 'countLeads';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountPayloadLockedDocuments = {
  __typename?: 'countPayloadLockedDocuments';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountPayloadPreferences = {
  __typename?: 'countPayloadPreferences';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountUsers = {
  __typename?: 'countUsers';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountWorkspaces = {
  __typename?: 'countWorkspaces';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountallMedia = {
  __typename?: 'countallMedia';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type Document_ReferencesAccess = {
  __typename?: 'document_referencesAccess';
  create?: Maybe<DocumentReferencesCreateAccess>;
  delete?: Maybe<DocumentReferencesDeleteAccess>;
  fields?: Maybe<DocumentReferencesFields>;
  read?: Maybe<DocumentReferencesReadAccess>;
  update?: Maybe<DocumentReferencesUpdateAccess>;
};

export type Document_ReferencesDocAccess = {
  __typename?: 'document_referencesDocAccess';
  create?: Maybe<DocumentReferencesCreateDocAccess>;
  delete?: Maybe<DocumentReferencesDeleteDocAccess>;
  fields?: Maybe<DocumentReferencesDocAccessFields>;
  read?: Maybe<DocumentReferencesReadDocAccess>;
  update?: Maybe<DocumentReferencesUpdateDocAccess>;
};

export type InteractionsAccess = {
  __typename?: 'interactionsAccess';
  create?: Maybe<InteractionsCreateAccess>;
  delete?: Maybe<InteractionsDeleteAccess>;
  fields?: Maybe<InteractionsFields>;
  read?: Maybe<InteractionsReadAccess>;
  update?: Maybe<InteractionsUpdateAccess>;
};

export type InteractionsDocAccess = {
  __typename?: 'interactionsDocAccess';
  create?: Maybe<InteractionsCreateDocAccess>;
  delete?: Maybe<InteractionsDeleteDocAccess>;
  fields?: Maybe<InteractionsDocAccessFields>;
  read?: Maybe<InteractionsReadDocAccess>;
  update?: Maybe<InteractionsUpdateDocAccess>;
};

export type LeadsAccess = {
  __typename?: 'leadsAccess';
  create?: Maybe<LeadsCreateAccess>;
  delete?: Maybe<LeadsDeleteAccess>;
  fields?: Maybe<LeadsFields>;
  read?: Maybe<LeadsReadAccess>;
  update?: Maybe<LeadsUpdateAccess>;
};

export type LeadsDocAccess = {
  __typename?: 'leadsDocAccess';
  create?: Maybe<LeadsCreateDocAccess>;
  delete?: Maybe<LeadsDeleteDocAccess>;
  fields?: Maybe<LeadsDocAccessFields>;
  read?: Maybe<LeadsReadDocAccess>;
  update?: Maybe<LeadsUpdateDocAccess>;
};

export type MediaAccess = {
  __typename?: 'mediaAccess';
  create?: Maybe<MediaCreateAccess>;
  delete?: Maybe<MediaDeleteAccess>;
  fields?: Maybe<MediaFields>;
  read?: Maybe<MediaReadAccess>;
  update?: Maybe<MediaUpdateAccess>;
};

export type MediaDocAccess = {
  __typename?: 'mediaDocAccess';
  create?: Maybe<MediaCreateDocAccess>;
  delete?: Maybe<MediaDeleteDocAccess>;
  fields?: Maybe<MediaDocAccessFields>;
  read?: Maybe<MediaReadDocAccess>;
  update?: Maybe<MediaUpdateDocAccess>;
};

export type MutationAssignmentInput = {
  assignmentName: Scalars['String']['input'];
  company?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  externalContact?: InputMaybe<Scalars['String']['input']>;
  fee?: InputMaybe<Scalars['Float']['input']>;
  responsibleContacts?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  workspace?: InputMaybe<Scalars['String']['input']>;
};

export type MutationAssignmentUpdateInput = {
  assignmentName?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  externalContact?: InputMaybe<Scalars['String']['input']>;
  fee?: InputMaybe<Scalars['Float']['input']>;
  responsibleContacts?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  workspace?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCompanyInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  companyName: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  industry?: InputMaybe<Scalars['String']['input']>;
  organizationNumber?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
  workspace?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCompanyUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  industry?: InputMaybe<Scalars['String']['input']>;
  organizationNumber?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
  workspace?: InputMaybe<Scalars['String']['input']>;
};

export type MutationContactInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  contactName: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  workspace?: InputMaybe<Scalars['String']['input']>;
};

export type MutationContactUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  contactName?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  workspace?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDocumentReferenceInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  document?: InputMaybe<Scalars['String']['input']>;
  entityId: Scalars['String']['input'];
  entityType: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  workspace?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDocumentReferenceUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  document?: InputMaybe<Scalars['String']['input']>;
  entityId?: InputMaybe<Scalars['String']['input']>;
  entityType?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  workspace?: InputMaybe<Scalars['String']['input']>;
};

export type MutationInteractionInput = {
  contacts?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  interactionDate: Scalars['String']['input'];
  interactionType: Scalars['String']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  workspace?: InputMaybe<Scalars['String']['input']>;
};

export type MutationInteractionUpdateInput = {
  contacts?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  interactionDate?: InputMaybe<Scalars['String']['input']>;
  interactionType?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  workspace?: InputMaybe<Scalars['String']['input']>;
};

export type MutationLeadInput = {
  assignment?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  contact?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  leadTitle: Scalars['String']['input'];
  rank?: InputMaybe<Scalars['Float']['input']>;
  stage?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  workspace?: InputMaybe<Scalars['String']['input']>;
};

export type MutationLeadUpdateInput = {
  assignment?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  contact?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  leadTitle?: InputMaybe<Scalars['String']['input']>;
  rank?: InputMaybe<Scalars['Float']['input']>;
  stage?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  workspace?: InputMaybe<Scalars['String']['input']>;
};

export type MutationMediaInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  focalX?: InputMaybe<Scalars['Float']['input']>;
  focalY?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  sizes?: InputMaybe<MutationMedia_SizesInput>;
  thumbnailURL?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
  workspace?: InputMaybe<Scalars['String']['input']>;
};

export type MutationMediaUpdateInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  focalX?: InputMaybe<Scalars['Float']['input']>;
  focalY?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  sizes?: InputMaybe<MutationMediaUpdate_SizesInput>;
  thumbnailURL?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
  workspace?: InputMaybe<Scalars['String']['input']>;
};

export type MutationMediaUpdate_SizesInput = {
  large?: InputMaybe<MutationMediaUpdate_Sizes_LargeInput>;
  small?: InputMaybe<MutationMediaUpdate_Sizes_SmallInput>;
  tablet?: InputMaybe<MutationMediaUpdate_Sizes_TabletInput>;
  thumbnail?: InputMaybe<MutationMediaUpdate_Sizes_ThumbnailInput>;
};

export type MutationMediaUpdate_Sizes_LargeInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_Sizes_SmallInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_Sizes_TabletInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_Sizes_ThumbnailInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_SizesInput = {
  large?: InputMaybe<MutationMedia_Sizes_LargeInput>;
  small?: InputMaybe<MutationMedia_Sizes_SmallInput>;
  tablet?: InputMaybe<MutationMedia_Sizes_TabletInput>;
  thumbnail?: InputMaybe<MutationMedia_Sizes_ThumbnailInput>;
};

export type MutationMedia_Sizes_LargeInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_Sizes_SmallInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_Sizes_TabletInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_Sizes_ThumbnailInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationPayloadLockedDocumentInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  document?: InputMaybe<PayloadLockedDocument_DocumentRelationshipInput>;
  globalSlug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadLockedDocument_UserRelationshipInput>;
};

export type MutationPayloadLockedDocumentUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  document?: InputMaybe<PayloadLockedDocumentUpdate_DocumentRelationshipInput>;
  globalSlug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadLockedDocumentUpdate_UserRelationshipInput>;
};

export type MutationPayloadPreferenceInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadPreference_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationPayloadPreferenceUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationUserInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  hash?: InputMaybe<Scalars['String']['input']>;
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  password: Scalars['String']['input'];
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  roles: Array<InputMaybe<User_Roles_MutationInput>>;
  salt?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  workspaces?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MutationUserUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<InputMaybe<UserUpdate_Roles_MutationInput>>>;
  salt?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  workspaces?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MutationWorkspaceInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationWorkspaceUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type Payload_Locked_DocumentsAccess = {
  __typename?: 'payload_locked_documentsAccess';
  create?: Maybe<PayloadLockedDocumentsCreateAccess>;
  delete?: Maybe<PayloadLockedDocumentsDeleteAccess>;
  fields?: Maybe<PayloadLockedDocumentsFields>;
  read?: Maybe<PayloadLockedDocumentsReadAccess>;
  update?: Maybe<PayloadLockedDocumentsUpdateAccess>;
};

export type Payload_Locked_DocumentsDocAccess = {
  __typename?: 'payload_locked_documentsDocAccess';
  create?: Maybe<PayloadLockedDocumentsCreateDocAccess>;
  delete?: Maybe<PayloadLockedDocumentsDeleteDocAccess>;
  fields?: Maybe<PayloadLockedDocumentsDocAccessFields>;
  read?: Maybe<PayloadLockedDocumentsReadDocAccess>;
  update?: Maybe<PayloadLockedDocumentsUpdateDocAccess>;
};

export type Payload_PreferencesAccess = {
  __typename?: 'payload_preferencesAccess';
  create?: Maybe<PayloadPreferencesCreateAccess>;
  delete?: Maybe<PayloadPreferencesDeleteAccess>;
  fields?: Maybe<PayloadPreferencesFields>;
  read?: Maybe<PayloadPreferencesReadAccess>;
  update?: Maybe<PayloadPreferencesUpdateAccess>;
};

export type Payload_PreferencesDocAccess = {
  __typename?: 'payload_preferencesDocAccess';
  create?: Maybe<PayloadPreferencesCreateDocAccess>;
  delete?: Maybe<PayloadPreferencesDeleteDocAccess>;
  fields?: Maybe<PayloadPreferencesDocAccessFields>;
  read?: Maybe<PayloadPreferencesReadDocAccess>;
  update?: Maybe<PayloadPreferencesUpdateDocAccess>;
};

export type UsersAccess = {
  __typename?: 'usersAccess';
  create?: Maybe<UsersCreateAccess>;
  delete?: Maybe<UsersDeleteAccess>;
  fields?: Maybe<UsersFields>;
  read?: Maybe<UsersReadAccess>;
  unlock?: Maybe<UsersUnlockAccess>;
  update?: Maybe<UsersUpdateAccess>;
};

export type UsersDocAccess = {
  __typename?: 'usersDocAccess';
  create?: Maybe<UsersCreateDocAccess>;
  delete?: Maybe<UsersDeleteDocAccess>;
  fields?: Maybe<UsersDocAccessFields>;
  read?: Maybe<UsersReadDocAccess>;
  unlock?: Maybe<UsersUnlockDocAccess>;
  update?: Maybe<UsersUpdateDocAccess>;
};

export type UsersJwt = {
  __typename?: 'usersJWT';
  collection: Scalars['String']['output'];
  email: Scalars['EmailAddress']['output'];
  roles: Array<UsersJwt_Roles>;
  workspaces: Array<Workspace>;
};

export enum UsersJwt_Roles {
  Admin = 'admin',
  User = 'user'
}

export type UsersLoginResult = {
  __typename?: 'usersLoginResult';
  exp?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UsersMe = {
  __typename?: 'usersMe';
  collection?: Maybe<Scalars['String']['output']>;
  exp?: Maybe<Scalars['Int']['output']>;
  strategy?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UsersRefreshedUser = {
  __typename?: 'usersRefreshedUser';
  exp?: Maybe<Scalars['Int']['output']>;
  refreshedToken?: Maybe<Scalars['String']['output']>;
  strategy?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UsersJwt>;
};

export type UsersResetPassword = {
  __typename?: 'usersResetPassword';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type WorkspacesAccess = {
  __typename?: 'workspacesAccess';
  create?: Maybe<WorkspacesCreateAccess>;
  delete?: Maybe<WorkspacesDeleteAccess>;
  fields?: Maybe<WorkspacesFields>;
  read?: Maybe<WorkspacesReadAccess>;
  update?: Maybe<WorkspacesUpdateAccess>;
};

export type WorkspacesDocAccess = {
  __typename?: 'workspacesDocAccess';
  create?: Maybe<WorkspacesCreateDocAccess>;
  delete?: Maybe<WorkspacesDeleteDocAccess>;
  fields?: Maybe<WorkspacesDocAccessFields>;
  read?: Maybe<WorkspacesReadDocAccess>;
  update?: Maybe<WorkspacesUpdateDocAccess>;
};

export type GetAssignmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAssignmentsQuery = { __typename?: 'Query', Assignments?: { __typename?: 'Assignments', docs?: Array<{ __typename?: 'Assignment', id: string, assignmentName: string, fee?: number | null, status?: string | null, type?: string | null, createdAt?: any | null, updatedAt?: any | null, company?: { __typename?: 'Company', id: string, companyName: string, address?: string | null, industry?: string | null, phone?: string | null, email?: string | null, website?: string | null, organizationNumber?: string | null, createdAt?: any | null, updatedAt?: any | null } | null, externalContact?: { __typename?: 'Contact', id: string, contactName: string, email: any, phone?: string | null, jobTitle?: string | null, address?: string | null, notes?: string | null, createdAt?: any | null, updatedAt?: any | null } | null, responsibleContacts?: Array<{ __typename?: 'Contact', id: string, contactName: string, email: any, phone?: string | null, jobTitle?: string | null, address?: string | null, createdAt?: any | null, updatedAt?: any | null }> | null } | null> | null } | null };

export type GetAssignmentQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetAssignmentQuery = { __typename?: 'Query', Assignment?: { __typename?: 'Assignment', id: string, assignmentName: string, fee?: number | null, status?: string | null, type?: string | null, createdAt?: any | null, updatedAt?: any | null, company?: { __typename?: 'Company', id: string, companyName: string, address?: string | null, industry?: string | null, phone?: string | null, email?: string | null, website?: string | null, organizationNumber?: string | null, createdAt?: any | null, updatedAt?: any | null } | null, externalContact?: { __typename?: 'Contact', id: string, contactName: string, email: any, phone?: string | null, jobTitle?: string | null, address?: string | null, notes?: string | null, createdAt?: any | null, updatedAt?: any | null } | null, responsibleContacts?: Array<{ __typename?: 'Contact', id: string, contactName: string, email: any, phone?: string | null, jobTitle?: string | null, address?: string | null, createdAt?: any | null, updatedAt?: any | null }> | null } | null };

export type CreateAssignmentMutationVariables = Exact<{
  data: MutationAssignmentInput;
}>;


export type CreateAssignmentMutation = { __typename?: 'Mutation', createAssignment?: { __typename?: 'Assignment', id: string } | null };

export type UpdateAssignmentMutationVariables = Exact<{
  id: Scalars['String']['input'];
  data: MutationAssignmentUpdateInput;
}>;


export type UpdateAssignmentMutation = { __typename?: 'Mutation', updateAssignment?: { __typename?: 'Assignment', id: string } | null };

export type DeleteAssignmentMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteAssignmentMutation = { __typename?: 'Mutation', deleteAssignment?: { __typename?: 'Assignment', id: string } | null };

export type AuthLoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type AuthLoginMutation = { __typename?: 'Mutation', loginUser?: { __typename?: 'usersLoginResult', token?: string | null, user?: { __typename?: 'User', id: string, email: any } | null } | null };

export type AuthLogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type AuthLogoutMutation = { __typename?: 'Mutation', logoutUser?: string | null };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'Query', meUser?: { __typename?: 'usersMe', user?: { __typename?: 'User', id: string, email: any, roles: Array<User_Roles>, workspaces: Array<{ __typename?: 'Workspace', id: string, name: string, slug: string }> } | null } | null };

export type GetCompaniesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCompaniesQuery = { __typename?: 'Query', Companies?: { __typename?: 'Companies', docs?: Array<{ __typename?: 'Company', id: string, companyName: string, address?: string | null, industry?: string | null, phone?: string | null, email?: string | null, website?: string | null, organizationNumber?: string | null, createdAt?: any | null, updatedAt?: any | null } | null> | null } | null };

export type GetCompanyQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetCompanyQuery = { __typename?: 'Query', Company?: { __typename?: 'Company', id: string, companyName: string, address?: string | null, industry?: string | null, phone?: string | null, email?: string | null, website?: string | null, organizationNumber?: string | null, createdAt?: any | null, updatedAt?: any | null } | null };

export type CreateCompanyMutationVariables = Exact<{
  data: MutationCompanyInput;
}>;


export type CreateCompanyMutation = { __typename?: 'Mutation', createCompany?: { __typename?: 'Company', id: string } | null };

export type UpdateCompanyMutationVariables = Exact<{
  id: Scalars['String']['input'];
  data: MutationCompanyUpdateInput;
}>;


export type UpdateCompanyMutation = { __typename?: 'Mutation', updateCompany?: { __typename?: 'Company', id: string } | null };

export type DeleteCompanyMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteCompanyMutation = { __typename?: 'Mutation', deleteCompany?: { __typename?: 'Company', id: string } | null };

export type GetContactsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContactsQuery = { __typename?: 'Query', Contacts?: { __typename?: 'Contacts', docs?: Array<{ __typename?: 'Contact', id: string, contactName: string, email: any, phone?: string | null, jobTitle?: string | null, address?: string | null, notes?: string | null, createdAt?: any | null, updatedAt?: any | null, company?: { __typename?: 'Company', id: string, companyName: string, address?: string | null, industry?: string | null, phone?: string | null, email?: string | null, website?: string | null, organizationNumber?: string | null, createdAt?: any | null, updatedAt?: any | null } | null } | null> | null } | null };

export type GetContactQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetContactQuery = { __typename?: 'Query', Contact?: { __typename?: 'Contact', id: string, contactName: string, email: any, phone?: string | null, jobTitle?: string | null, address?: string | null, notes?: string | null, createdAt?: any | null, updatedAt?: any | null, company?: { __typename?: 'Company', id: string, companyName: string, address?: string | null, industry?: string | null, phone?: string | null, email?: string | null, website?: string | null, organizationNumber?: string | null, createdAt?: any | null, updatedAt?: any | null } | null } | null };

export type CreateContactMutationVariables = Exact<{
  data: MutationContactInput;
}>;


export type CreateContactMutation = { __typename?: 'Mutation', createContact?: { __typename?: 'Contact', id: string } | null };

export type UpdateContactMutationVariables = Exact<{
  id: Scalars['String']['input'];
  data: MutationContactUpdateInput;
}>;


export type UpdateContactMutation = { __typename?: 'Mutation', updateContact?: { __typename?: 'Contact', id: string } | null };

export type DeleteContactMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteContactMutation = { __typename?: 'Mutation', deleteContact?: { __typename?: 'Contact', id: string } | null };

export type GetDocumentsQueryVariables = Exact<{
  where?: InputMaybe<Media_Where>;
}>;


export type GetDocumentsQuery = { __typename?: 'Query', allMedia?: { __typename?: 'allMedia', docs?: Array<{ __typename?: 'Media', id: string, filename?: string | null, mimeType?: string | null, thumbnailURL?: string | null, alt?: string | null, url?: string | null, createdAt?: any | null, updatedAt?: any | null } | null> | null } | null };

export type GetDocumentQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetDocumentQuery = { __typename?: 'Query', Media?: { __typename?: 'Media', id: string, filename?: string | null, mimeType?: string | null, thumbnailURL?: string | null, alt?: string | null, url?: string | null, createdAt?: any | null, updatedAt?: any | null } | null };

export type DeleteDocumentMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteDocumentMutation = { __typename?: 'Mutation', deleteMedia?: { __typename?: 'Media', id: string } | null };

export type GetDocumentReferencesQueryVariables = Exact<{
  where?: InputMaybe<DocumentReference_Where>;
}>;


export type GetDocumentReferencesQuery = { __typename?: 'Query', DocumentReferences?: { __typename?: 'DocumentReferences', docs?: Array<{ __typename?: 'DocumentReference', id: string, entityId: string, entityType: string, createdAt?: any | null, updatedAt?: any | null, document: { __typename?: 'Media', id: string, alt?: string | null, filename?: string | null, mimeType?: string | null, thumbnailURL?: string | null, url?: string | null } } | null> | null } | null };

export type CreateDocumentReferenceMutationVariables = Exact<{
  data: MutationDocumentReferenceInput;
}>;


export type CreateDocumentReferenceMutation = { __typename?: 'Mutation', createDocumentReference?: { __typename?: 'DocumentReference', id: string } | null };

export type UpdateDocumentReferenceMutationVariables = Exact<{
  id: Scalars['String']['input'];
  data: MutationDocumentReferenceUpdateInput;
}>;


export type UpdateDocumentReferenceMutation = { __typename?: 'Mutation', updateDocumentReference?: { __typename?: 'DocumentReference', id: string } | null };

export type DeleteDocumentReferenceMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteDocumentReferenceMutation = { __typename?: 'Mutation', deleteDocumentReference?: { __typename?: 'DocumentReference', id: string } | null };

export type GetInteractionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetInteractionsQuery = { __typename?: 'Query', Interactions?: { __typename?: 'Interactions', docs?: Array<{ __typename?: 'Interaction', id: string, interactionType: string, interactionDate: any, notes?: string | null, createdAt?: any | null, updatedAt?: any | null, contacts?: Array<{ __typename?: 'Contact', id: string, contactName: string, email: any, phone?: string | null, jobTitle?: string | null, address?: string | null, createdAt?: any | null, updatedAt?: any | null }> | null } | null> | null } | null };

export type GetInteractionQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetInteractionQuery = { __typename?: 'Query', Interaction?: { __typename?: 'Interaction', id: string, interactionType: string, interactionDate: any, notes?: string | null, createdAt?: any | null, updatedAt?: any | null, contacts?: Array<{ __typename?: 'Contact', id: string, contactName: string, email: any, phone?: string | null, jobTitle?: string | null, address?: string | null, createdAt?: any | null, updatedAt?: any | null }> | null } | null };

export type CreateInteractionMutationVariables = Exact<{
  data: MutationInteractionInput;
}>;


export type CreateInteractionMutation = { __typename?: 'Mutation', createInteraction?: { __typename?: 'Interaction', id: string } | null };

export type UpdateInteractionMutationVariables = Exact<{
  id: Scalars['String']['input'];
  data: MutationInteractionUpdateInput;
}>;


export type UpdateInteractionMutation = { __typename?: 'Mutation', updateInteraction?: { __typename?: 'Interaction', id: string } | null };

export type DeleteInteractionMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteInteractionMutation = { __typename?: 'Mutation', deleteInteraction?: { __typename?: 'Interaction', id: string } | null };

export type GetLeadsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLeadsQuery = { __typename?: 'Query', Leads?: { __typename?: 'Leads', docs?: Array<{ __typename?: 'Lead', id: string, leadTitle: string, description?: string | null, stage?: string | null, rank?: number | null, createdAt?: any | null, updatedAt?: any | null, company?: { __typename?: 'Company', id: string, companyName: string, address?: string | null, industry?: string | null, phone?: string | null, email?: string | null, website?: string | null, organizationNumber?: string | null, createdAt?: any | null, updatedAt?: any | null } | null, contact?: { __typename?: 'Contact', id: string, contactName: string, email: any, phone?: string | null, jobTitle?: string | null, address?: string | null, notes?: string | null, createdAt?: any | null, updatedAt?: any | null } | null, assignment?: { __typename?: 'Assignment', id: string, assignmentName: string, fee?: number | null, status?: string | null, type?: string | null, createdAt?: any | null, updatedAt?: any | null } | null } | null> | null } | null };

export type GetLeadQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetLeadQuery = { __typename?: 'Query', Lead?: { __typename?: 'Lead', id: string, leadTitle: string, description?: string | null, stage?: string | null, rank?: number | null, createdAt?: any | null, updatedAt?: any | null, company?: { __typename?: 'Company', id: string, companyName: string, address?: string | null, industry?: string | null, phone?: string | null, email?: string | null, website?: string | null, organizationNumber?: string | null, createdAt?: any | null, updatedAt?: any | null } | null, contact?: { __typename?: 'Contact', id: string, contactName: string, email: any, phone?: string | null, jobTitle?: string | null, address?: string | null, notes?: string | null, createdAt?: any | null, updatedAt?: any | null } | null, assignment?: { __typename?: 'Assignment', id: string, assignmentName: string, fee?: number | null, status?: string | null, type?: string | null, createdAt?: any | null, updatedAt?: any | null } | null } | null };

export type CreateLeadMutationVariables = Exact<{
  data: MutationLeadInput;
}>;


export type CreateLeadMutation = { __typename?: 'Mutation', createLead?: { __typename?: 'Lead', id: string } | null };

export type UpdateLeadMutationVariables = Exact<{
  id: Scalars['String']['input'];
  data: MutationLeadUpdateInput;
}>;


export type UpdateLeadMutation = { __typename?: 'Mutation', updateLead?: { __typename?: 'Lead', id: string } | null };

export type DeleteLeadMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteLeadMutation = { __typename?: 'Mutation', deleteLead?: { __typename?: 'Lead', id: string } | null };

export type GetWorkspacesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWorkspacesQuery = { __typename?: 'Query', Workspaces?: { __typename?: 'Workspaces', docs?: Array<{ __typename?: 'Workspace', id: string, name: string, slug: string, createdAt?: any | null, updatedAt?: any | null } | null> | null } | null };


export const GetAssignmentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAssignments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Assignments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"assignmentName","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"assignmentName"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"organizationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"externalContact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contactName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"responsibleContacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contactName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAssignmentsQuery, GetAssignmentsQueryVariables>;
export const GetAssignmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAssignment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Assignment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"assignmentName"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"organizationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"externalContact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contactName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"responsibleContacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contactName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<GetAssignmentQuery, GetAssignmentQueryVariables>;
export const CreateAssignmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAssignment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"mutationAssignmentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAssignment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateAssignmentMutation, CreateAssignmentMutationVariables>;
export const UpdateAssignmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAssignment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"mutationAssignmentUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAssignment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateAssignmentMutation, UpdateAssignmentMutationVariables>;
export const DeleteAssignmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAssignment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteAssignment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteAssignmentMutation, DeleteAssignmentMutationVariables>;
export const AuthLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AuthLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<AuthLoginMutation, AuthLoginMutationVariables>;
export const AuthLogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AuthLogout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logoutUser"}}]}}]} as unknown as DocumentNode<AuthLogoutMutation, AuthLogoutMutationVariables>;
export const GetMeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"workspaces"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"roles"}}]}}]}}]}}]} as unknown as DocumentNode<GetMeQuery, GetMeQueryVariables>;
export const GetCompaniesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCompanies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Companies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"companyName","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"organizationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<GetCompaniesQuery, GetCompaniesQueryVariables>;
export const GetCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Company"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"organizationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetCompanyQuery, GetCompanyQueryVariables>;
export const CreateCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"mutationCompanyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateCompanyMutation, CreateCompanyMutationVariables>;
export const UpdateCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"mutationCompanyUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateCompanyMutation, UpdateCompanyMutationVariables>;
export const DeleteCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteCompanyMutation, DeleteCompanyMutationVariables>;
export const GetContactsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetContacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Contacts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"contactName","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contactName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"organizationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetContactsQuery, GetContactsQueryVariables>;
export const GetContactDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetContact"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Contact"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contactName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"organizationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<GetContactQuery, GetContactQueryVariables>;
export const CreateContactDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateContact"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"mutationContactInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createContact"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateContactMutation, CreateContactMutationVariables>;
export const UpdateContactDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateContact"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"mutationContactUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateContact"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateContactMutation, UpdateContactMutationVariables>;
export const DeleteContactDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteContact"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteContact"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteContactMutation, DeleteContactMutationVariables>;
export const GetDocumentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDocuments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Media_where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allMedia"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"id","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailURL"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<GetDocumentsQuery, GetDocumentsQueryVariables>;
export const GetDocumentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDocument"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Media"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailURL"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetDocumentQuery, GetDocumentQueryVariables>;
export const DeleteDocumentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteDocument"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteMedia"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteDocumentMutation, DeleteDocumentMutationVariables>;
export const GetDocumentReferencesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDocumentReferences"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DocumentReference_where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DocumentReferences"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"id","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"entityId"}},{"kind":"Field","name":{"kind":"Name","value":"entityType"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailURL"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetDocumentReferencesQuery, GetDocumentReferencesQueryVariables>;
export const CreateDocumentReferenceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateDocumentReference"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"mutationDocumentReferenceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createDocumentReference"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateDocumentReferenceMutation, CreateDocumentReferenceMutationVariables>;
export const UpdateDocumentReferenceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateDocumentReference"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"mutationDocumentReferenceUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateDocumentReference"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateDocumentReferenceMutation, UpdateDocumentReferenceMutationVariables>;
export const DeleteDocumentReferenceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteDocumentReference"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteDocumentReference"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteDocumentReferenceMutation, DeleteDocumentReferenceMutationVariables>;
export const GetInteractionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetInteractions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Interactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"interactionDate:desc","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"interactionType"}},{"kind":"Field","name":{"kind":"Name","value":"interactionDate"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contactName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetInteractionsQuery, GetInteractionsQueryVariables>;
export const GetInteractionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetInteraction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Interaction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"interactionType"}},{"kind":"Field","name":{"kind":"Name","value":"interactionDate"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contactName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<GetInteractionQuery, GetInteractionQueryVariables>;
export const CreateInteractionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateInteraction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"mutationInteractionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createInteraction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateInteractionMutation, CreateInteractionMutationVariables>;
export const UpdateInteractionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateInteraction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"mutationInteractionUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateInteraction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateInteractionMutation, UpdateInteractionMutationVariables>;
export const DeleteInteractionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteInteraction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteInteraction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteInteractionMutation, DeleteInteractionMutationVariables>;
export const GetLeadsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLeads"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Leads"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"rank","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"leadTitle"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"stage"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"organizationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contactName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"assignmentName"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetLeadsQuery, GetLeadsQueryVariables>;
export const GetLeadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLead"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Lead"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"leadTitle"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"stage"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"organizationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contactName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"assignmentName"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<GetLeadQuery, GetLeadQueryVariables>;
export const CreateLeadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateLead"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"mutationLeadInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createLead"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateLeadMutation, CreateLeadMutationVariables>;
export const UpdateLeadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateLead"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"mutationLeadUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateLead"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateLeadMutation, UpdateLeadMutationVariables>;
export const DeleteLeadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteLead"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteLead"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteLeadMutation, DeleteLeadMutationVariables>;
export const GetWorkspacesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetWorkspaces"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Workspaces"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<GetWorkspacesQuery, GetWorkspacesQueryVariables>;