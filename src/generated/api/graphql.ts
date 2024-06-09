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
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: { input: any; output: any; }
};

export type Author = {
  __typename?: 'Author';
  biography?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  /** Get the top rated books for this author. */
  topRatedBooks: Array<Book>;
};

export type Book = {
  __typename?: 'Book';
  authors: Array<Author>;
  description: Scalars['String']['output'];
  /** The current edition of the book. */
  edition: Edition;
  /** A list of all editions of the book sorted by publication date. */
  editions: Array<Edition>;
  genres: Array<Genre>;
  id: Scalars['ID']['output'];
  rating: Scalars['Float']['output'];
  title: Scalars['String']['output'];
};

export type Edition = {
  __typename?: 'Edition';
  cover: Scalars['String']['output'];
  current: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  isbn: Scalars['String']['output'];
  number: Scalars['Int']['output'];
  pages: Scalars['Int']['output'];
  publicationDate: Scalars['DateTime']['output'];
};

export enum FilterPeriod {
  Month = 'MONTH',
  Week = 'WEEK',
  Year = 'YEAR'
}

export type Genre = {
  __typename?: 'Genre';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  /** Get the top rated books for this genre. */
  topRatedBooks: Array<Book>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createReview: Review;
};


export type MutationCreateReviewArgs = {
  book: Scalars['ID']['input'];
  input: ReviewInput;
};

export type Query = {
  __typename?: 'Query';
  /** Get a single author by its unique identifier. */
  author?: Maybe<Author>;
  authors: Array<Author>;
  /** Get a single book by its unique identifier. */
  book?: Maybe<Book>;
  /** Get all books. */
  books: Array<Book>;
  /** Get a single genre by its unique identifier. */
  genre?: Maybe<Genre>;
  /** Get all genres. */
  genres: Array<Genre>;
  /** Get the top rated books. */
  topRatedBooks: Array<Book>;
};


export type QueryAuthorArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBookArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGenreArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTopRatedBooksArgs = {
  period?: InputMaybe<FilterPeriod>;
};

export type Review = {
  __typename?: 'Review';
  id: Scalars['ID']['output'];
};

export type ReviewInput = {
  content: Scalars['String']['input'];
  rating: Scalars['Int']['input'];
};

export type FrontpageQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type FrontpageQueryQuery = { __typename?: 'Query', topRatedBooks: Array<{ __typename?: 'Book', id: string, title: string, rating: number, authors: Array<{ __typename?: 'Author', id: string, name: string }> }> };


export const FrontpageQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FrontpageQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"topRatedBooks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<FrontpageQueryQuery, FrontpageQueryQueryVariables>;