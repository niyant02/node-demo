import { asNexusMethod } from 'nexus';
import { JSONObjectResolver } from 'graphql-scalars';
import { GraphQLDateTime, GraphQLDate } from 'graphql-iso-date';

export const Json = asNexusMethod(JSONObjectResolver, 'json');
export const Date = asNexusMethod(GraphQLDate, 'date');
export const DateTime = asNexusMethod(GraphQLDateTime, 'date');
