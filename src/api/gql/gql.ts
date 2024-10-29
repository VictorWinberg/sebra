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
    "\n      query GetAssignments {\n        Assignments(sort: \"assignmentName\") {\n          docs {\n            id\n            assignmentName\n            fee\n            status\n            type\n            createdAt\n            updatedAt\n\n            company {\n              id\n              companyName\n              address\n              industry\n              phone\n              email\n              website\n              organizationNumber\n              createdAt\n              updatedAt\n            }\n\n            externalContact {\n              id\n              contactName\n              email\n              phone\n              jobTitle\n              address\n              notes\n              createdAt\n              updatedAt\n            }\n\n            responsibleContacts {\n              id\n              contactName\n              email\n              phone\n              jobTitle\n              address\n              createdAt\n              updatedAt\n            }\n          }\n        }\n      }\n    ": types.GetAssignmentsDocument,
    "\n      query GetAssignment($id: String!) {\n        Assignment(id: $id) {\n          id\n          assignmentName\n          fee\n          status\n          type\n          createdAt\n          updatedAt\n\n          company {\n            id\n            companyName\n            address\n            industry\n            phone\n            email\n            website\n            organizationNumber\n            createdAt\n            updatedAt\n          }\n\n          externalContact {\n            id\n            contactName\n            email\n            phone\n            jobTitle\n            address\n            notes\n            createdAt\n            updatedAt\n          }\n\n          responsibleContacts {\n            id\n            contactName\n            email\n            phone\n            jobTitle\n            address\n            createdAt\n            updatedAt\n          }\n        }\n      }\n    ": types.GetAssignmentDocument,
    "\n      mutation CreateAssignment($data: mutationAssignmentInput!) {\n        createAssignment(data: $data) {\n          id\n        }\n      }\n    ": types.CreateAssignmentDocument,
    "\n      mutation UpdateAssignment($id: String!, $data: mutationAssignmentUpdateInput!) {\n        updateAssignment(id: $id, data: $data) {\n          id\n        }\n      }\n    ": types.UpdateAssignmentDocument,
    "\n      mutation DeleteAssignment($id: String!) {\n        deleteAssignment(id: $id) {\n          id\n        }\n      }\n    ": types.DeleteAssignmentDocument,
    "\n          mutation AuthLogin($email: String!, $password: String!) {\n            loginUser(email: $email, password: $password) {\n              token\n              user {\n                id\n                email\n              }\n            }\n          }\n        ": types.AuthLoginDocument,
    "\n          mutation AuthLogout {\n            logoutUser\n          }\n        ": types.AuthLogoutDocument,
    "\n          query GetMe {\n            meUser {\n              user {\n                id\n                email\n              }\n            }\n          }\n        ": types.GetMeDocument,
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
    "\n      query GetDocuments($where: Media_where) {\n        allMedia(sort: \"id\", where: $where) {\n          docs {\n            id\n            filename\n            mimeType\n            thumbnailURL\n            alt\n            url\n            createdAt\n            updatedAt\n          }\n        }\n      }\n    ": types.GetDocumentsDocument,
    "\n      query GetDocument($id: String!) {\n        Media(id: $id) {\n          id\n          filename\n          mimeType\n          thumbnailURL\n          alt\n          url\n          createdAt\n          updatedAt\n        }\n      }\n    ": types.GetDocumentDocument,
    "\n      mutation DeleteDocument($id: String!) {\n        deleteMedia(id: $id) {\n          id\n        }\n      }\n    ": types.DeleteDocumentDocument,
    "\n      query GetDocumentReferences($where: DocumentReference_where) {\n        DocumentReferences(sort: \"id\", where: $where) {\n          docs {\n            id\n            entityId\n            entityType\n            createdAt\n            updatedAt\n\n            document {\n              id\n              alt\n              filename\n              mimeType\n              thumbnailURL\n              url\n            }\n          }\n        }\n      }\n    ": types.GetDocumentReferencesDocument,
    "\n      mutation CreateDocumentReference($data: mutationDocumentReferenceInput!) {\n        createDocumentReference(data: $data) {\n          id\n        }\n      }\n    ": types.CreateDocumentReferenceDocument,
    "\n      mutation UpdateDocumentReference($id: String!, $data: mutationDocumentReferenceUpdateInput!) {\n        updateDocumentReference(id: $id, data: $data) {\n          id\n        }\n      }\n    ": types.UpdateDocumentReferenceDocument,
    "\n      mutation DeleteDocumentReference($id: String!) {\n        deleteDocumentReference(id: $id) {\n          id\n        }\n      }\n    ": types.DeleteDocumentReferenceDocument,
    "\n      query GetInteractions {\n        Interactions(sort: \"interactionDate:desc\") {\n          docs {\n            id\n            interactionType\n            interactionDate\n            notes\n            createdAt\n            updatedAt\n\n            contacts {\n              id\n              contactName\n              email\n              phone\n              jobTitle\n              address\n              createdAt\n              updatedAt\n            }\n          }\n        }\n      }\n    ": types.GetInteractionsDocument,
    "\n      query GetInteraction($id: String!) {\n        Interaction(id: $id) {\n          id\n          interactionType\n          interactionDate\n          notes\n          createdAt\n          updatedAt\n\n          contacts {\n            id\n            contactName\n            email\n            phone\n            jobTitle\n            address\n            createdAt\n            updatedAt\n          }\n        }\n      }\n    ": types.GetInteractionDocument,
    "\n      mutation CreateInteraction($data: mutationInteractionInput!) {\n        createInteraction(data: $data) {\n          id\n        }\n      }\n    ": types.CreateInteractionDocument,
    "\n      mutation UpdateInteraction($id: String!, $data: mutationInteractionUpdateInput!) {\n        updateInteraction(id: $id, data: $data) {\n          id\n        }\n      }\n    ": types.UpdateInteractionDocument,
    "\n      mutation DeleteInteraction($id: String!) {\n        deleteInteraction(id: $id) {\n          id\n        }\n      }\n    ": types.DeleteInteractionDocument,
    "\n      query GetLeads {\n        Leads(sort: \"rank\") {\n          docs {\n            id\n            leadTitle\n            description\n            stage\n            rank\n            createdAt\n            updatedAt\n\n            company {\n              id\n              companyName\n              address\n              industry\n              phone\n              email\n              website\n              organizationNumber\n              createdAt\n              updatedAt\n            }\n\n            contact {\n              id\n              contactName\n              email\n              phone\n              jobTitle\n              address\n              notes\n              createdAt\n              updatedAt\n            }\n\n            assignment {\n              id\n              assignmentName\n              fee\n              status\n              type\n              createdAt\n              updatedAt\n            }\n          }\n        }\n      }\n    ": types.GetLeadsDocument,
    "\n      query GetLead($id: String!) {\n        Lead(id: $id) {\n          id\n          leadTitle\n          description\n          stage\n          rank\n          createdAt\n          updatedAt\n\n          company {\n            id\n            companyName\n            address\n            industry\n            phone\n            email\n            website\n            organizationNumber\n            createdAt\n            updatedAt\n          }\n\n          contact {\n            id\n            contactName\n            email\n            phone\n            jobTitle\n            address\n            notes\n            createdAt\n            updatedAt\n          }\n\n          assignment {\n            id\n            assignmentName\n            fee\n            status\n            type\n            createdAt\n            updatedAt\n          }\n        }\n      }\n    ": types.GetLeadDocument,
    "\n      mutation CreateLead($data: mutationLeadInput!) {\n        createLead(data: $data) {\n          id\n        }\n      }\n    ": types.CreateLeadDocument,
    "\n      mutation UpdateLead($id: String!, $data: mutationLeadUpdateInput!) {\n        updateLead(id: $id, data: $data) {\n          id\n        }\n      }\n    ": types.UpdateLeadDocument,
    "\n      mutation DeleteLead($id: String!) {\n        deleteLead(id: $id) {\n          id\n        }\n      }\n    ": types.DeleteLeadDocument,
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
export function graphql(source: "\n      query GetAssignments {\n        Assignments(sort: \"assignmentName\") {\n          docs {\n            id\n            assignmentName\n            fee\n            status\n            type\n            createdAt\n            updatedAt\n\n            company {\n              id\n              companyName\n              address\n              industry\n              phone\n              email\n              website\n              organizationNumber\n              createdAt\n              updatedAt\n            }\n\n            externalContact {\n              id\n              contactName\n              email\n              phone\n              jobTitle\n              address\n              notes\n              createdAt\n              updatedAt\n            }\n\n            responsibleContacts {\n              id\n              contactName\n              email\n              phone\n              jobTitle\n              address\n              createdAt\n              updatedAt\n            }\n          }\n        }\n      }\n    "): (typeof documents)["\n      query GetAssignments {\n        Assignments(sort: \"assignmentName\") {\n          docs {\n            id\n            assignmentName\n            fee\n            status\n            type\n            createdAt\n            updatedAt\n\n            company {\n              id\n              companyName\n              address\n              industry\n              phone\n              email\n              website\n              organizationNumber\n              createdAt\n              updatedAt\n            }\n\n            externalContact {\n              id\n              contactName\n              email\n              phone\n              jobTitle\n              address\n              notes\n              createdAt\n              updatedAt\n            }\n\n            responsibleContacts {\n              id\n              contactName\n              email\n              phone\n              jobTitle\n              address\n              createdAt\n              updatedAt\n            }\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query GetAssignment($id: String!) {\n        Assignment(id: $id) {\n          id\n          assignmentName\n          fee\n          status\n          type\n          createdAt\n          updatedAt\n\n          company {\n            id\n            companyName\n            address\n            industry\n            phone\n            email\n            website\n            organizationNumber\n            createdAt\n            updatedAt\n          }\n\n          externalContact {\n            id\n            contactName\n            email\n            phone\n            jobTitle\n            address\n            notes\n            createdAt\n            updatedAt\n          }\n\n          responsibleContacts {\n            id\n            contactName\n            email\n            phone\n            jobTitle\n            address\n            createdAt\n            updatedAt\n          }\n        }\n      }\n    "): (typeof documents)["\n      query GetAssignment($id: String!) {\n        Assignment(id: $id) {\n          id\n          assignmentName\n          fee\n          status\n          type\n          createdAt\n          updatedAt\n\n          company {\n            id\n            companyName\n            address\n            industry\n            phone\n            email\n            website\n            organizationNumber\n            createdAt\n            updatedAt\n          }\n\n          externalContact {\n            id\n            contactName\n            email\n            phone\n            jobTitle\n            address\n            notes\n            createdAt\n            updatedAt\n          }\n\n          responsibleContacts {\n            id\n            contactName\n            email\n            phone\n            jobTitle\n            address\n            createdAt\n            updatedAt\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation CreateAssignment($data: mutationAssignmentInput!) {\n        createAssignment(data: $data) {\n          id\n        }\n      }\n    "): (typeof documents)["\n      mutation CreateAssignment($data: mutationAssignmentInput!) {\n        createAssignment(data: $data) {\n          id\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation UpdateAssignment($id: String!, $data: mutationAssignmentUpdateInput!) {\n        updateAssignment(id: $id, data: $data) {\n          id\n        }\n      }\n    "): (typeof documents)["\n      mutation UpdateAssignment($id: String!, $data: mutationAssignmentUpdateInput!) {\n        updateAssignment(id: $id, data: $data) {\n          id\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation DeleteAssignment($id: String!) {\n        deleteAssignment(id: $id) {\n          id\n        }\n      }\n    "): (typeof documents)["\n      mutation DeleteAssignment($id: String!) {\n        deleteAssignment(id: $id) {\n          id\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n          mutation AuthLogin($email: String!, $password: String!) {\n            loginUser(email: $email, password: $password) {\n              token\n              user {\n                id\n                email\n              }\n            }\n          }\n        "): (typeof documents)["\n          mutation AuthLogin($email: String!, $password: String!) {\n            loginUser(email: $email, password: $password) {\n              token\n              user {\n                id\n                email\n              }\n            }\n          }\n        "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n          mutation AuthLogout {\n            logoutUser\n          }\n        "): (typeof documents)["\n          mutation AuthLogout {\n            logoutUser\n          }\n        "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n          query GetMe {\n            meUser {\n              user {\n                id\n                email\n              }\n            }\n          }\n        "): (typeof documents)["\n          query GetMe {\n            meUser {\n              user {\n                id\n                email\n              }\n            }\n          }\n        "];
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
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query GetDocuments($where: Media_where) {\n        allMedia(sort: \"id\", where: $where) {\n          docs {\n            id\n            filename\n            mimeType\n            thumbnailURL\n            alt\n            url\n            createdAt\n            updatedAt\n          }\n        }\n      }\n    "): (typeof documents)["\n      query GetDocuments($where: Media_where) {\n        allMedia(sort: \"id\", where: $where) {\n          docs {\n            id\n            filename\n            mimeType\n            thumbnailURL\n            alt\n            url\n            createdAt\n            updatedAt\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query GetDocument($id: String!) {\n        Media(id: $id) {\n          id\n          filename\n          mimeType\n          thumbnailURL\n          alt\n          url\n          createdAt\n          updatedAt\n        }\n      }\n    "): (typeof documents)["\n      query GetDocument($id: String!) {\n        Media(id: $id) {\n          id\n          filename\n          mimeType\n          thumbnailURL\n          alt\n          url\n          createdAt\n          updatedAt\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation DeleteDocument($id: String!) {\n        deleteMedia(id: $id) {\n          id\n        }\n      }\n    "): (typeof documents)["\n      mutation DeleteDocument($id: String!) {\n        deleteMedia(id: $id) {\n          id\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query GetDocumentReferences($where: DocumentReference_where) {\n        DocumentReferences(sort: \"id\", where: $where) {\n          docs {\n            id\n            entityId\n            entityType\n            createdAt\n            updatedAt\n\n            document {\n              id\n              alt\n              filename\n              mimeType\n              thumbnailURL\n              url\n            }\n          }\n        }\n      }\n    "): (typeof documents)["\n      query GetDocumentReferences($where: DocumentReference_where) {\n        DocumentReferences(sort: \"id\", where: $where) {\n          docs {\n            id\n            entityId\n            entityType\n            createdAt\n            updatedAt\n\n            document {\n              id\n              alt\n              filename\n              mimeType\n              thumbnailURL\n              url\n            }\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation CreateDocumentReference($data: mutationDocumentReferenceInput!) {\n        createDocumentReference(data: $data) {\n          id\n        }\n      }\n    "): (typeof documents)["\n      mutation CreateDocumentReference($data: mutationDocumentReferenceInput!) {\n        createDocumentReference(data: $data) {\n          id\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation UpdateDocumentReference($id: String!, $data: mutationDocumentReferenceUpdateInput!) {\n        updateDocumentReference(id: $id, data: $data) {\n          id\n        }\n      }\n    "): (typeof documents)["\n      mutation UpdateDocumentReference($id: String!, $data: mutationDocumentReferenceUpdateInput!) {\n        updateDocumentReference(id: $id, data: $data) {\n          id\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation DeleteDocumentReference($id: String!) {\n        deleteDocumentReference(id: $id) {\n          id\n        }\n      }\n    "): (typeof documents)["\n      mutation DeleteDocumentReference($id: String!) {\n        deleteDocumentReference(id: $id) {\n          id\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query GetInteractions {\n        Interactions(sort: \"interactionDate:desc\") {\n          docs {\n            id\n            interactionType\n            interactionDate\n            notes\n            createdAt\n            updatedAt\n\n            contacts {\n              id\n              contactName\n              email\n              phone\n              jobTitle\n              address\n              createdAt\n              updatedAt\n            }\n          }\n        }\n      }\n    "): (typeof documents)["\n      query GetInteractions {\n        Interactions(sort: \"interactionDate:desc\") {\n          docs {\n            id\n            interactionType\n            interactionDate\n            notes\n            createdAt\n            updatedAt\n\n            contacts {\n              id\n              contactName\n              email\n              phone\n              jobTitle\n              address\n              createdAt\n              updatedAt\n            }\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query GetInteraction($id: String!) {\n        Interaction(id: $id) {\n          id\n          interactionType\n          interactionDate\n          notes\n          createdAt\n          updatedAt\n\n          contacts {\n            id\n            contactName\n            email\n            phone\n            jobTitle\n            address\n            createdAt\n            updatedAt\n          }\n        }\n      }\n    "): (typeof documents)["\n      query GetInteraction($id: String!) {\n        Interaction(id: $id) {\n          id\n          interactionType\n          interactionDate\n          notes\n          createdAt\n          updatedAt\n\n          contacts {\n            id\n            contactName\n            email\n            phone\n            jobTitle\n            address\n            createdAt\n            updatedAt\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation CreateInteraction($data: mutationInteractionInput!) {\n        createInteraction(data: $data) {\n          id\n        }\n      }\n    "): (typeof documents)["\n      mutation CreateInteraction($data: mutationInteractionInput!) {\n        createInteraction(data: $data) {\n          id\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation UpdateInteraction($id: String!, $data: mutationInteractionUpdateInput!) {\n        updateInteraction(id: $id, data: $data) {\n          id\n        }\n      }\n    "): (typeof documents)["\n      mutation UpdateInteraction($id: String!, $data: mutationInteractionUpdateInput!) {\n        updateInteraction(id: $id, data: $data) {\n          id\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation DeleteInteraction($id: String!) {\n        deleteInteraction(id: $id) {\n          id\n        }\n      }\n    "): (typeof documents)["\n      mutation DeleteInteraction($id: String!) {\n        deleteInteraction(id: $id) {\n          id\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query GetLeads {\n        Leads(sort: \"rank\") {\n          docs {\n            id\n            leadTitle\n            description\n            stage\n            rank\n            createdAt\n            updatedAt\n\n            company {\n              id\n              companyName\n              address\n              industry\n              phone\n              email\n              website\n              organizationNumber\n              createdAt\n              updatedAt\n            }\n\n            contact {\n              id\n              contactName\n              email\n              phone\n              jobTitle\n              address\n              notes\n              createdAt\n              updatedAt\n            }\n\n            assignment {\n              id\n              assignmentName\n              fee\n              status\n              type\n              createdAt\n              updatedAt\n            }\n          }\n        }\n      }\n    "): (typeof documents)["\n      query GetLeads {\n        Leads(sort: \"rank\") {\n          docs {\n            id\n            leadTitle\n            description\n            stage\n            rank\n            createdAt\n            updatedAt\n\n            company {\n              id\n              companyName\n              address\n              industry\n              phone\n              email\n              website\n              organizationNumber\n              createdAt\n              updatedAt\n            }\n\n            contact {\n              id\n              contactName\n              email\n              phone\n              jobTitle\n              address\n              notes\n              createdAt\n              updatedAt\n            }\n\n            assignment {\n              id\n              assignmentName\n              fee\n              status\n              type\n              createdAt\n              updatedAt\n            }\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query GetLead($id: String!) {\n        Lead(id: $id) {\n          id\n          leadTitle\n          description\n          stage\n          rank\n          createdAt\n          updatedAt\n\n          company {\n            id\n            companyName\n            address\n            industry\n            phone\n            email\n            website\n            organizationNumber\n            createdAt\n            updatedAt\n          }\n\n          contact {\n            id\n            contactName\n            email\n            phone\n            jobTitle\n            address\n            notes\n            createdAt\n            updatedAt\n          }\n\n          assignment {\n            id\n            assignmentName\n            fee\n            status\n            type\n            createdAt\n            updatedAt\n          }\n        }\n      }\n    "): (typeof documents)["\n      query GetLead($id: String!) {\n        Lead(id: $id) {\n          id\n          leadTitle\n          description\n          stage\n          rank\n          createdAt\n          updatedAt\n\n          company {\n            id\n            companyName\n            address\n            industry\n            phone\n            email\n            website\n            organizationNumber\n            createdAt\n            updatedAt\n          }\n\n          contact {\n            id\n            contactName\n            email\n            phone\n            jobTitle\n            address\n            notes\n            createdAt\n            updatedAt\n          }\n\n          assignment {\n            id\n            assignmentName\n            fee\n            status\n            type\n            createdAt\n            updatedAt\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation CreateLead($data: mutationLeadInput!) {\n        createLead(data: $data) {\n          id\n        }\n      }\n    "): (typeof documents)["\n      mutation CreateLead($data: mutationLeadInput!) {\n        createLead(data: $data) {\n          id\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation UpdateLead($id: String!, $data: mutationLeadUpdateInput!) {\n        updateLead(id: $id, data: $data) {\n          id\n        }\n      }\n    "): (typeof documents)["\n      mutation UpdateLead($id: String!, $data: mutationLeadUpdateInput!) {\n        updateLead(id: $id, data: $data) {\n          id\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation DeleteLead($id: String!) {\n        deleteLead(id: $id) {\n          id\n        }\n      }\n    "): (typeof documents)["\n      mutation DeleteLead($id: String!) {\n        deleteLead(id: $id) {\n          id\n        }\n      }\n    "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;