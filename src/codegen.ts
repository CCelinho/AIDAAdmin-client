import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:4000/graphql',
  documents: './**/*.tsx',
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
  debug: true,
  verbose: true,
};

export default config;
