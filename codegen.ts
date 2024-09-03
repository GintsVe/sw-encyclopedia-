import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    config: {
        avoidOptionals: true,
        scalars: {
            DateTime: "string",
        },
    },
    generates: {
        "src/gql/generated/types.ts": {
            schema: process.env.NEXT_PUBLIC_API_URL as string,
            plugins: ["typescript"],
        },
        swapi: {
            schema: process.env.NEXT_PUBLIC_API_URL as string,
            documents: "src/gql/**/*.{gql,graphql}",
            plugins: ["typescript-operations", "typed-document-node"],
            preset: "near-operation-file",
            presetConfig: {
                extension: ".generated.ts",
                baseTypesPath: "~@/gql/generated/types",
            },
        },
    },
};

export default config;