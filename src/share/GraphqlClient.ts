import ApolloClient from 'apollo-boost';
import { env } from '../env';

export const client = new ApolloClient({
  uri: env.graphql,
});
