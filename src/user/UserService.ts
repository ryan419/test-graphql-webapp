import gql from 'graphql-tag';

import { client } from '../share';

export interface IUser {
  username: string;
  password: string;
  dateCreated: string;
}

export const getUsers = async (): Promise<IUser[]> => {
  const result = await client.query<any>({
    query: gql`
    query {
      allUsers {
        nodes {
          username
          password
          dateCreated
        }
      }
    }
  `,
  });
  return result.data.allUsers.nodes as IUser[];
};
