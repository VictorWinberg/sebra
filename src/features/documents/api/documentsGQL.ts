import { graphql } from '@/api/gql';
import {
  CreateDocumentReferenceMutation,
  DeleteDocumentMutation,
  DeleteDocumentReferenceMutation,
  DocumentReference,
  DocumentReference_Where,
  GetDocumentQuery,
  GetDocumentReferencesQuery,
  GetDocumentsQuery,
  Media,
  Media_Where,
  UpdateDocumentReferenceMutation
} from '@/api/gql/graphql';
import { requestGQL } from '@/hooks/useGraphQL';
import { pick } from '@/utils';

export const getDocumentsGQL = (where?: Media_Where): Promise<GetDocumentsQuery> =>
  requestGQL(
    graphql(`
      query GetDocuments($where: Media_where) {
        allMedia(sort: "id", where: $where) {
          docs {
            id
            filename
            mimeType
            thumbnailURL
            alt
            url
            createdAt
            updatedAt
          }
        }
      }
    `)
  )({ where });

export const getDocumentGQL = (data: Pick<Media, 'id'>): Promise<GetDocumentQuery> =>
  requestGQL(
    graphql(`
      query GetDocument($id: String!) {
        Media(id: $id) {
          id
          filename
          mimeType
          thumbnailURL
          alt
          url
          createdAt
          updatedAt
        }
      }
    `)
  )({ id: data.id });

export const deleteDocumentGQL = (data: Pick<Media, 'id'>): Promise<DeleteDocumentMutation> =>
  requestGQL(
    graphql(`
      mutation DeleteDocument($id: String!) {
        deleteMedia(id: $id) {
          id
        }
      }
    `)
  )({ id: data.id });

export const getDocumentReferencesGQL = (where?: DocumentReference_Where): Promise<GetDocumentReferencesQuery> =>
  requestGQL(
    graphql(`
      query GetDocumentReferences($where: DocumentReference_where) {
        DocumentReferences(sort: "id", where: $where) {
          docs {
            id
            entityId
            entityType
            createdAt
            updatedAt

            document {
              id
              alt
              filename
              mimeType
              thumbnailURL
              url
            }
          }
        }
      }
    `)
  )({ where });

export const createDocumentReferenceGQL = (
  data: Omit<DocumentReference, 'id'>
): Promise<CreateDocumentReferenceMutation> =>
  requestGQL(
    graphql(`
      mutation CreateDocumentReference($data: mutationDocumentReferenceInput!) {
        createDocumentReference(data: $data) {
          id
        }
      }
    `)
  )({
    data: {
      ...pick(data, ['entityId', 'entityType']),
      document: data.document.id
    }
  });

export const updateDocumentReferenceGQL = (data: DocumentReference): Promise<UpdateDocumentReferenceMutation> =>
  requestGQL(
    graphql(`
      mutation UpdateDocumentReference($id: String!, $data: mutationDocumentReferenceUpdateInput!) {
        updateDocumentReference(id: $id, data: $data) {
          id
        }
      }
    `)
  )({
    id: data.id,
    data: {
      ...pick(data, ['entityId', 'entityType']),
      document: data.document.id
    }
  });

export const deleteDocumentReferenceGQL = (data: DocumentReference): Promise<DeleteDocumentReferenceMutation> =>
  requestGQL(
    graphql(`
      mutation DeleteDocumentReference($id: String!) {
        deleteDocumentReference(id: $id) {
          id
        }
      }
    `)
  )({ id: data.id });
