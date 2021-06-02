import * as path from 'path';
import * as types from './types';
import { declarativeWrappingPlugin, makeSchema } from 'nexus';
import { nexusPrisma } from 'nexus-plugin-prisma';

export const schema = makeSchema({
    types,
    sourceTypes: {
        modules: [
            {
                module: require.resolve('.prisma/client/index.d.ts'),
                alias: 'prisma',
            },
        ],
        mapping: {
            Date: 'Date',
            DateTime: 'Date',
            UUID: 'string',
        },
    },
    plugins: [
        nexusPrisma({
            experimentalCRUD: true,
            paginationStrategy: 'relay',
            outputs: { typegen: path.join(__dirname, './generated/', 'typegen-nexus-plugin-prisma.d.ts') },
        }),
        declarativeWrappingPlugin(),
    ],
    outputs: {
        schema: path.join(__dirname, './../schema.graphql'),
        typegen: path.join(__dirname, './generated/nexus-typegen.d.ts'),
    },
});
