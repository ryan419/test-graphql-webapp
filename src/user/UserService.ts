import gql from 'graphql-tag';

import { client } from '../share';

export interface IUser {
  username: string;
  password: string;
  dateCreated: string;
}

export const getUsers = async (): Promise<string[]> => {
  const result = await client.query<any>({
    query: gql`
    query {
      allUsers {
        nodes {
          username
        }
      }
    }
  `,
  });
  return result.data.allUsers.nodes.map((user: IUser) => user.username);
};

export const getUserByName = async (username: string): Promise<IUser> => {
  const result = await client.query<{ userByUsername: IUser }>({
    query: gql`
      query {
        userByUsername(username: "${username}") {
          username
          password
          dateCreated
        }
      }
    `,
  });
  return result.data.userByUsername;
}
