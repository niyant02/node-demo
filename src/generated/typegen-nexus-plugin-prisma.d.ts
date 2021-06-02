import * as Typegen from 'nexus-plugin-prisma/typegen'
import * as Prisma from '@prisma/client';

// Pagination type
type Pagination = {
    first?: boolean
    last?: boolean
    before?: boolean
    after?: boolean
}

// Prisma custom scalar names
type CustomScalars = 'DateTime'

// Prisma model type definitions
interface PrismaModels {
  Post: Prisma.Post
  Profile: Prisma.Profile
  User: Prisma.User
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    posts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'title' | 'content' | 'published' | 'author' | 'authorId'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'title' | 'content' | 'published' | 'author' | 'authorId'
    }
    profiles: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'bio' | 'user' | 'userId'
      ordering: 'id' | 'bio' | 'userId'
    }
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'email' | 'name' | 'posts' | 'profile'
      ordering: 'id' | 'email' | 'name' | 'profile'
    }
  },
  Post: {

  }
  Profile: {

  }
  User: {
    posts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'title' | 'content' | 'published' | 'author' | 'authorId'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'title' | 'content' | 'published' | 'author' | 'authorId'
    }
  }
}

// Prisma output types metadata
interface NexusPrismaOutputs {
  Query: {
    post: 'Post'
    posts: 'Post'
    profile: 'Profile'
    profiles: 'Profile'
    user: 'User'
    users: 'User'
  },
  Mutation: {
    createOnePost: 'Post'
    updateOnePost: 'Post'
    updateManyPost: 'AffectedRowsOutput'
    deleteOnePost: 'Post'
    deleteManyPost: 'AffectedRowsOutput'
    upsertOnePost: 'Post'
    createOneProfile: 'Profile'
    updateOneProfile: 'Profile'
    updateManyProfile: 'AffectedRowsOutput'
    deleteOneProfile: 'Profile'
    deleteManyProfile: 'AffectedRowsOutput'
    upsertOneProfile: 'Profile'
    createOneUser: 'User'
    updateOneUser: 'User'
    updateManyUser: 'AffectedRowsOutput'
    deleteOneUser: 'User'
    deleteManyUser: 'AffectedRowsOutput'
    upsertOneUser: 'User'
  },
  Post: {
    id: 'Int'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    title: 'String'
    content: 'String'
    published: 'Boolean'
    author: 'User'
    authorId: 'Int'
  }
  Profile: {
    id: 'Int'
    bio: 'String'
    user: 'User'
    userId: 'Int'
  }
  User: {
    id: 'Int'
    email: 'String'
    name: 'String'
    posts: 'Post'
    profile: 'Profile'
  }
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  Post: Typegen.NexusPrismaFields<'Post'>
  Profile: Typegen.NexusPrismaFields<'Profile'>
  User: Typegen.NexusPrismaFields<'User'>
  Query: Typegen.NexusPrismaFields<'Query'>
  Mutation: Typegen.NexusPrismaFields<'Mutation'>
}

interface NexusPrismaGenTypes {
  inputs: NexusPrismaInputs
  outputs: NexusPrismaOutputs
  methods: NexusPrismaMethods
  models: PrismaModels
  pagination: Pagination
  scalars: CustomScalars
}

declare global {
  interface NexusPrismaGen extends NexusPrismaGenTypes {}

  type NexusPrisma<
    TypeName extends string,
    ModelOrCrud extends 'model' | 'crud'
  > = Typegen.GetNexusPrisma<TypeName, ModelOrCrud>;
}
  