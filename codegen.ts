import { CodegenConfig } from "@graphql-codegen/cli";

// TODO: コードの意味を理解する;
const config: CodegenConfig = {
  overwrite: true,
  schema: {
    "http://localhost:8080/v1/graphql": {
      headers: {
        "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET as string,
      },
    },
  },
  documents: "./src/graphql/queries/*.graphql",
  generates: {
    "./src/graphql/generated/gql.types.ts": {
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
    },
  },
  hooks: {
    afterAllFileWrite: ["prettier --write"],
  },
};

export default config;
